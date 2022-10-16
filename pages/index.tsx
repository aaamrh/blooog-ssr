import { ReactElement, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import HomeLayout from "@/components/Layout/HomeLayout";
import articleModel from "@/model/ArticleModel";
import { NextPageWithLayout } from "./_app";
// import Articles from "@/components/Articles";
// import Image from "next/image";

const Home: NextPageWithLayout = () => {
  useEffect(() => {
    articleModel.getArticles({
      limit: 20,
      cursor: 0
    }).then(res => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <Head>
        <title>生活日记 | 山海行</title>
        <meta name="keywords" content="山海行,健康管理,前端,感悟"></meta>
        <meta
          name="description"
          content="山海行, 程序员一只, 个人博客。记录前端、后端等技术，还有日记、理财、健康管理、感悟等。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Articles data={getArticles()} /> */}

      <Link href="/login" >登录</Link>
      <div className="ma-row">
        <div className="ma-col ma-col-6">
          <div style={{ background: 'red' }}>123</div>
        </div>
        <div className="ma-col ma-col-6">
          <div style={{ background: 'red' }}>123</div>
        </div>
      </div>
    </>
  // <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  );
};

Home.getLayout = function getLayout (page: ReactElement){
  return (<HomeLayout>
    {page}
  </HomeLayout>);
};

export default Home;
