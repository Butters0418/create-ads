import MuiDatePicker from '../../components/MuiDatePicker/MuiDatePicker';
import OnsaleCard from '../../components/OnsaleCard/OnsaleCard';
import useOnsaleStore from '../../stores/useOnsaleStore';
function OnsaleBorder() {
  const { onsaleData, dateValue } = useOnsaleStore();

  return (
    <>
      <MuiDatePicker />
      <div>
        <h3 className="mt-8 text-center text-2xl font-bold">
          12 賞白圖套框{' '}
          <span className="text-base font-normal text-gray-600">
            ( 點擊卡片可編輯 )
          </span>
        </h3>
        <div className="mt-2 flex flex-wrap justify-center gap-x-3  gap-y-5 border-t border-t-slate-200 p-5 ">
          {onsaleData.length !== 0 &&
            onsaleData.map((item) => (
              <OnsaleCard key={item.id} item={item} dateValue={dateValue} />
            ))}
        </div>
      </div>
    </>
  );
}
export default OnsaleBorder;
