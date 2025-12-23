import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PublicStackParamsList } from '@/routes';

export function Register() {
  const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>();
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Register</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}