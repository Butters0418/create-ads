// 元件說明:商品 id 資料 store
import { create } from 'zustand';

// api methods
import fetchJsonp from 'fetch-jsonp';

// packages
import dayjs from 'dayjs';

import { placeImg } from '../assets/layout';
import { productBorderDouble11, productBorderOnsale } from '../assets/layout';

const API_PRODUCTS = import.meta.env.VITE_PRODUCTS_API;

// 背景主題
export const backgroundThemes = [
  {
    id: 'double11',
    name: '雙11特殊框',
    bg: productBorderDouble11,
    color: '#000',
  },
  {
    id: 'onsale',
    name: '每日特賣',
    bg: productBorderOnsale,
    color: '#fff',
  },
];

const useProductsStore = create((set) => ({
  // 瘋搶資料
  productsData: [],
  isLoading: false,
  dateValue: dayjs(),
  selectedBgTheme: backgroundThemes[0],

  // 取得商品資料
  getData: async (ids) => {
    set({ isLoading: true });
    try {
      const apiProductsUrl = `${API_PRODUCTS}prod?id=${ids}&fields=Pic,Name,Price,Nick&_callback=callback_prod`;
      const res = await fetchJsonp(`${apiProductsUrl}`, {
        jsonpCallbackFunction: 'callback_prod',
      });
      const resData = await res.json();

      const filterResData = Object.keys(resData).map((key, index) => {
        const newPic = resData[key].Pic.W ? resData[key].Pic.W : '';
        const newPicSrc =
          newPic === '' ? placeImg : `https://cs-a.ecimg.tw${newPic}`;
        return {
          id: key,
          productName: resData[key].Name,
          productTitle: '【空】請自行輸入優惠訊息',
          imgSrc: newPicSrc,
        };
      });
      set({ productsData: filterResData });
    } catch (err) {
      console.warn(`err : ${err.message}`);
    } finally {
      set({ isLoading: false });
    }
  },

  // 更新產品資料
  updateProduct: (updatedProduct) =>
    set((state) => ({
      productsData: state.productsData.map((product) =>
        product.id === updatedProduct.id
          ? { ...product, ...updatedProduct }
          : product,
      ),
    })),

  // 更新背景主題
  setSelectedBgTheme: (theme) => set({ selectedBgTheme: theme }),
}));

export default useProductsStore;
