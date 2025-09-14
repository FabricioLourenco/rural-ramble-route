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

  // Dados extraídos diretamente do componente ProprietarioDashboard
  // Nota: Essa é uma abordagem incomum. O ideal seria exportar os dados para um arquivo separado.
  const mockProperties = [
    {
      id: 1,
      name: "Fazenda Esperança",
      location: "Serra da Mantiqueira, SP",
      status: "ativa",
      views: 145,
      bookings: 8,
      rating: 4.8,
      experiences: 3
    },
    {
      id: 2,
      name: "Sítio Águas Claras",
      location: "Campos do Jordão, SP",
      status: "pendente",
      views: 23,
      bookings: 1,
      rating: 5.0,
      experiences: 1
    }
  ];

  const mockExperiences = [
    {
      id: 1,
      name: "Degustação de Queijos Artesanais",
      property: "Fazenda Esperança",
      price: "R$ 85",
      status: "ativa",
      bookings: 5
    },
    {
      id: 2,
      name: "Trilha e Piquenique",
      property: "Fazenda Esperança",
      price: "R$ 120",
      status: "ativa",
      bookings: 3
    }
  ];

  // Combina as propriedades e experiências em uma única lista
  const allItems = [
    // Mapeia as propriedades
    ...mockProperties.map(prop => ({
      id: `prop-${prop.id}`,
      title: prop.name,
      location: prop.location,
      price: prop.bookings, // Usando bookings como um valor de exemplo
      rating: prop.rating,
      reviews: prop.views, // Usando views como reviews de exemplo
      image: property1,
      amenities: ["wifi", "estacionamento"],
      type: "propriedade" as const,
      coordinates: [-23.5505, -46.6333] as [number, number] // Coordenadas mockadas
    })),
    // Mapeia as experiências
    ...mockExperiences.map(exp => ({
      id: `exp-${exp.id}`,
      title: exp.name,
      location: mockProperties.find(p => p.name === exp.property)?.location || "",
      price: parseInt(exp.price.replace("R$ ", "")),
      rating: 4.8,
      reviews: exp.bookings,
      image: experience1,
      amenities: ["cafe"],
      type: "experiencia" as const,
      coordinates: [-22.4609, -42.6417] as [number, number] // Coordenadas mockadas
    }))
  ];

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