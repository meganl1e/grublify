import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/team";
import Waitlist from "./pages/waitlist";
import Navbar from "./components/layout/navbar";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/waitlist" component={Waitlist} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
