import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const components: { title: string; href: string; description: string }[] = [
  {
    title: "關聯字",
    href: "/keyword",
    description: "透過關鍵字數據進行關聯分析，列舉出關聯度最高的百大關鍵字",
  },
  {
    title: "AI關鍵字",
    href: "/keyword-ai",
    description: "透過AI取得關聯度最高的百大關鍵字",
  },
  {
    title: "矩陣系統",
    href: " /matrix-ai",
    description:
      "快速製作短影音，霸頻不是夢",
  },
  {
    title: "影片服務",
    href: " /photoservice",
    description:
      "幫助您解決攝影及剪輯問題",
  },
];

const NavbarMenu = () => {
  return (
    <div className="hidden flex-1 p-4 md:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                首頁
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/keyword" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                關鍵字
              </NavigationMenuLink>
            </Link>
            <Link href="/keyword-ai" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                關鍵字AI
              </NavigationMenuLink>
            </Link>
            <Link href="/matrix-ai" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
               矩陣AI系統
              </NavigationMenuLink>
            </Link>
            <Link href="/photoservice" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
               影片服務
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <Link href="/price" legacyBehavior passHref>
              <Button variant={"outline"}>               
                  方案
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavbarMenu;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
