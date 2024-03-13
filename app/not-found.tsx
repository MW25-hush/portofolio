"use client";
import { Button } from "@/components/molecules/button";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const { replace } = useRouter();
  return (
    <section className="col-start-2 col-end-12 flex h-[85vh] flex-col items-center justify-center space-y-2 text-[2rem] font-bold">
      <h1>Page Not Found</h1>

      <Button label="Back to Home Page" handleClick={() => replace("/")} />
    </section>
  );
}

export default Page;
