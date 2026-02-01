"use client";

import React from "react"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "Kirnajay Vidya Mandir",
      "Kalli Paschim, Near OMAX City New",
      "Lucknow  - 227305, Uttar Pradesh, India",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: [
      "Main Office: +91 ***********",
      "Admission: +91 **********",
      "Accounts: +91 **********",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@kirnajayvidyamandir.edu.in",
      "admissions@kirnajayvidyamandir.edu.in",
      "principal@kirnajayvidyamandir.edu.in",
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday - Friday: 8:00 AM - 3:00 PM",
      "Saturday: 8:00 AM - 2:00 PM",
      "Sunday: Closed",
    ],
  },
];

const departments = [
  { name: "Principal Office", extension: "101" },
  { name: "Admission Cell", extension: "102" },
  { name: "Accounts Department", extension: "103" },
  { name: "Academic Coordinator", extension: "104" },
  { name: "Transport Incharge", extension: "105" },
  { name: "Sports Department", extension: "106" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg opacity-90">
              We would love to hear from you. Reach out to us for any queries, 
              feedback, or information about admissions and programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We will get back to you soon.
                    </p>
                    <Button
                      className="mt-4 bg-transparent"
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map Placeholder & Quick Contact */}
            <div className="space-y-6">
              {/* Map */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Interactive map would be displayed here
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </Card>

              {/* Department Extensions */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-lg">Department Extensions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {departments.map((dept, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-muted rounded"
                      >
                        <span className="text-sm">{dept.name}</span>
                        <span className="text-sm font-medium text-primary">
                          Ext. {dept.extension}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Connect With Us
            </h2>
            <p className="text-muted-foreground mb-6">
              Follow us on social media to stay updated with school news and events.
            </p>
            <div className="flex justify-center gap-4">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <p className="font-medium">For emergencies during school hours:</p>
            <a href="tel:+91**********" className="text-xl font-bold hover:underline">
              +91 ***********
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
