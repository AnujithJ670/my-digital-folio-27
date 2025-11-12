import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4 text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img 
              src={profileImage} 
              alt="Anujith J Nair" 
              className="w-40 h-40 rounded-full object-cover border-4 border-primary-foreground shadow-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                Anujith J Nair
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Java Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionate Java Full Stack Developer Trainee with hands-on experience in Java, SQL, React, JDBC, J2EE, and Spring Core. 
            Developed projects including a Student Management App and Spotify Clone, demonstrating effective integration of front-end 
            and back-end technologies. 5 Star HackerRank in DSA. Eager to apply skills in real-world software development and innovation.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-alt py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            <Card>
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

            <Card>
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

            <Card>
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
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
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

            <Card className="hover:shadow-lg transition-shadow">
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
      </section>

      {/* Education Section */}
      <section className="section-alt py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <Card>
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

            <Card>
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
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Java</Badge>
                <Badge variant="outline">SQL</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">HTML/CSS</Badge>
                <Badge variant="outline">J2EE</Badge>
                <Badge variant="outline">JSP</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">Spring Core</Badge>
                <Badge variant="outline">JDBC API</Badge>
                <Badge variant="outline">Bootstrap</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">VS Code</Badge>
                <Badge variant="outline">Visual Studio</Badge>
                <Badge variant="outline">PyCharm</Badge>
                <Badge variant="outline">IntelliJ</Badge>
                <Badge variant="outline">Eclipse</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Passionate</Badge>
                <Badge variant="outline">Team Lead</Badge>
                <Badge variant="outline">Public Speaker</Badge>
                <Badge variant="outline">Social</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-hero py-8 px-4 text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-4">Let's connect and build something amazing together!</p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="icon" asChild>
              <a href="mailto:anujithsaec@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="secondary" size="icon" asChild>
              <a href="tel:+919538141670" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="secondary" size="icon" asChild>
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
          <p className="mt-6 text-sm opacity-80">© 2025 Anujith J Nair. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
