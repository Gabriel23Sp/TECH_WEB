import { FC } from "react"
import { MapProps } from "../../Interfaces/Map.props"

const Map:FC<MapProps> = (props) => {
  return (
    <iframe {...props}/>

  )
}

export default Map
