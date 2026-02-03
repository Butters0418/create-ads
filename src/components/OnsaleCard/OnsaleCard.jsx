import { useRef } from 'react';
import captureEvent from '../../utils/captureEvent';
import Button from '@mui/material/Button';
import { useOutletContext } from 'react-router-dom';
import {
  CardTitle,
  CardMain,
  CardBody,
  CardSticker,
  CardFooter,
  CardBg,
} from './style';

import {
  onsaleBorderStyleB,
  onsaleBorderStyleR,
  onsaleBorderStyleY,
} from '../../assets/layout';

// card theme
const cardsTheme = [
  {
    bg: onsaleBorderStyleR,
    color: '#9e2b25',
  },
  {
    bg: onsaleBorderStyleY,
    color: '#ff623c',
  },
  {
    bg: onsaleBorderStyleB,
    color: '#3c3ab0',
  },
];

function OnsaleCard({ item, dateValue }) {
  const { handleOpenModal } = useOutletContext();
  const cardRef = useRef(null);
  const cardTheme =
    item.onsaleTime === '10:00:00'
      ? cardsTheme[0]
      : item.onsaleTime === '15:00:00'
        ? cardsTheme[1]
        : cardsTheme[2];
  const theme = {
    bg: cardTheme.bg,
    color: cardTheme.color,
  };
  const stickerOpen = item?.onsaleSticker.some((item) => item.isEnabled);
  return (
    <div className="w-[320px] overflow-hidden">
      <CardTitle>{item.productName}</CardTitle>
      <CardMain
        data-onsale={item.id}
        onClick={() => {
          item.id && handleOpenModal({ ...item, productType: 'onsale' });
        }}
        ref={cardRef}
      >
        <CardBody>
          {/* 左 - 貼紙區 */}
          {stickerOpen && (
            <div className="flex-0 mr-1.5 flex w-[85px] flex-col justify-center gap-y-1">
              {item.onsaleSticker.map((item, index) => {
                return (
                  <CardSticker
                    style={{ borderColor: theme.color }}
                    key={index}
                    className={`${item.isEnabled ? 'block' : 'hidden'}`}
                  >
                    <h3>{item.title}</h3>
                    <p
                      style={{ color: theme.color }}
                      dangerouslySetInnerHTML={{
                        __html: item.text,
                      }}
                    />
                    <span
                      style={{
                        backgroundColor: theme.color,
                      }}
                    ></span>
                  </CardSticker>
                );
              })}
            </div>
          )}

          {/* 右 - 品圖 */}
          <div className="flex-1 text-center">
            <img
              src={item.imgSrc}
              className="inline-block h-auto max-h-[220px]"
              alt={item.productName}
            />
          </div>
        </CardBody>

        <CardFooter>
          {item.productTitle.trim().length === 0
            ? '【空】請自行輸入優惠訊息'
            : item.productTitle}
        </CardFooter>
        <CardBg src={theme.bg} alt="bg" />
      </CardMain>

      <Button
        variant="outlined"
        onClick={() => captureEvent(cardRef, item.id, dateValue, 2)}
      >
        下載圖片
      </Button>
    </div>
  );
}
export default OnsaleCard;
