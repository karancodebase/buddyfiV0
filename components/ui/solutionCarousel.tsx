"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CarouselItem {
  id: number
  title: string
  description: string
  options?: string[]
}

const sampleData: CarouselItem[] = [
  {
    id: 1,
    title: "Unbreakable On-Chain Reputation",
    description: "Your reputation is stored on the blockchain - permanent, transparent, and impossible to fake. Every successful collaboration, code contribution, and peer review builds your immutable developer identity.",
    options: ["Blockchain-verified skills", "Tamper-proof history", "Cross-platform reputation"]
  },
  {
    id: 2,
    title: "Lightning-Fast Matching",
    description: "Find compatible teammates in under 60 seconds. Our optimized matching algorithm can process thousands of developer profiles to find your perfect match instantly.",
    options: ["Sub minutes matching", "Global developer pool", "Instant notifications"]
  },
  {
    id: 3,
    title: "Real-Time Team Analytics",
    description: "Live dashboards track code contributions, task completion, and team velocity. Identify bottlenecks, celebrate wins, and optimize your workflow in real-time.",
    options: ["Live progress tracking", "Performance insights", "Productivity optimization"]
  },
  {
    id: 4,
    title: "Team Formation Tools",
    description: "Create public or private teams, set skill requirements, and invite specific developers. Perfect for organized hackathons, startup formation, or long-term projects.",
    options: ["Flexible team creation", "Skill-based filtering", "Invitation system"]
  },
  {
    id: 5,
    title: "Integrated Communication Suite",
    description: "Built-in chat, video calls, and project discussions. No more jumping between Slack, Discord, and Zoom. Everything you need to collaborate effectively in one place.",
    options: ["Unified communication", "Project-focused chat", "Video integration"]
  },
  {
    id: 6,
    title: "Gamified Achievement System",
    description: "Earn badges, unlock new opportunities, and climb the reputation leaderboard. Higher reputation opens doors to exclusive hackathons and startup opportunities.",
    options: ["Skill-based badges", "Exclusive opportunities", "Reputation rewards"]
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
            <Card key={item.id} className="flex-shrink-0 w-72 sm:w-80 glass-morphism">
              <CardContent className="p-0">
                <div className="relative">
                 
                  <div className="p-4">
                    <h3 className="font-semibold text-2xl mb-4 text-center">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="mt-6">
                      <ul>
                        {item.options && item.options.map((option, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground pl-2 list-disc list-inside">
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
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
