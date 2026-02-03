import tw, { styled } from 'twin.macro';

export const CardTitle = styled.div`
  ${tw`line-clamp-1 text-lg font-bold text-slate-600`}
`;

export const CardMain = styled.div`
  ${tw`relative mb-3 h-[320px] w-[320px] bg-white cursor-pointer`}
`;

export const CardBody = styled.div`
  ${tw`absolute left-0 top-[18.5%] flex h-[220px] w-full items-center justify-center px-3`}
`;

export const CardSticker = styled.div`
  ${tw`relative h-[60px] overflow-hidden rounded-xl border-2 px-1 pb-1 pt-0 text-center`}
  > h3 {
    ${tw`relative z-10 line-clamp-1 text-xs font-bold text-white`}
  }
  > p {
    ${tw`mt-1 h-8 overflow-hidden text-center text-sm font-bold leading-[1.2]`}
  }
  > span {
    ${tw`absolute left-1/2 top-0 h-[30px] w-[90px] -translate-x-1/2 -translate-y-[40%] rounded-[50%] shadow-[inset_6px_6px_2px_rgba(255,255,255,0.4)]`}
  }
`;

export const CardFooter = styled.h3`
  ${tw`absolute z-20 overflow-hidden whitespace-nowrap font-bold leading-none !text-white bottom-[3%] left-[3%]  text-[20px]`}
`;

export const CardBg = styled.img`
  ${tw`pointer-events-none absolute left-0 top-0 z-10 h-full w-full`}
`;
