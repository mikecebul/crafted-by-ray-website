"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import isMobilePhone from "validator/lib/isMobilePhone";
import isEmail from "validator/lib/isEmail";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useEffect } from "react";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  phoneNumber: z
    .string()
    .refine((value) => (value ? isMobilePhone(value) : true), {
      message: "Invalid phone number.",
    })
    .optional(),
  email: z
    .string()
    .refine((value) => (value ? isEmail(value) : true), {
      message: "Invalid email address.",
    })
    .optional(),
  message: z.string().min(2).max(500),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const { setError, clearErrors, watch, reset } = form;

  useEffect(() => {
    const subscription = watch((values, { name }) => {
      const { email, phoneNumber } = values;

      if (name === "email" || name === "phoneNumber") {
        if (email || phoneNumber) {
          clearErrors(["email", "phoneNumber"]);
        } else {
          setError("email", {
            type: "manual",
            message: "Either email or phone number must be filled out.",
          });
          setError("phoneNumber", {
            type: "manual",
            message: "Either email or phone number must be filled out.",
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, clearErrors, setError]);

  function onSubmit(values: ContactFormValues) {
    // Do something with the form values.
    if (!values.email && !values.phoneNumber) {
      setError("email", {
        type: "manual",
        message: "Either email or phone number must be filled out.",
      });
      setError("phoneNumber", {
        type: "manual",
        message: "Either email or phone number must be filled out.",
      });
      return;
    }
    // ✅ This will be type-safe and validated.
    console.log(values);
    reset({
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
    clearErrors();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact</CardTitle>
        <CardDescription>
          Send me your idea and your contact info so I can get back tou you.
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="space-y-8">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter your first and last name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="555-555-5555" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter your Phone number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jane@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter your email address.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I need a special wooden.."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please enter what you&apos;re looking to have made for you.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
