import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./button";

const ErrorNotFound = () => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col space-y-4">
        <img className="w-52" src="/images/404.svg" alt="404 Error" />
        <h1 className="text-center text-xl font-semibold">404 Error</h1>
        <h2 className="text-center text-md">Something went wrong!</h2>
        <Button
          className="w-34 m-auto"
          variant="orange"
          size="sm"
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorNotFound;
