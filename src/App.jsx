import { AuthProvider } from "./hooks/contextAPI";
import About from "./hooks/contextAPI/About";
import Home from "./hooks/contextAPI/Home";
import Product from "./hooks/contextAPI/Product";

function App() {

  return (
    <div className="p-24">
      <h2 className="text-3xl text-red-500">Hello</h2>
      <AuthProvider>
          <Home></Home>
          <About></About>
          <Product></Product>
      </AuthProvider>
    </div>
  )
}

export default App
AuthProvider