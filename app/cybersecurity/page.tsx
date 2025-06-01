import Image from "next/image"
import Link from "next/link"
import { ChevronRight, FileText, Shield, AlertTriangle, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageHeader
        title="Cybersecurity"
        description="EDFA develops and enforces cybersecurity standards to protect the European digital financial ecosystem from cyber threats and ensure operational resilience."
      />

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-[#004494] mb-4">Cybersecurity Framework</h2>
              <p className="text-gray-700 mb-4">
                As digital finance becomes increasingly interconnected, cybersecurity is essential for maintaining trust
                and stability in the financial system. EDFA's cybersecurity framework provides a comprehensive approach
                to identifying, protecting against, detecting, responding to, and recovering from cyber threats.
              </p>
              <p className="text-gray-700 mb-6">
                Our framework is designed to enhance the cyber resilience of financial institutions, digital service
                providers, and critical financial infrastructure across the European Union.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#004494] mb-3">Key Components</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Risk Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Methodologies and tools for identifying, analyzing, and evaluating cybersecurity risks in
                        digital financial services.
                      </p>
                      <Link
                        href="/cybersecurity/risk-assessment"
                        className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Security Controls</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Technical and organizational measures required to protect digital financial services from cyber
                        threats.
                      </p>
                      <Link
                        href="/cybersecurity/controls"
                        className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Incident Response</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Procedures and requirements for detecting, reporting, and responding to cybersecurity incidents.
                      </p>
                      <Link
                        href="/cybersecurity/incident-response"
                        className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-[#004494]">Resilience Testing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-3">
                        Framework for testing the resilience of financial entities against cyber attacks through
                        penetration testing and simulations.
                      </p>
                      <Link
                        href="/cybersecurity/resilience-testing"
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
                        href="/cybersecurity/framework"
                        className="flex items-center text-[#004494] hover:underline"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Cybersecurity Framework
                      </Link>
                      <Link href="/cybersecurity/dora" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        DORA Regulation
                      </Link>
                      <Link href="/cybersecurity/alerts" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Threat Alerts
                      </Link>
                      <Link
                        href="/cybersecurity/reporting"
                        className="flex items-center text-[#004494] hover:underline"
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Incident Reporting
                      </Link>
                      <Link href="/cybersecurity/tools" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Assessment Tools
                      </Link>
                    </nav>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-[#004494]">Threat Level</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <p className="font-medium text-gray-900 text-sm">Current Threat Level</p>
                          <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded">
                            Elevated
                          </span>
                        </div>
                        <Progress value={65} className="h-2 bg-gray-200" indicatorClassName="bg-amber-500" />
                        <p className="text-xs text-gray-600 mt-1">Last updated: 18 May 2025, 09:00 CET</p>
                      </div>
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Active Threat: Ransomware Campaign</p>
                          <p className="text-xs text-gray-600">Targeting financial institutions across Europe</p>
                          <Link
                            href="/cybersecurity/alerts/ransomware-2025"
                            className="text-[#004494] text-xs font-medium hover:underline"
                          >
                            View details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-12 bg-gradient-to-r from-[#004494]/10 to-[#004494]/5 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-[#004494] mb-4">Digital Operational Resilience Act (DORA)</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <p className="text-gray-700 mb-4">
                  The Digital Operational Resilience Act (DORA) establishes a comprehensive framework for ensuring that
                  financial entities can withstand, respond to, and recover from all types of ICT-related disruptions
                  and threats.
                </p>
                <p className="text-gray-700 mb-4">
                  EDFA is responsible for implementing and enforcing DORA across the European Union, working closely
                  with national competent authorities and other EU bodies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white bg-opacity-70 p-4 rounded-md">
                    <h3 className="font-semibold text-[#004494] mb-2">Key Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>ICT risk management framework</li>
                      <li>ICT incident classification and reporting</li>
                      <li>Digital operational resilience testing</li>
                      <li>ICT third-party risk management</li>
                      <li>Information sharing arrangements</li>
                    </ul>
                  </div>
                  <div className="bg-white bg-opacity-70 p-4 rounded-md">
                    <h3 className="font-semibold text-[#004494] mb-2">Implementation Timeline</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>
                        <span className="font-medium">January 2025:</span> DORA entered into application
                      </li>
                      <li>
                        <span className="font-medium">July 2025:</span> Technical standards finalized
                      </li>
                      <li>
                        <span className="font-medium">January 2026:</span> Full compliance required
                      </li>
                      <li>
                        <span className="font-medium">July 2026:</span> Advanced testing requirements
                      </li>
                    </ul>
                  </div>
                </div>
                <Button className="bg-[#004494] hover:bg-[#003366]">
                  DORA Compliance Guide
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="w-full md:w-1/3">
                <div className="relative h-48 md:h-full rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=DORA+Framework"
                    alt="DORA Framework"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#004494] mb-6">Cybersecurity Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Shield className="h-6 w-6 text-[#004494] mr-2" />
                    <CardTitle className="text-[#004494]">Threat Intelligence</CardTitle>
                  </div>
                  <CardDescription>Real-time information on cyber threats</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    EDFA's Threat Intelligence service provides financial entities with timely and actionable
                    information on cyber threats targeting the financial sector.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
                    <li>Threat alerts and advisories</li>
                    <li>Indicators of compromise</li>
                    <li>Vulnerability notifications</li>
                    <li>Sector-specific threat analysis</li>
                  </ul>
                  <Link
                    href="/cybersecurity/threat-intelligence"
                    className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                  >
                    Access the service
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Lock className="h-6 w-6 text-[#004494] mr-2" />
                    <CardTitle className="text-[#004494]">Security Assessment</CardTitle>
                  </div>
                  <CardDescription>Evaluate your cybersecurity posture</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Our self-assessment tools help financial entities evaluate their cybersecurity posture against
                    EDFA's standards and identify areas for improvement.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
                    <li>Cybersecurity maturity assessment</li>
                    <li>Gap analysis against DORA requirements</li>
                    <li>Risk assessment templates</li>
                    <li>Benchmarking against peers</li>
                  </ul>
                  <Link
                    href="/cybersecurity/assessment-tools"
                    className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                  >
                    Start assessment
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-[#004494] mr-2" />
                    <CardTitle className="text-[#004494]">Incident Reporting</CardTitle>
                  </div>
                  <CardDescription>Report and manage cybersecurity incidents</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    EDFA's incident reporting platform allows financial entities to report cybersecurity incidents in
                    compliance with regulatory requirements.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
                    <li>Secure incident reporting portal</li>
                    <li>Incident classification guidance</li>
                    <li>Reporting templates and forms</li>
                    <li>Incident response coordination</li>
                  </ul>
                  <Link
                    href="/cybersecurity/incident-reporting"
                    className="text-[#004494] text-sm font-medium flex items-center hover:underline"
                  >
                    Report an incident
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#004494] mb-6">Latest Publications</h2>
            <Tabs defaultValue="guidelines" className="mb-12">
              <TabsList className="bg-transparent border-b w-auto">
                <TabsTrigger
                  value="guidelines"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Guidelines & Standards
                </TabsTrigger>
                <TabsTrigger
                  value="reports"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Reports & Analyses
                </TabsTrigger>
              </TabsList>

              <TabsContent value="guidelines" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Cloud Security Guidelines for Financial Institutions",
                      desc: "Security requirements and best practices for financial institutions using cloud services.",
                    },
                    {
                      title: "Cybersecurity Requirements for Critical Payment Infrastructure",
                      desc: "Technical and organizational security measures required for operators of critical payment systems.",
                    },
                    {
                      title: "Digital Identity and Authentication Standards",
                      desc: "Security standards for digital identity verification and authentication in financial services.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-4">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <FileText className="h-3 w-3 mr-1" />
                          <span>Guideline • 12 May 2025</span>
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
                          <span className="text-xs text-gray-500">2.1 MB</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reports" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Annual Cybersecurity Threat Landscape for Financial Services",
                      desc: "Analysis of cyber threats targeting the financial sector in the past year and emerging threat trends.",
                    },
                    {
                      title: "Ransomware Attacks Against Financial Institutions: Case Studies",
                      desc: "Analysis of recent ransomware attacks against financial institutions, including attack vectors and mitigation strategies.",
                    },
                    {
                      title: "Supply Chain Security in Financial Services",
                      desc: "Assessment of supply chain security risks and vulnerabilities in the financial services sector.",
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
                          <span className="text-xs text-gray-500">3.5 MB</span>
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
