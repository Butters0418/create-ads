import domtoimage from 'dom-to-image';

// 截圖下載
const captureEvent = async (cardRef, fileName, targetDate, scaling) => {
  // 檔案名稱
  const filename = `${targetDate.format('YYYYMMDD')}_${fileName}`;
  const el = cardRef.current;
  const scale = scaling * 1 || 2;
  const config = {
    width: el.offsetWidth * scale,
    height: el.offsetHeight * scale,
    quality: 1,
    style: {
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      width: `${el.offsetWidth}px`,
      height: `${el.offsetHeight}px`,
    },
  };
  const dataUri = await domtoimage.toJpeg(el, config);
  const link = document.createElement('a');
  link.download = `${filename}.jpeg`;
  link.href = dataUri;
  link.click();
};

export default captureEvent;
