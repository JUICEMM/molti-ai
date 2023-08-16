import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const NavbarUserAvator = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return (
        <div className="flex items-center p-4">
            <Skeleton className="w-20 h-10 rounded-md"/>
        </div>
    );
  }
  return (
    <div className="flex items-center p-4">
      {isSignedIn ? (
        <>
          <SignOutButton>
            <Button>Sign out</Button>
          </SignOutButton>
        </>
      ) : (
        <>
          <SignInButton>
            <Button variant={"outline"}>Sign in</Button>
          </SignInButton>
        </>
      )}
      {/* <Image
        src={user?.imageUrl || "https://github.com/shadcn.png"}
        alt={`${user?.firstName} ${user?.lastName}-avatar`}
        width={40}
        height={40}
        className="rounded-full"
      /> */}
    </div>
  );
};

export default NavbarUserAvator;
