import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

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
  );
}
