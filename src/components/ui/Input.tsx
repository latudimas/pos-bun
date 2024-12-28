import { Html } from "@elysiajs/html";

type InputProps = {
  name: string;
  placeholder?: string;
  type?: string;
};

export const Input = ({ name, placeholder, type = "text" }: InputProps) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    class="mt-1 block w-full rounded-lg border border-gray-200 
           shadow-sm p-3 text-gray-600
           focus:border-blue-400 focus:ring focus:ring-blue-100 
           transition-colors duration-200 ease-in-out
           placeholder-gray-400"
  />
);
