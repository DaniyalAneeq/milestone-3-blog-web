"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "@/components/ui/Themebtn";
import { BookOpen, House, SquareUser, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg bg-background/50 sticky top-0 backdrop-blur z-10 mt-4 bg-gray-100 md:mx-auto mx-28 md:max-w-lg rounded-3xl dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-gray-600 hover:text-primary hover:font-bold hover:glow hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <House/>
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary hover:font-bold hover:glow hover:scale-105 hover:shadow-lg transition duration-300"
            >
               <User />
            </Link>
            <Link
              href="/blogs"
              className="text-gray-600 hover:text-primary hover:font-bold hover:glow hover:scale-105 hover:shadow-lg transition duration-300"
            >
             <BookOpen/>
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-primary hover:font-bold hover:glow hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <SquareUser />
            </Link>
            <ModeToggle />
            </div>
         

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
              <span className="mx-2">
                <ModeToggle/>
              </span>
            <Sheet>
              <SheetTrigger>
                <button
                  onClick={toggleMenu}
                  className="outline-none mobile-menu-button"
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold my-4">
                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-6">
                      <Link
                        href="/"
                        className="text-gray-600 hover:text-gray-900 transition duration-300"
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="text-gray-600 hover:text-gray-900 transition duration-300"
                      >
                        About
                      </Link>
                      <Link
                        href="/blogs"
                        className="text-gray-600 hover:text-gray-900 transition duration-300"
                      >
                        Blogs
                      </Link>
                      <Link
                        href="/contact"
                        className="text-gray-600 hover:text-gray-900 transition duration-300"
                      >
                        Contact
                      </Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
