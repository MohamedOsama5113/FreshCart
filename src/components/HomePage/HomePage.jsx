import React from "react";
import Products from "./../Products/Products";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Products />
      <Helmet>
        <meta charSet="utf-8" />
        <title>FreshCart-Home</title>
        <meta name="keywords" content="FreshCart-App-Ecommerce" />
      </Helmet>
    </>
  );
}
