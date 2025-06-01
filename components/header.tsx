'use client'

import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Header() {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (query.trim()) {
      window.location.href = `https://search.eudfa.org/?individual=${encodeURIComponent(query)}`
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#004494] text-white text-xs">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline">
              Contact
            </Link>
            <Link href="#" className="hover:underline">
              Sitemap
            </Link>
            <Link href="#" className="hover:underline">
              Legal notice
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline">
              Login
            </Link>
            <div className="flex space-x-2">
              <Link href="#" className="hover:underline font-bold">
                EN
              </Link>
              <Link href="#" className="hover:underline">
                FR
              </Link>
              <Link href="#" className="hover:underline">
                DE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="w-[76.8px] h-[76.8px] relative mr-2">
                <Image
                  src="/images/eu-flag.png"
                  alt="EDFA Logo"
                  width={76.8}
                  height={76.8}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-[#004494] text-xl font-bold">EDFA</h1>
                <p className="text-xs text-gray-600">European Digital & Financial Authority</p>
              </div>
            </Link>
          </div>

          <div className="w-full md:w-auto flex items-center">
            <div className="relative w-full md:w-64">
              <Input
                type="search"
                placeholder="Search directory..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch()
                }}
                className="pr-10 border-[#004494]"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="ml-2 hidden md:flex"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-[#004494] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Digital Regulation", href: "/digital-regulation" },
              { name: "Financial Oversight", href: "/financial-oversight" },
              { name: "Cybersecurity", href: "/cybersecurity" },
              { name: "Consumers", href: "/consumers" },
              { name: "Publications", href: "/publications" },
              { name: "Data", href: "/data" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-sm font-medium hover:bg-[#003366] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
