import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const item = ({item}:any) => {
 const router=useRouter();
  return (
    <View style={styles.container}>

    <Pressable style={({pressed})=>[
      styles.button,
      pressed? styles.buttonPressed:null,
      {backgroundColor:item.color}
    ]}
    onPress={()=>{
      router.push({pathname:'/wordlist', params:{id:item.id}})
    }}
    >
    <View style={styles.innerContainer}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
    </Pressable>
    </View >
  )
}

export default item

const styles = StyleSheet.create({
  container:{
flex:1,
margin:17,
height:140,
borderRadius:9,
elevation:5,
shadowColor:'black',
shadowOpacity:0.3,
shadowOffset:{width:0, height:2},
shadowRadius: 8
  },
  innerContainer:{
    flex:1,
    padding:15,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:9
  },
  buttonPressed:{
    opacity:0.5
  },
  button:{
    flex:1,
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
  }
})