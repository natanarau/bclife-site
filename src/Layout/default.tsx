import React from "react";

type Layout = {
  children: React.ReactNode;
};

export default function LayoutDefault({ children }: Layout) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
