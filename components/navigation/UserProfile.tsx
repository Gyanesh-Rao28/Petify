

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SignOutButton } from "@clerk/nextjs";

interface UserAvatarProps {
  src?: string;
}

const UserAvatar = ({ src }: UserAvatarProps) => {
  return (
    <>
      <Popover>
        <PopoverTrigger className="p-0.5 rounded-full ring-2 ring-[#002A48]">
          <Avatar className="h-7 w-7 md:h-10 md:w-10">
            <AvatarImage src={src} />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-64" side="left" align="start">
          <a
            href="/Profile"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#002A48] hover:bg-amber-50"
          >
            Profile
          </a>
          <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#002A48] hover:bg-amber-50">
            <SignOutButton />
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default UserAvatar