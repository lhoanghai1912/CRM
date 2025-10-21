import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen_Name } from './ScreenName';
import ChiTietKhachHang from '../screens/HomeStack/ChiTietKhachHang';
import CardContact from '../screens/HomeStack/Contact/Card';
import ThayDoiThuTuHienThi from '../screens/HomeStack/ThayDoiThuTuHienThi';
import ThemDonHang from '../screens/HomeStack/ThemDonHang';
import ThietLapPhanHe from '../screens/HomeStack/ThietLapPhanHe';
import TiemNang from '../screens/HomeStack/TiemNang';
import HomeScreen from '../screens/HomeStack/HomeScreen';
import DetailContact from '../screens/HomeStack/Contact/Detail';
import Profile from '../screens/HomeStack/Profile';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
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
      name={Screen_Name.ThietLapPhanHe}
      component={ThietLapPhanHe}
    />
    <Stack.Screen name={Screen_Name.TiemNang} component={TiemNang} />
    <Stack.Screen
      name={Screen_Name.DetailContact_Screen}
      component={DetailContact}
    />
    <Stack.Screen name={Screen_Name.Profile} component={Profile} />
  </Stack.Navigator>
);

export default HomeStack;
