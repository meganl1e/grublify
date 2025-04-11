import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { Link, useLocation } from "wouter";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false); // State to toggle mobile menu

  const links = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/blog", label: "Blog" },
    { href: "/recipes", label: "Recipes" },
  ];

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="py-4 px-6 bg-secondary sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2">
            <img src="/images/grublify_logo_simple.png" alt="Grublify Logo" className="h-8 w-auto mr-2" />
            <span className="text-3xl font-semibold text-primary hover:text-primary/90 transition-colors">
              Grublify
            </span>
          </a>
        </Link>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-primary text-3xl"
          onClick={handleClick}
        >
          {open ? "X" : "☰"}
        </button>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex flex-grow justify-center space-x-6">
          <NavigationMenuList className="flex space-x-6">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href}>
                  <NavigationMenuLink
                    className={`px-2 py-2 text-md font-semibold transition-colors hover:text-white
                      ${location === link.href ? "text-primary" : "text-white/90"}`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <Link href="/waitlist">
            <Button className="text-md px-4 py-2 bg-primary hover:bg-white/90 text-secondary font-semibold ml-2 rounded-sm border border-primary">
              Get Started
            </Button>
          </Link>
        </NavigationMenu>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-secondary text-white p-4 space-y-4">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <a
                className={`block px-1 py-2 text-lg font-semibold transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-white/90"
                }`}
                onClick={() => setOpen(false)} // Close menu on link click
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/waitlist">
            <Button className="mt-2 text-md px-4 py-2 bg-primary hover:bg-white/90 text-secondary font-semibold rounded-sm border border-primary">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}