"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { TbSend } from "react-icons/tb";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(form);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      alert("Message sent successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contacts"
      className="lg:py-14 pt-8 bg-linear-to-b from-[#fff2ed] to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <Image
              src={"/Maps.PNG"}
              height={500}
              width={500}
              alt="Map Images"
              className="rounded-lg h-full md:w-auto w-full md:m-0 m-auto shadow-sm"
            />
          </div>
          <div>
            <h2 className="heading custom-font md:text-left text-center mb-4">
              Get In <span className="text-color">Touch</span>
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="space-y-3">
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="name">Fullname</Label>
                  <Input
                    onChange={handleOnChange}
                    type="text"
                    className="bg-white border border-gray-50 dark:border dark:border-gray-300/30! dark:bg-gray-800!"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={handleOnChange}
                    type="email"
                    id="email"
                    name="email"
                    className="bg-white border border-gray-50 dark:border dark:border-gray-300/30! dark:bg-gray-800!"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    onChange={handleOnChange}
                    id="message"
                    name="message"
                    className="lg:h-40 md:h-20 h-40 bg-white border border-gray-50 dark:border dark:border-gray-300/30! dark:bg-gray-800!"
                    placeholder="Enter your message"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="bg-color w-full md:mt-2.5 mt-3 text-white shadow-sm cursor-pointer"
              >
                <TbSend size={20} /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
