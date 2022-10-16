import type { ReactElement } from 'react';
// import PropTypes from 'prop-types';
import type { NextPageWithLayout } from "@pages/_app";
import HomeLayout from "@/src/components/Layout/HomeLayout";
// import { getArticles } from "@/server";
import Articles from "@/src/components/Articles";

const ArticleCategory: NextPageWithLayout<{type: string, list: any[]}> = (props) => {
  console.log("props", props);

  return (
    <>
      {/* FIXME: 这里又引入了 HomeLayout, 并且页面逻辑和 index.tsx 中渲染数据的逻辑基本一致，是否冗余 */}
      { props.type }

      <hr />

      <Articles data={props.list} />
    </>
  );
};

// ArticleCategory.propTypes = {
//   type: PropTypes.string.isRequired,
//   list: PropTypes.array
// }

ArticleCategory.getLayout = (page: ReactElement) => {
  return (<HomeLayout>
    {page}
  </HomeLayout>);
};

export async function getStaticPaths () {
  return {
    paths: [
      {
        params: {
          type: "front-end",
          category: "react"
        },
      },
      {
        params: {
          type: "back-end",
          category: "koa"
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps ({ params }: any) {
  // console.log("params", params);
  return {
    props: {
      type: `这是 ${ params.type } 下面的 ${ params.category } 文章列表 `,
      list: [],
      // list: getArticles(),
    },
  };
}


export default ArticleCategory;
