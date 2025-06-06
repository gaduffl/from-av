
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/077de5e9-a4a9-4b82-82d1-adb3c5b62b5c.png" 
              alt="AV Logo" 
              className="w-8 h-8"
            />
            <div className="font-crimson text-2xl font-semibold text-black tracking-wide">from AV</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-black hover:text-black border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1">
              Home
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-black hover:text-black border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1">
              Gallery
            </button>
            <button onClick={() => scrollToSection('about')} className="text-black hover:text-black border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-black font-medium border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-black hover:text-black transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-black hover:text-black border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1 w-fit">
                Home
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-black hover:text-black border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1 w-fit">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-black hover:text-black border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1 w-fit">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-black font-medium border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1 w-fit">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
