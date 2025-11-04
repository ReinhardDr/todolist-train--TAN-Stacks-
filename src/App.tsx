/**
 * @file App.tsx
 * @description Đây là một thành phần React mẫu được tạo bởi Vite.
 * Nó không được sử dụng trong luồng chính của ứng dụng này vì `main.tsx` đã render trực tiếp `AppRouter`.
 * Thành phần này chỉ mang tính chất minh họa cho một ứng dụng React cơ bản.
 *
 * Thư viện sử dụng:
 * - react (useState): Hook của React để quản lý trạng thái cục bộ trong component.
 */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
