import * as React from "react";

import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  loading?: boolean;
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, icon, loading, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input pl-1 pr-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1",
          className
        )}
      >
        <input
          {...props}
          type="search"
          ref={ref}
          className="w-full p-2 bg-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
        {loading ? <Spinner size={16} /> : icon}
      </div>
    );
  }
);

Search.displayName = "Search";

export { Search };
