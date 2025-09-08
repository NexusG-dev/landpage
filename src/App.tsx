import { Hero } from "./components/Hero";
import { QuestionsNew } from "./components/QuestionsNew";
import { Differentiation } from "./components/Differentiation";
import { Security } from "./components/Security";
import { MeasurableBenefits } from "./components/MeasurableBenefits";
import { ModulesVision } from "./components/ModulesVision";
import { Exclusivity } from "./components/Exclusivity";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Hero />
      <QuestionsNew />
      <Differentiation />
      <Security />
      <MeasurableBenefits />
      <ModulesVision />
      <Exclusivity />
      <Footer />
    </div>
  );
}