import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Botavatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src="/logo2.png" />
    </Avatar>
  );
};
