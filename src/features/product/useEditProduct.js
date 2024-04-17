import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

useMutation

export const useEditProduct = ({ onSuccess }) => {
    return useMutation({
        mutationFn: async (body) => {
          const productResponse = await axiosInstance.patch(`/products/${body.id}`);
              
          return productResponse;
        },
        onSuccess,
      })
};