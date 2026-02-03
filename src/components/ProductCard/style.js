// card style

import tw, { styled } from 'twin.macro';

export const CardTitle = styled.div`
  ${tw`line-clamp-1 text-lg font-bold text-slate-600`}
`;

export const CardMain = styled.div`
  ${tw`relative mb-3 h-[320px] w-[320px] bg-white cursor-pointer`}
`;

export const CardBody = styled.div`
  ${tw`absolute left-0 top-[2.8%] flex h-[272px] w-full items-center justify-center px-3`}
`;

export const CardFooter = styled.h3`
  ${tw`absolute z-20 overflow-hidden whitespace-nowrap font-bold leading-none`}
  ${tw`bottom-[2.5%] left-[2%] w-[180px] text-[15px]`}
`;

export const CardBg = styled.img`
  ${tw`pointer-events-none absolute left-0 top-0 z-10 h-full w-full`}
`;
