import Image from "next/image"
import Link from "next/link"
import { ChevronRight, FileText, HelpCircle, AlertTriangle, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ConsumersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageHeader
        title="Consumer Protection"
        description="EDFA works to protect consumers in digital financial markets by ensuring transparency, fairness, and security in digital financial services."
      />

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Search and Help Section */}
          <div className="mb-12 bg-gradient-to-r from-[#004494]/10 to-[#004494]/5 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-2/3">
                <h2 className="text-xl font-bold text-[#004494] mb-4">How can we help you?</h2>
                <p className="text-gray-700 mb-4">
                  Find information about your rights, how to make a complaint, or get answers to common questions about
                  digital financial services.
                </p>
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search for information..."
                    className="pr-10 border-[#004494] bg-white"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-[#004494] hover:bg-[#003366] h-auto py-3 flex flex-col items-center">
                    <HelpCircle className="h-6 w-6 mb-1" />
                    <span>Get Help</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="text-[#004494] border-[#004494] h-auto py-3 flex flex-col items-center"
                  >
                    <AlertTriangle className="h-6 w-6 mb-1" />
                    <span>Report an Issue</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-[#004494] mb-4">Your Rights in Digital Finance</h2>
              <p className="text-gray-700 mb-6">
                As a consumer of digital financial services in the European Union, you have specific rights that are
                protected by EU regulations. EDFA works to ensure that these rights are respected by all providers of
                digital financial services.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#004494] mb-3">Key Consumer Rights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Transparency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        The right to clear, understandable information about financial products and services, including
                        fees, risks, and terms and conditions.
                      </p>
                      <Link
                        href="/consumers/transparency"
                        className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Data Protection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        The right to control how your personal and financial data is collected, used, and shared by
                        financial service providers.
                      </p>
                      <Link
                        href="/consumers/data-protection"
                        className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        The right to secure financial services with appropriate safeguards against fraud, cyber attacks,
                        and unauthorized access.
                      </p>
                      <Link
                        href="/consumers/security"
                        className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Redress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        The right to file complaints and seek redress when things go wrong with digital financial
                        services.
                      </p>
                      <Link
                        href="/consumers/complaints"
                        className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-4">
                <Card>
                  <CardHeader className="bg-[#004494] text-white">
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <nav className="space-y-2">
                      <Link href="/consumers/complaints" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        How to Make a Complaint
                      </Link>
                      <Link href="/consumers/scams" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Fraud & Scam Alerts
                      </Link>
                      <Link href="/consumers/crypto-guide" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Crypto-assets Guide
                      </Link>
                      <Link
                        href="/consumers/digital-payments"
                        className="flex items-center text-[#004494] hover:underline"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Digital Payments
                      </Link>
                      <Link href="/consumers/tools" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Consumer Tools
                      </Link>
                    </nav>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-[#004494]">Consumer Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Investment Scam Warning</p>
                          <p className="text-xs text-gray-600">
                            Fraudulent crypto investment platforms targeting EU consumers
                          </p>
                          <p className="text-xs text-gray-500 mt-1">18 May 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Phishing Alert</p>
                          <p className="text-xs text-gray-600">
                            New wave of phishing emails impersonating major EU banks
                          </p>
                          <p className="text-xs text-gray-500 mt-1">15 May 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#004494] mb-6">Consumer Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/consumers/crypto-guide" className="group">
                <div className="border rounded-md overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="relative h-40">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Crypto+Guide"
                      alt="Crypto Guide"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-[#004494] mb-2 group-hover:underline">Guide to Crypto-assets</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Understanding cryptocurrencies, stablecoins, and tokens: what they are, how they work, and what
                      risks they involve.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/consumers/digital-banking" className="group">
                <div className="border rounded-md overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="relative h-40">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Digital+Banking"
                      alt="Digital Banking"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-[#004494] mb-2 group-hover:underline">Digital Banking Explained</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      A guide to digital banks, mobile banking apps, and online banking services, including security
                      tips and consumer rights.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/consumers/online-safety" className="group">
                <div className="border rounded-md overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="relative h-40">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Online+Safety"
                      alt="Online Safety"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-[#004494] mb-2 group-hover:underline">Online Financial Safety</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Practical tips for protecting yourself online, recognizing scams, and keeping your financial
                      information secure.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#004494] mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#004494]">
                  How do I know if a digital financial service is regulated?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-2">
                    All regulated financial service providers in the EU must be authorized by their national competent
                    authority and registered in EDFA's Financial Services Register.
                  </p>
                  <p className="text-gray-700 mb-2">Before using any digital financial service, you should:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
                    <li>Check the company's details on our Financial Services Register</li>
                    <li>Verify that the website or app you're using matches the official details</li>
                    <li>Be wary of services that claim to be regulated but aren't listed in our register</li>
                  </ul>
                  <Link
                    href="/consumers/check-register"
                    className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                  >
                    Check the Financial Services Register
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#004494]">
                  What should I do if I've been a victim of a financial scam?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-2">
                    If you believe you've been a victim of a financial scam, you should:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 text-gray-700 mb-2">
                    <li>Contact your bank or payment provider immediately to stop or reverse any payments</li>
                    <li>Report the scam to your national financial authority and police</li>
                    <li>File a complaint through EDFA's Consumer Complaint Portal</li>
                    <li>Gather and keep all evidence of the scam, including communications and transaction details</li>
                  </ol>
                  <Link
                    href="/consumers/report-scam"
                    className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                  >
                    Report a scam
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#004494]">Are crypto-assets regulated in the EU?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-2">
                    Yes, crypto-assets are regulated in the EU under the Markets in Crypto-Assets (MiCA) Regulation,
                    which came into effect in 2024.
                  </p>
                  <p className="text-gray-700 mb-2">Under MiCA:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
                    <li>Crypto-asset service providers must be authorized and supervised by national authorities</li>
                    <li>
                      Issuers of stablecoins must maintain adequate reserves and provide clear information to consumers
                    </li>
                    <li>
                      Consumers have specific rights, including clear information about risks and protection against
                      market abuse
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-2">
                    However, it's important to understand that crypto-assets remain high-risk investments and are not
                    covered by deposit guarantee schemes.
                  </p>
                  <Link
                    href="/consumers/crypto-regulation"
                    className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                  >
                    Learn more about crypto regulation
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[#004494]">
                  How can I make a complaint about a digital financial service?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-2">
                    If you have a complaint about a digital financial service, you should:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 text-gray-700 mb-2">
                    <li>First, contact the service provider directly through their official complaint procedure</li>
                    <li>If you're not satisfied with their response, contact your national financial ombudsman</li>
                    <li>You can also file a complaint through EDFA's Consumer Complaint Portal</li>
                  </ol>
                  <p className="text-gray-700 mb-2">
                    When making a complaint, be sure to include all relevant details, such as dates, transaction
                    references, and copies of communications.
                  </p>
                  <Link
                    href="/consumers/complaints"
                    className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                  >
                    File a complaint
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-[#004494]">
                  What is the Digital Euro and how will it affect me?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-2">
                    The Digital Euro is a central bank digital currency (CBDC) being developed by the European Central
                    Bank. It will be a digital form of the euro, backed by the ECB.
                  </p>
                  <p className="text-gray-700 mb-2">Key features of the Digital Euro:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-2">
                    <li>It will be as safe as physical euro cash, as it's backed by the central bank</li>
                    <li>It will complement, not replace, physical cash</li>
                    <li>It will be accessible to all euro area citizens and businesses</li>
                    <li>It will offer greater privacy than private digital payment solutions</li>
                  </ul>
                  <p className="text-gray-700 mb-2">
                    The Digital Euro is expected to be introduced gradually, with a pilot phase starting in 2026.
                  </p>
                  <Link
                    href="/consumers/digital-euro"
                    className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                  >
                    Learn more about the Digital Euro
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#004494] mb-6">Educational Resources</h2>
            <Tabs defaultValue="guides" className="mb-12">
              <TabsList className="bg-transparent border-b w-auto">
                <TabsTrigger
                  value="guides"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Consumer Guides
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Interactive Tools
                </TabsTrigger>
              </TabsList>

              <TabsContent value="guides" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Digital Financial Services: Your Rights Explained",
                      desc: "A comprehensive guide to consumer rights in digital financial services under EU regulations.",
                    },
                    {
                      title: "Staying Safe Online: A Guide to Digital Financial Security",
                      desc: "Practical advice for protecting yourself from online financial fraud and scams.",
                    },
                    {
                      title: "Understanding Digital Payments",
                      desc: "An overview of different digital payment methods, their features, and how they're regulated.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-4">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <FileText className="h-3 w-3 mr-1" />
                          <span>Guide • May 2025</span>
                        </div>
                        <h3 className="font-medium text-[#004494] mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{item.desc}</p>
                        <div className="flex justify-between items-center">
                          <Link
                            href="#"
                            className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                          >
                            Download PDF
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                          <span className="text-xs text-gray-500">1.8 MB</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tools" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Financial Service Checker",
                      desc: "Verify if a financial service provider is authorized and regulated in the EU.",
                      icon: "🔍",
                    },
                    {
                      title: "Scam Detection Tool",
                      desc: "Interactive tool to help you identify potential financial scams and frauds.",
                      icon: "⚠️",
                    },
                    {
                      title: "Digital Finance Glossary",
                      desc: "Searchable glossary of terms related to digital finance, crypto-assets, and fintech.",
                      icon: "📚",
                    },
                  ].map((item, index) => (
                    <Link key={index} href="#" className="group">
                      <div className="border rounded-md p-6 hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                        <span className="text-3xl mb-3">{item.icon}</span>
                        <h3 className="font-medium text-[#004494] mb-2 group-hover:underline">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
