import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

const initialData = {
  id: '',
  url: '',
  productName: '',
  productTitle: '',
  marketPrice: '',
  discountPrice: '',
  imgSrc: '',
  imgTitle: '',
  onsaleTime: '',
  onsaleSticker: [
    {
      title: '',
      text: '',
      isEnabled: false,
    },
    {
      title: '',
      text: '',
      isEnabled: false,
    },
  ],
};

function EditModal({ open, handleCloseModal, tempProduct, handleSaveModal }) {
  const [tempData, setTempData] = useState(initialData);

  // input change
  const handleChange = (e, index, type) => {
    const { value, name } = e.target;
    const isChecked = e.target.checked;

    if (name === 'isEnabled1' || name === 'isEnabled2') {
      const newStickersData = JSON.parse(
        JSON.stringify(tempData),
      ).onsaleSticker;
      newStickersData[index].isEnabled = isChecked;
      setTempData({
        ...tempData,
        onsaleSticker: newStickersData,
      });
    } else {
      const newStickersData = JSON.parse(
        JSON.stringify(tempData),
      ).onsaleSticker;
      newStickersData[index][type] = value;
      setTempData({
        ...tempData,
        onsaleSticker: newStickersData,
      });
    }
  };

  useEffect(() => {
    setTempData(tempProduct);
  }, [tempProduct]);
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span className="line-clamp-1">
            編輯 : {tempProduct?.productName}
          </span>
          <span className="text-sm text-red-500">*此修改不會影響商品後台</span>
        </DialogTitle>

        <DialogContent className="w-[500px] max-w-full">
          <div className="py-2">
            {tempData?.onsaleSticker?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center justify-start">
                    <Checkbox
                      id={`isEnabled${index + 1}`}
                      name={`isEnabled${index + 1}`}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                      checked={tempData.onsaleSticker[index].isEnabled}
                    />
                    <label htmlFor={`isEnabled${index + 1}`}>
                      貼紙 {index + 1}
                      {tempData.onsaleSticker[index].isEnabled
                        ? '啟用'
                        : '關閉'}
                    </label>
                  </div>
                  <div className="flex items-start justify-start gap-6">
                    <TextField
                      name={`title${index + 1}`}
                      label="優惠標題限4字"
                      variant="outlined"
                      size="small"
                      className="w-40"
                      inputProps={{ maxLength: 4 }}
                      disabled={!tempData.onsaleSticker[index].isEnabled}
                      value={tempData.onsaleSticker[index].title}
                      onChange={(e) => {
                        handleChange(e, index, 'title');
                      }}
                    />
                    <TextField
                      name={`text${index + 1}`}
                      label="優惠訊息限10字"
                      variant="outlined"
                      size="small"
                      inputProps={{ maxLength: 15 }}
                      disabled={!tempData.onsaleSticker[index].isEnabled}
                      helperText="斷行可使用 <br/>"
                      className="w-72"
                      value={tempData.onsaleSticker[index].text}
                      onChange={(e) => {
                        handleChange(e, index, 'text');
                      }}
                    />
                  </div>
                </div>
              );
            })}
            <div className="gap-6">
              <p className="mb-1">優惠訊息</p>
              <TextField
                name="productTitle"
                className="w-full"
                size="small"
                inputProps={{ maxLength: 20 }}
                value={
                  tempData?.productTitle !== undefined
                    ? tempData.productTitle
                    : ''
                }
                onChange={(e) => {
                  setTempData({
                    ...tempData,
                    productTitle: e.target.value,
                  });
                }}
              ></TextField>
            </div>
          </div>
        </DialogContent>
        <div className="flex justify-end gap-4 p-6 pt-0">
          <Button
            onClick={() => {
              setTempData(tempProduct);
              handleCloseModal();
            }}
            variant="outlined"
            color="error"
          >
            取消
          </Button>
          <Button
            onClick={() => {
              handleSaveModal(tempData);
            }}
            variant="contained"
          >
            儲存
          </Button>
        </div>
      </Dialog>
    </>
  );
}

export default EditModal;
