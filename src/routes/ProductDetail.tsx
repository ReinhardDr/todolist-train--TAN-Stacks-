import { Link, useParams } from "@tanstack/react-router";
import { useProductDetailQuery } from "../hooks/useProductDetailQuery";

// Component hiển thị chi tiết một sản phẩm
export const ProductDetail = () => {
  // Dùng `useParams` của TanStack Router để lấy tham số `id` từ URL.
  // Ví dụ: nếu URL là /products/123, `id` sẽ là "123".
  const { id } = useParams({ from: "/products/$id" });
  
  // Sử dụng custom hook để lấy dữ liệu chi tiết của sản phẩm dựa trên `id`.
  const { data, isLoading, isError } = useProductDetailQuery(id);

  // Xử lý trạng thái tải và lỗi
  if (isLoading) return <p>Đang tải sản phẩm...</p>;
  if (isError) return <p>Lỗi khi tải chi tiết sản phẩm.</p>;

  return (
    <div style={{ padding: 20 }}>
      {/* Liên kết để quay lại trang danh sách sản phẩm */}
      <Link to="/products" className="text-blue-500 hover:underline">
        Quay lại danh sách
      </Link>

      {/* Hiển thị thông tin chi tiết của sản phẩm */}
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} width={150} />
      <p><b>Giá:</b> ${data.price}</p>
      <p><b>Mô tả:</b> {data.description}</p>
    </div>
  );
};
