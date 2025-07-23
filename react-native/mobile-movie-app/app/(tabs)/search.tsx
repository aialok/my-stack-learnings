import { icons } from '@/constants/icons';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

interface SearchBarProps {
  onPress: () => void;
  placeholder: string;
}

export function SearchBar({ onPress, placeholder }: SearchBarProps) {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full p-2'>
        <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='white' />
        <TextInput
            onPress={onPress}
            onChangeText={() => {}}
            placeholder={placeholder}
            placeholderTextColor='#a8b5db'
            className='flex-1 ml-2 text-white'
        />
    </View>
  )
}

const search = () => {
  return (
    <View>
      <Text>search</Text>
    </View>
  )
}

export default search;