// DonHangStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonHang from '../screens/HomeStack/DonHang';
import { Screen_Name } from './ScreenName';
import DetailOrder from '../screens/HomeStack/Detail/Order';
const Stack = createNativeStackNavigator();
const DonHangStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DonHangMain" component={DonHang} />
    <Stack.Screen name={Screen_Name.DetailOrder} component={DetailOrder} />
  </Stack.Navigator>
);
export default DonHangStack;
