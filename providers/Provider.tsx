"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./auth/AuthProvider";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#E5DBD0",
            color: "black",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default Provider;
