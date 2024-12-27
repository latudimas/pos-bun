import { Html } from "@elysiajs/html";

// components/Sidebar.tsx
// export const Sidebar = () => {
export function Sidebar() {
  return (
    <div class="w-64 bg-white shadow-md">
      <nav class="p-4">
        <h2 class="text-xl font-semibold mb-4">Navigation</h2>
        <ul>
          <li>
            <a href="/" class="block py-2 hover:bg-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/dashboard" class="block py-2 hover:bg-gray-200">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/apps" class="block py-2 hover:bg-gray-200">
              Apps
            </a>
          </li>
          <li>
            <a href="/settings" class="block py-2 hover:bg-gray-200">
              Settings
            </a>
          </li>
          <li>
            <a href="/account" class="block py-2 hover:bg-gray-200">
              Account
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
