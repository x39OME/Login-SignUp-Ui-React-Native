import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Async
  const handleSubmit = async ()=>{
    if(email && password){
      try{
        await signInWithEmailAndPassword(auth, email, password);
      }catch(err){
        console.log('got error: ',err.message);
      }
    }
}
  return (
    // Login Screen
    <View className='flex-1 bg-white' style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className='flex'>
        <View className='flex-row justify-start mt-2'>
          {/* Back Button */}
          <TouchableOpacity onPress={()=> navigation.goBack()} 
            className='bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'>
            <ArrowLeftIcon size='20' color='black' />
          </TouchableOpacity>
        </View>
        {/* Login Image */}
        <View  className='flex-row justify-center'>
          <Image source={require('../assets/images/login.png')} style={{width: 200, height: 200}}/>
        </View>
      </SafeAreaView>
      {/* Email */}
      <View style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} className='flex-1 bg-white px-8 pt-8'>
        <View className='form space-y-2'>
          
          <Text className='text-gray-700 ml-4'>Email Address</Text>
          <TextInput 
            className='p-4 mb-3 bg-gray-100 text-gray-700 rounded-2xl'
            placeholder='Email'
            // Emaill On Change
            value={email}
            onChangeText={value=> setEmail(value)}
          />
          {/* Password */}
          <Text className='text-gray-700 ml-4'>Password</Text>
          <TextInput
            className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
            secureTextEntry
            placeholder='password'
            // Password Change
            value={password}
            onChangeText={value=> setPassword(value)}
          />
          <TouchableOpacity className='flex items-end'>
            <Text className='text-gray-700 mb-5 underline'>Forgot Password?</Text>
          </TouchableOpacity>
          {/* Login & HandleSubmit */}
          <TouchableOpacity
            onPress={handleSubmit}
            className='py-3 bg-yellow-400 rounded-bl-3xl rounded-tr-3xl rounded-br-lg rounded-tl-lg'>
            <Text className='text-xl font-bold text-center text-gray-700'>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <Text className='text-xl text-gray-700 font-bold text-center py-5'>Or</Text>

        <View className='flex-row justify-center space-x-12'>
          {/* Login With Google */}
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image source={require('../assets/icons/google.png')} className='w-10 h-10'/>
          </TouchableOpacity>
          {/* Login With Apple */}
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image source={require('../assets/icons/apple.png')} className='w-10 h-10'/>
          </TouchableOpacity>
          {/* Login With Facebook */}
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image source={require('../assets/icons/facebook.png')} className='w-10 h-10'/>
          </TouchableOpacity>
        </View>
        {/* Don't Have? */}
        <View className='flex-row justify-center mt-7'>
          <Text className='text-gray-500 font-semibold'>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
            <Text className='font-semibold text-yellow-400 underline'> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}