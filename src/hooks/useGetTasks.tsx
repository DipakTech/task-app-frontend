import { getTasks } from "@/services/task.services";
import { useQuery } from "@tanstack/react-query";

export const TASKS = "TASKS";

interface GetTasksParams {
  page?: number;
  limit?: number;
}

const useGetTasks = ({ page = 1, limit = 10 }: GetTasksParams = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: [TASKS],
    queryFn: () => getTasks({ page, limit }),
  });

  return {
    data: data?.data,
    isLoading,
  };
};

export default useGetTasks;
