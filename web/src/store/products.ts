import { defineStore } from "pinia";

const fakeStoreUrl = "https://fakestoreapi.com";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
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
      return this.ids.map((i) => {
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

      const res = await fetch(`${fakeStoreUrl}/products?limit=6`);
      let data: Product[] = await res.json();
      data = data.map((product) => {
        product.title = product.title.split(" ").slice(0, 2).join(" ");
        product.price = Math.round(product.price);
        return product;
      });
      this.ids = data.map((product) => {
        this.items[product.id] = product;
        return product.id;
      });
    },
  },
});
