import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Nav from "@/components/layout/Nav";

function Router() {
  return (
    <div className="min-h-screen bg-background pt-16 flex flex-col">
      <Nav />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer className="bg-secondary/50 py-12 border-t mt-auto">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} DDS Workshop. All rights reserved.</p>
          <p className="mt-2 text-sm">Bridging Knowledge Graphs, GenAI, and Narrative</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
