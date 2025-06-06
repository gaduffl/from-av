import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="font-crimson text-2xl font-semibold text-foreground tracking-wide">from AV</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-sage transition-colors duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-muted-foreground hover:text-sage transition-colors duration-300">
              Gallery
            </button>
            <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-sage transition-colors duration-300">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-sage text-white px-6 py-2 rounded-sm hover:bg-sage/90 transition-colors duration-300">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-muted-foreground hover:text-sage transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-muted-foreground hover:text-sage transition-colors duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-muted-foreground hover:text-sage transition-colors duration-300">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-muted-foreground hover:text-sage transition-colors duration-300">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left bg-sage text-white px-6 py-2 rounded-sm hover:bg-sage/90 transition-colors duration-300 w-fit">
                Contact
              </button>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;