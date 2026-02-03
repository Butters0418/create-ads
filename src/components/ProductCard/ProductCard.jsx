import { useRef } from 'react';

import Button from '@mui/material/Button';
import captureEvent from '../../utils/captureEvent';
import { CardTitle, CardMain, CardBody, CardFooter, CardBg } from './style';
import { useOutletContext } from 'react-router-dom';
import {
  productBorderDouble11,
  productBorderOnsale,
} from '../../assets/layout';

function ProductCard({ item, dateValue, bgTheme }) {
  // 如果沒有傳入背景主題，使用默認值
  const cardsTheme = bgTheme || {
    bg: productBorderDouble11,
    color: '#000',
  };
  const { handleOpenModal } = useOutletContext();
  const cardRef = useRef(null);
  return (
    <>
      <div className="w-[320px] overflow-hidden">
        <CardTitle>{item.productName}</CardTitle>

        <CardMain
          data-onsale={item.id}
          onClick={() => {
            item.id && handleOpenModal({ ...item, productType: 'product' });
          }}
          ref={cardRef}
        >
          <CardBody onsaleType={item.onsaleType}>
            {/* 右 - 品圖 */}
            <div className="flex-1 text-center">
              <img
                src={item.imgSrc}
                className="inline-block h-auto max-h-[272px]"
                alt={item.productName}
              />
            </div>
          </CardBody>

          <CardFooter
            style={{ color: cardsTheme.color }}
            dangerouslySetInnerHTML={{
              __html: item.productTitle,
            }}
          />
          <CardBg src={cardsTheme.bg} alt="bg" />
        </CardMain>

        <Button
          variant="outlined"
          onClick={() => captureEvent(cardRef, item.id, dateValue, 2)}
        >
          下載圖片
        </Button>
      </div>
    </>
  );
}

export default ProductCard;
