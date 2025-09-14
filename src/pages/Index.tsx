import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass, Mountain, TreePine, Camera, Award, Shield, ChefHat } from "lucide-react";

import imagem1 from "@/assets/cafeColonial.jpg";
import imagem2 from "@/assets/vinicola.jpg";
import imagem3 from "@/assets/camping.jpg";
import imagem4 from "@/assets/recanto.jpg";
import imagem5 from "@/assets/paradouro.jpg";
import imagem6 from "@/assets/vinicola2.jpg";
import imagem7 from "@/assets/carro.jpg";
import imagem8 from "@/assets/cachaca.jpg";
import imagem9 from "@/assets/rancho.jpg";

const Index = () => {
  const featuredProperties = [
    {
      id: "1",
      title: "Café Colonial Sabor do Campo",
      location: "Faxinal dos Rosas, Chapecó, SC",
      price: 68,
      rating: 4.9,
      reviews: 127,
      image: imagem1,
      amenities: ["wifi", "estacionamento", "cafe"],
      type: "gastronomia" as const
    },
    {
      id: "2",
      title: "Giardino Viel",
      location: "EMCA, Cordilheira Alta, SC",
      price: 250,
      rating: 4.8,
      reviews: 89,
      image: imagem2,
      amenities: ["wifi", "estacionamento"],
      type: "gastronomia" as const
    },
    {
      id: "3",
      title: "Camping Sítio Pousada",
      location: "Linha Boa Vista, Chapecó, SC",
      price: 300,
      rating: 4.7,
      reviews: 203,
      image: imagem3,
      amenities: ["wifi", "estacionamento", "cafe"],
      type: "experiencia" as const
    },
    {
      id: "4",
      title: "Recanto dos Pinhais",
      location: "Linha Colonia Cella, Chapecó, SC",
      price: 95,
      rating: 4.9,
      reviews: 156,
      image: imagem4,
      amenities: ["wifi", "cafe", "estacionamento"],
      type: "gastronomia" as const
    },
    {
      id: "5",
      title: "Parador Vale das Cachoeiras",
      location: "EMC-378 - Rodeio do Erval, Chapecó, SC",
      price: 150,
      rating: 4.9,
      reviews: 78,
      image: imagem5,
      amenities: ["cafe", "wifi", "estacionamento"],
      type: "experiencia" as const
    },
    {
      id: "6",
      title: "Vinícola Ársego",
      location: "Linha Rodeio do Erval EMC - 378 - Mal. Bormann, Chapecó, SC",
      price: 300,
      rating: 4.8,
      reviews: 92,
      image: imagem6,
      amenities: ["wifi", "estacionamento"],
      type: "gastronomia" as const
    },
    {
      id: "7",
      title: "Vaccaro Vintage",
      location: "EMC-378 - Rodeio do Erval, Chapecó, SC",
      price: 85,
      rating: 4.7,
      reviews: 134,
      image: imagem7,
      amenities: ["wifi", "cafe", "estacionamento"],
      type: "experiencia" as const
    },
    {
      id: "8",
      title: "Cachaçaria Velho Sumido",
      location: "EMC-378 - Rodeio do Erval, Chapecó, SC",
      price: 85,
      rating: 4.9,
      reviews: 134,
      image: imagem8,
      amenities: ["wifi", "estacionamento"],
      type: "experiencia" as const
    },
    {
      id: "9",
      title: "Rancho Silva",
      location: "Linha Vailon - Gôio-En, Chapecó, SC",
      price: 85,
      rating: 4.8,
      reviews: 134,
      image: imagem9,
      amenities: ["wifi", "cafe", "estacionamento"],
      type: "experiencia" as const
    }

  ];

  const categories = [
    { name: "Fazendas", icon: TreePine, count: "150+" },
    { name: "Pousadas Rurais", icon: Mountain, count: "200+" },
    { name: "Experiências", icon: Camera, count: "300+" },
    { name: "Gastronomia Rural", icon: ChefHat, count: "180+" },
    { name: "Turismo Ecológico", icon: Compass, count: "100+" }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Experiências Autênticas",
      description: "Vivências genuínas em propriedades rurais familiares"
    },
    {
      icon: Shield,
      title: "Reservas Seguras",
      description: "Sistema confiável de pagamento e avaliações verificadas"
    },
    {
      icon: Compass,
      title: "Destinos Únicos",
      description: "Descubra lugares especiais longe do turismo tradicional"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore por Categoria
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Escolha o tipo de experiência que mais combina com você
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 text-center border border-border/30 group-hover:border-primary/20">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-nature rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.count} opções</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Destinos em Destaque
              </h2>
              <p className="text-muted-foreground text-lg">
                Propriedades mais procuradas pelos nossos hóspedes
              </p>
            </div>
            <Button variant="outline" className="hidden md:block">
              Ver Todos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline">Ver Todos os Destinos</Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que Escolher o RotaRural?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conectamos você às melhores experiências rurais do país
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-nature rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tem uma Propriedade Rural?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Cadastre sua propriedade e comece a receber hóspedes que buscam experiências autênticas
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Cadastrar Propriedade
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
