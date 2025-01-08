import { PropsWithChildren } from "@kitajs/html";
import { Html } from "@elysiajs/html";

import { BaseHtml, BaseHtmlJsx } from "./BaseHtml";
import { Sidebar, SidebarDrawer } from "./Sidebar";
import { TopBar } from "./TopBar";
import { NavbarHeader } from "./NavbarHeader";

type BaseLayoutProps = {
  children: JSX.Element;
  title?: string;
};

export const BaseLayout = ({ children, title }: BaseLayoutProps) => {
  return (
    <BaseHtmlJsx>
      <NavbarHeader />
      <SidebarDrawer />
      {children}
    </BaseHtmlJsx>
  );
};
