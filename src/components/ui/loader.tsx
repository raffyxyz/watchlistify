import React from "react";
import { Spinner } from "./spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <Spinner className="text-orange-400" size={45} />
    </div>
  );
};

export default Loader;
