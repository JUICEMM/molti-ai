import { api } from "@/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/global/Layout";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ClerkProvider {...pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
