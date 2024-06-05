"use client";

import { metadata } from "@/app/metadata";
import { options } from "@/app/video/video-options";
import { Tabs, TabsProps } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Header {
  key: string;
  label: string;
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const items: TabsProps["items"] = [
    {
      key: "/",
      label: "Home",
    },
    {
      key: options[0].value,
      label: "Video",
    },
  ];

  const handleChange = (key: string) => {
    router.push(key);
  };

  return (
    <header className="layout">
      <Link href="/" className="flex items-center pt-4">
        <Title>{metadata.title as string}</Title>
      </Link>
      <nav>
        <Tabs
          items={items}
          onChange={handleChange}
          defaultActiveKey={pathname}
        />
      </nav>
    </header>
  );
}
