import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function DirectorMessagePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Message from the Director
            </h1>
            <p className="text-lg opacity-90">
              A personal note from our school leader on our vision and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Director Message */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Director Photo & Info */}
              <div className="md:col-span-1">
                <Card className="overflow-hidden">
                  <div className="relative h-72">
                    <Image
                      src="/images/director.jpg"
                      alt="School Director"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-serif text-xl font-bold">Dr. Rajesh Kumar Sharma</h3>
                    <p className="text-primary font-medium">Director & Principal</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      M.Ed., Ph.D. in Education<br />
                      35+ Years in Education
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Message Content */}
              <div className="md:col-span-2">
                <div className="relative mb-8">
                  <Quote className="w-12 h-12 text-primary/20 absolute -top-2 -left-4" />
                  <p className="text-xl font-serif text-foreground italic pl-8">
                    Education is not merely the filling of a vessel, but the lighting of a flame 
                    that will illuminate the path of life.
                  </p>
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>Dear Parents, Students, and Well-wishers,</p>
                  
                  <p>
                    It gives me immense pleasure to welcome you to Kirnajay Vidya Mandir, an 
                    institution that has been dedicated to nurturing young minds for nearly four 
                    decades. As we continue our journey of educational excellence, I am filled 
                    with pride for what we have achieved and excitement for what lies ahead.
                  </p>

                  <p>
                    At Kirnajay Vidya Mandir, we believe that every child is unique and possesses 
                    unlimited potential. Our role as educators is to create an environment where 
                    this potential can flourish. We are committed to providing a holistic education 
                    that goes beyond textbooks and examinations, focusing on the overall development 
                    of each student.
                  </p>

                  <p>
                    Our dedicated team of teachers works tirelessly to ensure that learning is not 
                    just informative but also transformative. We employ innovative teaching 
                    methodologies that encourage critical thinking, creativity, and problem-solving 
                    skills. Our state-of-the-art facilities, including modern laboratories, a 
                    well-stocked library, and sports infrastructure, provide students with ample 
                    opportunities to explore their interests and talents.
                  </p>

                  <p>
                    We understand that parents are our partners in this educational journey. Your 
                    trust in us is our greatest motivation, and we strive every day to live up to 
                    your expectations. We maintain open communication with families and value your 
                    feedback and involvement in your child&apos;s education.
                  </p>

                  <p>
                    As we navigate the challenges and opportunities of the 21st century, we remain 
                    committed to our core values of integrity, respect, and excellence. We prepare 
                    our students not just for academic success, but for life itself, instilling in 
                    them the values, skills, and confidence they need to make a positive impact on 
                    the world.
                  </p>

                  <p>
                    I invite you to explore our school and discover what makes Kirnajay Vidya Mandir 
                    a special place for learning and growth. Together, let us work towards building 
                    a brighter future for our children.
                  </p>

                  <p className="font-medium text-foreground">
                    With warm regards,<br />
                    Dr. Rajesh Kumar Sharma<br />
                    Director & Principal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated individuals who guide our institution towards excellence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Mrs. Sunita Devi", role: "Vice Principal", department: "Academic Affairs" },
              { name: "Mr. Anil Kumar Singh", role: "Administrative Head", department: "Operations & Finance" },
              { name: "Mrs. Priya Verma", role: "Academic Coordinator", department: "Curriculum Development" },
            ].map((leader, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {leader.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{leader.name}</h3>
                  <p className="text-primary font-medium">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.department}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
