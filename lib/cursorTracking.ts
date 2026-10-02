export type Direction =
  | "center"
  | "up"
  | "upRight"
  | "right"
  | "downRight"
  | "down"
  | "downLeft"
  | "left"
  | "upLeft"

export const lerp = (current: number, target: number, amount: number) =>
  current + (target - current) * amount

export const getCursorAngle = (cursorX: number, cursorY: number, originX: number, originY: number) =>
  Math.atan2(cursorY - originY, cursorX - originX)

export const getCursorDistance = (cursorX: number, cursorY: number, originX: number, originY: number) =>
  Math.hypot(cursorX - originX, cursorY - originY)

export const getDirection = (angle: number, distance: number, deadzone = 55): Direction => {
  if (distance < deadzone) return "center"
  const degrees = (angle * 180) / Math.PI
  if (degrees >= -22.5 && degrees < 22.5) return "right"
  if (degrees >= 22.5 && degrees < 67.5) return "downRight"
  if (degrees >= 67.5 && degrees < 112.5) return "down"
  if (degrees >= 112.5 && degrees < 157.5) return "downLeft"
  if (degrees >= 157.5 || degrees < -157.5) return "left"
  if (degrees >= -157.5 && degrees < -112.5) return "upLeft"
  if (degrees >= -112.5 && degrees < -67.5) return "up"
  return "upRight"
}

export const frames: Record<Direction, string> = {
  center: "/character.png",
  up: "/character.png",
  upRight: "/character.png",
  right: "/character.png",
  downRight: "/character.png",
  down: "/character.png",
  downLeft: "/character.png",
  left: "/character.png",
  upLeft: "/character.png",
}

export const directionLabels: Record<Direction, string> = {
  center: "CENTER",
  up: "UP",
  upRight: "UP RIGHT",
  right: "RIGHT",
  downRight: "DOWN RIGHT",
  down: "DOWN",
  downLeft: "DOWN LEFT",
  left: "LEFT",
  upLeft: "UP LEFT",
}
