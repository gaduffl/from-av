
const Gallery = () => {
  const pieces = [
    {
      id: 1,
      title: "Sage Vessel",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=500&fit=crop&crop=center",
      description: "A minimal vase inspired by Nordic design"
    },
    {
      id: 2,
      title: "Earth Bowl",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=500&fit=crop&crop=center",
      description: "Handthrown bowl with natural clay finish"
    },
    {
      id: 3,
      title: "Stone Cup",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=500&fit=crop&crop=center",
      description: "Daily ritual cup in warm earth tone"
    },
    {
      id: 4,
      title: "Clay Platter",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop&crop=center",
      description: "Large serving piece for gatherings"
    },
    {
      id: 5,
      title: "Mountain Vase",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=600&fit=crop&crop=center",
      description: "Tall vase echoing mountain silhouettes"
    },
    {
      id: 6,
      title: "River Stone Set",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=400&fit=crop&crop=center",
      description: "Collection of three nested bowls"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-crimson text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each piece tells a story of patience and intention. Explore the intersection 
            of functionality and artistry in these handcrafted ceramics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pieces.map((piece, index) => (
            <div 
              key={piece.id} 
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] bg-card rounded-sm overflow-hidden mb-4 shadow-sm">
                <img 
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-crimson text-xl font-medium text-foreground group-hover:text-sage transition-colors">
                  {piece.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {piece.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-sage text-sage px-8 py-3 rounded-sm hover:bg-sage hover:text-white transition-all duration-300"
          >
            Inquire About Pieces
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
