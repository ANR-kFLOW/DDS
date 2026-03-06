import Hero from "@/components/workshop/Hero";
import About from "@/components/workshop/About";
import Topics from "@/components/workshop/Topics";
import Dates from "@/components/workshop/Dates";
import Format from "@/components/workshop/Format";
import Chairs from "@/components/workshop/Chairs";
import Committee from "@/components/workshop/Committee";
import Nav from "@/components/workshop/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Topics />
        <Dates />
        <Format />
        <Chairs />
        <Committee />
      </main>
      <footer className="bg-secondary/50 py-12 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} DDS Workshop. All rights reserved.</p>
          <p className="mt-2 text-sm">Bridging Knowledge Graphs, GenAI, and Narrative</p>
        </div>
      </footer>
    </div>
  );
}
