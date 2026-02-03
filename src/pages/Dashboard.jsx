import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavList from '../components/NavList';
import EditModal from '../components/EditModal/EditModal';
import useOnsaleStore from '../stores/useOnsaleStore';
import useProductsStore from '../stores/useProductsStore';

function Dashboard() {
  const [open, isOpen] = useState(false);
  const [tempProduct, setTempProduct] = useState(null);
  const { updateProduct: updateOnsaleProduct } = useOnsaleStore();
  const { updateProduct: updateProductsProduct } = useProductsStore();

  const handleOpenModal = (item) => {
    setTempProduct(item);
    isOpen(true);
  };

  const handleCloseModal = () => {
    isOpen(false);
  };

  const handleSaveModal = (tempData) => {
    if (tempData.productType === 'onsale') {
      updateOnsaleProduct(tempData);
    } else if (tempData.productType === 'product') {
      updateProductsProduct(tempData);
    }
    isOpen(false);
  };
  return (
    <>
      <div className="flex">
        <div className="min-h-[calc(100vh_-_193px)] w-[220px] flex-none border-r border-slate-200 ">
          <NavList />
        </div>
        <div className="flex-auto p-4">
          <Outlet context={{ handleOpenModal }} />
        </div>
      </div>
      <EditModal
        open={open}
        handleCloseModal={handleCloseModal}
        tempProduct={tempProduct}
        handleSaveModal={handleSaveModal}
      />
    </>
  );
}
export default Dashboard;
