import { Search, Building, MapPin, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SearchDirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <PageHeader
        title="Search Directory"
        description="Search for regulated entities, authorized service providers, and registered companies in the EDFA database."
      />

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Main Search Bar */}
          <div className="mb-8 bg-gradient-to-r from-[#004494]/10 to-[#004494]/5 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-[#004494] mb-4">Company Search</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Input
                  type="search"
                  placeholder="Search for Company"
                  className="pr-10 border-[#004494] bg-white h-12 text-lg"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
              <Button className="bg-[#004494] hover:bg-[#003366] h-12 px-6">Search</Button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Search by company name, registration number, or authorized services
            </p>
          </div>

          {/* Search Options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="sticky top-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-[#004494] mb-4">Filter Results</h3>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Entity Type</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="financial" />
                          <Label htmlFor="financial" className="text-sm">
                            Financial Institution
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="crypto" />
                          <Label htmlFor="crypto" className="text-sm">
                            Crypto-asset Service Provider
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="payment" />
                          <Label htmlFor="payment" className="text-sm">
                            Payment Service Provider
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="digital" />
                          <Label htmlFor="digital" className="text-sm">
                            Digital Platform
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Country</h4>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="All countries" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All countries</SelectItem>
                          <SelectItem value="be">Belgium</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="it">Italy</SelectItem>
                          <SelectItem value="nl">Netherlands</SelectItem>
                          <SelectItem value="es">Spain</SelectItem>
                          <SelectItem value="other">Other EU countries</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Authorization Status</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="authorized" />
                          <Label htmlFor="authorized" className="text-sm">
                            Authorized
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="registered" />
                          <Label htmlFor="registered" className="text-sm">
                            Registered
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="exempted" />
                          <Label htmlFor="exempted" className="text-sm">
                            Exempted
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Services</h4>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="All services" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All services</SelectItem>
                          <SelectItem value="banking">Banking</SelectItem>
                          <SelectItem value="payment">Payment Services</SelectItem>
                          <SelectItem value="crypto">Crypto-asset Services</SelectItem>
                          <SelectItem value="investment">Investment Services</SelectItem>
                          <SelectItem value="insurance">Insurance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col space-y-2 mt-6">
                      <Button className="bg-[#004494] hover:bg-[#003366]">Apply Filters</Button>
                      <Button variant="outline" className="border-gray-300">
                        Reset Filters
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="md:col-span-3">
              <Tabs defaultValue="companies" className="w-full">
                <TabsList className="bg-transparent border-b w-full justify-start rounded-none">
                  <TabsTrigger
                    value="companies"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                  >
                    Companies
                  </TabsTrigger>
                  <TabsTrigger
                    value="services"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                  >
                    Services
                  </TabsTrigger>
                  <TabsTrigger
                    value="individuals"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-[#004494] data-[state=active]:text-[#004494] rounded-none"
                  >
                    Individuals
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="companies" className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-gray-500">Showing example results</p>
                    <Select defaultValue="relevance">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Sort by: Relevance</SelectItem>
                        <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                        <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                        <SelectItem value="recent">Recently Updated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        name: "European Digital Bank",
                        type: "Financial Institution",
                        status: "Authorized",
                        country: "Belgium",
                        services: ["Banking", "Payment Services", "Investment Services"],
                        id: "FI-BE-123456",
                      },
                      {
                        name: "Crypto Assets Exchange Europe",
                        type: "Crypto-asset Service Provider",
                        status: "Registered",
                        country: "France",
                        services: ["Crypto-asset Exchange", "Crypto-asset Custody"],
                        id: "CASP-FR-789012",
                      },
                      {
                        name: "Digital Payments Solutions",
                        type: "Payment Service Provider",
                        status: "Authorized",
                        country: "Germany",
                        services: ["Payment Initiation", "Account Information", "Money Remittance"],
                        id: "PSP-DE-345678",
                      },
                      {
                        name: "European Financial Technologies",
                        type: "Financial Institution",
                        status: "Authorized",
                        country: "Netherlands",
                        services: ["Banking", "Investment Services"],
                        id: "FI-NL-901234",
                      },
                      {
                        name: "Secure Digital Wallet",
                        type: "Payment Service Provider",
                        status: "Authorized",
                        country: "Spain",
                        services: ["E-Money Issuance", "Payment Services"],
                        id: "PSP-ES-567890",
                      },
                    ].map((company, index) => (
                      <div key={index} className="border rounded-md p-4 hover:shadow-sm transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="mb-3 md:mb-0 md:mr-4">
                            <div className="flex items-center mb-1">
                              <Building className="h-4 w-4 text-[#004494] mr-2" />
                              <h3 className="font-medium text-[#004494]">{company.name}</h3>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                              <Badge variant="outline" className="bg-[#004494]/10 text-[#004494] font-normal">
                                {company.type}
                              </Badge>
                              <Badge
                                variant="outline"
                                className={`
                                ${
                                  company.status === "Authorized"
                                    ? "bg-green-100 text-green-800"
                                    : company.status === "Registered"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-amber-100 text-amber-800"
                                } 
                                font-normal`}
                              >
                                {company.status}
                              </Badge>
                              <span className="text-xs text-gray-500 flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {company.country}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Registration ID: {company.id}</p>
                            <div className="mt-2">
                              <p className="text-xs text-gray-700">Services:</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {company.services.map((service, i) => (
                                  <span key={i} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <Button variant="outline" size="sm" className="text-[#004494]">
                              View Details
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" className="text-[#004494] border-[#004494]">
                      Load More Results
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="services" className="mt-6">
                  <div className="p-8 text-center text-gray-500">
                    <p>Service search results would be displayed here</p>
                  </div>
                </TabsContent>

                <TabsContent value="individuals" className="mt-6">
                  <div className="p-8 text-center text-gray-500">
                    <p>Individual search results would be displayed here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gray-50 p-6 rounded-lg border">
            <h2 className="text-lg font-bold text-[#004494] mb-4">Search Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Search Tips</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Use the full company name for exact matches</li>
                  <li>Search by registration number for precise results</li>
                  <li>Use filters to narrow down your search</li>
                  <li>Search for specific services to find authorized providers</li>
                  <li>Use quotation marks for exact phrase matching</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">About the Directory</h3>
                <p className="text-sm text-gray-700 mb-2">
                  The EDFA Directory contains information about all entities regulated by the European Digital &
                  Financial Authority, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Financial institutions</li>
                  <li>Payment service providers</li>
                  <li>Crypto-asset service providers</li>
                  <li>Digital platforms designated as gatekeepers</li>
                  <li>Other regulated entities</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button variant="link" className="text-[#004494]">
                View Full Search Documentation
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
