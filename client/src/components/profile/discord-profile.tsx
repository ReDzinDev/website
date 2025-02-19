import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function DiscordProfile() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-background" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-sm text-muted-foreground">johndoe#1234</p>
              </div>
              <Badge variant="secondary">Developer</Badge>
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground">About Me</h3>
                <p className="mt-1">
                  Full-stack developer passionate about building great user experiences.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground">Roles</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  <Badge>Frontend</Badge>
                  <Badge>Backend</Badge>
                  <Badge>DevOps</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase text-muted-foreground">Member Since</h3>
                <p className="mt-1 text-sm">March 2024</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
