import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct, deleteProduct } from "../api/product.api";
import { QUERY_KEYS } from "../constant/querykey";

// Custom hook để quản lý các hoạt động thay đổi dữ liệu (thêm, xóa sản phẩm)
export const useProductMutation = () => {
  // `useQueryClient` là một hook để truy cập vào client của React Query,
  // cho phép chúng ta tương tác với cache, ví dụ như làm mới (invalidate) các truy vấn.
  const queryClient = useQueryClient();

  // Mutation để thêm sản phẩm
  const addMutation = useMutation({
    // `mutationFn` là hàm sẽ được gọi khi mutation được thực thi (ví dụ: `addMutation.mutate(...)`)
    mutationFn: addProduct,
    // `onSuccess` là một callback được gọi sau khi mutation thành công.
    onSuccess: () => {
      // `invalidateQueries` làm cho các truy vấn có `queryKey` khớp với `[QUERY_KEYS.PRODUCTS]` trở nên "cũ".
      // Điều này sẽ tự động kích hoạt việc lấy lại dữ liệu cho các truy vấn đó, giúp UI được cập nhật.
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRODUCTS] });
    },
  });

  // Mutation để xóa sản phẩm, logic tương tự như thêm
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRODUCTS] });
    },
  });

  // Trả về các mutation để có thể sử dụng trong các component
  return { addMutation, deleteMutation };
};
