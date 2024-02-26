import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronsLeft, ChevronRight, ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { useRecentPagination } from "@/states/useRecentPagination";

const RecentUpdatesPagination: React.FC<{
  className?: string;
  hasNextPage: boolean | undefined;
}> = ({ className, hasNextPage }) => {
  const [page, setPage] = useRecentPagination((state) => [
    state.page,
    state.setPage,
  ]);
  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        {page !== 1 ? (
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              onClick={() => setPage(1)}
            >
              <ChevronsLeft size={18} />
            </PaginationLink>
          </PaginationItem>
        ) : null}
        <PaginationItem>
          <PaginationLink
            className="cursor-pointer"
            onClick={() => setPage(page === 1 ? page : page - 1)}
          >
            <ChevronLeft size={18} />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {page === 1 ? (
            <PaginationEllipsis />
          ) : (
            <PaginationLink
              className="cursor-pointer"
              onClick={() => setPage(page - 1)}
            >
              {page - 1}
            </PaginationLink>
          )}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="cursor-pointer" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {hasNextPage ? (
            <PaginationLink
              className="cursor-pointer"
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </PaginationLink>
          ) : null}
        </PaginationItem>
        <PaginationItem>
          {/* <PaginationNext
            className="cursor-pointer"
            onClick={() => setPage(hasNextPage ? page + 1 : page)}
          /> */}
          <PaginationLink
            className="cursor-pointer"
            onClick={() => setPage(hasNextPage ? page + 1 : page)}
          >
            <ChevronRight size={18} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default RecentUpdatesPagination;
