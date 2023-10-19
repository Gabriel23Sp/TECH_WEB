import { CSSProperties } from "react";

export interface MapProps{
  className?:string | undefined,
  src:string,
  width:number,
  height:number,
  style:CSSProperties,
  allowfullscreen?:boolean| string,
  loading?:'eager' | 'lazy' | undefined
  referrerpolicy?:string
}