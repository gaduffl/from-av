const Gallery = () => {
  const pieces = [{
    id: 1,
    title: "Bowls",
    image: "/lovable-uploads/a8ebc52f-82dd-4d66-98db-862a0ba3b8c5.png",
    description: "A minimal vase inspired by Nordic design"
  }, {
    id: 2,
    title: "Faux Kintsugi",
    image: "/lovable-uploads/8461439c-45d2-4e3b-82d2-3a089aae989d.png",
    description: "Handthrown bowl with natural clay finish"
  }, {
    id: 3,
    title: "Vases",
    image: "/lovable-uploads/3d59c32d-150d-4241-b96d-30b5731f9912.png",
    description: "Daily ritual cup in warm earth tone"
  }, {
    id: 4,
    title: "Pedestal Bowl",
    image: "/lovable-uploads/0b32d314-23f7-48c2-8590-724a50228f48.png",
    description: "Large serving piece for gatherings"
  }, {
    id: 5,
    title: "Plates",
    image: "/lovable-uploads/c885c3ae-80cf-4894-9245-26f36ba1c658.png",
    description: "Elegant serving plates for special occasions"
  }, {
    id: 6,
    title: "Cups",
    image: "/lovable-uploads/dab03e73-bd5a-4005-af83-6a134bae97de.png",
    description: "Handcrafted cups for daily rituals"
  }];
  return <section id="gallery" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="font-crimson text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            My work
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
            Nice that you are here! I am pleased to give you a little insight into my ceramic works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pieces.map((piece, index) => <div key={piece.id} className="group cursor-pointer animate-fade-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="aspect-[4/5] bg-card rounded-sm overflow-hidden mb-3 shadow-sm">
                <img src={piece.image} alt={piece.title} className="w-full h-full group-hover:scale-105 transition-transform duration-700 object-contain" />
              </div>
              <div className="space-y-2">
                <h3 className="font-crimson text-xl font-medium text-foreground group-hover:text-foreground transition-colors">
                  {piece.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed">
                  {piece.description}
                </p>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-8">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })} className="text-foreground font-medium text-lg border-b-2 border-transparent hover:border-foreground transition-all duration-300 pb-1">
            Inquire About Pieces
          </button>
        </div>
      </div>
    </section>;
};
export default Gallery;
