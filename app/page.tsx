"use client"

import { useState, useMemo } from "react"
import { categories, integrations } from "./data/integrations"
import CategoryFilter from "./integrations/components/CategoryFilter"
import SearchBar from "./integrations/components/SearchBar"
import IntegrationGrid from "./integrations/components/IntegrationGrid"
import Pagination from "./integrations/components/Pagination"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const ITEMS_PER_PAGE = 30

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // State to control sidebar visibility on mobile

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const categoryMatch = selectedCategory === "All" || integration.category === selectedCategory
      const searchMatch =
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [selectedCategory, searchQuery])

  const totalPages = Math.ceil(filteredIntegrations.length / ITEMS_PER_PAGE)
  const paginatedIntegrations = filteredIntegrations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setIsSidebarOpen(false) // Close sidebar on mobile after selecting a category
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-[300px] border-r bg-white">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
      </div>

      {/* Mobile Sidebar (Sheet) */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[300px]">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold">Tech Community Roadmap</h1>
          </div>
          <p className="text-sm md:text-base text-gray-600">
            Explore technologies, their prerequisites, and access official documentation
          </p>
          <SearchBar
            onSearch={(query) => {
              setSearchQuery(query)
              setCurrentPage(1)
            }}
          />
        </div>
        <div className="flex-1 overflow-auto px-4 md:px-6">
          <IntegrationGrid integrations={paginatedIntegrations} />
        </div>
        <div className="p-4 md:p-6 border-t">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </main>
    </div>
  )
}