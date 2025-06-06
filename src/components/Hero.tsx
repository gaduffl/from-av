const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-crimson text-5xl lg:text-7xl font-semibold text-foreground leading-tight">
              Handcrafted
              <span className="text-sage block">from AV</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Where ancient craft meets contemporary design. Each piece is thoughtfully shaped by hand, 
              embodying the quiet beauty of Scandinavian minimalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => document.getElementById('gallery')?.scrollIntoView({
              behavior: 'smooth'
            })} className="bg-sage text-white px-8 py-3 rounded-sm hover:bg-sage/90 transition-all duration-300 transform hover:scale-105">
                View Collection
              </button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            })} className="border border-sage text-sage px-8 py-3 rounded-sm hover:bg-sage hover:text-white transition-all duration-300">
                My Story
              </button>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="aspect-square bg-secondary rounded-sm overflow-hidden">
              <img alt="Handcrafted pottery in a minimalist setting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="/lovable-uploads/0e28a8f9-2713-43d2-adcb-8d0c5e278374.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;