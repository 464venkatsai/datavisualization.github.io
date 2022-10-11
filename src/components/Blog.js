import React from 'react'
import Compiler from './Compiler'
// import LoadingBar from 'react-top-loading-bar'
export default function Blog(props) {
  // props.setProgress(40)
  // <LoadingBar
  //        height={3}
  //       color='#f11946'
  //       progress={50}
  //     />
  return (
    <div>
      This is blog
      <Compiler/>
    </div>
  )
}
