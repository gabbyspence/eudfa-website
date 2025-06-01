import Link from "next/link"
import { ChevronRight, FileText, Search, Filter, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageHeader
        title="Publications"
        description="Access EDFA's reports, guidelines, consultation papers, and other publications on digital markets, financial services, and cybersecurity."
      />

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Search and Filter Section */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg border">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <Input type="search" placeholder="Search publications..." className="pr-10 border-[#004494]" />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Publication type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    <SelectItem value="report">Reports</SelectItem>
                    <SelectItem value="guideline">Guidelines</SelectItem>
                    <SelectItem value="consultation">Consultation Papers</SelectItem>
                    <SelectItem value="standard">Technical Standards</SelectItem>
                    <SelectItem value="decision">Decisions</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All years</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Publications */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#004494] mb-6">Featured Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Annual Report on Digital Markets 2025",
                  desc: "Comprehensive analysis of digital market developments, enforcement actions, and emerging trends across the EU.",
                  type: "Report",
                  date: "15 May 2025",
                },
                {
                  title: "Digital Finance Strategy Implementation Progress",
                  desc: "Assessment of progress in implementing the EU's Digital Finance Strategy and recommendations for future actions.",
                  type: "Report",
                  date: "10 May 2025",
                },
                {
                  title: "Cybersecurity Standards for Critical Financial Infrastructure",
                  desc: "Technical standards for ensuring the security and resilience of critical financial infrastructure against cyber threats.",
                  type: "Technical Standard",
                  date: "5 May 2025",
                },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="bg-[#004494]/10 text-[#004494] font-normal">
                        {item.type}
                      </Badge>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <CardTitle className="text-[#004494] mt-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
                    <div className="flex justify-between items-center">
                      <Link href="#" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                        Read more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#004494]">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Publication Categories */}
          <div className="mb-12">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-transparent border-b w-full justify-start rounded-none">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  All Publications
                </TabsTrigger>
                <TabsTrigger
                  value="reports"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Reports
                </TabsTrigger>
                <TabsTrigger
                  value="guidelines"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Guidelines
                </TabsTrigger>
                <TabsTrigger
                  value="consultations"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Consultations
                </TabsTrigger>
                <TabsTrigger
                  value="decisions"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Decisions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Digital Markets Act Implementation Report",
                      desc: "Analysis of the first year of DMA implementation, compliance assessments, and enforcement actions.",
                      type: "Report",
                      date: "12 May 2025",
                      size: "3.2 MB",
                    },
                    {
                      title: "Guidelines on AI Risk Assessment in Financial Services",
                      desc: "Framework for assessing and mitigating risks associated with the use of artificial intelligence in financial services.",
                      type: "Guideline",
                      date: "8 May 2025",
                      size: "2.5 MB",
                    },
                    {
                      title: "Consultation on Digital Euro Regulatory Framework",
                      desc: "Public consultation on the proposed regulatory framework for the digital euro and its implications for the financial system.",
                      type: "Consultation",
                      date: "5 May 2025",
                      size: "1.8 MB",
                    },
                    {
                      title: "Decision on Gatekeeper Designation under the DMA",
                      desc: "Decision designating additional digital platforms as gatekeepers under the Digital Markets Act.",
                      type: "Decision",
                      date: "2 May 2025",
                      size: "1.5 MB",
                    },
                    {
                      title: "Crypto-asset Market Monitoring Report: Q1 2025",
                      desc: "Quarterly assessment of developments in crypto-asset markets, including market capitalization, trading volumes, and risk indicators.",
                      type: "Report",
                      date: "30 April 2025",
                      size: "2.8 MB",
                    },
                    {
                      title: "Technical Standards for Strong Customer Authentication",
                      desc: "Updated technical standards for strong customer authentication in digital financial services.",
                      type: "Technical Standard",
                      date: "25 April 2025",
                      size: "2.1 MB",
                    },
                    {
                      title: "Annual Cybersecurity Threat Landscape for Financial Services",
                      desc: "Analysis of cyber threats targeting the financial sector in the past year and emerging threat trends.",
                      type: "Report",
                      date: "20 April 2025",
                      size: "3.5 MB",
                    },
                    {
                      title: "Guidelines on Stablecoin Reserve Management",
                      desc: "Requirements for the management, composition, and disclosure of reserves backing stablecoins.",
                      type: "Guideline",
                      date: "15 April 2025",
                      size: "1.9 MB",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-md p-4 hover:shadow-sm transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-3 md:mb-0 md:mr-4">
                          <div className="flex items-center mb-1">
                            <Badge variant="outline" className="bg-[#004494]/10 text-[#004494] font-normal mr-2">
                              {item.type}
                            </Badge>
                            <span className="text-xs text-gray-500">{item.date}</span>
                          </div>
                          <h3 className="font-medium text-[#004494]">{item.title}</h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.desc}</p>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <Button variant="outline" size="sm" className="text-[#004494]">
                            <FileText className="h-4 w-4 mr-1" />
                            Read
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-500">
                            <Download className="h-4 w-4 mr-1" />
                            PDF ({item.size})
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="text-[#004494] border-[#004494]">
                    Load More Publications
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="reports" className="mt-6">
                <div className="p-8 text-center text-gray-500">
                  <p>Reports content would be displayed here</p>
                </div>
              </TabsContent>

              <TabsContent value="guidelines" className="mt-6">
                <div className="p-8 text-center text-gray-500">
                  <p>Guidelines content would be displayed here</p>
                </div>
              </TabsContent>

              <TabsContent value="consultations" className="mt-6">
                <div className="p-8 text-center text-gray-500">
                  <p>Consultations content would be displayed here</p>
                </div>
              </TabsContent>

              <TabsContent value="decisions" className="mt-6">
                <div className="p-8 text-center text-gray-500">
                  <p>Decisions content would be displayed here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Publication Series */}
          <div>
            <h2 className="text-xl font-bold text-[#004494] mb-6">Publication Series</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#004494]">Digital Finance Observatory</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Regular reports monitoring developments, trends, and risks in digital financial markets across the
                    European Union.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <Link href="#" className="text-[#004494] hover:underline text-sm">
                        Digital Finance Observatory: Q1 2025
                      </Link>
                      <span className="text-xs text-gray-500">May 2025</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link href="#" className="text-[#004494] hover:underline text-sm">
                        Digital Finance Observatory: Q4 2024
                      </Link>
                      <span className="text-xs text-gray-500">February 2025</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link href="#" className="text-[#004494] hover:underline text-sm">
                        Digital Finance Observatory: Q3 2024
                      </Link>
                      <span className="text-xs text-gray-500">November 2024</span>
                    </div>
                  </div>
                  <Link href="#" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                    View all reports in this series
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#004494]">Cybersecurity Threat Landscape</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Regular assessments of cybersecurity threats targeting the financial sector, including emerging
                    trends and mitigation strategies.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <Link href="#" className="text-[#004494] hover:underline text-sm">
                        Cybersecurity Threat Landscape: H1 2025
                      </Link>
                      <span className="text-xs text-gray-500">April 2025</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link href="#" className="text-[#004494] hover:underline text-sm">
                        Cybersecurity Threat Landscape: H2 2024
                      </Link>
                      <span className="text-xs text-gray-500">October 2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link href="#" className="text-[#004494] hover:underline text-sm">
                        Cybersecurity Threat Landscape: H1 2024
                      </Link>
                      <span className="text-xs text-gray-500">April 2024</span>
                    </div>
                  </div>
                  <Link href="#" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                    View all reports in this series
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
