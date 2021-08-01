import { defineStore } from "pinia";
import HttpHelper from "../common/HttpHelper";
const httpHelper = new HttpHelper();

export interface Transaction {
  id: number;
  sender: string;
  receiver: string;
  points: number;
  type: string;
  created_at: string;
}

interface TransactionState {
  items: Record<string, Transaction>;
  ids: number[];
}

export const useTransactionStore = defineStore({
  id: "transactions",

  state: (): TransactionState => {
    return {
      items: {},
      ids: [],
    };
  },

  getters: {
    list(): Transaction[] {
      return this.ids.map((i: string | number) => {
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
      const res = await httpHelper.transactionsHistoryList();
      const data: Transaction[] = res.data;
      this.ids = data.map((transaction) => {
        this.items[transaction.id] = transaction;
        return transaction.id;
      });
    },
  },
});
