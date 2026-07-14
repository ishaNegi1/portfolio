"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { FaSpinner } from "react-icons/fa";

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
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

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

  return (
    <div className="container">
      <SectionHeading
        title="Contact"
        subtitle="Let's connect and discuss opportunities, collaborations or exciting ideas."
      />

      <div className="grid gap-10 lg:grid-cols-2">
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
        >
          <Card className="p-8">
            <form
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  autoComplete="off"
                  {...register("name")}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#111827] px-5 py-4 outline-none transition focus:border-blue-500"
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  autoComplete="off"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-[#111827] px-5 py-4 outline-none transition focus:border-blue-500"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  spellCheck={false}
                  {...register("message")}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#111827] px-5 py-4 outline-none transition focus:border-blue-500"
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                fullWidth
                disabled={loading}
              >
                <>
                  {loading && (
                    <FaSpinner className="mr-2 animate-spin" />
                  )}

                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </>
              </Button>
            </form>
          </Card>
        </motion.div>

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
        >
          <SocialLinks />
        </motion.div>
      </div>
    </div>
  );
}