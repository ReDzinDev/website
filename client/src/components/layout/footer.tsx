import { SiDiscord, SiTelegram, SiX, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: SiDiscord,
      label: "Discord",
      href: "#", // Replace with your Discord invite link
    },
    {
      icon: SiTelegram,
      label: "Telegram",
      href: "#", // Replace with your Telegram link
    },
    {
      icon: SiX,
      label: "X (Twitter)",
      href: "#", // Replace with your Twitter profile
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      href: "#", // Replace with your LinkedIn profile
    },
  ];

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Button variant="ghost" size="icon">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </Button>
              </a>
            ))}
            <a
              href="/resume" // We'll create this route next
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Button variant="ghost" size="icon">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </Button>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}