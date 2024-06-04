"use client";

import { metadata } from "@/app/metadata";
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
      key: "home",
      label: "Home",
      active: pathname === "/",
    },
  ];

  const handleChange = (key: string) => {
    if (key === "home") {
      router.push("/");
    } else {
      router.push(`/${key}`);
    }
  };

  return (
    <header>
      <Link href="/" className="flex items-center pt-4">
        <Title>{metadata.title as string}</Title>
      </Link>
      <nav>
        <Tabs
          items={items}
          onChange={handleChange}
          defaultActiveKey={pathname.substring(1)}
        />
      </nav>
    </header>
  );
}
