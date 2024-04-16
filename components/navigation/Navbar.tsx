
import { Menu } from "lucide-react";
import { LogIn } from "lucide-react";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";


import { SignInButton } from "@clerk/nextjs";
import { currentProfile } from "@/lib/current-profile";


import UserAvatar from "./UserProfile";

const Navbar = async() => {

    const profile = await currentProfile()

    

    return (
      <>
        <header className="bg-transparent text-[#002A48] fixed w-full z-10">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1 z-50">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold">Petify</span>{" "}
                {/*Text Change*/}
              </a>
            </div>

            <div className="hidden lg:flex lg:gap-x-28">
              <a
                href="/adoption"
                className="text-l font-semibold leading-6 text-[#002A48]"
              >
                <Button variant="link">Adoption</Button>
              </a>
              <a
                href="/donation"
                className="text-l font-semibold leading-6 text-[#002A48]"
              >
                <Button variant="link">Donation</Button>
              </a>
              <a
                href="/shop"
                className="text-l font-semibold leading-6 text-[#002A48]"
              >
                <Button variant="link"> Food & Accsessiors</Button>
              </a>
              <a
                href="/cart"
                className="text-l font-semibold leading-6 text-[#002A48]"
              >
                <Button variant="link">Cart</Button>
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {profile ? (
                <div>
                  <UserAvatar src={profile.imageUrl || undefined} />
                </div>
              ) : (
                <Button className="bg-[#002A48] border-2 border-transparent hover:bg-transparent hover:text-[#002A48] hover:border-[#002A48] hover:border-2">
                  <SignInButton>
                    <p>Log in</p>
                  </SignInButton>
                  <LogIn className="ml-2" />
                </Button>
              )}
            </div>

            {/* sidebar popover */}

            {
              <Popover>
                <PopoverTrigger>
                  <Menu className="lg:hidden" />
                </PopoverTrigger>
                <PopoverContent align="start" className="w-80">
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        <a
                          href="/adoption"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#002A48] hover:bg-amber-50"
                        >
                          Adoption
                        </a>
                        <a
                          href="/donation"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#002A48] hover:bg-amber-50"
                        >
                          Donation
                        </a>
                        <a
                          href="/shop"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#002A48] hover:bg-amber-50"
                        >
                          Food & Accsessiors
                        </a>
                        <a
                          href="/cart"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#002A48] hover:bg-amber-50"
                        >
                          Cart
                        </a>
                      </div>
                      <div className="py-6">
                        {profile ? (
                          <>
                            <div className="flex justify-around">
                              <div>
                                <UserAvatar
                                  src={profile.imageUrl || undefined}
                                />
                              </div>
                              {profile.email}
                            </div>
                          </>
                        ) : (
                          <Button className="bg-[#002A48] hover:bg-[#F7DBA7] hover:text-[#002A48]">
                            <SignInButton>
                              <p>Log in</p>
                            </SignInButton>
                            <LogIn className="ml-2" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            }
          </nav>
        </header>
      </>
    );
};

export default Navbar;
