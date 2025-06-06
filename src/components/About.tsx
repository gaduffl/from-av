
const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-scale-in">
            <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=600&fit=crop&crop=center" 
                alt="Potter at work in studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <h2 className="font-crimson text-4xl lg:text-5xl font-semibold text-foreground">
              The Artist's
              <span className="text-sage block">Journey</span>
            </h2>
            
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
                <h3 className="font-crimson text-2xl font-medium text-foreground mb-2">Philosophy</h3>
                <p className="text-sm text-muted-foreground">
                  Embracing imperfection as a path to authentic beauty
                </p>
              </div>
              <div>
                <h3 className="font-crimson text-2xl font-medium text-foreground mb-2">Technique</h3>
                <p className="text-sm text-muted-foreground">
                  Traditional wheel throwing with contemporary finishing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
