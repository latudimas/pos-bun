export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  sku: string;
  createdAt: Date;
};

export type ProductFormData = {
  name: string;
  price: number;
  stock: number;
  sku: string;
};
