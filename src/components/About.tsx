


const About = () => {
  return <section id="about" className="py-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="animate-scale-in">
            <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
              <img src="/lovable-uploads/fe8d3bbf-a03b-480f-89ad-49ba8a761320.png" alt="Anna Verena, ceramic artist" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="space-y-4 animate-fade-in">
            <h2 className="font-crimson text-3xl lg:text-4xl font-semibold text-black">
              About me
            </h2>
            
            <div className="space-y-6 text-black leading-relaxed">
              <p className="text-lg text-black">Hej! I'm Anna Verena. Under the label &quot;from AV&quot; I share my ceramic works and the stories behind them.</p>
              
              <p className="text-lg text-black">My journey with ceramics began in 2021 with a handbuilding course in Wiesbaden. After one year of handbuilding I started a course on the potter's wheel - first in Frankfurt, later in Mainz. What started as a hobby quickly developed into a real passion.</p>
              
              <p className="text-lg text-black">Since the opening of an open ceramics workshop in Mainz in December 2024, where I have been a member from day one, I am happy to be able to continuously deepening my skills and experimenting with different techniques and glazes.</p>
              
              <p className="text-lg text-black">I love the material and the creative process. I'm always happy to connect and exchange thoughts about ceramics, art, or anything that inspires creativity.</p>
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default About;

