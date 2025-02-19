import { 
  BlogPost, InsertBlogPost,
  Project, InsertProject,
  Message, InsertMessage
} from "@shared/schema";

export interface IStorage {
  // Blog posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;

  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private blogPosts: Map<number, BlogPost>;
  private projects: Map<number, Project>;
  private messages: Map<number, Message>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.blogPosts = new Map();
    this.projects = new Map();
    this.messages = new Map();
    this.currentIds = { blogPosts: 1, projects: 1, messages: 1 };

    // Add some sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const sampleProjects: InsertProject[] = [
      {
        title: "E-commerce Platform",
        description: "Built a full-stack e-commerce platform with React and Node.js",
        link: null,
        image: null,
        technologies: ["React", "Node.js", "PostgreSQL"]
      }
    ];

    const sampleBlogPosts: InsertBlogPost[] = [
      {
        title: "Getting Started with React",
        slug: "getting-started-with-react",
        content: "# Introduction\nReact is a popular JavaScript library...",
        excerpt: "Learn the basics of React and start building modern web applications.",
        published: true
      }
    ];

    sampleProjects.forEach(project => this.createProject(project));
    sampleBlogPosts.forEach(post => this.createBlogPost(post));
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentIds.blogPosts++;
    const blogPost: BlogPost = {
      ...post,
      id,
      createdAt: new Date(),
      published: post.published ?? true
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.currentIds.projects++;
    const newProject: Project = {
      ...project,
      id,
      link: project.link ?? null,
      image: project.image ?? null,
      technologies: project.technologies ?? []
    };
    this.projects.set(id, newProject);
    return newProject;
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const id = this.currentIds.messages++;
    const newMessage: Message = {
      ...message,
      id,
      createdAt: new Date()
    };
    this.messages.set(id, newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();