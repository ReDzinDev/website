import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Professional Resume</h1>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="space-y-8">
          {/* Experience Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Senior Developer</h3>
                  <p className="text-muted-foreground">Tech Company • 2020 - Present</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Led development of key features</li>
                    <li>Mentored junior developers</li>
                    <li>Improved application performance by 40%</li>
                  </ul>
                </div>
                {/* Add more experience items as needed */}
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div>
                <h3 className="text-lg font-medium">Computer Science, BS</h3>
                <p className="text-muted-foreground">University Name • 2016 - 2020</p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Technical Skills</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>JavaScript/TypeScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Soft Skills</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Team Leadership</li>
                    <li>Problem Solving</li>
                    <li>Communication</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
