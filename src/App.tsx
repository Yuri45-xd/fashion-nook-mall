
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import Login from "./pages/Login";
import LocationEnabler from "./components/LocationEnabler";
import AdminPanel from "./pages/AdminPanel";
import CustomerCare from "./pages/CustomerCare";
import About from "./pages/About";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import NotificationPreferences from "./pages/NotificationPreferences";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LocationEnabler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/customer-care" element={<CustomerCare />} />
          <Route path="/about" element={<About />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/notification-preferences" element={<NotificationPreferences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
