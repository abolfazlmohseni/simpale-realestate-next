import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Featurs from "@/Components/Template/Featurs";
import Story from "@/Components/Template/Story";
import Homes from "@/Components/Template/Homes";
import Gallery from "@/Components/Template/Gallery";


export default function Home() {
  return (
    <>
      <Featurs />
      <Story />
      <Homes />
      <Gallery />
    </>
  )
}
