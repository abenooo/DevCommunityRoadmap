import type { Integration } from "../../data/integrations"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { SVGProps } from 'react'

type IntegrationCardProps = {
  integration: {
    icon: React.ComponentType<SVGProps<SVGSVGElement>>
    name: string
    color: string
    category: string
    description: string
    prerequisites: string[]
    documentationUrl: string
  }
}

export default function IntegrationCard({ integration }: IntegrationCardProps) {
  const Icon = integration.icon

  return (
    <Card className="hover:shadow-lg transition-all duration-300 group h-full">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex flex-col items-center text-center space-y-2 mb-2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: `${integration.color}20` }}
          >
            <Icon 
              {...{
                className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110",
                style: { color: integration.color }
              }}
            />
          </div>
          <h3 className="font-semibold text-sm">{integration.name}</h3>
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{integration.category}</span>
        </div>
        <p className="text-xs text-gray-500 flex-grow overflow-hidden mt-2">{integration.description}</p>
        {integration.prerequisites.length > 0 && (
          <div className="mt-2">
            <p className="text-xs font-semibold">Prerequisites:</p>
            <div className="flex flex-wrap items-center gap-1 mt-1">
              {integration.prerequisites.map((prereq, index) => (
                <span key={index} className="text-xs">
                  {prereq}
                  {index < integration.prerequisites.length - 1 && <ArrowRight className="inline w-3 h-3 mx-1" />}
                </span>
              ))}
            </div>
          </div>
        )}
        <Link
          href={integration.documentationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-sm text-blue-600 hover:underline"
        >
          Official Documentation
        </Link>
      </CardContent>
    </Card>
  )
}

