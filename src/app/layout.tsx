"use client";
// import { Inter } from "next/font/google";
import styled from "styled-components";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";
import { instance } from "./util/instance";
import { useEffect } from "react";

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
`;

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "라벨인쇄.한국",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleLogin = async () => {
    try {
      const response = await instance.post("token/create", {
        user_id: "tester123",
        password: "1234",
      });

      if (response) {
        localStorage.setItem("token", `Bearer ${response.data.token}`);
      }
    } catch (error) {
      localStorage.removeItem("token");
      console.log(error, "login error");
    }
  };

  useEffect(() => {
    console.log("render");
    if (localStorage.getItem("token") === null) handleLogin();

    // handleLogin();
  }, [window.location.pathname]);

  return (
    <html lang="en">
      <body>
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
        <AppLayout>
          <Header />
          {children}
          <Footer />
        </AppLayout>
      </body>
    </html>
  );
}
