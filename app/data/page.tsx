import { ChevronRight, BarChart3, Database, Download, ExternalLink, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DataPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageHeader
        title="Data & Statistics"
        description="Access EDFA's data, statistics, and analysis on digital markets, financial services, and cybersecurity across the European Union."
      />

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Data Dashboards */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#004494] mb-6">Interactive Dashboards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <BarChart3 className="h-6 w-6 text-[#004494] mr-2" />
                    <CardTitle className="text-[#004494]">Digital Finance Observatory</CardTitle>
                  </div>
                  <CardDescription>Key indicators of digital financial markets</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Interactive dashboard with key indicators on digital financial markets, including market size,
                    growth rates, and adoption metrics.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Last updated: 15 May 2025</span>
                    <Button className="bg-[#004494] hover:bg-[#003366]">
                      View Dashboard
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <BarChart3 className="h-6 w-6 text-[#004494] mr-2" />
                    <CardTitle className="text-[#004494]">Crypto-assets Monitor</CardTitle>
                  </div>
                  <CardDescription>Monitoring crypto-asset markets in the EU</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Real-time data on crypto-asset markets, including market capitalization, trading volumes, and
                    compliance metrics for regulated entities.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Real-time data</span>
                    <Button className="bg-[#004494] hover:bg-[#003366]">
                      View Dashboard
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <BarChart3 className="h-6 w-6 text-[#004494] mr-2" />
                    <CardTitle className="text-[#004494]">Cybersecurity Risk Monitor</CardTitle>
                  </div>
                  <CardDescription>Tracking cybersecurity threats and incidents</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Dashboard tracking cybersecurity threats, incidents, and vulnerabilities affecting the financial
                    sector across the EU.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Last updated: 18 May 2025</span>
                    <Button className="bg-[#004494] hover:bg-[#003366]">
                      View Dashboard
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Data Explorer */}
          <div className="mb-12 bg-gradient-to-r from-[#004494]/10 to-[#004494]/5 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-[#004494] mb-4">Data Explorer</h2>
            <p className="text-gray-700 mb-6">
              Explore, visualize, and download EDFA's datasets on digital markets, financial services, and
              cybersecurity. Create custom visualizations and export data in various formats.
            </p>

            <div className="bg-white p-6 rounded-md mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select dataset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digital-finance">Digital Finance Statistics</SelectItem>
                    <SelectItem value="crypto">Crypto-asset Market Data</SelectItem>
                    <SelectItem value="cyber">Cybersecurity Incidents</SelectItem>
                    <SelectItem value="dma">Digital Markets Compliance</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025-q1">2025 Q1</SelectItem>
                    <SelectItem value="2024">2024 (Full year)</SelectItem>
                    <SelectItem value="2023">2023 (Full year)</SelectItem>
                    <SelectItem value="custom">Custom period</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>

              <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                <p className="text-gray-500">Select a dataset to visualize data</p>
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" className="text-[#004494] border-[#004494]">
                  <Download className="h-4 w-4 mr-1" />
                  Export Data
                </Button>
                <Button className="bg-[#004494] hover:bg-[#003366]">Create Visualization</Button>
              </div>
            </div>

            <div className="text-center">
              <Button variant="link" className="text-[#004494]">
                View Data Explorer Documentation
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Datasets */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#004494]">Available Datasets</h2>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="digital-markets">Digital Markets</SelectItem>
                  <SelectItem value="financial">Financial Services</SelectItem>
                  <SelectItem value="cyber">Cybersecurity</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-transparent border-b w-full justify-start rounded-none">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  All Datasets
                </TabsTrigger>
                <TabsTrigger
                  value="featured"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Featured
                </TabsTrigger>
                <TabsTrigger
                  value="recent"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Recently Updated
                </TabsTrigger>
                <TabsTrigger
                  value="popular"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                >
                  Most Popular
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Digital Finance Adoption Metrics",
                      desc: "Data on the adoption of digital financial services across EU member states, including digital banking, mobile payments, and online investments.",
                      category: "Digital Finance",
                      updated: "15 May 2025",
                      formats: ["CSV", "JSON", "Excel"],
                    },
                    {
                      title: "Crypto-asset Market Statistics",
                      desc: "Comprehensive data on crypto-asset markets in the EU, including market capitalization, trading volumes, and regulatory compliance metrics.",
                      category: "Crypto-assets",
                      updated: "12 May 2025",
                      formats: ["CSV", "JSON", "API"],
                    },
                    {
                      title: "Digital Markets Act Compliance Indicators",
                      desc: "Data on compliance with the Digital Markets Act by designated gatekeepers, including key compliance metrics and enforcement actions.",
                      category: "Digital Markets",
                      updated: "10 May 2025",
                      formats: ["CSV", "Excel"],
                    },
                    {
                      title: "Cybersecurity Incidents Database",
                      desc: "Database of reported cybersecurity incidents affecting financial institutions in the EU, including incident types, impact, and resolution metrics.",
                      category: "Cybersecurity",
                      updated: "8 May 2025",
                      formats: ["CSV", "JSON", "API"],
                    },
                    {
                      title: "Digital Payment Transactions",
                      desc: "Statistics on digital payment transactions in the EU, including volume, value, and payment methods used across member states.",
                      category: "Digital Finance",
                      updated: "5 May 2025",
                      formats: ["CSV", "Excel"],
                    },
                    {
                      title: "Financial Innovation Monitor",
                      desc: "Data on fintech innovation across the EU, including investment in financial technology, startup activity, and regulatory sandbox participation.",
                      category: "Digital Finance",
                      updated: "2 May 2025",
                      formats: ["CSV", "JSON"],
                    },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-md p-4 hover:shadow-sm transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-3 md:mb-0 md:mr-4">
                          <div className="flex items-center mb-1">
                            <span className="text-xs font-medium text-[#004494] bg-[#004494]/10 px-2 py-0.5 rounded mr-2">
                              {item.category}
                            </span>
                            <span className="text-xs text-gray-500">Updated: {item.updated}</span>
                          </div>
                          <h3 className="font-medium text-[#004494]">{item.title}</h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.desc}</p>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <div className="flex items-center mr-2">
                            <span className="text-xs text-gray-500 mr-2">Available formats:</span>
                            <div className="flex space-x-1">
                              {item.formats.map((format, i) => (
                                <span key={i} className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                                  {format}
                                </span>
                              ))}
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="text-[#004494]">
                            <Database className="h-4 w-4 mr-1" />
                            Access
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="text-[#004494] border-[#004494]">
                    Load More Datasets
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="featured" className="mt-6">
                <div className="p-8 text-center text-gray-500">
                  <p>Featured datasets would be displayed here</p>
                </div>
              </TabsContent>

              <TabsContent value="recent" className="mt-6">
                <div className="p-8 text-center text-gray-500">
                  <p>Recently updated datasets would be displayed here</p>
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-6">
                <div className="p-8 text-center text-gray-500">
                  <p>Most popular datasets would be displayed here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Data Services */}
          <div>
            <h2 className="text-xl font-bold text-[#004494] mb-6">Data Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#004494]">API Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Access EDFA's data programmatically through our REST APIs. Integrate real-time data into your
                    applications and services.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
                    <li>Real-time data access</li>
                    <li>Comprehensive documentation</li>
                    <li>Authentication and rate limiting</li>
                    <li>Multiple data formats</li>
                  </ul>
                  <Button className="w-full bg-[#004494] hover:bg-[#003366]">
                    API Documentation
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#004494]">Bulk Data Downloads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Download complete datasets in various formats for offline analysis. Historical data and regular
                    updates available.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
                    <li>Multiple file formats (CSV, JSON, Excel)</li>
                    <li>Historical data archives</li>
                    <li>Regular update schedule</li>
                    <li>Data dictionaries included</li>
                  </ul>
                  <Button className="w-full bg-[#004494] hover:bg-[#003366]">
                    Download Center
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#004494]">Custom Data Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Request custom datasets or analyses for research, policy development, or other legitimate purposes.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
                    <li>Tailored to your specific needs</li>
                    <li>Available for academic research</li>
                    <li>Policy development support</li>
                    <li>Data protection compliant</li>
                  </ul>
                  <Button className="w-full bg-[#004494] hover:bg-[#003366]">
                    Submit Request
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
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
