"use client";
import { cartStore } from "@/lib/hooks/useCartStore";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const updateStore = () => {
    cartStore.persist.rehydrate();
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", updateStore);
    window.addEventListener("focus", updateStore);
    return () => {
      document.removeEventListener("visibilitychange", updateStore);
      window.removeEventListener("focus", updateStore);
    };
  }, []);
  return (
    <div>
      <Toaster toastOptions={{ className: "toaster-con" }} />
      {children}
    </div>
  );
}
