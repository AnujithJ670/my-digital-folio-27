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
          className={`container mx-auto transition-all duration-1000 delay-200 ${
            experienceAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Briefcase className="h-8 w-8" />
            Experience
          </h2>
          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-start justify-between flex-wrap gap-2">
                  <span>Data Analyst</span>
                  <Badge variant="secondary" className="hover:scale-110 transition-transform">2022 - Present</Badge>
                </CardTitle>
                <CardDescription>Tech Solutions Inc.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed and maintained interactive dashboards using Tableau and Power BI</li>
                  <li>Performed statistical analysis on large datasets using Python and R</li>
                  <li>Automated data collection and reporting processes, reducing manual work by 60%</li>
                  <li>Collaborated with cross-functional teams to identify business requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-start justify-between flex-wrap gap-2">
                  <span>Junior Data Analyst</span>
                  <Badge variant="secondary" className="hover:scale-110 transition-transform">2020 - 2022</Badge>
                </CardTitle>
                <CardDescription>DataMetrics Solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Assisted in data cleaning and preprocessing for machine learning models</li>
                  <li>Created SQL queries to extract and analyze business metrics</li>
                  <li>Contributed to the development of predictive models for customer behavior</li>
                  <li>Prepared comprehensive reports for stakeholder presentations</li>
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
          className={`container mx-auto transition-all duration-1000 delay-300 ${
            projectsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Code2 className="h-8 w-8" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
              <CardHeader>
                <CardTitle>Customer Churn Prediction</CardTitle>
                <CardDescription>Machine Learning Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developed a machine learning model to predict customer churn with 85% accuracy using Python, 
                  scikit-learn, and XGBoost. Implemented feature engineering and hyperparameter tuning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="hover:scale-110 transition-transform">Python</Badge>
                  <Badge className="hover:scale-110 transition-transform">scikit-learn</Badge>
                  <Badge className="hover:scale-110 transition-transform">XGBoost</Badge>
                  <Badge className="hover:scale-110 transition-transform">Pandas</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
              <CardHeader>
                <CardTitle>Sales Analytics Dashboard</CardTitle>
                <CardDescription>Business Intelligence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Created an interactive sales dashboard in Tableau connecting to SQL databases, providing 
                  real-time insights and KPI tracking for executive decision-making.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="hover:scale-110 transition-transform">Tableau</Badge>
                  <Badge className="hover:scale-110 transition-transform">SQL</Badge>
                  <Badge className="hover:scale-110 transition-transform">ETL</Badge>
                  <Badge className="hover:scale-110 transition-transform">Data Visualization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
              <CardHeader>
                <CardTitle>Web Scraping Automation</CardTitle>
                <CardDescription>Python Automation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built an automated web scraping tool using Python and Beautiful Soup to collect and analyze 
                  market data from multiple sources, saving 20+ hours of manual work weekly.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="hover:scale-110 transition-transform">Python</Badge>
                  <Badge className="hover:scale-110 transition-transform">BeautifulSoup</Badge>
                  <Badge className="hover:scale-110 transition-transform">Selenium</Badge>
                  <Badge className="hover:scale-110 transition-transform">Automation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
              <CardHeader>
                <CardTitle>Financial Data Analysis</CardTitle>
                <CardDescription>Statistical Analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Performed comprehensive financial data analysis using Excel and Python, identifying cost-saving 
                  opportunities and revenue optimization strategies resulting in 15% improvement in profit margins.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="hover:scale-110 transition-transform">Excel</Badge>
                  <Badge className="hover:scale-110 transition-transform">Python</Badge>
                  <Badge className="hover:scale-110 transition-transform">Statistics</Badge>
                  <Badge className="hover:scale-110 transition-transform">Financial Modeling</Badge>
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
          className={`container mx-auto transition-all duration-1000 delay-100 ${
            educationAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <GraduationCap className="h-8 w-8" />
            Education
          </h2>
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
            <CardHeader>
              <CardTitle className="flex items-start justify-between flex-wrap gap-2">
                <span>Bachelor of Science in Data Science</span>
                <Badge variant="secondary" className="hover:scale-110 transition-transform">2016 - 2020</Badge>
              </CardTitle>
              <CardDescription>University of Technology</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Specialized in Statistical Analysis, Machine Learning, and Database Management. 
                GPA: 3.8/4.0. Completed thesis on "Predictive Analytics in E-commerce."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/30">
        <div 
          ref={skillsAnimation.ref}
          className={`container mx-auto transition-all duration-1000 delay-200 ${
            skillsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] hover:border-primary/50">
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="hover:scale-110 transition-transform">Python</Badge>
                <Badge className="hover:scale-110 transition-transform">SQL</Badge>
                <Badge className="hover:scale-110 transition-transform">R</Badge>
                <Badge className="hover:scale-110 transition-transform">JavaScript</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] hover:border-primary/50">
              <CardHeader>
                <CardTitle>Data Tools</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="hover:scale-110 transition-transform">Tableau</Badge>
                <Badge className="hover:scale-110 transition-transform">Power BI</Badge>
                <Badge className="hover:scale-110 transition-transform">Excel</Badge>
                <Badge className="hover:scale-110 transition-transform">Google Analytics</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] hover:border-primary/50">
              <CardHeader>
                <CardTitle>Libraries & Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="hover:scale-110 transition-transform">Pandas</Badge>
                <Badge className="hover:scale-110 transition-transform">NumPy</Badge>
                <Badge className="hover:scale-110 transition-transform">scikit-learn</Badge>
                <Badge className="hover:scale-110 transition-transform">TensorFlow</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div 
          ref={contactAnimation.ref}
          className={`container mx-auto transition-all duration-1000 delay-300 ${
            contactAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Mail className="h-8 w-8" />
            Get In Touch
          </h2>
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                I'm always interested in hearing about new opportunities and projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/50 text-center">
        <p className="text-muted-foreground">
          © 2024 Anujith J Nair. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
