import React from "react";

export default function Layout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
