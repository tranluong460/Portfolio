import About from "@/components/About.tsx";
import Info from "@/components/Info";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

const Base = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <Info />
        <SectionDivider />
        <About />
        <Skills />
      </main>
    </>
  );
};

export default Base;
