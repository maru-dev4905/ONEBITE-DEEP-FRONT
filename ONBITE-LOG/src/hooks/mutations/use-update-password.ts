import { updatePassowrd } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useUpdatePassword(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: updatePassowrd,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
