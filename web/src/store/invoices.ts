import { defineStore } from "pinia";
import HttpHelper from "../common/HttpHelper";
const httpHelper = new HttpHelper();
export interface Invoice {
  id: number;
  sender: string;
  receiver: string;
  type: string;
  points: number;
  created_at: string;
  invoices: object;
}

interface InvoiceState {
  items: Record<string, Invoice>;
  ids: string[];
}

export const useInvoiceStore = defineStore({
  id: "invoices",

  state: (): InvoiceState => {
    return {
      items: {},
      ids: [],
    };
  },

  getters: {
    list(): Invoice[] {
      return this.ids.map((i: number) => {
        return this.items[i];
      });
    },

    loaded(): boolean {
      return this.ids.length > 0;
    },
  },

  actions: {
    async fetchAll() {
      if (this.loaded) return;
      const res = await httpHelper.invoicesList();
      const data: Invoice[] = res.data;
      this.ids = data.map((invoice) => {
        this.items[invoice.id] = invoice;
        return invoice.id;
      });
    },
  },
});
