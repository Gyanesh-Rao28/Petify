"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import * as z from "zod";
import { useForm } from "react-hook-form";
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
import { useToast } from "@/components/ui/use-toast";

import { useEffect, useState } from "react";
import { PawPrint } from "lucide-react";
import { FileUpload } from "@/components/file-upload";

interface ProductAdminIdPageProps {
  params: {
    productAdminId: string;
  };
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required.",
  }),
  description: z.string().min(1, {
    message: "Product description is required.",
  }),
  imageUrl: z.string().min(1, {
    message: "Product image is required.",
  }),
  price: z.string().min(1, {
    message: "Product image is required.",
  }),
});

const ProductAdminIdPage = ({ params }: ProductAdminIdPageProps) => {
  const router = useRouter();

  const isAdmin = params.productAdminId === "eSFXnPK1Hz5f2Ac4g4ujQMF43M4MjD";

  if (!isAdmin) {
    router.push("/shop");

    return null;
  }

  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: '',
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/product", values);

      toast({
        title: "Product has been uploaded",
        description: (
          <>
            Wishing you and your new companion endless cuddles, wagging tails,
            and unforgettable memories together! Congratulations on your
            adoption! <PawPrint className="h-8 w-8" />
          </>
        ),
      });

      form.reset();
      router.refresh();
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
      <div className="h-screen relative pt-24 flex justify-center ">
        {/* height issuse overflow of content */}
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
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                        Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Enter product title"
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
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                        Price
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
              </div>
              <DialogFooter>
                <Button
                  disabled={isLoading}
                  className="bg-[#002A48] text-[#F7DBA7] border-2 hover:text-[#002A48] hover:bg-transparent hover:border-2 hover:border-[#002A48] rounded-lg px-1.5 py-0.5 font-medium"
                >
                  Upload Product
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ProductAdminIdPage;
