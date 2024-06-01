"use client"
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export const SideBarItem = ({ name, href, icon }: { name: string, href: string, icon: React.ReactNode }) => {
  const router = useRouter();
  const currentPath = usePathname();
  const selected = currentPath === href;
  return (
    <div className={`flex ${selected ? "text-slate-200" : "text-slate-500 "} gap-3 px-5 pt-4`} onClick={() => {
      router.push(href);
    }}>
      <div className="px-2">
        {icon}
      </div>

      <div className="font-semibold">
        {name}
      </div>

    </div>
  )
}
