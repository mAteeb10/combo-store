export interface Product {
  id: string;
  name: string;
  type: "chips" | "drink" | "chocolate";
}

export interface Combo {
  id: string;
  chips: string;
  drink: string;
  chocolate: string;
}
