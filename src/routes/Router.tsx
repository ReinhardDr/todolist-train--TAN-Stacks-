import {  Outlet,  Route,  RootRoute,  RouterProvider,  createRouter,} from "@tanstack/react-router";
import { ProductList } from "./ProductList";
import { ProductDetail } from "./ProductDetail";
import { ProductAdd } from "./ProductAdd";

// Tạo route gốc (root route) cho ứng dụng.
// Mọi route khác sẽ là con của route này.
const rootRoute = new RootRoute({
  // Component layout chung, `<Outlet />` là nơi các route con sẽ được render.
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
  // Component hiển thị khi không tìm thấy route nào khớp.
  notFoundComponent: () => <div style={{ padding: 20 }}>Trang không tồn tại.</div>,
});

// Route cho trang chủ, đường dẫn là "/"
const indexRoute = new Route({
  getParentRoute: () => rootRoute, // Xác định route cha
  path: "/",
  component: ProductList, // Component sẽ được render
});

// Route cho trang danh sách sản phẩm, đường dẫn là "/products"
const productsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductList,
});

// Route cho trang chi tiết sản phẩm.
// "$id" là một tham số động, sẽ được truy cập trong component ProductDetail.
const productDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/products/$id",
  component: ProductDetail,
});

// Route cho trang thêm sản phẩm mới.
const productAddRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/products/new",
  component: ProductAdd,
});

// Xây dựng cây route bằng cách thêm các route con vào route gốc.
const routeTree = rootRoute.addChildren([  indexRoute,  productsRoute,  productDetailRoute,  productAddRoute,]);

// Tạo đối tượng router với cây route đã định nghĩa.
export const router = createRouter({ routeTree });

// Component `AppRouter` để bao bọc và cung cấp router cho toàn bộ ứng dụng.
export function AppRouter() {
  return <RouterProvider router={router} />;
}
