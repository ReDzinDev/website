import { useQuery } from "@tanstack/react-query";
import { BlogCard } from "@/components/blog/blog-card";
import type { BlogPost } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-48 w-full" />
            ))
          : posts?.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
    </div>
  );
}
