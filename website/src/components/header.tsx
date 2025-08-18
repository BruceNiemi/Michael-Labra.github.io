import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4 px-6 sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <a
        href="/"
        className={cn(
          "flex items-center text-lg font-bold text-foreground hover:text-primary transition-colors"
        )}
      >
        <img src="/public/logo.png" alt="Logo" className="h-20 mr-2" />
        <div className="fas fa-gem mr-2">NEXT GENERATION TECHNOLOGY</div>
      </a>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href="/"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about.html"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/products.html"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Products
          </a>
        </li>
      </ul>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="block md:hidden text-foreground focus:outline-none"
            id="mobile-menu-toggle"
          >
            <span className="block w-6 h-1 bg-foreground mb-1"></span>
            <span className="block w-6 h-1 bg-foreground mb-1"></span>
            <span className="block w-6 h-1 bg-foreground"></span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-popover text-popover-foreground border border-border shadow-md">
          <DropdownMenuItem asChild>
            <a
              href="/"
              className="w-full text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="/about.html"
              className="w-full text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="/products.html"
              className="w-full text-foreground/80 hover:text-primary transition-colors"
            >
              Products
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
