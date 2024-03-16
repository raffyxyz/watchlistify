import React from "react";
import { Img } from "./img";
import { Button } from "./button";

const ErrorNotFound: React.FC<{ reset: () => void }> = ({ reset }) => {
  return (
    <div className="flex h-[calc(100vh-56px)] items-center justify-center">
      <div className="flex flex-col space-y-4">
        <Img className="w-52" src="/images/404.svg" alt="404 Error" />
        <h1 className="text-center text-xl font-semibold">404 Error</h1>
        <h2 className="text-center text-md">Something went wrong!</h2>
        <Button
          className="w-34 m-auto"
          variant="orange"
          size="sm"
          onClick={() => reset}
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default ErrorNotFound;
