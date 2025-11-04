import { useState } from "react";
import { useProductsQuery } from "../hooks/useProductsQuery";
import { useProductDetailQuery } from "../hooks/useProductDetailQuery";

// Lưu ý: Đây là một trang ví dụ/thử nghiệm, không được dùng trong router chính.
export default function QueryKey() {
    // Sử dụng custom hook `useProductsQuery` để lấy danh sách sản phẩm.
    // `data: products` đổi tên biến `data` thành `products` để code dễ đọc hơn.
    // `isLoading`, `isError` là các trạng thái của truy vấn.
    // `refetch` là hàm để thực hiện lại truy vấn một cách thủ công.
    const { data: products, isLoading, isError, refetch } = useProductsQuery();

    // Sử dụng hook `useState` của React để lưu trữ ID của sản phẩm đang được chọn.
    // Giá trị khởi tạo là `null` vì chưa có sản phẩm nào được chọn.
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Sử dụng custom hook `useProductDetailQuery` để lấy chi tiết sản phẩm.
    // Truyền vào `selectedId` làm tham số. Hook này chỉ chạy khi `selectedId` có giá trị.
    const { data: productDetail } = useProductDetailQuery(selectedId?.toString() ?? undefined);

    // Xử lý trạng thái tải dữ liệu: nếu `isLoading` là true, hiển thị thông báo.
    if (isLoading) return <div>Loading...</div>;
    // Xử lý trạng thái lỗi: nếu `isError` là true, hiển thị thông báo lỗi.
    if (isError) return <div>Error</div>;

    return (
        <div style={{ padding: 20 }}>
            <h2>Danh sách sản phẩm</h2>
            {/* Nút này cho phép người dùng tải lại danh sách sản phẩm bằng cách gọi hàm `refetch` */}
            <button onClick={() => refetch()}>Tải lại</button>

            <ul>
                {/* Dùng hàm `map` để lặp qua mảng `products` và render danh sách */}
                {products?.map((product: any) => (
                    <li
                        key={product.id}
                        style={{ cursor: "pointer", marginTop: 8 }}
                        // Khi người dùng click vào một sản phẩm, cập nhật `selectedId` bằng ID của sản phẩm đó.
                        onClick={() => setSelectedId(product.id)}
                    >
                        {product.title}
                    </li>
                ))}
            </ul>

            {/* Phần này chỉ hiển thị khi có một sản phẩm được chọn (`selectedId` có giá trị) và dữ liệu chi tiết (`productDetail`) đã được tải về. */}
            {selectedId && productDetail && (
                <div>
                    <h2>{productDetail.title}</h2>
                    <p>{productDetail.description}</p>
                    <p>{productDetail.price}</p>
                </div>
            )}
        </div>
    );
}