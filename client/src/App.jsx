import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient"; // fetches data from server
import { Toaster } from "./components/ui/toaster"; // manages and displays toast notifications
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/team";
import Waitlist from "./pages/waitlist";
import Recipes from "./pages/recipes";
import Recipe from "./pages/recipe";
import Blog from "./pages/blog";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

// make a blog page

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/blog" component={Blog} />
        <Route path="/team" component={Team} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/waitlist" component={Waitlist} />
        <Route path="/recipes/chicken-and-rice" component={Recipe} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
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
