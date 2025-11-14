import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AnimatedSection = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={`${className} ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      {children}
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-hero py-32 px-4 text-primary-foreground mt-16">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src="https://ik.imagekit.io/klmq2das2/Screenshot%202025-11-12%20163117.png?updatedAt=1762954206257" 
              alt="Anujith J Nair - Java Full Stack Developer" 
              className="w-48 h-48 rounded-full object-cover border-4 border-primary-foreground shadow-2xl bounce-in"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 slide-in-right">
                Anujith J Nair
              </h1>
              <p className="text-xl md:text-2xl opacity-90 slide-in-right stagger-1">
                Java Full Stack Developer
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 slide-in-up stagger-2">
            <Button variant="secondary" size="lg" asChild className="hover-scale">
              <a href="tel:+919538141670" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 9538141670
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild className="hover-scale">
              <a href="mailto:anujithsaec@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild className="hover-scale">
              <a 
                href="https://www.linkedin.com/in/anujith-j-nair-b857a0282/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Passionate Java Full Stack Developer Trainee with hands-on experience in Java, SQL, React, JDBC, J2EE, and Spring Core. 
            Developed projects including a Student Management App and Spotify Clone, demonstrating effective integration of front-end 
            and back-end technologies. 5 Star HackerRank in DSA. Eager to apply skills in real-world software development and innovation.
          </p>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="section-alt py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Java Full Stack Developer (Student Trainee)</CardTitle>
                    <CardDescription>Pentagon Space, Bangalore, IN</CardDescription>
                  </div>
                  <Badge variant="secondary">May 2025 – Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed a Full stack Student Application Project using JDBC API and J2EE Architecture to store Student data and perform course purchases.</li>
                  <li>Developed a Frontend Application (Clone of Spotify website) using React js and Tailwind CSS.</li>
                  <li>Demonstrated advanced problem-solving skills by mastering a diverse range of DSA challenges and attained a 5-star rating on the HackerRank platform.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Cyber Security Intern (Student)</CardTitle>
                    <CardDescription>Elewayte, Bangalore, IN</CardDescription>
                  </div>
                  <Badge variant="secondary">May 2024 – June 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Completed Elewayte online classes, acquiring foundational knowledge in ethical and unethical testing practices and developing proficiency in managing operating systems using VMware and VirtualBox.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Community Representative</CardTitle>
                    <CardDescription>getSync (formerly himan), Bangalore, IN</CardDescription>
                  </div>
                  <Badge variant="secondary">June 2023 – August 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Processed and structured data from websites and web pages into the required format, delivering completed projects and ensuring high data accuracy.</li>
                  <li>Collaborated with team members to represent company events and provided support to customers throughout their event experience, enhancing overall customer satisfaction.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Student Application</CardTitle>
                <CardDescription>Sep 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developed a full-stack web application using JDBC as an API to connect Java with the Database. 
                  Implemented JSP for frontend using HTML, CSS and JavaScript. Utilized Apache Tomcat server to 
                  deploy and run web applications in a browser environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Java</Badge>
                  <Badge>JDBC</Badge>
                  <Badge>J2EE</Badge>
                  <Badge>SQL</Badge>
                  <Badge>JSP</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Simple Spotify Clone</CardTitle>
                <CardDescription>Oct 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developed a Spotify clone website, replicating its user interface to demonstrate advanced 
                  front-end development and UI/UX design expertise.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="education" className="section-alt py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Bachelor of Computer Applications</CardTitle>
                    <CardDescription>Nrupathunga University, Bangalore, IN</CardDescription>
                  </div>
                  <Badge variant="secondary">Sep 2022 – Aug 2025</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Pre University (PCMB)</CardTitle>
                    <CardDescription>Sree Ayyappa Education Centre, Bangalore, IN</CardDescription>
                  </div>
                  <Badge variant="secondary">Aug 2020 – July 2022</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="hover:scale-110 transition-transform">Java</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">SQL</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">JavaScript</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">HTML/CSS</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">J2EE</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">JSP</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="hover:scale-110 transition-transform">React.js</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">Spring Core</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">JDBC API</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">Bootstrap</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">Tailwind CSS</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="hover:scale-110 transition-transform">Git</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">VS Code</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">Visual Studio</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">PyCharm</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">IntelliJ</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">Eclipse</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="hover:scale-110 transition-transform">Passionate</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">Team Lead</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">Public Speaker</Badge>
                <Badge variant="outline" className="hover:scale-110 transition-transform">Social</Badge>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="section-alt py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <ContactForm />
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <a href="mailto:anujithsaec@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <a href="tel:+919538141670" aria-label="Phone">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                <a 
                  href="https://www.linkedin.com/in/anujith-j-nair-b857a0282/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Anujith J Nair. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
