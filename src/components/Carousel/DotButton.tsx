import type { FC } from "react"
import { DotButtonPropType } from "../../Interfaces/Carousel.props"

export const DotButton: FC<DotButtonPropType> = ({
  selected,
  onClick
}) => {

  return (
    <button
      className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
      type="button"
      onClick={onClick}
    />
  )
}