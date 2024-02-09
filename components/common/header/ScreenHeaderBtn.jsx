import React from 'react'
import { View, Text,TouchableOpacity,Image} from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = (props) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image 
        source={props.iconUrl}
        resizeMode='cover'
        style={styles.btnImg(props.dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn