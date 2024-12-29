import { Html } from "@elysiajs/html";
import { BaseHtml } from "./BaseHtml";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

type BasePageProps = {
  children: JSX.Element | JSX.Element[];
  // children: any;
};

export const BasePage = ({ children }: BasePageProps) => (
  <BaseHtml>
    <div class="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div class="flex-1 min-w-0 ml-0 transition-margin duration-300 ease-in-out">
        <TopBar />
        {Bun.escapeHTML(children)}
      </div>
    </div>
  </BaseHtml>
);
