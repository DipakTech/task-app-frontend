import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { File, FileInput, MoreVertical } from "lucide-react";
import { Task } from "../TaskList";
import useDeleteTask from "@/hooks/useDeleteTask";

import { useNavigate } from "react-router-dom";

interface CellActionProps {
  data: Task;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const deleteMutation = useDeleteTask();

  const navigate = useNavigate();
  const handleDelete = async () => {
    if (data.id) {
      await deleteMutation.mutateAsync(data.id);
    } else {
      console.error("Task ID is undefined");
    }
  };

  const handleEdit = () => {
    navigate(
      `/tasks/edit/${data.id}?title=${data.title}&description=${data.description}&status=${data.status}`,
    );
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem
            onClick={handleEdit}
            className="flex items-center space-x-1 hover:cursor-pointer"
          >
            <File className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleDelete}
            className="flex items-center space-x-1 hover:cursor-pointer"
          >
            <FileInput className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
