import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/waitlist", label: "Get Started" },
  ];

  return (
    <nav className="py-4 px-6 bg-[#37474f] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
            Grublify
          </a>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href}>
                  <NavigationMenuLink 
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-white
                      ${location === link.href ? 'text-primary' : 'text-white/80'}`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}