import { SiDiscord, SiTelegram, SiX, SiLinkedin, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const socialLinks = [
    {
      icon: SiDiscord,
      label: "Discord",
      description: "Join my Discord community",
      href: "#", // Replace with your Discord invite link
    },
    {
      icon: SiTelegram,
      label: "Telegram",
      description: "Connect with me on Telegram",
      href: "#", // Replace with your Telegram link
    },
    {
      icon: SiX,
      label: "X (Twitter)",
      description: "Follow me for updates",
      href: "#", // Replace with your Twitter profile
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      description: "Professional network and updates",
      href: "#", // Replace with your LinkedIn profile
    },
  ];

  const developerLinks = [
    {
      icon: SiGithub,
      label: "GitHub",
      description: "Check out my open source projects",
      href: "#", // Replace with your GitHub profile
    },
    {
      icon: FileText,
      label: "Resume",
      description: "View my professional experience",
      href: "/resume",
    },
  ];

  return (
    <footer className="border-t mt-auto bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                  <div>
                    <p className="font-medium">{link.label}</p>
                    <p className="text-sm">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Developer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Developer Resources</h3>
            <div className="space-y-4">
              {developerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {typeof link.icon === 'string' ? (
                    <span className="h-5 w-5">{link.icon}</span>
                  ) : (
                    <link.icon className="h-5 w-5" />
                  )}
                  <div>
                    <p className="font-medium">{link.label}</p>
                    <p className="text-sm">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Feel free to reach out!</p>
              <p>Based in [Your Location]</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}