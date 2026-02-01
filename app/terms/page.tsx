import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
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
                <h2 className="font-serif text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-6">
                  By accessing and using the Kirnajay Vidya Mandir website and services, you 
                  accept and agree to be bound by these Terms and Conditions. If you do not 
                  agree to these terms, please do not use our website or services.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Admission Terms</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Admission to the school is at the sole discretion of the school management.</li>
                  <li>All information provided during the admission process must be accurate and complete.</li>
                  <li>Submission of false information may result in cancellation of admission.</li>
                  <li>The school reserves the right to withdraw admission if the student fails to meet academic or behavioral standards.</li>
                  <li>Age criteria and other eligibility requirements must be met for admission to respective classes.</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mb-4">Fee Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Fees must be paid within the stipulated time as per the fee schedule.</li>
                  <li>Late payment of fees may attract a late fee penalty.</li>
                  <li>Non-payment of fees may result in the student being barred from classes or examinations.</li>
                  <li>Fees once paid are non-refundable unless otherwise specified.</li>
                  <li>The school reserves the right to revise fees with prior notice.</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mb-4">Academic Policies</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Students must maintain a minimum attendance of 75% to be eligible for examinations.</li>
                  <li>Academic integrity is mandatory. Any form of cheating or plagiarism will result in disciplinary action.</li>
                  <li>Students must follow the prescribed curriculum and complete all assignments on time.</li>
                  <li>Progress reports and report cards are issued as per the academic calendar.</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mb-4">Code of Conduct</h2>
                <p className="text-muted-foreground mb-4">All students are expected to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Wear the prescribed school uniform neatly and properly.</li>
                  <li>Be punctual and regular in attendance.</li>
                  <li>Respect teachers, staff, and fellow students.</li>
                  <li>Maintain discipline and decorum within the school premises.</li>
                  <li>Not engage in any form of bullying, harassment, or discrimination.</li>
                  <li>Not carry mobile phones or electronic gadgets unless permitted.</li>
                  <li>Take care of school property and not indulge in vandalism.</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mb-4">Disciplinary Actions</h2>
                <p className="text-muted-foreground mb-6">
                  Violation of school rules may result in disciplinary actions including verbal 
                  warnings, written warnings, suspension, or expulsion depending on the severity 
                  of the offense. The school&apos;s decision in disciplinary matters shall be final.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Website Usage</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>The content on this website is for informational purposes only.</li>
                  <li>Users must not misuse the website or attempt unauthorized access.</li>
                  <li>The school is not responsible for any third-party links on the website.</li>
                  <li>All content, including text, images, and logos, are the property of Kirnajay Vidya Mandir.</li>
                </ul>

                <h2 className="font-serif text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  Kirnajay Vidya Mandir shall not be liable for any direct, indirect, incidental, 
                  or consequential damages arising from the use of our website or services. The 
                  school&apos;s liability is limited to the extent permitted by applicable law.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Communication</h2>
                <p className="text-muted-foreground mb-6">
                  By providing your contact information, you consent to receive communications 
                  from the school regarding academic matters, events, and important notifications 
                  via email, SMS, or other means.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Modification of Terms</h2>
                <p className="text-muted-foreground mb-6">
                  The school reserves the right to modify these Terms and Conditions at any time. 
                  Changes will be effective upon posting on the website. Continued use of our 
                  services constitutes acceptance of the modified terms.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground mb-6">
                  These Terms and Conditions shall be governed by and construed in accordance 
                  with the laws of India. Any disputes shall be subject to the exclusive 
                  jurisdiction of the courts in our district.
                </p>

                <h2 className="font-serif text-2xl font-bold mb-4">Contact</h2>
                <p className="text-muted-foreground">
                  For any questions regarding these Terms and Conditions, please contact:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Kirnajay Vidya Mandir</strong><br />
                    123 Education Lane, Knowledge Nagar<br />
                    City - 123456, State, India<br />
                    Email: info@kirnajayvidyamandir.edu.in<br />
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
