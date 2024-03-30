
'use client'

import axios from "axios";
import * as z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FileUpload } from "../file-upload";
import { PawPrint } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  type: z.string().min(1, {
    message: " Pet type is required.",
  }),
  imageUrl: z.string().min(1, {
    message: "Pet image is required.",
  }),
  breed: z.string().min(1, {
    message: "Pet breed is required.",
  }),
  age: z.string().min(1, {
    message: "Pet age is required.",
  }),
  description: z.string().min(1, {
    message: "Pet description is required.",
  }),
  location: z.string().min(1, {
    message: "Pet location is required.",
  }),
});

const DonationBtn = () => {

  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "",
      breed: "",
      age: "",
      imageUrl: "",
      description: "",
      location: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    const res = await axios.post("/api/donate", values);

    form.reset();
    router.refresh();
    toast({
      title: "Congratulations!",
      description: (
        <>
          Wishing you and your new companion endless cuddles, wagging tails, and
          unforgettable memories together! Congratulations on your adoption!{" "}
          <PawPrint className="h-8 w-8" />
        </>
      ),
    });

    setTimeout(() => {
      window.location.reload(); 
    }, 1500);
  } catch (error) {
    console.log(error);
  }
};

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div>
        {/* height issuse overflow of content */}
        <Dialog>
          <DialogTrigger>Donate</DialogTrigger>
          <DialogContent className="overflow-auto ">
            <DialogHeader>
              <DialogTitle className="w-full text-center text-3xl">
                Enter pet details
              </DialogTitle>
              <DialogDescription>
                This action cannot be undone. (to be done - Mock text)
              </DialogDescription>
            </DialogHeader>
            {/* form */}

            <div className="overflow-y-auto flex items-center justify-center flex-wrap">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3 overflow-y-auto h-4/5 w-full"
                >
                  <div className="space-y-1 px-6 ">
                    <div className="flex items-center justify-center text-center p-4 bg-emerald-50">
                      <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <FileUpload
                                endpoint="petImage"
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* pet name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              disabled={isLoading}
                              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                              placeholder="Enter pet name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* pet type */}
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                            Type
                          </FormLabel>
                          <FormControl>
                            <Input
                              disabled={isLoading}
                              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                              placeholder="Enter pet name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* pet Breed */}
                    <FormField
                      control={form.control}
                      name="breed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                            Breed
                          </FormLabel>
                          <FormControl>
                            <Input
                              disabled={isLoading}
                              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                              placeholder="Enter pet name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* pet Age */}
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                            Age
                          </FormLabel>
                          <FormControl>
                            <Input
                              disabled={isLoading}
                              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                              placeholder="Enter pet age (in months)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* pet Description */}
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                            Description
                          </FormLabel>
                          <FormControl>
                            <Input
                              disabled={isLoading}
                              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                              placeholder="Enter pet description"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* pet Location */}
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                            Location
                          </FormLabel>
                          <FormControl>
                            <Input
                              disabled={isLoading}
                              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                              placeholder="Enter pet location"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <DialogFooter>
                    <Button
                      disabled={isLoading}
                      className="bg-[#002A48] text-[#F7DBA7] border-2 hover:text-[#002A48] hover:bg-transparent hover:border-2 hover:border-[#002A48] rounded-lg px-1.5 py-0.5 font-medium"
                    >
                      Upload
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default DonationBtn