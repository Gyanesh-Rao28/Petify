import HomeHero from "@/components/home/home-hero";
import HomeInfo from "@/components/home/home-info";
import HowItWork from "@/components/home/how-it-work";
import { initialProfile } from "@/lib/initialProfile";

export default async function Home() {
  const profile = await initialProfile()

  return (
    <>
      <div className="bg-white h-screen">
        <HomeHero />
      </div>
      <div className="bg-[#FCEED5] w-full">
        <HomeInfo />
      </div>
      <div className=" w-full">
        <HowItWork/>
      </div>
    </>
  );
}
