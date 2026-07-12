"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
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

    reset();

    alert("Message sent successfully!");
  } catch {
    alert("Something went wrong.");
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
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-sm">
                  Name
                </label>

                <input
                  {...register("name")}
                  className="w-full rounded-xl border border-white/10 bg-[#111827] px-5 py-4 outline-none transition focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Email
                </label>

                <input
                  {...register("email")}
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-[#111827] px-5 py-4 outline-none transition focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Message
                </label>

                <textarea
                  {...register("message")}
                  rows={6}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#111827] px-5 py-4 outline-none transition focus:border-blue-500"
                  placeholder="Write your message..."
                />
              </div>

              <Button
                fullWidth
                type="submit"
              >
                Send Message
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