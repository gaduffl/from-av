
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - you'll need to set up EmailJS account and get these values
      const serviceId = 'your_service_id'; // Replace with your EmailJS service ID
      const templateId = 'your_template_id'; // Replace with your EmailJS template ID
      const publicKey = 'your_public_key'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'info@fromav.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. I'll get back to you soon at info@fromav.com"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact info@fromav.com directly",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            
            
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="font-crimson text-2xl font-medium text-black mb-3">
                  Get in Touch
                </h3>
                <p className="leading-relaxed text-slate-950">
                  Whether you're looking for a custom piece for your home or interested in 
                  featuring my work, I'm always excited to connect with fellow art enthusiasts.
                </p>
                <p className="leading-relaxed text-slate-950 mt-4">
                  Send me a message using the form and I'll respond to <strong>info@fromav.com</strong>
                </p>
              </div>

              
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
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
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
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
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage transition-colors"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
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
                  disabled={isSubmitting}
                  className="w-full text-black font-medium text-lg border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message to info@fromav.com'}
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
