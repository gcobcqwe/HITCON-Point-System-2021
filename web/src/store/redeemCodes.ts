import { defineStore } from "pinia";
import HttpHelper from "../common/HttpHelper";
const httpHelper = new HttpHelper();

export interface RedeemCode {
  code: string;
  points: number;
  is_used: boolean;
  created_at: string;
}

interface RedeemCodeState {
  items: Record<string, RedeemCode>;
  codes: string[];
}

export const useRedeemCodeStore = defineStore({
  id: "redeem_code",

  state: (): RedeemCodeState => {
    return {
      items: {},
      codes: [],
    };
  },

  getters: {
    list(): RedeemCode[] {
      return this.codes.map((i: string) => {
        return this.items[i];
      });
    },

    loaded(): boolean {
      return this.codes.length > 0;
    },
  },

  actions: {
    async fetchAll() {
      if (this.loaded) return;
      const res = await httpHelper.redeemCodesList();
      const data: RedeemCode[] = res.data;
      this.codes = data.map((redeemCode) => {
        this.items[redeemCode.code] = redeemCode;
        return redeemCode.code;
      });
    },
  },
});
