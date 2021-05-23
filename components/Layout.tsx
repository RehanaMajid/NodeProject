import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import Navbar from "./navbar";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => (
  <>
    <Meta title={title} />
    <div className="min-h-screen">
      <Navbar />
      <div className="py-0">
        <Header />
        <main className="max-w-screen mx-auto sm:px-6 lg:px-0">{children}</main>
      </div>
    </div>
    <Footer />
  </>
);

export default Layout;
