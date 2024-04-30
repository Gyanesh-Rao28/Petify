import HomeHero from "@/components/home/home-hero";
import { initialProfile } from "@/lib/initialProfile";

export default async function Home() {
  const profile = await initialProfile()

  return (
    <>
      <div className="bg-[#FCEED5] h-screen">
        <HomeHero/>
      </div>
      <div className="bg-white h-screen"></div>
    </>
  );
}
