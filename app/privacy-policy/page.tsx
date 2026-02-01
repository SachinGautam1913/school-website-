import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg opacity-90">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8 prose prose-gray max-w-none">
                <h2 className="font-serif text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground mb-6">
                  Kirnajay Vidya Mandir (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting 
                  the privacy of our students, parents, staff, and website visitors. This Privacy 
                  Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li><strong>Personal Information:</strong> Name, address, email, phone number, date of birth, and other details provided during admission or registration.</li>
                  <li><strong>Academic Information:</strong> Student performance records, attendance, grades, and academic history.</li>
                  <li><strong>Financial Information:</strong> Fee payment details and transaction records.</li>
                  <li><strong>Health Information:</strong> Medical records and health-related information necessary for student welfare.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, and usage data when visiting our website.</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>To process admissions and enrollment</li>
                  <li>To communicate with parents and students about academic matters</li>
                  <li>To manage student records and academic progress</li>
                  <li>To process fee payments and maintain financial records</li>
                  <li>To ensure student safety and welfare</li>
                  <li>To send important notifications and updates</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-6">
                  We do not sell, trade, or rent personal information to third parties. We may 
                  share information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>With authorized educational authorities and regulatory bodies as required by law</li>
                  <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                  <li>To protect the rights, safety, and security of our students and staff</li>
                  <li>In response to legal proceedings or government requests</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-6">
                  We implement appropriate technical and organizational measures to protect 
                  personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the internet is 100% 
                  secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Data Retention</h2>
                <p className="text-muted-foreground mb-6">
                  We retain personal information for as long as necessary to fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required or 
                  permitted by law. Student records are maintained as per educational regulations.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Access your personal information held by us</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt-out of non-essential communications</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
                <p className="text-muted-foreground mb-6">
                  We are committed to protecting the privacy of children. We collect information 
                  about minors only with parental consent and use it solely for educational 
                  purposes. Parents have the right to review, modify, or delete their child&apos;s 
                  personal information.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Cookies</h2>
                <p className="text-muted-foreground mb-6">
                  Our website may use cookies to enhance user experience. You can choose to 
                  disable cookies through your browser settings, though this may affect some 
                  website functionality.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground mb-6">
                  We may update this Privacy Policy from time to time. Any changes will be 
                  posted on this page with an updated revision date. We encourage you to 
                  review this policy periodically.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Kirnajay Vidya Mandir</strong><br />
                    123 Education Lane, Knowledge Nagar<br />
                    City - 123456, State, India<br />
                    Email: privacy@kirnajayvidyamandir.edu.in<br />
                    Phone: +91 98765 43210
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
