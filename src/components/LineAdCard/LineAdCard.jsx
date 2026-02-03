import { useRef } from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import captureEvent from '../../utils/captureEvent';
import {
  onsaleAdsLightL,
  onsaleAdsLightR,
  onsaleAdsTag10,
  onsaleAdsTag15,
  onsaleAdsTag21,
  onsaleAdsStyleBig,
  onsaleAdsTitle,
} from '../../assets/layout';

// 重新排序
const reorderForGrid = (data, cols) => {
  const rows = Math.ceil(data.length / cols);
  const result = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const index = c * rows + r;
      if (data[index] !== undefined) {
        result.push(data[index]);
      }
    }
  }

  return result;
};

function LineAdCard({ items, dateValue }) {
  const targetDateMD = dateValue.format('M/D');
  const boardRef = useRef(null);
  const newItems = reorderForGrid(items, 3);
  return (
    <div className="mx-auto mt-2.5 w-[520px] py-2.5">
      <div
        style={{ backgroundImage: `url(${onsaleAdsStyleBig})` }}
        className="relative mb-2 h-[1040px] gap-1.5 bg-slate-100 bg-contain px-[14px] pb-[51px] pt-[43px]"
        ref={boardRef}
      >
        <h2
          className="absolute left-1/2 top-0 z-10 h-[55px] w-[340px] -translate-x-1/2 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${onsaleAdsTitle})` }}
        >
          <span className="absolute left-[60px] top-[11px] w-[70px] text-center text-[22px] font-extrabold italic tracking-wide text-[#f72a2a]">
            {targetDateMD}
          </span>
        </h2>
        <div className="relative z-[5] grid grid-cols-3 gap-1.5">
          {newItems.map((item, index) => {
            return (
              <div
                key={index}
                className="relative block h-[230px] rounded-bl-[16px] rounded-tr-[16px] bg-white p-2 shadow-[-3px_3px_0px_0px_rgba(235,199,51,0.8)]"
              >
                <img
                  src={
                    index % 3 === 0
                      ? onsaleAdsTag10
                      : index % 3 === 1
                        ? onsaleAdsTag15
                        : onsaleAdsTag21
                  }
                  alt="time tag"
                  className={`absolute left-[-5px] h-[22px] w-[50px] ${
                    index < 3 ? 'top-[16px]' : 'top-0'
                  }`}
                />
                <img
                  src={item.imgSrc}
                  className="h-[145px] w-full object-contain"
                  alt={item.productName}
                />
                <div className="mt-1.5 text-center">
                  <h3 className="line-clamp-1 truncate text-[14px] font-medium leading-none">
                    {item.productName || '【空】品名待補'}
                  </h3>
                  <p className="mt-1 line-clamp-1 truncate rounded-3xl bg-[#f72a2a] px-1 py-[3px] text-[14px] font-medium leading-none text-white">
                    <span
                      className="block overflow-hidden"
                      dangerouslySetInnerHTML={{
                        __html: item.productTitle
                          ? item.productTitle
                          : '【空】請自行輸入優惠訊息',
                      }}
                    ></span>
                  </p>
                  <h5 className="mt-1.5 line-clamp-1 flex items-end justify-center truncate leading-none text-[#f72a2a]">
                    <span
                      className={`mr-1 text-[11px] text-[#777777] line-through ${
                        item.marketPrice === '' ? 'hidden' : ''
                      }`}
                    >
                      ${item.marketPrice}
                    </span>
                    <span className="text-[14px] font-medium leading-none">
                      特賣
                    </span>
                    <span className="text-[22px] font-bold leading-none">
                      <b className="ml-0.5 text-sm font-medium leading-none">
                        $
                      </b>
                      {item.discountPrice || '???'}
                    </span>
                  </h5>
                </div>
              </div>
            );
          })}
          <img
            src={onsaleAdsLightL}
            alt="light-left"
            className="absolute -left-[10px] top-[260px] z-20 h-[34px] w-[34px]"
          />
          <img
            src={onsaleAdsLightR}
            alt="light-right"
            className="absolute right-0 top-[460px] z-20 h-[36px] w-[36px]"
          />
        </div>
      </div>

      <Button
        variant="outlined"
        onClick={() => {
          captureEvent(boardRef, 'LINE推播', dateValue, 1.5);
        }}
      >
        下載圖片
      </Button>
    </div>
  );
}
export default LineAdCard;
