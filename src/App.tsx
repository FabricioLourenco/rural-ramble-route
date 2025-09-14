import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Experiencias from "./pages/Experiencias";
import ProprietarioLogin from "./pages/ProprietarioLogin";
import ProprietarioDashboard from "./pages/ProprietarioDashboard";
import CadastrarPropriedade from "./pages/CadastrarPropriedade";
import CadastrarExperiencia from "./pages/CadastrarExperiencia";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/experiencias" element={<Experiencias />} />
              <Route path="/login" element={<Login />} />
              <Route path="/proprietario/login" element={<ProprietarioLogin />} />
              <Route path="/proprietario/dashboard" element={<ProprietarioDashboard />} />
              <Route path="/proprietario/cadastrar-propriedade" element={<CadastrarPropriedade />} />
              <Route path="/proprietario/cadastrar-experiencia" element={<CadastrarExperiencia />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
