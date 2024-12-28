import { Html } from "@elysiajs/html";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "#" },
  { label: "Products", href: "#" },
  { label: "Settings", href: "#" },
  { label: "Account", href: "#" },
];
// components/Sidebar.tsx
// export const Sidebar = () => {
export const Sidebar = () => (
  <div
    id="sidebar"
    class="fixed inset-y-0 left-0 z-30 w-64 transform -translate-x-full transition-transform duration-300 ease-in-out bg-white border-r border-gray-200"
  >
    <div class="flex flex-col h-full">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-xl font-medium text-gray-800">Mini Market POS</h2>
      </div>
      <nav class="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <a
            href={item.href}
            class="block px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
            safe
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  </div>
);
