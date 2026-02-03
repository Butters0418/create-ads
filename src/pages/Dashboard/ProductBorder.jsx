import { useState } from 'react';
import useProductsStore, {
  backgroundThemes,
} from '../../stores/useProductsStore';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import ProductCard from '../../components/ProductCard/ProductCard.jsx';

function ProductBorder() {
  const {
    getData: getProductsData,
    isLoading,
    productsData,
    dateValue,
    selectedBgTheme,
    setSelectedBgTheme,
  } = useProductsStore();
  const [productsId, setProductsId] = useState(
    'DYAJ87-1900J84CN,DMAWGX-A900IR5GQ,DPAC1T-A900AVR5Q,DXBQ02-A900JMT60',
  ); // 商品 id 字串欄位

  const submitHandler = () => {
    if (productsId.trim().length === 0) return;
    const productsIdTrim = productsId.replace(/\s+/g, '');
    getProductsData(productsIdTrim);
  };

  return (
    <div className="p-5">
      <div className="mx-auto grid max-w-[800px] gap-y-5">
        <h3 className="text-lg font-bold">Step 1 : 輸入商品 id</h3>

        <div className="flex items-center justify-start">
          <p className="col-span-1 w-[30%]">法一 : 手動輸入 ( 可多組 )</p>
          <div className="flex gap-4">
            <TextField
              sx={{ width: '400px' }}
              label="多組以逗號 , 隔開"
              variant="outlined"
              size="small"
              value={productsId}
              onChange={(e) => {
                setProductsId(e.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={submitHandler}
              disabled={isLoading ? true : false}
            >
              {isLoading ? (
                <CircularProgress size="20px" color="inherit" />
              ) : (
                '確認'
              )}
            </Button>
          </div>
        </div>

        {/* 停用 */}
        <div className="flex items-center justify-start">
          <p className="col-span-1 w-[30%] opacity-50">
            法二 : 複製 google sheet 欄位
          </p>
          <div className="flex gap-4">
            <TextField
              sx={{ width: '400px' }}
              variant="outlined"
              size="small"
              disabled
            />
            <Button
              variant="contained"
              // onClick={getProductsData2}
              disabled
            >
              {isLoading ? (
                <CircularProgress size="20px" color="inherit" />
              ) : (
                '確認'
              )}
            </Button>
          </div>
        </div>

        <h3 className="text-lg font-bold">Step 2 : 選擇套框背景</h3>

        {/* 背景選擇器 */}
        <div className="flex gap-4">
          {backgroundThemes.map((theme) => (
            <div key={theme.id}>
              <div
                onClick={() => setSelectedBgTheme(theme)}
                className={`w-[160px] cursor-pointer overflow-hidden rounded-lg border-4 transition-all ${
                  selectedBgTheme.id === theme.id
                    ? 'border-blue-500 shadow-lg'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <img
                  src={theme.bg}
                  alt={theme.name}
                  className="h-auto w-full"
                />
              </div>
              <p className="py-1 text-center text-sm">{theme.name}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold">Step 3 : 點擊卡片編輯優惠訊息</h3>
        <p></p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-5 border-t border-t-slate-200 p-4">
        {productsData.length !== 0 &&
          productsData.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              dateValue={dateValue}
              bgTheme={selectedBgTheme}
            />
          ))}
      </div>
    </div>
  );
}
export default ProductBorder;
