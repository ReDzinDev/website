import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import type { BlogPost } from "@shared/schema";
import { Link } from "wouter";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.createdAt?.toISOString()}>
              {post.createdAt ? format(new Date(post.createdAt), "MMMM d, yyyy") : "No date"}
            </time>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}