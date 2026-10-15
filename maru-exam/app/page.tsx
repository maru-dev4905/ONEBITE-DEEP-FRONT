"use client";

import Controller from "./components/contoller";
import Viewer from "./components/viewer";

export default function Home() {
  return (
    <div className="flex justify-center items-center py-50 flex-col gap-5">
      <h1 className="text-6xl font-bold">Count</h1>
      <Viewer />
      <Controller />
    </div>
  );
}
