import React from "react";
import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
}
