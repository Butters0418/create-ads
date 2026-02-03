import { useEffect } from 'react';

// date picker plugins
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import useOnsaleStore from '../../stores/useOnsaleStore';

function MuiDatePicker() {
  const { dateValue, setDateValue, getData } = useOnsaleStore();
  useEffect(() => {
    const date = dayjs(dateValue).get('date');
    getData(date);
  }, [dateValue, getData]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="mx-auto box-content max-w-[680px] p-6 text-center">
        <h3 className="flex items-center justify-center">
          <DatePicker
            value={dateValue}
            onChange={(newValue) => {
              if (!dayjs(newValue).isSame(dayjs(dateValue), 'day')) {
                setDateValue(newValue);
              }
            }}
            label="請選擇日期"
          />
          <p className="ml-3 text-2xl font-bold">
            目前特賣日期 :{' '}
            <span className="italic text-blue-700">
              {dayjs(dateValue).format('YYYY年MM月DD日')}
            </span>
          </p>
        </h3>
        <p className="mt-4 rounded-md bg-slate-100 p-3">
          如圖片空白或商品資料有缺，請檢查後台該日期是否已上稿
        </p>
      </div>
    </LocalizationProvider>
  );
}
export default MuiDatePicker;
