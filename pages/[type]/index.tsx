import type { NextPage } from "next";

const Classify: NextPage = (props) => {
  console.log('props', props)
  return (
    <>
      这是一级文章列表也。。。。
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: '1' } },
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  console.log('params', params)
  return {
    props: {
      type: '这是type',
    },
  };
}


export default Classify;