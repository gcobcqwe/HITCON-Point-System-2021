import { defineStore } from "pinia";
import HttpHelper from "../common/HttpHelper";
const httpHelper = new HttpHelper();

export interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
  points: number;
  quantity: number;
}

interface ProductState {
  items: Record<string, Product>;
  ids: number[];
}

export const useProductStore = defineStore({
  id: "products",

  state: (): ProductState => {
    return {
      items: {},
      ids: [],
    };
  },

  getters: {
    list(): Product[] {
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
      const res = await httpHelper.productsList();
      const data: Product[] = res.data;
      this.ids = data.map((product) => {
        this.items[product.id] = product;
        return product.id;
      });
    },
    async buy(carts: any) {
      console.log(carts);
    },
  },
});
