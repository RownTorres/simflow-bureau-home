import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { WhyUs } from "@/components/WhyUs";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { AutomationFlow } from "@/components/AutomationFlow";
import { Results } from "@/components/Results";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <WhyUs />
        <Services />
        <Process />
        <AutomationFlow />
        <Results />
        <Projects />
        <About />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
