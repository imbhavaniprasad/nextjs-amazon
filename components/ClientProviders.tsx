"use client";
import { cartStore } from "@/lib/hooks/useCartStore";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
//SWR is a React Hooks library for remote data fetching. The name "SWR" is derived from stale-while-revalidate, a cache invalidation strategy popularized by HTTP RFC 5861. SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.
import { SWRConfig } from "swr";
export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  //this actually refetches the store data on focus/hover
  //works to keep the data in all opened tabs
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
    <SWRConfig
      value={{
        onError: (error, key) => {
          toast.error(error.message);
        },
        fetcher: async (resource, init) => {
          const res = await fetch(resource, init);
          if (!res.ok) {
            throw new Error("An error occurred while fetching the data.");
          }
          return res.json();
        },
      }}
    >
      {/* <div data-theme={selectedTheme}> */}
      <Toaster toastOptions={{ className: "toaster-con" }} />
      {children}
      {/* </div> */}
    </SWRConfig>
  );
}
