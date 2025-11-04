import { Link } from "@tanstack/react-router";
import { useProductsQuery } from "../hooks/useProductsQuery";
import { useProductMutation } from "../hooks/useProductMutation";

// Component hiển thị danh sách sản phẩm
export const ProductList = () => {
  // Lấy danh sách sản phẩm, cùng với trạng thái tải và lỗi từ custom hook
  const { data, isLoading, isError } = useProductsQuery();
  // Lấy hàm `deleteMutation` từ custom hook để thực hiện việc xóa sản phẩm
  const { deleteMutation } = useProductMutation();

  // Nếu đang tải, hiển thị thông báo
  if (isLoading) return <p>Đang tải dữ liệu...</p>;
  // Nếu có lỗi, hiển thị thông báo lỗi
  if (isError) return <p>Lỗi tải dữ liệu!</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách sản phẩm</h2>
      {/* Liên kết đến trang thêm sản phẩm mới */}
      <Link to="/products/new">Thêm sản phẩm mới</Link>

      <ul style={{ marginTop: 16 }}>
        {/* Lặp qua danh sách sản phẩm và hiển thị từng mục */}
        {data?.map((p: any) => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            {/* Liên kết đến trang chi tiết của sản phẩm */}
            <Link to={`/products/${p.id}`} className="text-blue-500 hover:underline">
              {p.title}
            </Link>
            {/* Nút xóa sản phẩm. Khi click, gọi hàm `mutate` của `deleteMutation` với ID sản phẩm */}
            <button
              style={{ marginLeft: 8, color: "red" }}
              onClick={() => deleteMutation.mutate(p.id)}
            >
              Xoa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
