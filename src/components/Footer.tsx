
const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-crimson text-2xl font-semibold">Clay & Soul</h3>
            <p className="text-background/80 leading-relaxed">
              Handcrafted pottery where ancient techniques meet contemporary design. 
              Each piece is created with intention and care.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 hover:text-background transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 hover:text-background transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 hover:text-background transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Connect</h4>
            <p className="text-background/80 text-sm">
              Follow the journey and see behind-the-scenes of the creative process.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center cursor-pointer hover:bg-sage/80 transition-colors">
                <span className="text-sm font-medium">IG</span>
              </div>
              <div className="w-10 h-10 bg-clay rounded-full flex items-center justify-center cursor-pointer hover:bg-clay/80 transition-colors">
                <span className="text-sm font-medium">FB</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Clay & Soul Pottery. All rights reserved. | Handcrafted with love and intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
