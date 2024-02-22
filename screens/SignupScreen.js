import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { themeColors } from '../theme'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


export default function SingupScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Async
  const handleSubmit = async ()=>{
    if(email && password){
      try{
        await createUserWithEmailAndPassword(auth, email, password);
      }catch(err){
        console.log('got error: ',err.message);
      }
    }
}
  return (
    // Sign Up Screen
    <View className='flex-1 bg-white mt-2' style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className='flex'>
        {/* Button Back */}
        <View className='flex-row justify-start'>
          <TouchableOpacity onPress={()=> navigation.goBack()}
            className='bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'>
            <ArrowLeftIcon size='20' color='black' />
          </TouchableOpacity>
        </View>
        {/* Sign Up Image */}
        <View className='flex-row justify-center'>
          <Image source={require('../assets/images/signup.png')} style={{width: 165, height: 110}}/>
        </View>
      </SafeAreaView>

      {/* Input Sign Up */}
      <View className='flex-1 bg-white px-8 pt-8' style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
        <View className='form space-y-2'>
          {/* Username */}
          <Text className='text-gray-700 ml-4'>Username</Text>
          <TextInput
            className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
            placeholder='Username'
            // Username Change
            value={username}
            onChangeText={value=> setUsername(value)}
          />

          {/* Email */}
          <Text className='text-gray-700 ml-4'>Email Address</Text>
          <TextInput placeholder='Enter Email'
            className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
            // Email Change
            value={email}
            onChangeText={value=> setEmail(value)}
          />

          {/* Password */}
          <Text className='text-gray-700 ml-4'>Password</Text>
          <TextInput
            placeholder='Enter Password'
            className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7'
            secureTextEntry
            // Password Change
            value={password}
            onChangeText={value=> setPassword(value)}
          />

          {/* Sign Up & HandleSubmit */}
          <TouchableOpacity
            onPress={handleSubmit}
            className='py-3 bg-yellow-400 rounded-bl-3xl rounded-tr-3xl rounded-br-lg rounded-tl-lg'
          >
            <Text className='font-xl font-bold text-center text-gray-700'>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <Text className='text-xl text-gray-700 font-bold text-center py-5'> Or </Text>

        <View className='flex-row justify-center space-x-12'>
          {/* Login With Google */}
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image source={require('../assets/icons/google.png')} className='w-10 h-10' />
          </TouchableOpacity>
          {/* Login With Apple */}
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image source={require('../assets/icons/apple.png')} className='w-10 h-10' />
          </TouchableOpacity>
          {/* Login With Facebook */}
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image source={require('../assets/icons/facebook.png')} className='w-10 h-10' />
          </TouchableOpacity>
        </View>
        {/* Have? */}
        <View className='flex-row justify-center mt-7'>
          <Text className='text-gray-500 font-semibold'>Already have an account?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text className='font-semibold text-yellow-500 underline'> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}