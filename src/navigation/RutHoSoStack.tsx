// DonHangStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonHang from '../screens/HomeStack/DonHang';
import { Screen_Name } from './ScreenName';
import RutHoSo from '../screens/HomeStack/RutHoSo';
import DetailHoSo from '../screens/HomeStack/Detail/HoSo';
const Stack = createNativeStackNavigator();
const RutHoSoStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="RutHoSo" component={RutHoSo} />
    <Stack.Screen name={Screen_Name.DetailHoSo} component={DetailHoSo} />
  </Stack.Navigator>
);
export default RutHoSoStack;
