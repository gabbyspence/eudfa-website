import Link from "next/link"
import { ChevronRight, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DigitalRegulationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <PageHeader 
        title="Digital Regulation" 
        description="EDFA oversees the implementation and enforcement of key digital regulations to ensure fair, transparent, and competitive digital markets across the European Union."
      />
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-[#004494] mb-4">Digital Markets Regulation</h2>
              <p className="text-gray-700 mb-4">
                The digital economy has transformed how businesses operate and consumers access services. EDFA's digital regulation framework ensures that digital markets remain fair, contestable, and innovative while protecting consumers and businesses from unfair practices.
              </p>
              <p className="text-gray-700 mb-6">
                Our regulatory approach focuses on ensuring that large online platforms act as fair intermediaries, that digital services are safe and transparent, and that new technologies are developed and deployed in line with European values and principles.
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#004494] mb-3">Key Regulations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Digital Markets Act (DMA)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Ensures fair and contestable digital markets by regulating large online platforms acting as gatekeepers.
                      </p>
                      <Link href="/digital-regulation/dma" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Digital Services Act (DSA)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Creates safer digital spaces where users' rights are protected and digital services operate responsibly.
                      </p>
                      <Link href="/digital-regulation/dsa" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">AI Act</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Establishes a framework for trustworthy artificial intelligence that respects fundamental rights and safety.
                      </p>
                      <Link href="/digital-regulation/ai-act" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Data Governance Act</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Promotes data sharing and reuse while ensuring data protection and privacy.
                      </p>
                      <Link href="/digital-regulation/data-governance" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
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
                      <Link href="/digital-regulation/dma" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Digital Markets Act
                      </Link>
                      <Link href="/digital-regulation/dsa" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Digital Services Act
                      </Link>
                      <Link href="/digital-regulation/ai-act" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        AI Act
                      </Link>
                      <Link href="/digital-regulation/compliance" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Compliance Guidelines
                      </Link>
                      <Link href="/digital-regulation/enforcement" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Enforcement Actions
                      </Link>
                    </nav>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-[#004494]">Upcoming Consultations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li>
                        <p className="font-medium text-gray-900">DMA Implementation Guidelines</p>
                        <p className="text-sm text-gray-600 mb-1">Deadline: 30 June 2025</p>
                        <Link href="#" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                          Participate
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </li>
                      <li>
                        <p className="font-medium text-gray-900">AI Risk Assessment Framework</p>
                        <p className="text-sm text-gray-600 mb-1">Deadline: 15 July 2025</p>
                        <Link href="#" className="text-[#004494] text-sm font-medium flex items-center hover:underline">
                          Participate
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#004494] mb-6">Compliance & Enforcement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#004494] mb-3">Compliance Framework</h3>
                <p className="text-gray-700 mb-4">
                  EDFA has developed a comprehensive compliance framework to help businesses understand and meet their obligations under EU digital regulations. Our approach includes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Clear guidance on regulatory requirements</li>
                  <li>Self-assessment tools for businesses</li>
                  <li>Technical standards and specifications</li>
                  <li>Regular stakeholder engagement</li>
                </ul>
                <Button className="bg-[#004494] hover:bg-[#003366]">
                  Compliance Resources
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#004494] mb-3">Enforcement Activities</h3>
                <p className="text-gray-700 mb-4">
                  EDFA takes a risk-based approach to enforcement, focusing on areas where non-compliance could cause the most harm to consumers, businesses, or markets. Our enforcement tools include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Market investigations and audits</li>
                  <li>Compliance orders and remedies</li>
                  <li>Administrative fines and penalties</li>
                  <li>Cooperation with national authorities</li>
                </ul>
                <Button className="bg-[#004494] hover:bg-[#003366]">
                  Enforcement Decisions
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#004494] mb-6">Latest Publications</h2>
            <Tabs defaultValue="guidance" className="mb-12">
              <TabsList className="bg-transparent border-b w-auto">
                <TabsTrigger
                  value="guidance"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Guidance Documents
                </TabsTrigger>
                <TabsTrigger
                  value="reports"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Reports & Studies
                </TabsTrigger>
              </TabsList>

              <TabsContent value="guidance" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Guidelines for Designating Gatekeepers under the DMA",
                      desc: "Detailed criteria and process for designating platforms as gatekeepers under the Digital Markets Act.",
                    },
                    {
                      title: "Compliance Handbook for Very Large Online Platforms",
                      desc: "Practical guidance for VLOPs on meeting their obligations under the Digital Services Act.",
                    },
                    {
                      title: "Risk Assessment Framework for AI Systems",
                      desc: "Methodology for assessing and mitigating risks in AI systems under the AI Act.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-4">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <FileText className="h-3 w-3 mr-1" />
                          <span>Guidance • 10 May 2025</span>
                        </div>
                        <h3 className="font-medium text-[#004494] mb-2">{item.title}</h3\
