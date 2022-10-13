import type { NextPage } from "next";

const Articles: NextPage = (props: {data: any[]}) => {
  console.log('props', props)
  return (
    <>
      {
        props.data.map(item => <div key={item.id}>
          <h2>{item.title}</h2>
          <div>{item.content}</div>
        </div>)
      }
    </>
  )
}


export default Articles;