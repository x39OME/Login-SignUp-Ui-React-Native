import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {themeColors} from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation()

  return (
    // Welcome Screen
    <SafeAreaView className='flex-1' style={{backgroundColor: themeColors.bg}}>
      <View className='flex-1 justify-center'>
        <Text className='text-black font-bold text-3xl text-center'>
          Let's Get Started!
        </Text>
        {/* Welcome Image */}
        <View className='flex-row justify-center'>
          <Image source={require('../assets/images/welcome.png')} style={{width:350, height: 350}}/>
        </View>
        {/* Sign Up */}
        <View className='space-y-4 flex items-center'>
          <TouchableOpacity onPress={()=>navigation.navigate('Signup')}
            className='py-3 bg-yellow-400 rounded-bl-3xl rounded-tr-3xl rounded-br-lg rounded-tl-lg'
            style={{width:300}}>
            <Text className='text-xl font-bold text-center text-black'>
              Sign Up
            </Text>
          </TouchableOpacity>
          {/* Account? or Login */}
          <View className='flex-row justify-center'>
            <Text className='text-gray-500 font-semibold'>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text className='font-semibold text-yellow-500 ml-1 underline' >Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}