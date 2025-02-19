import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertMessageSchema, insertBlogPostSchema, insertProjectSchema } from "@shared/schema";
import fs from "fs/promises";
import path from "path";
import { ZodError } from "zod";

export async function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  // Theme update endpoint
  app.post("/api/theme", async (req, res) => {
    try {
      const themeFilePath = path.resolve(process.cwd(), "theme.json");
      await fs.writeFile(themeFilePath, JSON.stringify(req.body, null, 2));
      res.json({ message: "Theme updated successfully" });
    } catch (error) {
      console.error("Failed to update theme:", error);
      res.status(500).json({ message: "Failed to update theme" });
    }
  });

  // Blog routes - read only for public access
  app.get("/api/blog", async (_req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts.filter(post => post.published));
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post || !post.published) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });


  // Project routes - read only for public access
  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const project = await storage.getProject(Number(req.params.id));
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  // Contact form route with validation
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertMessageSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid message data",
          errors: (result.error as ZodError).errors 
        });
      }

      const message = await storage.createMessage(result.data);
      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  return httpServer;
}