import { useRef } from 'react';

import Button from '@mui/material/Button';
import captureEvent from '../../utils/captureEvent';

function PortalAdCard({ items, adsTheme, dateValue }) {
  const boardRef = useRef(null);
  const targetDateMD = dateValue.format('M/D');
  return (
    <div className="mx-auto w-[700px] py-5">
      <div
        style={{ backgroundImage: `url(${adsTheme.bg})` }}
        className="relative mb-2 grid  h-[290px] grid-cols-4 gap-1 bg-contain px-6 pb-[22px] pt-[74px]"
        ref={boardRef}
      >
        <h2
          className={`absolute right-[560px] top-[12px] text-[34px] font-extrabold italic tracking-wide`}
          style={{ color: adsTheme.textColor }}
        >
          {targetDateMD}
        </h2>
        {items.map((item, index) => {
          return (
            <div
              className="overflow-hidden rounded-bl-[32px] rounded-tr-[32px] bg-white pt-1"
              key={item.id}
            >
              <img
                alt={item.productName}
                src={item.imgSrc}
                className="mx-auto h-[130px] w-[130px] object-contain"
              />
              <div className="p-1 text-center">
                <p
                  className="line-clamp-1 truncate text-sm font-medium leading-tight  text-[#fc7a7a]"
                  dangerouslySetInnerHTML={{
                    __html: item.productTitle
                      ? item.productTitle
                      : '【空】請自行輸入優惠訊息',
                  }}
                ></p>
                <h3 className="line-clamp-1 truncate text-sm font-medium leading-none">
                  {item.productName || '【空】品名待補'}
                </h3>

                <h5 className="mt-[2px] line-clamp-1 flex items-end justify-center truncate text-[#ea1717]">
                  <span className="text-sm font-medium leading-none">特賣</span>
                  <span className="text-xl font-bold leading-none">
                    <b className="text-xs font-bold leading-none">$</b>
                    {item.discountPrice || '???'}
                  </span>
                </h5>
              </div>
            </div>
          );
        })}
        <p className="absolute bottom-1 right-6 text-xs leading-none text-white">
          實際價格以官網說明為主
        </p>
      </div>

      <Button
        variant="outlined"
        onClick={() =>
          captureEvent(boardRef, adsTheme.fileName, dateValue, 1.5)
        }
      >
        下載圖片
      </Button>
    </div>
  );
}
export default PortalAdCard;
