import { Html } from "@elysiajs/html";

import type { Product } from "../types/product";

type ProductPageProps = {
  products: Product[];
};

export const ProductsPage = ({ products = [] }: ProductPageProps) => {
  return (
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Products</h1>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded"
          hx-get="/products/new"
          hx-target="#modal"
        >
          Add Product
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-4 py-2">SKU</th>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Price</th>
              <th class="px-4 py-2">Stock</th>
              <th class="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr id={`product-${product.id}`}>
                <td class="border px-4 py-2" safe>
                  {product.sku}
                </td>
                <td class="border px-4 py-2" safe>
                  {product.name}
                </td>
                <td class="border px-4 py-2">{product.price}</td>
                <td class="border px-4 py-2">{product.stock}</td>
                <td class="border px-4 py-2">
                  <button
                    hx-get={`/products/${product.id}/edit`}
                    hx-taget="#modal"
                    class="text-blue-500 mr-2"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="modal"></div>
    </div>
  );
};
