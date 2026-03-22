import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import tableImg from "@assets/EF916681-12C9-4948-BF95-BBAF7757E318_1774146982331.jpeg";

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
          description: "Thanks for reaching out — we'll be in touch within 24 hours.",
          variant: "default",
        });
        reset();
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Couldn't send your message. Please call us at (720) 937-3003.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-14 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/5 overflow-hidden flex flex-col lg:flex-row border border-border">

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
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${errors.name ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                  </div>

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
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                      placeholder="(720) 937-3003"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Needed</label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="Custom Carpentry">Custom Carpentry</option>
                      <option value="Custom Furniture">Custom Furniture</option>
                      <option value="Trim & Molding">Trim & Molding</option>
                      <option value="Sliding Barn Doors">Sliding Barn Doors</option>
                      <option value="Home Repairs">Home Repairs</option>
                      <option value="Interior Renovations">Interior Renovations</option>
                      <option value="Deck Building/Repair">Deck Building / Repair</option>
                      <option value="Fence / Gate">Fence / Gate</option>
                      <option value="Other">Other — describe below</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${errors.message ? 'border-destructive' : 'border-border'} text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none`}
                    placeholder="Tell us what you need built or fixed — dimensions, materials, timeline, anything helpful..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitContactMutation.isPending}
                  className="w-full flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300"
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

          <div className="lg:w-2/5 relative hidden lg:block">
            <img
              src={tableImg}
              alt="Custom walnut dining table built by Custom Handiworks Denver"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/30" />
            <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-stone-950/90 to-transparent">
              <p className="text-white text-xl font-display font-medium leading-relaxed italic">
                "Good craftsmanship is the intersection of passion, precision, and patience."
              </p>
              <p className="text-white/60 text-sm mt-3">— Hunter, Custom Handiworks</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
