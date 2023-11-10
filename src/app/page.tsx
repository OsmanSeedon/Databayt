import Header from "@/components/Nav/Header";
import Read from "@/components/Text/Read";
import Search from "@/components/Search/Search";
import Title from "@/components/Text/Title";
import Hero from "@/components/Hero/Home";
import Team from "@/components/Card/Team";
import Mobile from "@/components/Nav/Mobile";
import Footer from "@/components/Nav/Footer";
import Contribute from "@/components/Media/Contribute";


export default function Home() {
  return (
    <div className="space-y-4">
      <Header />
      <Search />
      <Mobile />
      <h1 className="text-[20px]">Contribute</h1>
      <Contribute />
      <Hero />
      <Read />
      <Title />
      <Team />
      <Footer />
    </div>
  );
}
