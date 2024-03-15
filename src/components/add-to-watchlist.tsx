import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Spinner } from "./ui/spinner";
import { Bookmark } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import { createWatchList } from "@/app/actions/create-watchlist";

interface AddToWatchListProps {
  listId: string;
  title: string;
  image: string;
  type: "anime" | "drama";
}

const initialState = {
  message: "",
  errors: [],
};

function Submit() {
  const status = useFormStatus();
  return (
    <Button type="submit" variant="secondary">
      {status.pending ? (
        <Spinner className="mr-2" size={16} />
      ) : (
        <Bookmark className="mr-2 h-4 w-4" strokeWidth="3px" />
      )}
      WatchList
    </Button>
  );
}

const AddToWatchList: React.FC<AddToWatchListProps> = ({
  listId,
  title,
  image,
  type,
}) => {
  const { toast } = useToast();
  const router = useRouter();
  const [state, formAction] = useFormState(createWatchList, initialState);

  useEffect(() => {
    if (state.message === "success") {
      window.location.reload();
      toast({ description: "Added successfully." });
    } else if (state.message === "login") {
      //   console.log(state.message);
      router.push(`/login?ref=${encodeURIComponent(`/anime/${listId}`)}`);
    } else if (state.message === "error") {
      toast({ description: "Mission failed." });
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input value={listId} name="listId" hidden readOnly />
      <input value={title} name="title" hidden readOnly />
      <input value={image} name="image" hidden readOnly />
      <input value={type} name="type" hidden readOnly />
      <input value="Watching" name="status" hidden readOnly />
      <Submit />
    </form>
  );
};

export default AddToWatchList;
