import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function HomeScreen() {
  const handleLogout = async ()=>{
    await signOut(auth);
  }

  return (
    <View className=''>
      <SafeAreaView className='flex flex-row justify-between p-4'>
        <Image
          source={require('../assets/icons/logo.png')}
          style={{height:44, width:44}}
        />
        <TouchableOpacity onPress={handleLogout} className="p-1 pl-2 pr-2 h-10 bg-red-600 rounded-lg">
          <Text className="text-white text-lg font-bold">Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View className='flex flex-row justify-center items-center'>
        <Text className='flex justify-center text-2xl'>Home Page</Text>
      </View>
    </View>
  )
}