import { PropsWithChildren } from "@kitajs/html";
import { Html } from "@elysiajs/html";

import { BaseHtml, BaseHtmlJsx } from "./BaseHtml";
import { Sidebar, SidebarDrawer, SidebarGrid } from "./Sidebar";
import { TopBar } from "./TopBar";
import { NavbarHeader } from "./NavbarHeader";

type BaseLayoutProps = {
  children: JSX.Element;
  title?: string;
};

export const BaseLayout = ({ children, title }: BaseLayoutProps) => {
  return (
    <BaseHtmlJsx>
      <div class="min-h-screen bg-gray-100 grid grid-cols-12">
        {/* <div class="col-span-12 lg:col-span-2"> */}
        <SidebarGrid />
        <div class="col-span-12 lg:col-span-10">
          <NavbarHeader />
          {children}
        </div>
      </div>
      {/* </div> */}
    </BaseHtmlJsx>
  );
};
