// components/layout/SafeContent.tsx
import { Html } from "@elysiajs/html";

type SafeContentProps = {
  children: JSX.Element | JSX.Element[] | string | number | null | undefined;
};

export const SafeContent = ({ children }: SafeContentProps) => {
  // This tells Elysia that the content is safe to render
  if (Array.isArray(children)) {
    return children.map((child) => <div safe>{child}</div>);
  }
  return <div safe>{children}</div>;
};
