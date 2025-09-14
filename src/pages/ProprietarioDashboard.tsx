import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  Plus, 
  MapPin, 
  Calendar, 
  Users, 
  Star,
  Eye,
  Settings,
  LogOut
} from "lucide-react";

const ProprietarioDashboard = () => {
  const navigate = useNavigate();

  const mockProperties = [
    {
      id: 1,
      name: "Café Colonial Sabor Do Campo",
      location: "Chapecó, SC",
      status: "ativa",
      views: 145,
      bookings: 8,
      rating: 4.8,
      experiences: 3
    },
  ];

  const mockExperiences = [
    {
      id: 1,
      name: "Café Colonial",
      property: "Café Colonial Sabor Do Campo",
      price: "R$ 68",
      status: "ativa",
      bookings: 5
    },
    {
      id: 2,
      name: "Jantar Italiano",
      property: "Café Colonial Sabor Do Campo", 
      price: "R$ 80",
      status: "ativa",
      bookings: 3
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Home className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Painel do Proprietário</h1>
                <p className="text-muted-foreground">Gerencie suas propriedades e experiências</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Propriedades</CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Experiências</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visualizações</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">168</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reservas</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Adicionar Nova Propriedade</CardTitle>
              <CardDescription>
                Cadastre uma nova propriedade rural para oferecer experiências
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate("/proprietario/cadastrar-propriedade")}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Cadastrar Propriedade
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Nova Experiência</CardTitle>
              <CardDescription>
                Crie uma experiência incrível para seus visitantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate("/proprietario/cadastrar-experiencia")}
                className="w-full"
                variant="outline"
              >
                <Plus className="h-4 w-4 mr-2" />
                Cadastrar Experiência
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Properties List */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Suas Propriedades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockProperties.map((property) => (
                <div key={property.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold">{property.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {property.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Badge variant={property.status === 'ativa' ? 'default' : 'secondary'}>
                      {property.status === 'ativa' ? 'Ativa' : 'Pendente'}
                    </Badge>
                    
                    <div className="text-right text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {property.views} visualizações
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {property.rating}
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experiences List */}
        <Card>
          <CardHeader>
            <CardTitle>Suas Experiências</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockExperiences.map((experience) => (
                <div key={experience.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{experience.name}</h3>
                    <p className="text-sm text-muted-foreground">{experience.property}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-primary">{experience.price}</span>
                    <Badge variant="default">Ativa</Badge>
                    <div className="text-sm text-muted-foreground">
                      {experience.bookings} reservas
                    </div>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProprietarioDashboard;