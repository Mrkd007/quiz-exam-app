import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Questions = (props) => {

  let params = useParams();
  console.log(props, params.quesId)
  return (
    <div>Questions</div>
  )
}

export default Questions