import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="bg-[#f5f5f5] border-b">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#004494] mb-2">{title}</h1>
        {description && <p className="text-gray-700 mb-4 max-w-3xl">{description}</p>}
        {children}
      </div>
    </div>
  )
}
