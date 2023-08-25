import {
  CreditCard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const NavbarUserAvator = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return (
      <div className="flex items-center p-4">
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    );
  }
  return (
    <div className="flex items-center p-4">
      {isSignedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                src={user?.imageUrl || "https://github.com/shadcn.png"}
              />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 cursor-pointer z-[999]">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <SignOutButton>
                <span>Log out</span>
              </SignOutButton>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        // <div className="flex items-center gap-2">
        //   <SignOutButton>
        //     <Button>Sign out</Button>
        //   </SignOutButton>
        // <Image
        //   src={user?.imageUrl || "https://github.com/shadcn.png"}
        //   alt={`${user?.firstName} ${user?.lastName}-avatar`}
        //   width={40}
        //   height={40}
        //   className="rounded-full"
        // />
        // </div>
        <>
          <SignInButton>
            <Button variant={"outline"}>Sign in</Button>
          </SignInButton>
        </>
      )}
    </div>
  );
};

export default NavbarUserAvator;
