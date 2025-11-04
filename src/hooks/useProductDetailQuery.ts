import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api/product.api";
import { QUERY_KEYS } from "../constant/querykey";

// Custom hook để lấy chi tiết một sản phẩm theo ID
export const useProductDetailQuery = (id?: string) => {
  return useQuery({
    // `queryKey` bao gồm cả tên truy vấn và `id` để đảm bảo mỗi sản phẩm có một cache riêng.
    queryKey: [QUERY_KEYS.PRODUCT_DETAIL, id],
    // `queryFn` gọi hàm `fetchProductById` với `id` được truyền vào.
    // Dấu `!` khẳng định rằng `id` sẽ không phải là `undefined` ở đây, vì đã có điều kiện `enabled`.
    queryFn: () => fetchProductById(id!),
    // `enabled: !!id` là một tùy chọn quan trọng:
    // Nó đảm bảo truy vấn này sẽ KHÔNG được thực thi nếu `id` là `undefined` hoặc `null`.
    // `!!` chuyển giá trị của `id` thành boolean (true nếu có giá trị, false nếu không).
    enabled: !!id,
  });
};
