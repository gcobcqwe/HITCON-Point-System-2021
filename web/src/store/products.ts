import { defineStore } from "pinia";

const backendURL = "http://localhost:4000/api/v1/products";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MyIsImlhdCI6MTYyNDM0MDU5MiwiZXhwIjoxNjMwNDI1NjAwLCJzY29wZSI6InBvaW50X3N5c3RlbSBhZG1pbiJ9.Q7rDFOJhm_-nc0mZW2-yJqFsO8cgXGCkSp4UzQ3MQGM";
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

      const res = await fetch(backendURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      const data: Product[] = await res.json();
      this.ids = data.map((product) => {
        this.items[product.id] = product;
        return product.id;
      });
    },
  },
});
