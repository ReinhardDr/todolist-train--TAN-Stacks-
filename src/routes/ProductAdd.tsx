import { useState } from "react";
import { useProductMutation } from "../hooks/useProductMutation";
import { Link } from "@tanstack/react-router";

// Component trang thêm sản phẩm mới
export const ProductAdd = () => {
  // Lấy hàm `addMutation` từ custom hook để thực hiện việc thêm sản phẩm
  const { addMutation } = useProductMutation();
  
  // Sử dụng `useState` để quản lý trạng thái cho các trường input của form
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Hàm xử lý khi người dùng nhấn nút "Thêm"
  const handleAdd = () => {
    // Gọi hàm `mutate` của `addMutation` với dữ liệu sản phẩm mới
    addMutation.mutate({
      title,
      price: Number(price), // Chuyển đổi giá thành kiểu số
      description,
      // Các trường này đang được gán giá trị cứng, có thể thay đổi sau
      category: "test",
      image: "https://via.placeholder.com/150",
    });
    
    // Xóa trống các trường input sau khi thêm thành công
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <div style={{ padding: 20 }}>
      <Link to="/products">← Quay lại</Link>
      <h2>Thêm sản phẩm mới</h2>

      <div style={{ marginTop: 16 }}>
        {/* Các trường input cho người dùng nhập thông tin sản phẩm */}
        <input
          placeholder="Tên sản phẩm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Giá"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginLeft: 10 }}
        />
        <input
          placeholder="Mô tả"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginLeft: 10 }}
        />
        {/* Nút "Thêm". Nút này sẽ bị vô hiệu hóa khi đang trong quá trình thêm (`isPending` là true) */}
        <button
          onClick={handleAdd}
          style={{ marginLeft: 10 }}
          disabled={addMutation.isPending}
        >
          {addMutation.isPending ? "Đang thêm..." : "Thêm"}
        </button>
      </div>
    </div>
  );
};
