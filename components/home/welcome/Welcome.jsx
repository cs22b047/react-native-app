import {React,useState} from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList 
} from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons,SIZES } from '../../../constants'
const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userMessage}>Hello User</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={()=>{}}
            placeholder="What are you looking for"
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome