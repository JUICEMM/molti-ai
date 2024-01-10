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
          {/* <NavigationMenuItem>
          <Link href="/price" legacyBehavior passHref>
              <Button variant={"outline"}>               
                  方案
              </Button>
            </Link>
          </NavigationMenuItem> */}
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
