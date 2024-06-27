import CoFound from "@/Components/CoFound";
import Deals from "@/Components/Deals";
import FocusArea from "@/Components/FocusArea";
import Hero from "@/Components/Hero";
import Innovations from "@/Components/Innovations";
import Jobs from "@/Components/Jobs";
import Models from "@/Components/Models";
import Procedure from "@/Components/Procedure";
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
      <Procedure />
      <Deals />
      <Jobs />
    </main>
  );
}
