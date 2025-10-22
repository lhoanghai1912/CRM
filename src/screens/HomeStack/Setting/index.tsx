import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import AppButton from '../../../components/AppButton';
import { logout } from '../../../store/reducers/userSlice';
import NavBar from '../../../components/Navbar';
import { colors } from '../../../utils/color';
import { navigate } from '../../../navigation/RootNavigator';
import { Screen_Name } from '../../../navigation/ScreenName';
import icons from '../../../assets/icons';

const Setting = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <NavBar title="Cài đặt" customStyle={{ backgroundColor: colors.white }} />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Section: Thông tin cá nhân */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>
          <Text style={styles.info}>Tên: Nguyễn Văn A</Text>
          <Text style={styles.info}>Email: nguyenvana@email.com</Text>
          <Text style={styles.info}>SĐT: 090-123-4567</Text>
        </View>
        {/* Section: Thông tin công ty */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thông tin công ty</Text>
          <Text style={styles.info}>Tên công ty: FoxAI</Text>
          <Text style={styles.info}>
            Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM
          </Text>
          <Text style={styles.info}>Mã số thuế: 0123456789</Text>
        </View>
        {/* Section: Điều khoản sử dụng */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Điều khoản sử dụng</Text>
          <Text style={styles.info}>
            Khi sử dụng ứng dụng, bạn đồng ý với các điều khoản và chính sách
            bảo mật của chúng tôi.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Đã ghim</Text>
          <View style={styles.pinRow}>
            <TouchableOpacity
              style={styles.pinIcon}
              onPress={() => navigate(Screen_Name.Home_Screen)}
            >
              <Image source={icons.username} style={styles.iconImg} />
              <Text style={styles.pinLabel}>Trang chủ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pinIcon}
              onPress={() => navigate(Screen_Name.Khach)}
            >
              <Image source={icons.username} style={styles.iconImg} />
              <Text style={styles.pinLabel}>Khách hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pinIcon}
              onPress={() => navigate(Screen_Name.DonHang)}
            >
              <Image source={icons.username} style={styles.iconImg} />
              <Text style={styles.pinLabel}>Đơn hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pinIcon}
              onPress={() => navigate(Screen_Name.CoHoi)}
            >
              <Image source={icons.username} style={styles.iconImg} />
              <Text style={styles.pinLabel}>Cơ hội</Text>
            </TouchableOpacity>
            {/* Thêm các icon khác nếu cần */}
          </View>
        </View>
        {/* Section: Đăng xuất */}
        <AppButton title="Đăng xuất" onPress={handleLogout} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  pinRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8,
  },
  pinIcon: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  iconImg: {
    width: 36,
    height: 36,
    marginBottom: 4,
  },
  pinLabel: {
    fontSize: 12,
  },
  section: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: colors.primary,
  },
  info: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default Setting;
