import type { NextPage } from "next";
import PropTypes from 'prop-types';

const Articles: NextPage<{data: any[]}> = (props ) => {
  console.log('props', props)
  return (
    <>
      {
        props.data.map(item => <div key={item.id} style={{margin: 300}}>
          <h2>{item.title}</h2>
          <div>{item.content}</div>
        </div>)
      }
    </>
  )
}

Articles.propTypes = {
  list: PropTypes.array
}



export default Articles;