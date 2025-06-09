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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:info@fromav.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="font-crimson text-2xl font-medium text-black mb-3">
                  Get in Touch
                </h3>
                <p className="leading-relaxed text-slate-950">
                  If you have any questions about my work or simply want to talk about ceramics, please get in touch. I look forward to your feedback and your thoughts on the pieces.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors" placeholder="Enter subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors resize-none" placeholder="Tell me about your project or inquiry..." />
                </div>
                <button type="submit" className="w-full text-black font-medium text-lg border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1 py-3">
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
