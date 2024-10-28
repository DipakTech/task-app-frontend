import { PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/tasks/new")}
      size="sm"
      className="h-7 gap-1"
    >
      <PlusCircle className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Add Product
      </span>
    </Button>
  );
};

export default AddTask;
