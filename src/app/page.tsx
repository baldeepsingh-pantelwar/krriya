"use client";

import { BottomNav } from "@/components/bottom-nav";
import Paris2024View from "@/sections/paris-2024/paris-2024-view";
import { Top10View } from "@/sections/top-10/top-10-view";
import { useSelector } from "@/store";
import { View } from "@/types/nav";

export default function HomePage() {
  const { view } = useSelector((state) => state.nav);

  const views: Record<View, JSX.Element> = {
    "top-10": <Top10View />,
    "paris-2024": <Paris2024View />,
    stories: <></>,
  };

  return (
    <>
      {views[view]}
      <BottomNav />
    </>
  );
}
