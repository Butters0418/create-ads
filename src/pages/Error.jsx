import { boxmanAn143 } from '../assets/layout';

function DataError() {
  return (
    <div className="flex min-h-[calc(100vh_-_193px)] justify-center">
      <h3 className="text-center text-[50px] font-bold text-slate-700">
        <img
          src={boxmanAn143}
          alt="boxman"
          className="mx-auto h-[200px] w-[200px]"
        />
        僅限內網使用
      </h3>
    </div>
  );
}

export default DataError;
