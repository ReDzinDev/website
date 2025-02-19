import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export function Navbar() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLinks = () => (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button variant="ghost">{link.label}</Button>
        </Link>
      ))}
    </>
  );

  if (isMobile) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="/">
          <Button variant="ghost" className="text-xl font-bold">
            Portfolio
          </Button>
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/">
        <Button variant="ghost" className="text-xl font-bold">
          Portfolio
        </Button>
      </Link>
      <div className="flex items-center space-x-2">
        <NavLinks />
      </div>
    </nav>
  );
}