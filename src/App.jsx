import { Routes, Route } from 'react-router-dom';
// components
import Header from './components/basic/Header.jsx';
import Footer from './components/basic/Footer.jsx';
// pages
import Dashboard from './pages/Dashboard.jsx';
import Error from './pages/Error.jsx';
import NotFound from './pages/NotFound.jsx';
import OnsaleBorder from './pages/Dashboard/OnsaleBorder.jsx';
import OnsaleAds from './pages/Dashboard/OnsaleAds.jsx';
import ProductBorder from './pages/Dashboard/ProductBorder.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<OnsaleBorder />} />
          <Route path="onsale-border" element={<OnsaleBorder />}></Route>
          <Route path="onsale-ads" element={<OnsaleAds />}></Route>
          <Route path="product-border" element={<ProductBorder />}></Route>
        </Route>
        <Route path="error" element={<Error />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
