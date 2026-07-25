
import Shop from "./pages/Shop";
import Brands from "./pages/Brands";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import {Routes,Route} from 'react-router-dom'

export default function App() {
  return (

    <>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/brands" element={<Brands />} />
  <Route path="/blog" element={<Blog />} />
</Routes>
    </>
  );
}