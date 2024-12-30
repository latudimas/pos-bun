import { PropsWithChildren } from "@kitajs/html";
import { Html } from "@elysiajs/html";

import { BaseHtml } from "./BaseHtml";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

type BaseLayoutProps = {
  children: JSX.Element;
  title?: string;
};

export const BaseLayout = ({ children, title }: BaseLayoutProps) => {
  return (
    <BaseHtml title={title}>
      <div class="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <div class="flex-1 min-w-0 ml-0 transition-margin duration-300 ease-in-out">
          <TopBar />
          <main class="p-6">{children}</main>
        </div>
      </div>
    </BaseHtml>
  );
};
