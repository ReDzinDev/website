import { useEffect, useState } from "react";
import { markdownToHtml } from "@/lib/markdown";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    markdownToHtml(content).then(setHtml);
  }, [content]);

  return (
    <div
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
