import "@styles/globals.scss";
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp ({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  (typeof window === 'object') && genGridClass();

  return getLayout(<Component {...pageProps} />);
}

// FIXME: 是否可通过 webpack 插入到 HTML 中? :试试自定义Document
function genGridClass () :void {
  console.log('生成 grid class');
  const styleId = 'grid-class';
  if (!document.getElementById(styleId)) {
    document.head.innerHTML += `<style id="grid-class">
      ${ genClass() }
    </style>`;
  }

  function genClass () {
    const colNum = 24;
    let str = `.ma-row{ display: flex; margin-left: -8px; margin-right: -8px; box-sizing: border-box; }
      .ma-col{ position: relative; box-sizing: border-box; width: 100%; }
      .ma-gap{ padding: 0 12px }`;

    for (let i = 1; i <= colNum; i++){
      let rowWidth = (100 / 24 * i) + '%';
      str += `.ma-col-${ i }{ flex: 0 0 ${ rowWidth }; max-width: ${ rowWidth }; }`;
    }
    return str;
  }
}
