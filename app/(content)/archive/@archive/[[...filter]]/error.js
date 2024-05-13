"use client";
import React from "react";

export default function ErrorPage({ error }) {
  return (
    <main>
      <h1>An Error Occurred!</h1>
      <p>{error.message}</p>
    </main>
  );
}
