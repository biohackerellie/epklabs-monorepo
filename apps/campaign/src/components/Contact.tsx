"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { env } from "@/env";
import { slideIn } from "@/lib/motion";
import SectionWrapper from "@/lib/sectionWrapper";
import { Button } from "./ui/button";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    updates: false,
    volunteer: false,
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.NEXT_PUBLIC_EMAIL_SECRET,
      },
      body: JSON.stringify(form),
    }).then(
      () => {
        setLoading(false);
        alert("Message Sent!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          updates: false,
          volunteer: false,
        });
      },
      (err) => {
        setLoading(false);
        alert("Message Failed to Send!");
        console.error(err);
      },
    );
  };

  return (
    <div className="flex max-w-[800px] flex-col xl:mt-12 xl:flex-row ">
      <motion.div
        variants={slideIn({
          direction: "left",
          type: "tween",
          duration: 1,
          delay: 0,
        })}
        className="flex-[0.75] rounded-2xl bg-indigo-300 p-8"
      >
        <h1 className="text-2xl font-bold text-white">Contact</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
              Your Name<span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="outlined-none rounded-lg border-none bg-rose-50 px-6 py-4 font-medium text-black placeholder:text-gray-400"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
              Your Email<span className="text-red-500">*</span>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="outlined-none rounded-lg border-none bg-rose-50 px-6 py-4 font-medium text-black placeholder:text-gray-400"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Phone</span>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone(optional)"
              value={form.phone}
              onChange={handleChange}
              className="outlined-none rounded-lg border-none bg-rose-50 px-6 py-4 font-medium text-black placeholder:text-gray-400"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
              Your Message<span className="text-red-500">*</span>
            </span>

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="outlined-none rounded-lg border-none bg-rose-50 px-6 py-4 font-medium text-black placeholder:text-gray-400"
            />
          </label>
          <label className="">
            <span className="mb-4 font-medium text-white">
              I want to receive updates from Ellie Kerns
            </span>
            <input
              type="checkbox"
              name="updates"
              checked={form.updates}
              onChange={handleChange}
              className="ml-4 px-4"
            />
          </label>
          <label className="">
            <span className="mb-4 font-medium text-white">
              I want to Volunteer!
            </span>
            <input
              type="checkbox"
              name="volunteer"
              checked={form.volunteer}
              onChange={handleChange}
              className="ml-4 px-4"
            />
          </label>
          {loading ? (
            <Button
              type="button"
              size={"sm"}
              className="w-fit rounded-lg bg-rose-50 px-6 py-4 font-medium text-black"
              disabled
            >
              sending...
            </Button>
          ) : (
            <Button
              type="submit"
              size={"sm"}
              className="w-fit rounded-lg bg-rose-50 px-6 py-4 font-medium text-black"
            >
              Submit
            </Button>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper({ Component: Contact, idName: "contact" });
