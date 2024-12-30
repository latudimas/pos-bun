import { Html } from "@elysiajs/html";

import type { ProductFormData } from "../../types/product";

type ProductFormProps = {
  initialData?: ProductFormData;
  action: string;
  method: string;
};

export const ProductForm = ({
  initialData,
  action,
  method,
}: ProductFormProps) => (
  <form hx-post={action} hx-trigger="submit" class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1">SKU</label>
      <input
        type="text"
        name="sku"
        value={initialData?.sku}
        class="w-full border rounded px-3 py-2"
      />
    </div>

    <div>
      <label class="block text-sm font-medium mb-1" for="name">
        Product Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={initialData?.name}
        class="w-full border rounded px-3 py-2"
        required
      />
    </div>

    <div>
      <label class="block text-sm font-medium mb-1" for="price">
        Price
      </label>
      <input
        type="number"
        id="price"
        name="price"
        value={initialData?.price.toString()}
        class="w-full border rounded px-3 py-2"
        min="0"
        step="1000"
        required
      />
    </div>

    <div>
      <label class="block text-sm font-medium mb-1" for="stock">
        Stock
      </label>
      <input
        type="number"
        id="stock"
        name="stock"
        value={initialData?.stock.toString()}
        class="w-full border rounded px-3 py-2"
        min="0"
        step="1"
        required
      />
    </div>

    <div class="flex justify-end space-x-3 pt-4 border-t">
      <button
        type="button"
        class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        hx-get="/products"
        hx-target="#modal"
        hx-swap="outerHTML"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
      >
        {initialData ? "Update Product" : "Create Product"}
      </button>
    </div>

    {/* Error message container */}
    <div id="error-message" class="hidden text-red-600 text-sm mt-2"></div>
  </form>
);
