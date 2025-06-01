import Image from "next/image"
import Link from "next/link"
import { ChevronRight, FileText, BarChart3, AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FinancialOversightPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageHeader
        title="Financial Oversight"
        description="EDFA supervises financial markets and services in the digital age, ensuring stability, transparency, and consumer protection across the European Union."
      />

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-[#004494] mb-4">Digital Financial Services Regulation</h2>
              <p className="text-gray-700 mb-4">
                The digitalization of financial services has created new opportunities and challenges for the financial
                sector. EDFA's financial oversight framework ensures that digital financial services are secure,
                transparent, and compliant with EU regulations.
              </p>
              <p className="text-gray-700 mb-6">
                Our regulatory approach focuses on maintaining financial stability, protecting consumers, and fostering
                innovation in digital finance while ensuring that new technologies and business models operate within a
                robust regulatory framework.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#004494] mb-3">Key Regulatory Areas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Digital Banking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Oversight of digital banks, neobanks, and traditional banks' digital operations to ensure
                        compliance with banking regulations.
                      </p>
                      <Link
                        href="/financial-oversight/digital-banking"
                        className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Crypto-assets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Regulation of cryptocurrencies, stablecoins, and crypto service providers under the Markets in
                        Crypto-Assets (MiCA) framework.
                      </p>
                      <Link
                        href="/financial-oversight/crypto"
                        className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Payment Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Supervision of digital payment services, e-money institutions, and payment service providers
                        under PSD2 and upcoming PSD3.
                      </p>
                      <Link
                        href="/financial-oversight/payments"
                        className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Digital Euro</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Regulatory framework for the implementation and operation of the digital euro as a central bank
                        digital currency.
                      </p>
                      <Link
                        href="/financial-oversight/digital-euro"
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
                      <Link
                        href="/financial-oversight/regulations"
                        className="flex items-center text-[#004494] hover:underline"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Regulatory Framework
                      </Link>
                      <Link
                        href="/financial-oversight/crypto"
                        className="flex items-center text-[#004494] hover:underline"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Crypto-assets Regulation
                      </Link>
                      <Link
                        href="/financial-oversight/digital-euro"
                        className="flex items-center text-[#004494] hover:underline"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Digital Euro
                      </Link>
                      <Link
                        href="/financial-oversight/sandbox"
                        className="flex items-center text-[#004494] hover:underline"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Regulatory Sandbox
                      </Link>
                      <Link
                        href="/financial-oversight/reporting"
                        className="flex items-center text-[#004494] hover:underline"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Reporting Requirements
                      </Link>
                    </nav>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-[#004494]">Market Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Crypto Market Volatility</p>
                          <p className="text-xs text-gray-600">
                            Increased monitoring of stablecoin reserves amid market fluctuations
                          </p>
                          <p className="text-xs text-gray-500 mt-1">15 May 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Payment Fraud Alert</p>
                          <p className="text-xs text-gray-600">
                            New patterns of payment fraud detected across multiple EU member states
                          </p>
                          <p className="text-xs text-gray-500 mt-1">10 May 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-12 bg-gradient-to-r from-[#004494]/10 to-[#004494]/5 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-[#004494] mb-4">Regulatory Sandbox for Financial Innovation</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <p className="text-gray-700 mb-4">
                  EDFA's Regulatory Sandbox provides a controlled environment where innovative financial products,
                  services, and business models can be tested with real customers under regulatory supervision.
                </p>
                <p className="text-gray-700 mb-4">
                  The Sandbox helps fintech companies and established financial institutions test innovative solutions
                  while ensuring consumer protection and financial stability.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white bg-opacity-70 p-4 rounded-md">
                    <h3 className="font-semibold text-[#004494] mb-2">Benefits for Innovators</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Reduced time-to-market for innovations</li>
                      <li>Regulatory guidance and support</li>
                      <li>Testing with real customers</li>
                      <li>Feedback on regulatory requirements</li>
                    </ul>
                  </div>
                  <div className="bg-white bg-opacity-70 p-4 rounded-md">
                    <h3 className="font-semibold text-[#004494] mb-2">Benefits for Consumers</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Access to innovative financial services</li>
                      <li>Protection through regulatory oversight</li>
                      <li>Transparent information about risks</li>
                      <li>Feedback mechanisms for improvement</li>
                    </ul>
                  </div>
                </div>
                <Button className="bg-[#004494] hover:bg-[#003366]">
                  Apply for the Sandbox
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="w-full md:w-1/3">
                <div className="relative h-48 md:h-full rounded-md overflow-hidden">
                  <Image
                    src="/images/sandbox-fintech.webp"
                    alt="Regulatory Sandbox"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#004494] mb-6">Market Monitoring</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#004494] mb-3">Digital Finance Observatory</h3>
                <p className="text-gray-700 mb-4">
                  EDFA's Digital Finance Observatory monitors trends, risks, and developments in digital financial
                  markets to identify emerging issues and inform regulatory responses.
                </p>
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-10 w-10 text-[#004494] mr-3" />
                  <div>
                    <p className="font-medium">Latest Market Indicators</p>
                    <p className="text-sm text-gray-600">Updated daily with key metrics on digital financial markets</p>
                  </div>
                </div>
                <Button className="bg-[#004494] hover:bg-[#003366]">
                  View Market Dashboard
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#004494] mb-3">Risk Assessment</h3>
                <p className="text-gray-700 mb-4">
                  EDFA conducts regular risk assessments of digital financial markets to identify systemic risks,
                  vulnerabilities, and emerging threats to financial stability.
                </p>
                <div className="border rounded-md p-4 mb-4">
                  <h4 className="font-medium text-[#004494] mb-2">Latest Risk Assessment Report</h4>
                  <p className="text-sm text-gray-600 mb-3">Q2 2025 Digital Finance Risk Assessment</p>
                  <div className="flex justify-between items-center">
                    <Link href="#" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                      Download PDF
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                    <span className="text-xs text-gray-500">Published: 1 May 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#004494] mb-6">Latest Publications</h2>
            <Tabs defaultValue="reports" className="mb-12">
              <TabsList className="bg-transparent border-b w-auto">
                <TabsTrigger
                  value="reports"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Reports & Studies
                </TabsTrigger>
                <TabsTrigger
                  value="guidelines"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Guidelines & Standards
                </TabsTrigger>
              </TabsList>

              <TabsContent value="reports" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Annual Report on Digital Financial Markets",
                      desc: "Comprehensive analysis of developments, trends, and risks in digital financial markets across the EU.",
                    },
                    {
                      title: "Crypto-assets Market Monitoring Report",
                      desc: "Quarterly assessment of crypto-asset markets, including market capitalization, trading volumes, and risk indicators.",
                    },
                    {
                      title: "Digital Banking Transformation Study",
                      desc: "Analysis of how traditional banks are adapting to digital transformation and the emergence of digital-only banks.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-4">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <FileText className="h-3 w-3 mr-1" />
                          <span>Report • 5 May 2025</span>
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
                          <span className="text-xs text-gray-500">2.8 MB</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="guidelines" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Guidelines on Crypto-asset Service Provider Licensing",
                      desc: "Requirements and procedures for obtaining and maintaining a license as a crypto-asset service provider under MiCA.",
                    },
                    {
                      title: "Digital Banking Security Standards",
                      desc: "Technical and organizational security requirements for digital banking services to protect against cyber threats.",
                    },
                    {
                      title: "Stablecoin Reserve Management Guidelines",
                      desc: "Requirements for the management, composition, and disclosure of reserves backing stablecoins.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-4">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <FileText className="h-3 w-3 mr-1" />
                          <span>Guideline • 20 April 2025</span>
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
                          <span className="text-xs text-gray-500">1.5 MB</span>
                        </div>
                      </div>
                    </div>
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
