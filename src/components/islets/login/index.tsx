"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  IconBrandGoogleFilled,
  IconBrandFacebookFilled,
} from "@tabler/icons-react";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  //   React.useEffect(() => {
  //     if (session) {
  //       router.push("/");
  //       //   router.refresh();
  //     }
  //   }, [session]);

  return (
    <div className="mt-20 flex flex-col justify-center w-full md:w-[700px] m-auto">
      <h1 className="mt-8 md:mt-16 text-center text-2xl md:text-3xl lg:text-5xl font-semibold">
        Login to Your Account
      </h1>
      <h3 className="mt-4 mb-10 text-center text-2xl font-semibold">
        Sign in to create an awesome library of drama's and anime.
      </h3>

      <Button
        className="w-9/12 m-auto"
        variant="facebook"
        onClick={() => signIn("github")}
      >
        <IconBrandFacebookFilled className="mr-2 h-4 w-4" />
        Sign up with Facebook
      </Button>
      <p className="text-center text-muted-foreground text-xs mt-2 mb-2">Or</p>
      <Button
        className="w-9/12 m-auto"
        variant="orange"
        onClick={() => signIn("google")}
      >
        <IconBrandGoogleFilled className="mr-2 h-4 w-4" />
        Sign up with Google
      </Button>
    </div>
  );
};

export default Login;
