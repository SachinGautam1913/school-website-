"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const upcomingEvents = [
  {
    title: "Annual Day Celebration 2025",
    date: "March 15, 2025",
    time: "5:00 PM onwards",
    venue: "School Auditorium",
    description: "A grand celebration showcasing student talents through cultural performances, drama, and music.",
    category: "Cultural",
  },
  {
    title: "Parent-Teacher Meeting",
    date: "February 20, 2025",
    time: "9:00 AM - 1:00 PM",
    venue: "Respective Classrooms",
    description: "Discuss student progress and academic performance with teachers.",
    category: "Academic",
  },
  {
    title: "Science Exhibition",
    date: "February 28, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "School Campus",
    description: "Students showcase their innovative science projects and working models.",
    category: "Academic",
  },
  {
    title: "Inter-House Sports Competition",
    date: "March 5-7, 2025",
    time: "8:00 AM onwards",
    venue: "Sports Ground",
    description: "Annual sports competition featuring athletics, team sports, and individual events.",
    category: "Sports",
  },
];

const pastEvents = [
  {
    title: "Independence Day Celebration",
    date: "August 15, 2024",
    image: "/images/hero-school.jpg",
    description: "Flag hoisting ceremony followed by cultural programs celebrating our nation.",
  },
  {
    title: "Teachers Day",
    date: "September 5, 2024",
    image: "/images/classroom.jpg",
    description: "Students honored teachers with special performances and heartfelt tributes.",
  },
  {
    title: "Diwali Celebration",
    date: "November 1, 2024",
    image: "/images/annual-day.jpg",
    description: "Festival of lights celebrated with rangoli competition and cultural activities.",
  },
  {
    title: "Sports Day 2024",
    date: "December 10, 2024",
    image: "/images/sports-day.jpg",
    description: "Annual sports day with athletics, team games, and prize distribution.",
  },
];

const annualCalendar = [
  { month: "April", events: ["New Session Begins", "Earth Day Activities"] },
  { month: "May", events: ["Summer Camp", "Mother's Day Celebration"] },
  { month: "June", events: ["World Environment Day", "Yoga Day"] },
  { month: "July", events: ["Van Mahotsav", "Kargil Vijay Diwas"] },
  { month: "August", events: ["Independence Day", "Raksha Bandhan"] },
  { month: "September", events: ["Teachers Day", "Hindi Diwas"] },
  { month: "October", events: ["Gandhi Jayanti", "Dussehra Break"] },
  { month: "November", events: ["Diwali Celebration", "Children's Day"] },
  { month: "December", events: ["Sports Day", "Christmas Celebration"] },
  { month: "January", events: ["Republic Day", "Annual Exams Begin"] },
  { month: "February", events: ["Science Exhibition", "PTM"] },
  { month: "March", events: ["Annual Day", "Result Declaration"] },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-lg opacity-90">
              A vibrant calendar of events that celebrate learning, culture, sports, 
              and community at Kirnajay Vidya Mandir.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mark your calendars for these exciting upcoming events.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                    <Badge variant={
                      event.category === "Cultural" ? "default" :
                      event.category === "Sports" ? "secondary" : "outline"
                    }>
                      {event.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Recent Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Glimpses from our recent celebrations and activities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-primary mb-1">{event.date}</p>
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Calendar */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Annual Events Calendar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Overview of major events and celebrations throughout the academic year.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {annualCalendar.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-2">{item.month}</h3>
                  <ul className="space-y-1">
                    {item.events.map((event, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {event}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Co-Curricular Activities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Regular activities that complement academic learning.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Debates & Elocution", icon: Users, description: "Weekly sessions to develop public speaking skills" },
              { title: "Art & Craft Club", icon: Users, description: "Creative expression through various art forms" },
              { title: "Music & Dance", icon: Users, description: "Training in classical and contemporary forms" },
              { title: "Science Club", icon: Users, description: "Hands-on experiments and scientific exploration" },
              { title: "Literary Club", icon: Users, description: "Creative writing, poetry, and storytelling" },
              { title: "Sports Training", icon: Users, description: "Regular coaching in various sports disciplines" },
            ].map((activity, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <activity.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
