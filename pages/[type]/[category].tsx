import type { NextPage } from "next";

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           type: "getStaticPaths",
//           category: "-----------"
//         },
//       },
//     ],
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   console.log("params", params);
//   return {
//     props: {
//       type: "这是type",
//     },
//   };
// }

const Classify: NextPage = (props) => {
  console.log("props", props);
  return <>这是文章列表页</>;
};

export default Classify;
