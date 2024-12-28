import { Html } from "@elysiajs/html";

export const TopBar = () => (
  <div class="bg-white border-b border-gray-200 p-4 flex items-center">
    <button
      id="sidebar-toggle"
      class="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onclick={`
        const sidebar = document.getElementById('sidebar');
        const content = document.querySelector('.ml-0');
        if (sidebar.classList.contains('-translate-x-full')) {
          sidebar.classList.remove('-translate-x-full');
          content.classList.remove('ml-0');
          content.classList.add('ml-64');
        } else {
          sidebar.classList.add('-translate-x-full');
          content.classList.remove('ml-64');
          content.classList.add('ml-0');
        }
      `}
    >
      <svg
        class="w-6 h-6 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
);
