"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  FaSpinner,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters"),

  email: z
    .string()
    .email("Enter a valid email address"),

  message: z
    .string()
    .min(10, "Message must contain at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const messageLength = watch("message")?.length ?? 0;

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      toast.success("Message sent successfully!");

      reset();
    } catch {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-[#18181B] px-4 py-3 text-[#F8FAFC] placeholder:text-[#64748B] outline-none transition-all duration-300 focus:border-[#9EF01A]/50 focus:ring-4 focus:ring-[#9EF01A]/10";

  return (
    <section className="relative overflow-hidden sm:px-20 px-5 py-12 my-20">

      <div className="relative z-10">

        <SectionHeading
          title="Let's Connect"
          subtitle="Have a project in mind, an exciting opportunity, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr]">

          {/* CONTACT FORM */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .6,
            }}
          >
            <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#18181B]/80 p-8 backdrop-blur-xl">

              {/* Card Glow */}

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#9EF01A]/10 blur-3xl" />

              <div className="relative">

                <div className="mb-8">

                  <h3 className="text-2xl font-bold text-white">
                    Send me a message
                  </h3>

                  <p className="mt-2 text-slate-300">
                    I'll usually respond within 24 hours.
                  </p>

                </div>

                <form
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-7"
                >
                  {/* NAME */}

                  <div>

                    <label className="mb-3 block text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Your Name
                    </label>

                    <input
                      type="text"
                      autoComplete="off"
                      placeholder="John Doe"
                      {...register("name")}
                      className={inputClass}
                    />

                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.name.message}
                      </p>
                    )}

                  </div>

                  {/* EMAIL */}

                  <div>

                    <label className="mb-3 block text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      autoComplete="off"
                      placeholder="john@example.com"
                      {...register("email")}
                      className={inputClass}
                    />

                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.email.message}
                      </p>
                    )}

                  </div>

                                    {/* MESSAGE */}

                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label className="block text-sm font-semibold uppercase tracking-wider text-slate-300">
                        Message
                      </label>

                      <span
                        className={`text-xs ${
                          messageLength > 900
                            ? "text-yellow-400"
                            : "text-slate-300"
                        }`}
                      >
                        {messageLength}/1000
                      </span>
                    </div>

                    <textarea
                      rows={5}
                      spellCheck={false}
                      placeholder="Write your message..."
                      {...register("message")}
                      className={`${inputClass} resize-none`}
                    />

                    {errors.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* BUTTON */}

                  <Button
                    type="submit"
                    fullWidth
                    disabled={loading}
                  >
                    <>
                      {loading ? (
                        <>
                          <FaSpinner className="mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </>
                      )}
                    </>
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="space-y-6"
          >

                        {/* Social Links */}

            <Card className="overflow-hidden rounded-3xl border border-white/10 bg-[#18181B]/80 p-8 backdrop-blur-xl">

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Contact Information
                </h3>

                <p className="mt-2 leading-7 text-slate-300">
                  Feel free to reach out through any of the
                  following channels.
                </p>
              </div>

              <SocialLinks />
            </Card>

            {/* CTA Card */}

          </motion.div>

        </div>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-14"
>
  <Card className="relative w-full overflow-hidden rounded-3xl border border-[#9EF01A]/15 bg-linear-to-br from-[#18181B] via-[#1D1D20] to-[#18181B] p-10">

    <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#9EF01A]/10 blur-3xl" />

                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#38BDF8]/10 blur-3xl" />

                <div className="relative">

                  <div className="inline-flex rounded-full border border-[#9EF01A]/20 bg-[#9EF01A]/10 px-4 py-2 text-sm font-medium text-[#9EF01A]">
                    🚀 Ready to Collaborate
                  </div>

                  <h3 className="mt-6 text-3xl font-bold leading-tight text-white">
                    Let's Build Something
                    <span className="block bg-linear-to-r from-[#9EF01A] via-[#70E000] to-[#38BDF8] bg-clip-text text-transparent">
                      Amazing Together
                    </span>
                  </h3>

                  <p className="mt-5 leading-8 text-slate-300">
                    Whether it's an internship, freelance project,
                    full-time opportunity, or an innovative idea,
                    I'm always excited to work on meaningful
                    products and solve real-world problems.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    <div className="rounded-full border border-white/10 bg-[#232326] px-4 py-2 text-sm text-slate-300">
                      Full Stack Development
                    </div>

                    <div className="rounded-full border border-white/10 bg-[#232326] px-4 py-2 text-sm text-[#CBD5E1]">
                      AI Applications
                    </div>

                    <div className="rounded-full border border-white/10 bg-[#232326] px-4 py-2 text-sm text-[#CBD5E1]">
                      Next.js
                    </div>

                    <div className="rounded-full border border-white/10 bg-[#232326] px-4 py-2 text-sm text-[#CBD5E1]">
                      Open to Opportunities
                    </div>

                  </div>

                </div>


  </Card>
</motion.div>

      </div>

    </section>
  );
}