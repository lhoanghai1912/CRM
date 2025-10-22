import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import icons from '../assets/icons';
import { Screen_Name } from './ScreenName';
import HomeScreen from '../screens/HomeStack/HomeScreen';
import { useSelector } from 'react-redux';
import HomeStack from './HomeStack';
import TiemNang from '../screens/HomeStack/TiemNang';
import DonHang from '../screens/HomeStack/DonHang';
import CoHoi from '../screens/HomeStack/CoHoi';
import Setting from '../screens/HomeStack/Setting';
import Khach from '../screens/HomeStack/Khach';
import DonHangStack from './OrderStack';
import KhachStack from './CustomerStack';
import CoHoiStack from './ChangeStack';
import RutHoSo from '../screens/HomeStack/RutHoSo';
import RutHoSoStack from './RutHoSoStack';

// Các màn hình cho các tab

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { token } = useSelector((state: any) => state.user); // ✅ lấy token từ Redux

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#ddd',
          paddingTop: 10,
        },
        tabBarIcon: ({ focused }) => {
          const iconMap = {
            Home_Screen: focused ? icons.home_focus : icons.home,
            DonHang: focused ? icons.document_focus : icons.document,
            Khach: focused ? icons.noti_focus : icons.noti,
            CoHoi: focused ? icons.username_focus : icons.username,
            RutHoSo: focused ? icons.apple : icons.apple,
            Setting: focused ? icons.settings : icons.settings,
          };

          return (
            <Image
              source={iconMap[route.name]}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#820201',
        tabBarInactiveTintColor: '#888',
      })}
    >
      <Tab.Screen name={Screen_Name.Home_Screen} component={HomeStack} />
      <Tab.Screen name={Screen_Name.DonHang} component={DonHangStack} />
      <Tab.Screen name={Screen_Name.Khach} component={KhachStack} />
      <Tab.Screen name={Screen_Name.CoHoi} component={CoHoiStack} />
      <Tab.Screen name={Screen_Name.RutHoSo} component={RutHoSoStack} />
      <Tab.Screen name={Screen_Name.Setting} component={Setting} />
      {token && <></>}
      {/* ✅ Thêm 2 tab mới nếu có token */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
