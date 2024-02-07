"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-800 flex justify-between items-center p-4">
      <div className="flex gap-x-4">
        <Button
          asChild
          variant={pathname === "/" ? "secondary" : "outline"}
        >
          <Link href="/">
            Home
          </Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/blog" ? "secondary" : "outline"}
        >
          <Link href="/blog">
            Blog
          </Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/" ? "secondary" : "outline"}
        >
          <Link href="/">
            Contact
          </Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/" ? "secondary" : "outline"}
        >
          <Link href="/">
            Donate
          </Link>
        </Button>
      </div>
      <div>
        <LoginButton asChild>
          <Button variant="secondary">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </nav>
  );
};
