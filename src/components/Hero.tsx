
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 animate-fade-in">
            <h1 className="font-crimson text-5xl lg:text-7xl font-semibold text-black leading-tight">
              Ceramics
              <span className="text-black block">from AV</span>
            </h1>
            <p className="text-xl text-black leading-relaxed max-w-lg">
              Where ancient craft meets contemporary design. Each piece is thoughtfully shaped by hand, 
              embodying the quiet beauty of Scandinavian minimalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => document.getElementById('gallery')?.scrollIntoView({
              behavior: 'smooth'
            })} className="text-black font-medium text-lg border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1 w-fit">
                View Collection
              </button>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            })} className="text-black font-medium text-lg border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1 w-fit">
                My Story
              </button>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="aspect-square bg-secondary rounded-sm overflow-hidden">
              <img alt="Handcrafted pottery in a minimalist setting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="/lovable-uploads/7b0e5e85-ce5e-44cb-aa1e-a85995a5d074.png" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
