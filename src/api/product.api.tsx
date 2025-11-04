import axios from "axios";

// Tạo một instance của axios với cấu hình cơ bản.
// `baseURL` được lấy từ biến môi trường, giúp dễ dàng thay đổi API endpoint giữa các môi trường (development, production).
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Hàm gọi API để lấy danh sách tất cả sản phẩm.
export const fetchProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

// Hàm gọi API để lấy chi tiết một sản phẩm theo ID.
export const fetchProductById = async (id: string) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

// Hàm gọi API để thêm một sản phẩm mới.
export const addProduct = async (product: any) => {
  const { data } = await api.post("/products", product);
  return data;
};

// Hàm gọi API để xóa một sản phẩm theo ID.
export const deleteProduct = async (id: number) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};
