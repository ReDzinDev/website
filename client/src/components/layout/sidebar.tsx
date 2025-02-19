import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  return (
    <Card className="h-full w-full">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-sm text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">About Me</h3>
            <p className="text-sm text-muted-foreground">
              Passionate developer with expertise in React, Node.js, and TypeScript.
              Building beautiful and functional web applications.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Node.js</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>Tailwind CSS</Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 john.doe@example.com</p>
              <p>📍 San Francisco, CA</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
