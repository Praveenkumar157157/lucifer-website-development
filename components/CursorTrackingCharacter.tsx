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
      <div className="character-tracking relative z-10 w-[min(78vw,34rem)]" data-direction={direction}>
        <img src={frames[direction]} alt="Smiling LUCIFER AI character" className="relative z-10 h-auto w-full select-none drop-shadow-[0_30px_35px_rgba(0,0,0,0.5)]" draggable={false} />
      </div>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/35 px-3 py-1 font-mono text-[10px] tracking-[0.22em] text-white/45 backdrop-blur">{directionLabels[direction]}</span>
    </div>
  )
}
