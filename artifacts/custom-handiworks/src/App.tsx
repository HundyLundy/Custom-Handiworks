import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import ServicesHub from "@/pages/services-hub";
import LocationAurora from "@/pages/locations/aurora";
import LocationDenver from "@/pages/locations/denver";
import LocationEnglewood from "@/pages/locations/englewood";
import LocationLittleton from "@/pages/locations/littleton";
import LocationCherryCreek from "@/pages/locations/cherry-creek";
import LocationCherryHills from "@/pages/locations/cherry-hills";
import LocationCheesmanPark from "@/pages/locations/cheesman-park";
import LocationCongressPark from "@/pages/locations/congress-park";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesHub} />
      <Route path="/commercial-contractor-aurora-co" component={LocationAurora} />
      <Route path="/commercial-contractor-denver-co" component={LocationDenver} />
      <Route path="/commercial-contractor-englewood-co" component={LocationEnglewood} />
      <Route path="/commercial-contractor-littleton-co" component={LocationLittleton} />
      <Route path="/commercial-contractor-cherry-creek-denver" component={LocationCherryCreek} />
      <Route path="/commercial-contractor-cherry-hills-village-co" component={LocationCherryHills} />
      <Route path="/commercial-contractor-cheesman-park-denver" component={LocationCheesmanPark} />
      <Route path="/commercial-contractor-congress-park-denver" component={LocationCongressPark} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
