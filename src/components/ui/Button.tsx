import { Html } from "@elysiajs/html";

type ButtonProps = {
  children: any;
  type?: "button" | "submit";
};

export const Button = ({ children, type = "button" }: ButtonProps) => (
  <button
    type={type}
    class="w-full flex justify-center py-2.5 px-4 rounded-lg
           text-sm font-medium text-white
           bg-blue-500 hover:bg-blue-600
           transition-colors duration-200 ease-in-out
           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
    safe
  >
    {children}
  </button>
);
