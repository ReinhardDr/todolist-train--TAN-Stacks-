import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/product.api";
import { QUERY_KEYS } from "../constant/querykey";

// Custom hook để lấy danh sách tất cả sản phẩm
export const useProductsQuery = () => {
  // Sử dụng `useQuery` của TanStack Query để quản lý việc lấy dữ liệu
  return useQuery({
    // `queryKey` là một mảng định danh duy nhất cho truy vấn này.
    // React Query sẽ sử dụng key này để cache và quản lý dữ liệu.
    queryKey: [QUERY_KEYS.PRODUCTS],
    // `queryFn` là hàm sẽ được gọi để lấy dữ liệu. Nó phải trả về một Promise.
    queryFn: fetchProducts,
  });
};
