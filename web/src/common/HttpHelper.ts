/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosInstance } from "axios";
import { useUserStore } from "../store/user";
export default class HttpHelper {
  _conn: AxiosInstance;
  constructor() {
    this._conn = axios.create();
  }

  setConfig() {
    const userStore = useUserStore();
    this._conn.defaults.baseURL = "http://localhost:4000/api/v1";
    this._conn.interceptors.request.use(
      (config) => {
        if (userStore.token) {
          config.headers.Authorization = `Bearer ${userStore.token}`;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  productsList() {
    this.setConfig();
    return this._conn.get("/products");
  }

  transactionsHistoryList() {
    this.setConfig();
    return this._conn.get("/points/transactions-history");
  }

  redeemCodesList() {
    this.setConfig();
    return this._conn.get("/points/redeem-code");
  }

  invoicesList() {
    this.setConfig();
    return this._conn.get("/invoices");
  }

  me() {
    this.setConfig();
    return this._conn.get("/users/me");
  }
}
