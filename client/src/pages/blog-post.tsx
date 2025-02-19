import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import { MarkdownContent } from "@/components/blog/markdown-content";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { calculateReadingTime } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${params.slug}`],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <Skeleton className="h-12 w-3/4" />
          <div className="space-x-4">
            <Skeleton className="h-6 w-32 inline-block" />
            <Skeleton className="h-6 w-32 inline-block" />
          </div>
          <Skeleton className="h-96" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Blog post not found</h1>
        </div>
      </div>
    );
  }

  const formattedDate = post.createdAt
    ? format(new Date(post.createdAt), "MMMM d, yyyy")
    : "No date";
  
  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="container mx-auto px-4 py-24">
      <article className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <time>{formattedDate}</time>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </header>
        <MarkdownContent content={post.content} />
      </article>
    </div>
  );
}
