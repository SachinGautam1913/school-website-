"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Calendar,
  ClipboardList,
  CheckCircle,
  Download,
  Phone,
  Mail,
  Clock,
  AlertCircle,
} from "lucide-react";

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Calendar,
  ClipboardList,
  CheckCircle,
  Download,
  Phone,
  Mail,
  Clock,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const admissionSteps = [
  {
    step: 1,
    title: "Obtain Application Form",
    description:
      "Collect the admission form from the school office or download it from our website.",
  },
  {
    step: 2,
    title: "Submit Completed Form",
    description:
      "Submit the filled form with required documents and registration fee.",
  },
  {
    step: 3,
    title: "Entrance Assessment",
    description:
      "Student will undergo an age-appropriate assessment for eligibility.",
  },
  {
    step: 4,
    title: "Parent Interaction",
    description:
      "Parents meet school authorities to discuss expectations and queries.",
  },
  {
    step: 5,
    title: "Admission Confirmation",
    description:
      "Selected students confirm admission by paying fees within timeline.",
  },
];

const documents = [
  "Birth Certificate",
  "Transfer Certificate (if applicable)",
  "Previous Class Report Card",
  "4 Passport-size Student Photos",
  "Parents Photograph",
  "Aadhar Card (Student & Parents)",
  "Address Proof",
  "Caste Certificate (if applicable)",
  "Medical Fitness Certificate",
];

const feeStructure = [
  { class: "Nursery – KG", admission: "1,000", tuition: "300 / month", annual: "3,000" },
  { class: "Class I – V", admission: "6,000", tuition: "3,000 / month", annual: "3,500" },
  { class: "Class VI – VIII", admission: "7,000", tuition: "3,500 / month", annual: "4,000" },
  { class: "Class IX – X", admission: "8,000", tuition: "4,000 / month", annual: "4,500" },
  { class: "Class XI – XII", admission: "10,000", tuition: "4,500 / month", annual: "5,000" },
];

/* ---------------- PAGE ---------------- */

export default function AdmissionsPage() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    classApplying: "",
    dateOfBirth: "",
    address: "",
    previousSchool: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          studentName: "",
          parentName: "",
          email: "",
          phone: "",
          classApplying: "",
          dateOfBirth: "",
          address: "",
          previousSchool: "",
        });
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit application. Please try again.');
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <section className="py-14 md:py-16 bg-gradient-to-br from-primary/10 to-accent">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Admissions 2025–26
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Join Kirnajay Vidya Mandir — a place where education, values, and growth
            come together.
          </p>
        </div>
      </section>

      {/* ADMISSION OPEN */}
      <section className="py-5 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5" />
            <p className="font-medium">
              Admissions Open | Nursery to Class XII
            </p>
          </div>
          <Button size="lg" className="rounded-full px-8" onClick={() => setShowForm(true)}>
            Apply Now
          </Button>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center font-serif text-2xl font-bold mb-10">
            Admission Process
          </h2>

          <div className="space-y-5">
            {admissionSteps.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold shrink-0">
                  {item.step}
                </div>

                <Card className="flex-1 border shadow-sm hover:shadow-md transition">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS + DATES */}
      <section className="py-14 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">

          {/* DOCUMENTS */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">
              Required Documents
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {documents.map((doc, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DATES */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              {[
                ["Form Starts", "15 Jan 2025"],
                ["Last Date", "15 Mar 2025"],
                ["Assessment", "20–25 Mar 2025"],
                ["Result", "30 Mar 2025"],
                ["Session Begins", "1 Apr 2025"],
              ].map(([label, date], i) => (
                <div
                  key={i}
                  className="flex justify-between border-b last:border-b-0 pb-2"
                >
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-medium">{date}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FEES */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center font-serif text-2xl font-bold mb-8">
            Fee Structure
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border rounded-xl overflow-hidden text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-3 text-left">Class</th>
                  <th className="p-3 text-center">Admission</th>
                  <th className="p-3 text-center">Tuition</th>
                  <th className="p-3 text-center">Annual</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, i) => (
                  <tr key={i} className="border-b hover:bg-muted/50 transition">
                    <td className="p-3 font-medium">{fee.class}</td>
                    <td className="p-3 text-center">₹{fee.admission}</td>
                    <td className="p-3 text-center">{fee.tuition}</td>
                    <td className="p-3 text-center">₹{fee.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            * Transport, uniform & extra facilities charged separately.
          </p>
        </div>
      </section>

      {/* ONLINE APPLICATION FORM */}
      {showForm && (
        <section className="py-14 bg-secondary">
          <div className="max-w-4xl mx-auto px-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-center">
                  Online Admission Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
                    <h3 className="font-semibold text-lg mb-2">Application Submitted!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for your application. We will review it and get back to you soon.
                    </p>
                    <Button onClick={() => { setShowForm(false); setIsSubmitted(false); }}>
                      Close
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentName">Student Full Name *</Label>
                        <Input
                          id="studentName"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          placeholder="Enter student's full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                        <Input
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="Enter parent's full name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="parent@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="classApplying">Class Applying For *</Label>
                        <Select onValueChange={(value) => handleSelectChange('classApplying', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Nursery">Nursery</SelectItem>
                            <SelectItem value="KG">KG</SelectItem>
                            <SelectItem value="Class I">Class I</SelectItem>
                            <SelectItem value="Class II">Class II</SelectItem>
                            <SelectItem value="Class III">Class III</SelectItem>
                            <SelectItem value="Class IV">Class IV</SelectItem>
                            <SelectItem value="Class V">Class V</SelectItem>
                            <SelectItem value="Class VI">Class VI</SelectItem>
                            <SelectItem value="Class VII">Class VII</SelectItem>
                            <SelectItem value="Class VIII">Class VIII</SelectItem>
                            <SelectItem value="Class IX">Class IX</SelectItem>
                            <SelectItem value="Class X">Class X</SelectItem>
                            <SelectItem value="Class XI">Class XI</SelectItem>
                            <SelectItem value="Class XII">Class XII</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter complete address"
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="previousSchool">Previous School (if any)</Label>
                      <Input
                        id="previousSchool"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        placeholder="Name of previous school"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* DOWNLOAD + CONTACT */}
      <section className="py-14 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Downloads
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                Admission Form
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <ClipboardList className="h-4 w-4" />
                Fee Guidelines
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Admission Enquiry
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex gap-2 items-center">
                <Phone className="h-4 w-4 text-primary" />
                +91 ***********
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="h-4 w-4 text-primary" />
                admissions@kirnajayvidyamandir.edu.in
              </div>
              <div className="flex gap-2 items-center">
                <Clock className="h-4 w-4 text-primary" />
                Mon – Sat | 9:00 AM – 3:00 PM
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
