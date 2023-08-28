import { type AppType } from "next/app";
import { api } from "@/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Navbar from "@/components/global/navbar/Navbar";


const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
    </>
  )
};

export default api.withTRPC(MyApp);
