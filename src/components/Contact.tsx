
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your interest. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-crimson text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Let's Create
              <span className="text-foreground block">Together</span>
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              Interested in commissioning a piece or learning more about my work? 
              I'd love to hear from you and discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="font-crimson text-2xl font-medium text-foreground mb-3">
                  Get in Touch
                </h3>
                <p className="text-foreground leading-relaxed">
                  Whether you're looking for a custom piece for your home or interested in 
                  featuring my work, I'm always excited to connect with fellow art enthusiasts.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-sage rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Commission Work</h4>
                    <p className="text-sm text-foreground">
                      Custom pieces designed specifically for your space and needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-clay rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Studio Visits</h4>
                    <p className="text-sm text-foreground">
                      Schedule a visit to see the creative process firsthand
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-stone rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Press Inquiries</h4>
                    <p className="text-sm text-foreground">
                      Media and publication opportunities welcome
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="commission">Commission Work</option>
                    <option value="purchase">Purchase Inquiry</option>
                    <option value="studio">Studio Visit</option>
                    <option value="press">Press/Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-foreground font-medium text-lg border-b-2 border-transparent hover:border-foreground transition-all duration-300 pb-1 py-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
