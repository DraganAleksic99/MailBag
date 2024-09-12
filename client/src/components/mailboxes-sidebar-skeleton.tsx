import { Mail } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MailboxesSidebarSkeleton() {
  return (
    <div className="w-full h-screen bg-background border-r">
      <div className="p-4">
        <Skeleton>
        <Button className="w-full justify-start gap-2 text-base text-transparent">
          <Mail className="w-5 h-5" />
          Compose
        </Button>
        </Skeleton>
      </div>
      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="space-y-2 p-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} className="text-transparent">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-base font-normal"
            >
              <div className="w-5 h-5 text-muted-foreground" />
              xxxxxxx
            </Button>
          </Skeleton>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}