"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Connect", href: "#connect" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/SherazArif172/", icon: Github },
]

export function PortfolioNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll handler for in-page links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href === '/') {
      e.preventDefault();
      const el = document.getElementById('home');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 0, scale: 0.98, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{ type: "spring", stiffness: 80, damping: 14, mass: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="text-gray-900 dark:text-white font-bold text-2xl tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          >
            SHERAZ
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.08,
                },
              },
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: -16, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ type: "spring", stiffness: 120, damping: 16, mass: 0.7 }}
              >
                <Link
                  href={item.href}
                  className={`text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-all duration-200 relative group ${
                    activeSection === item.name.toLowerCase() ? "text-gray-900 dark:text-white" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links & Theme Toggle - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              )
            })}
            <ThemeToggle />
          </div>

          {/* Social Links & Theme Toggle - Mobile Only */}
          <div className="flex md:hidden items-center space-x-4 ml-auto">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              )
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
