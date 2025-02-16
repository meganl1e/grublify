import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { Link, useLocation } from "wouter";
import { Button } from "../ui/button";
import React from "react";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    // { href: "/about", label: "About" },
    { href: "/blog", label: "Blog"},
    { href: "/team", label: "Team" }
  ];

  return (
    <nav className="py-4 px-6 bg-secondary sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <img src="/images/grublify_logo.png" alt="Grublify Logo" className="h-8 w-auto mr-2" />
            <a className="text-3xl font-bold text-primary hover:text-primary/90 transition-colors">
              Grublify
            </a>
          </a>
        </Link>

        <NavigationMenu className="flex flex-grow justify-center space-x-6">
          <NavigationMenuList className="flex space-x-6">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href}>
                  <NavigationMenuLink 
                    className={`px-2 py-2 text-md font-semibold transition-colors hover:text-white
                      ${location === link.href ? 'text-primary' : 'text-white/90'}`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}


            <div>
              <Link href="/waitlist">
                <Button className="text-md px-4 py-2 bg-primary hover:bg-white/90 text-secondary font-semibold ml-2 rounded-sm border border-primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}