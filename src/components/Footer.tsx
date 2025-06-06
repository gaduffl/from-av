
const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="font-crimson text-2xl font-semibold text-black">Clay & Soul</h3>
            <p className="text-muted-foreground leading-relaxed">
              Handcrafted pottery where ancient techniques meet contemporary design. 
              Each piece is created with intention and care.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-lg text-black">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-black border-b border-transparent hover:border-black transition-all duration-300 pb-1 w-fit"
              >
                Gallery
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-black border-b border-transparent hover:border-black transition-all duration-300 pb-1 w-fit"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-black border-b border-transparent hover:border-black transition-all duration-300 pb-1 w-fit"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-lg text-black">Connect</h4>
            <p className="text-muted-foreground text-sm">
              Follow the journey and see behind-the-scenes of the creative process.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center cursor-pointer hover:bg-sage/80 transition-colors">
                <span className="text-sm font-medium text-background">IG</span>
              </div>
              <div className="w-10 h-10 bg-clay rounded-full flex items-center justify-center cursor-pointer hover:bg-clay/80 transition-colors">
                <span className="text-sm font-medium text-background">FB</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Clay & Soul Pottery. All rights reserved. | Handcrafted with love and intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
