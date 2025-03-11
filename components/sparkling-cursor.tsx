"use client"

import { useEffect, useState, useRef } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  color: string
  velocity: {
    x: number
    y: number
  }
  opacity: number
  life: number
  maxLife: number
}

export function SparklingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const sparkleIdRef = useRef(0)
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number | null>(null)

  // Define sparkle colors - strictly purple and pink
  const sparkleColors = [
    "#c026d3", // fuchsia-600
    "#d946ef", // fuchsia-500
    "#e879f9", // fuchsia-400
    "#a855f7", // purple-500
    "#c084fc", // purple-400
    "#d8b4fe", // purple-300
    "#f472b6", // pink-400
    "#ec4899", // pink-500
  ]

  // Animation loop for sparkles
  useEffect(() => {
    const animateSparkles = () => {
      setSparkles((prevSparkles) =>
        prevSparkles
          .map((sparkle) => ({
            ...sparkle,
            x: sparkle.x + sparkle.velocity.x,
            y: sparkle.y + sparkle.velocity.y,
            velocity: {
              x: sparkle.velocity.x * 0.96,
              y: sparkle.velocity.y * 0.96 + 0.1, // Add slight gravity
            },
            life: sparkle.life + 1,
            opacity: Math.max(0, 1 - sparkle.life / sparkle.maxLife),
          }))
          .filter((sparkle) => sparkle.life < sparkle.maxLife),
      )

      animationFrameRef.current = requestAnimationFrame(animateSparkles)
    }

    animationFrameRef.current = requestAnimationFrame(animateSparkles)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Create sparkles on mouse movement
  useEffect(() => {
    const createSparkles = () => {
      if (mousePosition.x === 0 && mousePosition.y === 0) return

      // Calculate movement speed
      const dx = mousePosition.x - lastPositionRef.current.x
      const dy = mousePosition.y - lastPositionRef.current.y
      const speed = Math.sqrt(dx * dx + dy * dy)

      // Only create sparkles if there's movement
      if (speed > 2) {
        // Number of sparkles based on speed
        const sparkleCount = Math.min(Math.floor(speed / 2), 5)

        const newSparkles: Sparkle[] = []

        for (let i = 0; i < sparkleCount; i++) {
          // Get random color from our purple/pink palette
          const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)]

          newSparkles.push({
            id: sparkleIdRef.current++,
            x: mousePosition.x + (Math.random() - 0.5) * 10,
            y: mousePosition.y + (Math.random() - 0.5) * 10,
            size: Math.random() * 5 + 2,
            color: color,
            velocity: {
              x: (Math.random() - 0.5) * 3 + dx * 0.2,
              y: (Math.random() - 0.5) * 3 + dy * 0.2,
            },
            opacity: 0.8 + Math.random() * 0.2,
            life: 0,
            maxLife: Math.random() * 20 + 10,
          })
        }

        setSparkles((prev) => [...prev, ...newSparkles])
      }

      lastPositionRef.current = { x: mousePosition.x, y: mousePosition.y }
    }

    const interval = setInterval(createSparkles, 16) // ~60fps

    return () => clearInterval(interval)
  }, [mousePosition])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <>
      {/* Only sparkles, cursor remains visible */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-[100]"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            borderRadius: "50%",
            boxShadow: `0 0 ${sparkle.size * 1.5}px ${sparkle.color}`,
            opacity: sparkle.opacity,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  )
}

