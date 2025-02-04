import Image from "next/image";
import HeroSec from "./_components/HeroSec";
import Experience from "./_components/Experience";
import Information from "./_components/Information";

export default function Home() {
  return (
    <>
      <h1 className="font-bold">
        <HeroSec />
        <Information />
      </h1>
    </>
  );
}
