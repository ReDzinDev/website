import { DiscordProfile } from "@/components/profile/discord-profile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ExternalLink, Code, BookOpen, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Portfolio</h1>
            <DiscordProfile />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="text-muted-foreground">
                    I'm a full-stack developer with a passion for building modern web applications.
                    With expertise in React, Node.js, and TypeScript, I create scalable and
                    maintainable solutions for complex problems.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">What I Do</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Build responsive and accessible web applications
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-5 w-5" />
                      Design and implement RESTful APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Share knowledge through technical writing
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Create efficient database schemas
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Write clean, maintainable code
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Let's Work Together</h2>
            <p className="text-muted-foreground">
              Interested in collaborating or have a project in mind?
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/projects">
                <Button variant="default" size="lg">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}