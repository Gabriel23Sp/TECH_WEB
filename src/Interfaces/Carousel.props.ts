import type { EmblaOptionsType } from "embla-carousel-react"
import type { CSSProperties } from "react"

export interface CarouselProps {
  slides: number[]
  options?: EmblaOptionsType
  haveButtons?: boolean
  haveDots?: boolean
  styles?: CSSProperties
  className?: string
  interval: number
  classNameSlide: string
  childrens?: JSX.Element[]
}

export type PrevNextButtonPropType = {
  enabled: boolean
  onClick: () => void
}

export type DotButtonPropType = {
  selected: boolean
  onClick: () => void
}