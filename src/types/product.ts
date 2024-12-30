export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  sku: string | null;
  createdAt: Date;
};

export type ProductFormData = {
  name: string;
  price: number;
  stock: number;
  sku: string;
};
