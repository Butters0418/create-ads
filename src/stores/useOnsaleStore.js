// 元件說明:限時瘋搶 store
import { create } from 'zustand';

// packages
import dayjs from 'dayjs';

// constants
import { mockOnsaleData } from '../constants';

const useOnsaleStore = create((set) => ({
  // 瘋搶資料
  onsaleData: [],

  // mui 日期選擇
  dateValue: dayjs(),

  // 設定日期值
  setDateValue: (newValue) => set({ dateValue: newValue }),

  // 取得瘋搶資料
  getData: async (date) => {
    // 模擬取得資料
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 依目前日期決定要顯示的假資料
    const targetData = mockOnsaleData[date % 3];

    set({ onsaleData: targetData.products });
  },

  // 更新產品資料
  updateProduct: (updatedProduct) =>
    set((state) => ({
      onsaleData: state.onsaleData.map((product) =>
        product.id === updatedProduct.id
          ? { ...product, ...updatedProduct }
          : product,
      ),
    })),
}));

export default useOnsaleStore;
