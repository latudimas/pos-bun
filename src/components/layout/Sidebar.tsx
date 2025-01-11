import { Html } from "@elysiajs/html";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Settings", href: "#" },
  { label: "Account", href: "#" },
];

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

export const SidebarDrawer = () => (
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      {/* Page content here  */}
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-2"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here  */}
        {navItems.map((item: NavItem) => (
          <li>
            <a href={item.href} safe>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const SidebarGrid = () => (
  <nav class="col-span-12 lg:col-span-2 bg-gray-800 text-white p-4">
    <div class="text-xl font-bold mb-6">Navigation</div>
    <ul class="space-y-4">
      {navItems.map((item: NavItem) => (
        <li>
          <a href={item.href} safe>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
