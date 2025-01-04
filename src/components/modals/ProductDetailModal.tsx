// src/components/modals/ProductDetailModal.tsx
import { Html } from "@elysiajs/html";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "../ui/Dialog";
import { Product } from "../../types/product";

type ProductDetailModalProps = {
  product: Product;
};

export const ProductDetailModal = ({ product }: ProductDetailModalProps) => (
  <Dialog isOpen={true}>
    <DialogContent>
      <DialogHeader title="ASD" />
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="text-sm font-medium text-gray-500">SKU</label>
          <p class="text-gray-900" safe>
            {product.sku}
          </p>
        </div>

        <div>
          <label class="text-sm font-medium text-gray-500">Barcode</label>
          <p class="text-gray-900" safe>
            {product.barcode}
          </p>
        </div>

        <div class="col-span-2">
          <label class="text-sm font-medium text-gray-500">Name</label>
          <p class="text-gray-900" safe>
            {product.name}
          </p>
        </div>

        <div>
          <label class="text-sm font-medium text-gray-500">Price</label>
          <p class="text-gray-900" safe>
            ${product.price.toFixed(2)}
          </p>
        </div>

        <div>
          <label class="text-sm font-medium text-gray-500">Stock</label>
          <p class="text-gray-900">{product.stock} units</p>
        </div>
      </div>

      <DialogFooter>
        <button
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          hx-get="/products"
          hx-target="#detail-modal"
          hx-swap="outerHTML"
        >
          Close
        </button>
        <button
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
          hx-get={`/products/${product.id}/edit`}
          hx-target="#modal"
        >
          Edit
        </button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
