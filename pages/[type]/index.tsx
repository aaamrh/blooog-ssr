import Articles from "@/src/components/Articles";
import HomeLayout from "@/src/components/Layout/HomeLayout";
// import { getArticles } from "@/server";
import type { NextPageWithLayout } from "@/pages/_app";

const AritcleType: NextPageWithLayout<{type: string, list: any[]}> = (props: {type: string, list: any[]}) => {

  console.log('props', props);

  return (
    <>
      {/* FIXME: 这里又引入了 HomeLayout, 并且页面逻辑和 index.tsx 中渲染数据的逻辑基本一致，是否冗余 */}
      { props.type }

      <hr />

      <Articles data={props.list} />
    </>
  );
};

AritcleType.getLayout = function getLayout (page){
  return (<HomeLayout>
    {page}
  </HomeLayout>);
};


export async function getStaticPaths () {
  return {
    paths: [
      { params: { type: 'front-end' } },
      { params: { type: 'back-end' } },
    ],
    fallback: false
  };
}

export async function getStaticProps ({ params }:any) {
  // console.log('params', params);
  return {
    props: {
      type: `这是 ${ params.type } 文章列表 `,
      list: []
      // list: getArticles()
    },
  };
}


export default AritcleType;