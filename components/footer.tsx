"use client";

import { LogoFooter } from "@/config/logoFooter";
import { navigation } from "@/config/site";
import Link from "next/link";
import {
  Edit,
  Facebook,
  Instagram,
  Mail,
  Phone,
  User,
  Youtube,
} from "lucide-react";
import { useForm } from "react-hook-form";

export function Footer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="mt-16">
      <svg
        viewBox="0 0 100 10"
        height="100%"
        width="100%"
        preserveAspectRatio="none"
        className="block"
      >
        <polygon points="100,10 100,0 0,10" className="fill-amber-200" />
      </svg>
      <div className="flex flex-col pt-10 bg-amber-200">
        <div className="flex justify-center pb-8">
          <LogoFooter />
        </div>
        <div className="flex justify-center px-8 pb-8">
          <div className="flex flex-col">
            <ul className="pb-4 text-2xl font-semibold">Pages</ul>
            {navigation.map((item, index) => (
              <li key={index} className="pb-4 list-none last:pb-0">
                <Link href={item.href} className="text-xl font-light">
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
          <div className="p-16" />
          <div className="flex flex-col">
            <ul className="pb-4 text-2xl font-semibold">Social</ul>
            <li className="pb-4 list-none">
              <Youtube size={28} />
            </li>
            <li className="pb-4 list-none">
              <Instagram size={28} />
            </li>
            <li className="pb-4 list-none">
              <Facebook size={28} />
            </li>
          </div>
        </div>
        {/* Contact Form */}
        <div className="px-4 pb-4">
          <h3 className="pb-4 text-4xl font-semibold">
            Contact me with an idea!
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block pb-2 text-lg font-medium"
                >
                  Name
                </label>
                <div className="relative">
                  <User
                    className="absolute text-gray-500 -translate-y-1/2 top-1/2 left-3"
                    size={20}
                  />
                  <input
                    className="w-full py-2 pl-12 rounded"
                    placeholder="Jane Doe"
                    type="text"
                    {...register("name", { required: true })}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-full">
                <label
                  className="block pb-2 text-lg font-medium"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <div className="relative">
                  <Phone
                    className="absolute text-gray-500 -translate-y-1/2 top-1/2 left-3"
                    size={20}
                  />
                  <input
                    className="w-full py-2 pl-12 rounded"
                    placeholder="231-555-5555"
                    type="tel"
                    {...register("phone", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-full">
                <label
                  className="block pb-2 text-lg font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail
                    className="absolute text-gray-500 -translate-y-1/2 top-1/2 left-3"
                    size={20}
                  />
                  <input
                    className="w-full py-2 pl-12 rounded"
                    placeholder="jane@gmail.com"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-full">
                <label
                  className="block pb-2 text-lg font-medium"
                  htmlFor="message"
                >
                  Message
                </label>
                <div className="relative">
                  <Edit
                    className="absolute text-gray-500 -translate-y-1/2 top-[20px] left-3"
                    size={20}
                  />
                  <textarea
                    className="w-full py-2 pl-12 rounded"
                    rows={5}
                    placeholder="Type your message"
                    {...register("message", {
                      required: true,
                      minLength: 3,
                      maxLength: 1000,
                    })}
                  />
                </div>
              </div>
            </div>

            {errors.exampleRequired && <span>This field is required</span>}

            <button
              type="submit"
              className="px-8 py-2 rounded-full bg-amber-900 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
