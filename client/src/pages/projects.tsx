import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { Code2 } from "lucide-react";

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex justify-center mb-4">
              <Code2 className="h-12 w-12" />
            </div>
            <h1 className="text-4xl font-bold">My Projects</h1>
            <p className="text-muted-foreground">
              Here are some of the projects I've worked on. Each project demonstrates
              different skills and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-64 w-full" />
                ))
              : projects?.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}