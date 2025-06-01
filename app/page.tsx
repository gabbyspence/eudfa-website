import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight, Calendar, FileText, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />


      {/* Hero Banner */}
      <div className="bg-[#f5f5f5] border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 pr-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#004494] mb-4">
                EDFA - European Digital & Financial Authority
              </h2>
              <p className="text-gray-700 mb-6">
                The European Digital & Financial Authority (EDFA) is the European Union's integrated regulator for
                digital markets, financial services, and cybersecurity, ensuring a safe, transparent, and innovative
                digital economy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#004494] hover:bg-[#003366]">
                  About EDFA
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-[#004494] border-[#004494]">
                  Key Documents
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/3 mt-6 md:mt-0">
              <div className="relative h-48 md:h-64 rounded-md overflow-hidden">
                <Image
                  src="/images/eu-map.jpg"
                  alt="Digital Finance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* News and Publications Tabs */}
          <Tabs defaultValue="news" className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <TabsList className="bg-transparent border-b w-auto">
                <TabsTrigger
                  value="news"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Latest News
                </TabsTrigger>
                <TabsTrigger
                  value="publications"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Latest Publications
                </TabsTrigger>
              </TabsList>
              <Link
                href="/publications"
                className="text-[#004494] text-sm font-medium flex items-center hover:underline"
              >
                View all
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <TabsContent value="news" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "EDFA launches new Digital Markets Oversight Framework",
                    desc: "The framework aims to ensure fair competition in digital platforms and protect consumers in the rapidly evolving digital marketplace.",
                    image: "/images/digital-justice.jpg"
                  },
                  {
                    title: "Cryptocurrency Regulation Guidelines Published",
                    desc: "New guidelines provide clarity on the regulatory approach to cryptocurrencies, stablecoins, and decentralized finance within the EU.",
                    image: "/images/crypto.webp"
                  },
                  {
                    title: "EDFA issues warning on AI-based financial scams",
                    desc: "The authority warns consumers about sophisticated financial scams using artificial intelligence to impersonate legitimate financial services.",
                    image: "/images/ai-robot.avif"
                  },
                ].map((item, index) => (
                  <div key={index} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={item.image}
                        alt={`News item ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>15 May 2025</span>
                      </div>
                      <h3 className="font-medium text-[#004494] mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.desc}</p>
                      <Link href="#" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                        Read more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Annual Report on Digital Markets Compliance",
                    desc: "This report provides an overview of compliance with the Digital Markets Act across the EU and identifies key areas for improvement.",
                  },
                  {
                    title: "Cybersecurity Standards for Financial Institutions",
                    desc: "Updated standards for financial institutions to protect against evolving cyber threats and ensure resilience of critical financial infrastructure.",
                  },
                  {
                    title: "Digital Euro: Technical and Regulatory Framework",
                    desc: "Comprehensive analysis of the technical requirements and regulatory considerations for the implementation of a digital euro.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-4">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <FileText className="h-3 w-3 mr-1" />
                        <span>Report • 12 May 2025</span>
                      </div>
                      <h3 className="font-medium text-[#004494] mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{item.desc}</p>
                      <div className="flex justify-between items-center">
                        <Link href="#" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                          Download PDF
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                        <span className="text-xs text-gray-500">3.2 MB</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Links */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#004494] mb-6">Key Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "Digital Markets",
                  icon: "🌐",
                  desc: "Oversight of digital platforms and marketplaces",
                  href: "/digital-regulation",
                },
                {
                  title: "Financial Innovation",
                  icon: "💶",
                  desc: "Regulation of fintech and digital payments",
                  href: "/financial-oversight",
                },
                { title: "Cybersecurity", icon: "🔒", desc: "Standards and incident response", href: "/cybersecurity" },
                { title: "Data Protection", icon: "🛡️", desc: "Privacy and data governance", href: "/data" },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex flex-col p-6 border rounded-md text-center hover:shadow-md transition-shadow bg-gray-50"
                >
                  <span className="text-3xl mb-3">{item.icon}</span>
                  <h3 className="font-medium text-[#004494] mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#004494]">Upcoming Events</h2>
              <Link href="#" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                View all events
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { date: "25 May", title: "Digital Markets Act Implementation Workshop" },
                { date: "10 June", title: "Cybersecurity in Financial Services Conference" },
                { date: "22 June", title: "Digital Euro Public Consultation Forum" },
              ].map((event, index) => (
                <div key={index} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-[#004494] text-white p-2 rounded text-center min-w-16">
                      <div className="text-xs">2025</div>
                      <div className="font-bold">{event.date}</div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-[#004494] mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">Brussels, Belgium</p>
                      <Link href="#" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                        Register
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Finance Strategy */}
          <div className="mb-12 bg-gradient-to-r from-[#004494]/10 to-[#004494]/5 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-[#004494] mb-4">Digital Finance Strategy 2025</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <p className="text-gray-700 mb-4">
                  The EU's Digital Finance Strategy aims to embrace digital transformation in finance while regulating
                  its risks. EDFA plays a central role in implementing this strategy through four priorities:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Removing fragmentation in the Digital Single Market</li>
                  <li>Adapting the EU regulatory framework to facilitate digital innovation</li>
                  <li>Promoting data-driven finance while maintaining privacy and security</li>
                  <li>Addressing challenges and risks associated with digital transformation</li>
                </ul>
                <Button className="bg-[#004494] hover:bg-[#003366]">
                  Learn more about the strategy
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="w-full md:w-1/3">
                <div className="relative h-48 md:h-full rounded-md overflow-hidden">
                  <Image
                    src="/images/digital-finance.avif"
                    alt="Digital Finance Strategy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* EU Cooperation */}
          <div>
            <h2 className="text-xl font-bold text-[#004494] mb-6">EU Cooperation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                // "European Banking Authority (EBA)",
                // "European Securities and Markets Authority (ESMA)",
                // "European Data Protection Board (EDPB)",
                // "European Union Agency for Cybersecurity (ENISA)",
                {
                  name: "European Banking Authority (EBA)",
                  link: "#",
                  logo: '/images/eba-logo.png',
                },
                {
                  name: "European Securities and Markets Authority (ESMA)",
                  link: "#",
                  logo: '/images/esma-logo.png',
                },
                {
                  name: "European Data Protection Board (EDPB)",
                  link: "#",
                  logo: '/images/edpb-logo.png',
                },
                {
                  name: "European Union Agency for Cybersecurity (ENISA)",
                  link: "#",
                  logo: '/images/enisa-logo.png',
                },
              ].map((org, index) => (
                <Link
                  key={index}
                  href={org.link}
                  className="flex items-center p-4 border rounded-md hover:shadow-md transition-shadow"
                >
                  <div className="relative mr-3 flex-shrink-0">
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-[#004494]">{org.name}</span>
                  <ExternalLink className="ml-auto h-3 w-3 text-gray-400 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#004494] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-lg">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:underline">
                    Who we are
                  </Link>
                </li>
                <li>
                  <Link href="/about/governance" className="hover:underline">
                    Governance
                  </Link>
                </li>
                <li>
                  <Link href="/about/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/about/procurement" className="hover:underline">
                    Procurement
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Regulation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/digital-regulation/dma" className="hover:underline">
                    Digital Markets Act
                  </Link>
                </li>
                <li>
                  <Link href="/digital-regulation/dsa" className="hover:underline">
                    Digital Services Act
                  </Link>
                </li>
                <li>
                  <Link href="/financial-oversight/regulations" className="hover:underline">
                    Financial Services Regulation
                  </Link>
                </li>
                <li>
                  <Link href="/cybersecurity/framework" className="hover:underline">
                    Cybersecurity Framework
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/data/observatory" className="hover:underline">
                    Digital Finance Observatory
                  </Link>
                </li>
                <li>
                  <Link href="/financial-oversight/crypto" className="hover:underline">
                    Crypto-assets Monitor
                  </Link>
                </li>
                <li>
                  <Link href="/cybersecurity/alerts" className="hover:underline">
                    Cybersecurity Alerts
                  </Link>
                </li>
                <li>
                  <Link href="/data" className="hover:underline">
                    Market Data
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Contact</h3>
              <address className="not-italic text-sm space-y-2">
                <p>201-203 Rue de Bercy</p>
                <p>75012 Paris, France</p>
                <p className="mt-4">Email: support@eudfa.com</p>
                <p>Tel: +33 1 58 36 43 21</p>
              </address>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Image
                  src="/images/eu-flag.png"
                  alt="European Union Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-sm">
                <p>© European Digital & Financial Authority, 2025. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
