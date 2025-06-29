/* eslint-disable @next/next/no-img-element */
"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CarouselItem {
  id: number
  title: string
  description: string
  image: string
}

const sampleData: CarouselItem[] = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Explore breathtaking mountain landscapes and hiking trails.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Ocean Breeze",
    description: "Relax by the seaside with stunning ocean views.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "City Lights",
    description: "Experience the vibrant energy of urban nightlife.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Forest Retreat",
    description: "Find peace in the tranquil depths of ancient forests.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Desert Sunset",
    description: "Witness spectacular sunsets over endless sand dunes.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Alpine Lakes",
    description: "Discover crystal-clear lakes nestled in mountain valleys.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Carousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0
      const gap = 16 // gap-4 = 16px
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0
      const gap = 16 // gap-4 = 16px
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons)
      checkScrollButtons() // Initial check

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollButtons)
      }
    }
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Carousel Container */}
      <div className="relative">
        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {sampleData.map((item) => (
            <Card key={item.id} className="flex-shrink-0 w-72 sm:w-80">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mt-4">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="rounded-full bg-transparent"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="rounded-full bg-transparent"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
