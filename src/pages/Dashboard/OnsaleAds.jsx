import MuiDatePicker from '../../components/MuiDatePicker/MuiDatePicker';

import useOnsaleStore from '../../stores/useOnsaleStore';

import PortalAdCard from '../../components/PortalAdCard/PortalAdCard';
import LineAdCard from '../../components/LineAdCard/LineAdCard';

import {
  onsaleAdsStyle10,
  onsaleAdsStyle15,
  onsaleAdsStyle21,
} from '../../assets/layout';

// portal 首頁投廣 主題
const adsTheme = [
  {
    bg: onsaleAdsStyle10,
    textColor: '#ffffff',
    sliceIndex: [0, 4],
    fileName: '上午賞',
  },
  {
    bg: onsaleAdsStyle15,
    textColor: '#aa0000',
    sliceIndex: [4, 8],
    fileName: '下午賞',
  },
  {
    bg: onsaleAdsStyle21,
    textColor: '#0b56c2',
    sliceIndex: [8, 12],
    fileName: '星光賞',
  },
];

function OnsaleAds() {
  const { onsaleData, dateValue } = useOnsaleStore();

  return (
    <div>
      <MuiDatePicker />
      <div>
        <h3 className="mt-8 text-center text-2xl font-bold">Portal 首頁投廣</h3>
        <div className="mt-2 gap-x-3  gap-y-5 border-t border-t-slate-200 p-5 ">
          {onsaleData.length > 0 && (
            <>
              <PortalAdCard
                items={onsaleData.slice(4 * 0, 4 * 1)}
                adsTheme={adsTheme[0]}
                dateValue={dateValue}
              />
              <PortalAdCard
                items={onsaleData.slice(4 * 1, 4 * 2)}
                adsTheme={adsTheme[1]}
                dateValue={dateValue}
              />
              <PortalAdCard
                items={onsaleData.slice(4 * 2, 4 * 3)}
                adsTheme={adsTheme[2]}
                dateValue={dateValue}
              />
            </>
          )}
        </div>

        <h3 className="mt-8 text-center text-2xl font-bold">LINE 推播投廣</h3>
        <div className="mt-2 gap-x-3  gap-y-5 border-t border-t-slate-200 p-5 ">
          <LineAdCard items={onsaleData} dateValue={dateValue} />
        </div>
      </div>
    </div>
  );
}
export default OnsaleAds;
