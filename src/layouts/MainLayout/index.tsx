import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: LayoutProps) {
  return <main>{children}</main>;
}
