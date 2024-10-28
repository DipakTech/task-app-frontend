import { getTasks } from "@/services/task.services";
import { useQuery } from "@tanstack/react-query";

export const TASKS = "TASKS";

const useGetTasks = () => {
  const { data, isLoading } = useQuery({
    queryKey: [TASKS],
    queryFn: () => getTasks(),
  });

  return {
    data: data?.data,
    isLoading,
  };
};

export default useGetTasks;
