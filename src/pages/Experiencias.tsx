import React, { useState } from 'react';
import { Filter, Grid, Map as MapIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import MapComponent from "@/components/MapComponent";
import PropertyCard from "@/components/PropertyCard";
import FilterSidebar from "@/components/FilterSidebar";

// Importando o componente inteiro para acessar os dados mockados
import ProprietarioDashboard from "./ProprietarioDashboard";

// Re-utilizando as imagens mockadas
import property1 from "@/assets/property-1.jpg";
import experience1 from "@/assets/experience-1.jpg";

const Experiencias = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Usando os mesmos dados da página Index para consistência
  const featuredProperties = [
    {
      id: "1",
      title: "Café Colonial Sabor do Campo",
      location: "Faxinal dos Rosas, Chapecó, SC",
      price: 68,
      rating: 4.9,
      reviews: 127,
      image: property1,
      amenities: ["wifi", "estacionamento", "cafe"],
      type: "gastronomia" as const,
      coordinates: [-27.0954, -52.6166] as [number, number]
    },
    {
      id: "2",
      title: "Giardino Viel",
      location: "EMCA, Cordilheira Alta, SC",
      price: 250,
      rating: 4.8,
      reviews: 89,
      image: experience1,
      amenities: ["wifi", "estacionamento"],
      type: "gastronomia" as const,
      coordinates: [-27.1954, -52.7166] as [number, number]
    },
    {
      id: "3",
      title: "Camping Sítio Pousada",
      location: "Linha Boa Vista, Chapecó, SC",
      price: 300,
      rating: 4.7,
      reviews: 203,
      image: property1,
      amenities: ["wifi", "estacionamento", "cafe"],
      type: "experiencia" as const,
      coordinates: [-27.2954, -52.8166] as [number, number]
    },
    {
      id: "4",
      title: "Recanto dos Pinhais",
      location: "Linha Colonia Cella, Chapecó, SC",
      price: 95,
      rating: 4.9,
      reviews: 156,
      image: experience1,
      amenities: ["wifi", "cafe", "estacionamento"],
      type: "gastronomia" as const,
      coordinates: [-27.3954, -52.9166] as [number, number]
    },
    {
      id: "5",
      title: "Parador Vale das Cachoeiras",
      location: "EMC-378 - Rodeio do Erval, Chapecó, SC",
      price: 150,
      rating: 4.9,
      reviews: 78,
      image: property1,
      amenities: ["cafe", "wifi", "estacionamento"],
      type: "experiencia" as const,
      coordinates: [-27.4954, -53.0166] as [number, number]
    },
    {
      id: "6",
      title: "Vinícola Ársego",
      location: "Linha Rodeio do Erval EMC - 378 - Mal. Bormann, Chapecó, SC",
      price: 300,
      rating: 4.8,
      reviews: 92,
      image: experience1,
      amenities: ["wifi", "estacionamento"],
      type: "gastronomia" as const,
      coordinates: [-27.5954, -53.1166] as [number, number]
    }
  ];

  const allItems = featuredProperties;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="shrink-0"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Experiências Rurais
              </h1>
              <p className="text-muted-foreground mt-1">
                {allItems.length} experiências encontradas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>

            <div className="flex rounded-lg bg-muted p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="h-8 px-3"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('map')}
                className="h-8 px-3"
              >
                <MapIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filtros rápidos */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Todas as experiências
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Gastronomia
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Fazendas
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Pousadas
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Até R$ 150
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Avaliação 4.8+
          </Badge>
        </div>

        {/* Conteúdo principal */}
        <div className="flex gap-6">
          {/* Sidebar de filtros - Desktop */}
          <div className="hidden md:block">
            <FilterSidebar />
          </div>

          {/* Sidebar de filtros - Mobile */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-80 bg-white p-6 shadow-lg">
                <FilterSidebar />
                <Button
                  className="w-full mt-6"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Aplicar Filtros
                </Button>
              </div>
            </div>
          )}

          {/* Área principal */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allItems.map((item) => (
                  <PropertyCard key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <div className="h-[600px] rounded-lg overflow-hidden">
                <MapComponent properties={allItems} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencias;