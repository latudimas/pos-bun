import { Html } from "@elysiajs/html";

import type { Product } from "../types/product";
import { BaseLayout } from "../components/layout/BaseLayout";
import { ProductDetailModal } from "../components/modals/ProductDetailModal";

type ProductPageProps = {
  products: Product[];
  selectedProduct?: Product;
};

export const ProductsPage = ({
  products = [],
  selectedProduct,
}: ProductPageProps) => (
  <BaseLayout>
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
              <th class="px-4 py-2">Barcode</th>
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
                  {product.barcode}
                </td>
                <td class="border px-4 py-2" safe>
                  {product.name}
                </td>
                <td class="border px-4 py-2">{product.price}</td>
                <td class="border px-4 py-2">{product.stock}</td>
                <td class="border px-4 py-2">
                  <button
                    hx-get={`/products/${product.id}/edit`}
                    hx-target="#modal"
                    class="text-blue-500 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    hx-get={`/products/${product.id}/detail`}
                    hx-target="#detail-modal"
                    class="text-blue-500 mr-2"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <div id="modal"></div>
      <div id="detail-modal" safe>
        {selectedProduct && <ProductDetailModal product={selectedProduct} />}
      </div>
    </div>
  </BaseLayout>
);
