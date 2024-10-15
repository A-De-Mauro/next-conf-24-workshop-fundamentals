"use client";

import { ReactNode } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Client Wrapper</h1>
      {children}
    </div>
  );
}
