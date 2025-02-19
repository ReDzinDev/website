import { DiscordProfile } from "@/components/profile/discord-profile";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Portfolio</h1>
        <DiscordProfile />
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>About Me</h2>
          <p>
            I'm a full-stack developer with a passion for building modern web applications.
            With expertise in React, Node.js, and TypeScript, I create scalable and
            maintainable solutions for complex problems.
          </p>

          <h2>What I Do</h2>
          <ul>
            <li>Build responsive and accessible web applications</li>
            <li>Design and implement RESTful APIs</li>
            <li>Create efficient database schemas</li>
            <li>Write clean, maintainable code</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
