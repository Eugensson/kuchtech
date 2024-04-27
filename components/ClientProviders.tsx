"use client";

import { SWRConfig } from "swr";
import toast, { Toaster } from "react-hot-toast";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <Toaster toastOptions={{ className: "toaster-con" }} />
      {children}
    </SWRConfig>
  );
}
