import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
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
              <p className="mt-4">Email: Support@eudfa.org</p>
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
  )
}
