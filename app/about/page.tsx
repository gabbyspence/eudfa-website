import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageHeader
        title="About EDFA"
        description="The European Digital & Financial Authority (EDFA) is the European Union's integrated regulator for digital markets, financial services, and cybersecurity."
      />

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-[#004494] mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                The European Digital & Financial Authority (EDFA) was established in 2023 to address the growing
                convergence of digital markets and financial services. Our mission is to ensure the safety, stability,
                and fairness of the European digital economy and financial system.
              </p>
              <p className="text-gray-700 mb-4">
                As digital technologies transform financial services and markets, EDFA provides a unified regulatory
                approach that addresses both technological innovation and financial stability. We work to protect
                consumers, promote competition, and foster innovation while ensuring that digital markets and financial
                services operate in a secure and transparent manner.
              </p>
              <p className="text-gray-700 mb-6">
                EDFA brings together expertise in digital regulation, financial oversight, and cybersecurity to create a
                comprehensive regulatory framework that addresses the challenges of the digital age.
              </p>

              <h2 className="text-xl font-bold text-[#004494] mb-4">Our Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                <li>Implementing and enforcing the Digital Markets Act and Digital Services Act</li>
                <li>Regulating digital financial services, including crypto-assets and digital payment systems</li>
                <li>Setting cybersecurity standards for critical financial infrastructure</li>
                <li>Monitoring compliance with data protection regulations in financial services</li>
                <li>Promoting innovation through regulatory sandboxes and innovation hubs</li>
                <li>Protecting consumers from digital financial fraud and unfair practices</li>
              </ul>
            </div>

            <div>
              <div className="sticky top-4">
                <Card>
                  <CardHeader className="bg-[#004494] text-white">
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <nav className="space-y-2">
                      <Link href="/about/governance" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Governance Structure
                      </Link>
                      <Link href="/about/careers" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Careers at EDFA
                      </Link>
                      <Link href="/about/procurement" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Procurement
                      </Link>
                      <Link href="/about/contact" className="flex items-center text-[#004494] hover:underline">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Contact Us
                      </Link>
                    </nav>
                  </CardContent>
                </Card>

                <div className="mt-6 border rounded-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/hq.jpg"
                      alt="EDFA Headquarters"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-[#004494] mb-2">EDFA Headquarters</h3>
                    <p className="text-sm text-gray-600">
                      Located in Paris, our headquarters houses over 500 staff working across our regulatory divisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#004494] mb-6">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Maria Gonzalez",
                  title: "Executive Director",
                  bio: "Former central banker with expertise in financial technology and digital markets regulation.",
                },
                {
                  name: "Thomas Weber",
                  title: "Deputy Director for Digital Markets",
                  bio: "Expert in competition law and digital platforms with experience at national competition authorities.",
                },
                {
                  name: "Sophia Chen",
                  title: "Deputy Director for Financial Innovation",
                  bio: "Fintech specialist with background in both private sector innovation and regulatory oversight.",
                },
              ].map((person, index) => (
                <div key={index} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=${person.name}`}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-[#004494] mb-1">{person.name}</h3>
                    <p className="text-sm font-medium text-gray-500 mb-2">{person.title}</p>
                    <p className="text-sm text-gray-600">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 bg-gradient-to-r from-[#004494]/10 to-[#004494]/5 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-[#004494] mb-4">Strategic Plan 2023-2027</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <p className="text-gray-700 mb-4">
                  Our five-year strategic plan outlines EDFA's priorities and objectives for building a safe,
                  innovative, and inclusive digital financial ecosystem in Europe.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Establishing a comprehensive regulatory framework for digital markets and financial services</li>
                  <li>Enhancing cybersecurity resilience across the financial sector</li>
                  <li>Promoting responsible innovation in digital finance</li>
                  <li>Strengthening consumer and investor protection in the digital age</li>
                  <li>Building EDFA's capabilities as a world-class regulator</li>
                </ul>
                <Button className="bg-[#004494] hover:bg-[#003366]">
                  Download Strategic Plan
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="w-full md:w-1/3">
                <div className="relative h-48 md:h-full rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Strategic+Plan"
                    alt="Strategic Plan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#004494] mb-6">Working with Stakeholders</h2>
            <p className="text-gray-700 mb-6">
              EDFA works closely with a wide range of stakeholders to ensure our regulatory approach is effective,
              proportionate, and responsive to the needs of the digital economy and financial system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#004494]">Industry Engagement</CardTitle>
                  <CardDescription>How we work with regulated entities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Regular industry roundtables and forums</li>
                    <li>Consultation processes for new regulations</li>
                    <li>Innovation hub for emerging technologies</li>
                    <li>Regulatory sandbox for testing new solutions</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#004494]">International Cooperation</CardTitle>
                  <CardDescription>Our global partnerships and initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Bilateral agreements with international regulators</li>
                    <li>Participation in global standard-setting bodies</li>
                    <li>Cross-border supervisory colleges</li>
                    <li>International information sharing networks</li>
                  </ul>
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
