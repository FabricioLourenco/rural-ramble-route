import heroImage from "@/assets/hero-rural.jpg";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Paisagem rural com fazenda e campos verdes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Descubra o
              <span className="block bg-gradient-to-r from-nature-sage to-earth-beige bg-clip-text text-transparent">
                Turismo Rural
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Conecte-se com a natureza, viva experiências únicas e desfrute da
              hospitalidade rural em propriedades selecionadas por todo o país.
            </p>
          </div>

          {/* Search Component */}
          <div className="mt-12">
            <SearchBar />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-sm md:text-base text-white/80">Propriedades</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">50K+</div>
              <div className="text-sm md:text-base text-white/80">Hóspedes Felizes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">4.8★</div>
              <div className="text-sm md:text-base text-white/80">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;