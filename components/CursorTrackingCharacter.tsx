"use client"

import { useEffect, useRef, useState } from "react"
import { directionLabels, frames, getCursorAngle, getCursorDistance, getDirection, lerp, type Direction } from "@/lib/cursorTracking"

export function CursorTrackingCharacter() {
  const rootRef = useRef<HTMLDivElement>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const animation = useRef({ x: 0, y: 0, angle: 0, distance: 0 })
  const target = useRef({ x: 0, y: 0, angle: 0, distance: 0 })
  const frameRef = useRef<Direction>("center")
  const [direction, setDirection] = useState<Direction>("center")
  const [blinking, setBlinking] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const blink = () => {
      setBlinking(true)
      timeout = setTimeout(() => {
        setBlinking(false)
        timeout = setTimeout(blink, 2200 + Math.random() * 2800)
      }, 150)
    }
    timeout = setTimeout(blink, 1800 + Math.random() * 2200)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const onMove = (event: MouseEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY }
      const bounds = root.getBoundingClientRect()
      const originX = bounds.left + bounds.width * 0.5
      const originY = bounds.top + bounds.height * 0.38
      target.current = {
        x: event.clientX,
        y: event.clientY,
        angle: getCursorAngle(event.clientX, event.clientY, originX, originY),
        distance: getCursorDistance(event.clientX, event.clientY, originX, originY),
      }
    }
    window.addEventListener("mousemove", onMove)
    let raf = 0
    const tick = () => {
      animation.current.x = lerp(animation.current.x, target.current.x, 0.16)
      animation.current.y = lerp(animation.current.y, target.current.y, 0.16)
      animation.current.angle = lerp(animation.current.angle, target.current.angle, 0.16)
      animation.current.distance = lerp(animation.current.distance, target.current.distance, 0.16)
      const bounds = root.getBoundingClientRect()
      const nextDirection = getDirection(animation.current.angle, animation.current.distance)
      root.style.setProperty("--cursor-x", `${animation.current.x - (bounds.left + bounds.width / 2)}px`)
      root.style.setProperty("--cursor-y", `${animation.current.y - (bounds.top + bounds.height * 0.38)}px`)
      root.style.setProperty("--cursor-angle", `${animation.current.angle}rad`)
      if (frameRef.current !== nextDirection) {
        frameRef.current = nextDirection
        setDirection(nextDirection)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div ref={rootRef} className="relative flex min-h-[480px] items-end justify-center md:min-h-[620px]" aria-label={`Character looking ${directionLabels[direction]}`}>
      <div className="absolute left-1/2 top-1/2 size-[min(38vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-[90px]" />
      <div className="character-tracking relative z-10 w-[min(78vw,34rem)]" data-direction={direction} data-blinking={blinking}>
        <div className="pointer-events-none absolute left-1/2 top-[24%] z-20 size-5 -translate-x-1/2 rounded-full border border-cyan-200/80 bg-cyan-300/30 shadow-[0_0_22px_8px_rgba(34,211,238,0.35)]" aria-hidden="true" />
        <div className={`cursor-sprite cursor-sprite-${direction}`} role="img" aria-label={`Smiling LUCIFER AI character looking ${directionLabels[direction]}`} />
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-cyan-300/20 bg-black/45 px-4 py-2 font-mono text-[10px] tracking-[0.22em] text-cyan-200/80 backdrop-blur"><span className="inline-block size-1.5 animate-pulse rounded-full bg-cyan-300" /> LOOKING {directionLabels[direction]}</div>
    </div>
  )
}
