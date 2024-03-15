import { initialProfile } from "@/lib/initialProfile";

export default async function Home() {
  const profile = await initialProfile()

  return (
    <>
      <div className="bg-[#FCEED5] h-screen"></div>
      <div className="bg-white h-screen"></div>
    </>
  );
}
