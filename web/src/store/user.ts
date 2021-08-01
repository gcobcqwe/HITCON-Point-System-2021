import { defineStore } from "pinia";
import HttpHelper from "../common/HttpHelper";
interface User {
  points: number;
  uid: string;
  role: string;
}

interface UserState {
  _token: string;
  info: User;
}

export const useUserStore = defineStore({
  id: "user",

  state: (): UserState => {
    return {
      _token: "",
      info: {
        points: 0,
        uid: "",
        role: "",
      },
    };
  },

  getters: {
    me(): any {
      return {
        token: this._token,
        info: this.info,
      };
    },
    token(): string {
      return this._token;
    },
  },

  actions: {
    async fetchMe() {
      const httpHelper = new HttpHelper();
      const res = await httpHelper.me();
      const data: User = res.data;
      this.info = data;
    },
    addToken(token: string) {
      this._token = token;
    },
  },
});
