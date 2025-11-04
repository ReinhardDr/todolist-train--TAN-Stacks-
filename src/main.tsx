import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./routes/Router";

// Tạo một instance của QueryClient. Đây là trái tim của React Query,
// nó quản lý tất cả các cache và trạng thái của các truy vấn.
const queryClient = new QueryClient();

// Sử dụng `ReactDOM.createRoot` để render ứng dụng React.
// Đây là API mới từ React 18.
ReactDOM.createRoot(document.getElementById("root")!).render(
  // `React.StrictMode` là một công cụ để phát hiện các vấn đề tiềm ẩn trong ứng dụng.
  <React.StrictMode>
    {/* 
      `QueryClientProvider` cung cấp `queryClient` cho tất cả các component con.
      Bất kỳ component nào bên trong đều có thể sử dụng các hook của React Query.
    */}
    <QueryClientProvider client={queryClient}>
      {/* `AppRouter` là component chứa toàn bộ cấu hình định tuyến của ứng dụng. */}
      <AppRouter />
    </QueryClientProvider>
  </React.StrictMode>
);
