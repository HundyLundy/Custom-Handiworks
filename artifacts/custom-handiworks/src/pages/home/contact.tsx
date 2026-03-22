import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

// Form Schema based on OpenAPI definitions
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(20).optional(),
  service: z.string().max(100).optional(),
  message: z.string().min(10, "Please provide a bit more detail about your project").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const submitContactMutation = useSubmitContact();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const result = await submitContactMutation.mutateAsync({ data });
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We've received your inquiry and will be in touch shortly.",
          variant: "default",
        });
        reset();
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "We couldn't send your message. Please try calling us instead.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/5 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <div className="lg:w-3/5 p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Get a Free Quote
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to start your project? Fill out the form below and we'll get back to you within 24 hours to discuss details and scheduling.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${errors.name ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <input
                      {...register("email")}
                      type="email"
                      className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${errors.email ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      placeholder="(720) 555-0123"
                    />
                  </div>
                  
                  {/* Service Needed */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Needed</label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="Custom Carpentry">Custom Carpentry</option>
                      <option value="Deck Building/Repair">Deck Building/Repair</option>
                      <option value="Doors & Windows">Doors & Windows</option>
                      <option value="Trim & Molding">Trim & Molding</option>
                      <option value="General Handyman">General Handyman Repairs</option>
                      <option value="Other">Other (Please describe below)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${errors.message ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none`}
                    placeholder="Tell us about what you need built or fixed..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitContactMutation.isPending}
                  className="w-full flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300"
                >
                  {isSubmitting || submitContactMutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="lg:w-2/5 relative hidden lg:block">
            {/* landing page contact beautiful finished custom carpentry wood grain */}
            <img 
              src="https://pixabay.com/get/gc0188d1224d711d5e55e5c9096fd1abf1464c0385f06bafb418032f186b6f1c269d4e3f67c9484d1031b5e607e515f5d1c6b6525f96eb5760eb5bd6c8f9fa160_1280.jpg" 
              alt="Beautiful custom woodwork" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-xl font-display font-medium leading-relaxed italic">
                "Good craftsmanship is the intersection of passion, precision, and patience."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
