import CoFound from "@/Components/CoFound";
import FocusArea from "@/Components/FocusArea";
import Hero from "@/Components/Hero";
import Innovations from "@/Components/Innovations";
import Models from "@/Components/Models";
import StudioPortfolio from "@/Components/StudioPortfolio";
import Services from "@/Components/services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <FocusArea />
      <Innovations />
      <Models />
      <StudioPortfolio />
      <CoFound />
    </main>
  );
}
