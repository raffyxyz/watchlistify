"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import { IconBrandGoogleFilled, IconBrandGithub } from "@tabler/icons-react";

const Login = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { data: session } = useSession();

  //   React.useEffect(() => {
  //     if (session) {
  //       router.push("/");
  //       //   router.refresh();
  //     }
  //   }, [session]);

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-orange-400 text-2xl md:text-3xl lg:text-4xl font-semibold">
        Login to Your Account
      </h1>
      <h3 className="mt-4 mb-10 text-center text-lg md:text-2xl">
        Create an awesome library of drama&apos;s and anime.
      </h3>

      <Button
        className="w-8/12 m-auto"
        variant="secondary"
        onClick={() => {
          toast({
            title: "Not implemented yet. 😅",
            description:
              "Rest assured that I'm working on it to synchronize your library.",
          });
        }}
      >
        <IconBrandGithub className="mr-2 h-4 w-4" />
        Sign up with Github
      </Button>
      <p className="text-center text-muted-foreground text-xs mt-2 mb-2">Or</p>
      <Button
        className="w-8/12 m-auto"
        variant="default"
        onClick={() => {
          toast({
            title: "Not implemented yet. 😅",
            description:
              "Rest assured that I'm working on it to synchronize your library.",
          });
        }}
      >
        <IconBrandGoogleFilled className="mr-2 h-4 w-4" />
        Sign up with Google
      </Button>
    </div>
  );
};

export default Login;
