// DonHangStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonHang from '../screens/HomeStack/DonHang';
import { Screen_Name } from './ScreenName';
import Khach from '../screens/HomeStack/Khach';
import DetailCustomer from '../screens/HomeStack/Detail/Customer';
const Stack = createNativeStackNavigator();
const KhachStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="KhachHangMain" component={Khach} />
    <Stack.Screen
      name={Screen_Name.DetailCustomer}
      component={DetailCustomer}
    />
  </Stack.Navigator>
);
export default KhachStack;
