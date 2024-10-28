import { axiosInstance } from "./base/axiosBaseInstance";

export const getTasks = () => axiosInstance.get(`/tasks`);

export const addTask = (task: {
  title: string;
  description: string;
  status: string;
}) => axiosInstance.post(`/tasks`, task);

export const deleteTask = (id: string) => axiosInstance.delete(`/tasks/${id}`);

export const updateTask = (
  id: string,
  task: {
    title: string;
    description: string;
    status: string;
  },
) => axiosInstance.put(`/tasks/${id}`, task);
