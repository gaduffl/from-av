import DecorativeLines from './DecorativeLines';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-scale-in relative">
            <DecorativeLines variant="curved" color="sage" />
            <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
              <img 
                src="/lovable-uploads/fe8d3bbf-a03b-480f-89ad-49ba8a761320.png"
                alt="Anna Verena, ceramic artist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="font-crimson text-4xl lg:text-5xl font-semibold text-black">
                Anna
                <span className="text-black block">Verena</span>
              </h2>
              <DecorativeLines variant="minimal" color="sage" className="mt-4" />
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                My hands have found their home in clay. What began as a quiet hobby has blossomed 
                into a passionate pursuit of creating functional art that brings tranquility to 
                everyday moments.
              </p>
              
              <p>
                Drawing inspiration from the serene landscapes of Scandinavia and the mindful 
                simplicity of Japanese aesthetics, each piece I create is an invitation to 
                slow down and appreciate the beauty in simplicity.
              </p>
              
              <p>
                My dream is to see my work featured in Architectural Digest, sharing the quiet 
                elegance of handmade ceramics with those who appreciate thoughtful design and 
                authentic craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="font-crimson text-2xl font-medium text-black mb-2">Philosophy</h3>
                <p className="text-sm text-muted-foreground">
                  Embracing imperfection as a path to authentic beauty
                </p>
              </div>
              <div>
                <h3 className="font-crimson text-2xl font-medium text-black mb-2">Technique</h3>
                <p className="text-sm text-muted-foreground">
                  Traditional wheel throwing with contemporary finishing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DecorativeLines variant="flowing" color="black" className="absolute bottom-0" />
    </section>
  );
};

export default About;
