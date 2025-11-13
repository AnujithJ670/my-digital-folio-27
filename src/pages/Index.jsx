import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Code2, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const heroAnimation = useScrollAnimation(0.1);
  const aboutAnimation = useScrollAnimation(0.1);
  const experienceAnimation = useScrollAnimation(0.1);
  const projectsAnimation = useScrollAnimation(0.1);
  const educationAnimation = useScrollAnimation(0.1);
  const skillsAnimation = useScrollAnimation(0.1);
  const contactAnimation = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4">
        <div 
          ref={heroAnimation.ref}
          className={`container mx-auto text-center transition-all duration-1000 ${
            heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-8 animate-bounce-in">
            <img 
              src="https://imgbox.com/aFF3DDIq" 
              alt="Anujith J Nair" 
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-slide-in-left">
            Anujith J Nair
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-right">
            Data Analyst | Business Intelligence Specialist | Python Developer
          </p>
          <div className="flex gap-4 justify-center mb-8 animate-fade-in-up stagger-1">
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="mailto:anujithnair200@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="https://linkedin.com/in/anujith-j-nair" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="https://github.com/anujithjnair" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div 
          ref={aboutAnimation.ref}
          className={`container mx-auto transition-all duration-1000 delay-100 ${
            aboutAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate Data Analyst with expertise in transforming complex datasets into actionable insights. 
                Skilled in Python, SQL, and various BI tools with a proven track record of driving data-driven 
                decision-making processes. Experienced in statistical analysis, data visualization, and machine 
                learning applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div 
          ref={experienceAnimation.ref}
          className={`container mx-auto transition-all duration-1000 ${
            experienceAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Briefcase className="h-8 w-8" />
            Experience
          </h2>
          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-slide-in-left">
              <CardHeader>
                <CardTitle>Senior Data Analyst</CardTitle>
                <CardDescription>Tech Corp Inc. | 2021 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Led data analysis initiatives resulting in 25% improvement in operational efficiency</li>
                  <li>Developed automated reporting systems using Python and SQL</li>
                  <li>Collaborated with cross-functional teams to implement data-driven strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-slide-in-right stagger-1">
              <CardHeader>
                <CardTitle>Data Analyst</CardTitle>
                <CardDescription>Analytics Solutions Ltd. | 2019 - 2021</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Performed complex statistical analyses on large datasets</li>
                  <li>Created interactive dashboards using Tableau and Power BI</li>
                  <li>Provided actionable insights to stakeholders through data visualization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <div 
          ref={projectsAnimation.ref}
          className={`container mx-auto transition-all duration-1000 ${
            projectsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Code2 className="h-8 w-8" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up">
              <CardHeader>
                <CardTitle>Sales Forecasting Model</CardTitle>
                <CardDescription>Machine Learning Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developed a predictive model using Python and scikit-learn to forecast sales trends with 92% accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>Pandas</Badge>
                  <Badge>Scikit-learn</Badge>
                  <Badge>Matplotlib</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up stagger-1">
              <CardHeader>
                <CardTitle>Customer Segmentation Analysis</CardTitle>
                <CardDescription>Data Science Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Implemented clustering algorithms to segment customers based on behavior patterns and demographics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>K-means</Badge>
                  <Badge>SQL</Badge>
                  <Badge>Tableau</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up stagger-2">
              <CardHeader>
                <CardTitle>Real-time Dashboard</CardTitle>
                <CardDescription>Business Intelligence Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Created an interactive dashboard for monitoring key business metrics in real-time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Power BI</Badge>
                  <Badge>SQL</Badge>
                  <Badge>DAX</Badge>
                  <Badge>Azure</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up stagger-3">
              <CardHeader>
                <CardTitle>ETL Pipeline</CardTitle>
                <CardDescription>Data Engineering Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built an automated ETL pipeline to process and transform data from multiple sources.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>Apache Airflow</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Docker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4">
        <div 
          ref={educationAnimation.ref}
          className={`container mx-auto transition-all duration-1000 ${
            educationAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <GraduationCap className="h-8 w-8" />
            Education
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-bounce-in">
              <CardHeader>
                <CardTitle>Master of Science in Data Science</CardTitle>
                <CardDescription>University of Technology | 2017 - 2019</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized in Machine Learning and Statistical Analysis. Thesis on Predictive Analytics in Healthcare.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-bounce-in stagger-1">
              <CardHeader>
                <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                <CardDescription>State University | 2013 - 2017</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focus on Database Systems and Programming. Graduated with Honors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/30">
        <div 
          ref={skillsAnimation.ref}
          className={`container mx-auto transition-all duration-1000 ${
            skillsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-lg">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">R</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-fade-in-up stagger-1">
              <CardHeader>
                <CardTitle className="text-lg">Data Analysis Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Pandas</Badge>
                  <Badge variant="secondary">NumPy</Badge>
                  <Badge variant="secondary">Matplotlib</Badge>
                  <Badge variant="secondary">Seaborn</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-fade-in-up stagger-2">
              <CardHeader>
                <CardTitle className="text-lg">BI & Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tableau</Badge>
                  <Badge variant="secondary">Power BI</Badge>
                  <Badge variant="secondary">Looker</Badge>
                  <Badge variant="secondary">Excel</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-fade-in-up stagger-3">
              <CardHeader>
                <CardTitle className="text-lg">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Scikit-learn</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">Keras</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-fade-in-up stagger-4">
              <CardHeader>
                <CardTitle className="text-lg">Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] animate-fade-in-up stagger-5">
              <CardHeader>
                <CardTitle className="text-lg">Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Azure</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Git</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div 
          ref={contactAnimation.ref}
          className={`container mx-auto transition-all duration-1000 ${
            contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/30 text-center">
        <p className="text-muted-foreground">
          © 2024 Anujith J Nair. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
