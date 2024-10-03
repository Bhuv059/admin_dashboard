import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggler } from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700  text-white py-2 px-5  ">
      <Link href="/">
        <div className="flex flex-1 ">
          <Image src="/img/logo.png" alt="Traversery" width={40} height={40} />
          <div className=" flex w-full  justify-end   ">
            <div className="mt-1 ">
              <ThemeToggler />
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="/img/dp.jpg" alt="avatar" />
                    <AvatarFallback className="text-black">
                      Avatar
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/profile">Logout</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
