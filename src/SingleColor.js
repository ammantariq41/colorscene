import React, {useState, useEffect} from 'react'
import rgbToHex from './utilis'

const SingleColor = ({rgb, weight, index}) => {

    const[alert, setAlert] = useState(false);
    const bcg = rgb.join(',')
    


  return (
    <article className={`color`} style={{backgroundColor: `rgb(${bcg})`}}>
       <p className='percent-value'>{weight}%</p>

    </article>
    // <h3>hello</h3>
  )
}

export default SingleColor
