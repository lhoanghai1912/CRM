import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeStack/HomeScreen';
import { Screen_Name } from './ScreenName';
import BottomTabNavigator from './BottomTabNavigator';
import TiemNang from '../screens/HomeStack/TiemNang';
import ThietLapPhanHe from '../screens/HomeStack/ThietLapPhanHe';
import ChiTietKhachHang from '../screens/HomeStack/ChiTietKhachHang';
import ThayDoiThuTuHienThi from '../screens/HomeStack/ThayDoiThuTuHienThi';
import ThemDonHang from '../screens/HomeStack/ThemDonHang';
import DetailContact from '../screens/HomeStack/Contact/Detail';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      initialRouteName={Screen_Name.BottomTab_Navigator}
    >
      <Stack.Screen
        name={Screen_Name.BottomTab_Navigator}
        component={BottomTabNavigator}
      />
      {/* <Stack.Screen name={Screen_Name.Home_Screen} component={HomeScreen} />
      <Stack.Screen name={Screen_Name.TiemNang} component={TiemNang} />
      <Stack.Screen
        name={Screen_Name.ThietLapPhanHe}
        component={ThietLapPhanHe}
      />
      <Stack.Screen
        name={Screen_Name.ChiTietKhachHang}
        component={ChiTietKhachHang}
      />
      <Stack.Screen
        name={Screen_Name.ThayDoiThuTuHienThi}
        component={ThayDoiThuTuHienThi}
      />
      <Stack.Screen name={Screen_Name.ThemDonHang} component={ThemDonHang} />
      <Stack.Screen
        name={Screen_Name.Detailcontact_Screen}
        component={DetailContact}
      /> */}
    </Stack.Navigator>
  );
};
export default HomeNavigator;
