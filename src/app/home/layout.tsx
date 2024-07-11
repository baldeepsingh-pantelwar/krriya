import { BottomNav } from "@/components/bottom-nav";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
}
