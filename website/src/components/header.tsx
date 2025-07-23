import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      {/* Logo */}
      <a
        href="/"
        className={cn(
          "flex items-center text-lg font-bold text-gray-800 hover:text-blue-600"
        )}
      >
        <i className="fas fa-gem mr-2"></i>
        NEXT GENERATION TECHNOLOGY
      </a>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href="/"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/tech.html"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="/products"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            Products
          </a>
        </li>
      </ul>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="block md:hidden text-gray-800 focus:outline-none"
            id="mobile-menu-toggle"
          >
            <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-1 bg-gray-800"></span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-white shadow-md">
          <DropdownMenuItem asChild>
            <a
              href="/"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="/tech.html"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Tech
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="/products"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              Products
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
