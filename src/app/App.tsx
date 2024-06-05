"use client";

import Header from "@/components/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  ConfigProvider as AntdConfigProvider,
  theme,
  App as AntdApp,
} from "antd";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntdConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <AntdApp>
        <AntdRegistry>
          <Header />
          {children}
        </AntdRegistry>
      </AntdApp>
    </AntdConfigProvider>
  );
}
