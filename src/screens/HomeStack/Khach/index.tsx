import React, { useState, useCallback } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { customerList } from '../../../utils/data';
import CustomHeader from '../../../components/CustomHeader';
import icons from '../../../assets/icons';
import { Screen_Name } from '../../../navigation/ScreenName';
import AppStyles from '../../../components/AppStyle';
import { ms, spacing } from '../../../utils/spacing';
import { colors } from '../../../utils/color';
import CardCustomer from '../Card/Customer';
import { navigate } from '../../../navigation/RootNavigator';

const PAGE_SIZE = 10;

const Khach = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [khachHangList, setKhachHangList] = useState(customerList);
  const data = khachHangList.slice(0, page * PAGE_SIZE);

  // Load thêm data khi scroll tới cuối
  const handleLoadMore = () => {
    if (data.length < khachHangList.length) {
      setPage(prev => prev + 1);
    }
  };

  // Refresh lại danh sách
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    setTimeout(() => setRefreshing(false), 500); // Giả lập refresh
  }, []);

  const handleAddCustomer = newCustomer => {
    setKhachHangList(prev => [
      { ...newCustomer, id: `DH${Date.now()}` },
      ...prev,
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <CustomHeader
        title="Khach Hang"
        leftIcon={icons.back}
        leftPress={() => navigation.goBack()}
        rightIcon={icons.settings}
        rightPress={() => navigate(Screen_Name.ThietLapPhanHe)}
      />

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          paddingHorizontal: spacing.medium,
          paddingVertical: spacing.small,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.Gray,
        }}
        onPress={() => setIsShow(prev => !prev)}
      >
        <Text style={AppStyles.text}> {`# ${khachHangList.length}`}</Text>
        <Image style={AppStyles.icon} source={isShow ? icons.down : icons.up} />
      </TouchableOpacity>
      {isShow && (
        <>
          <FlatList
            data={data}
            style={{
              backgroundColor: colors.white,
              marginBottom: spacing.medium,
            }}
            contentContainerStyle={{}} // Tăng paddingBottom
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CardCustomer
                customer={item}
                setCustomerList={setKhachHangList}
              />
            )}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.2}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 30,
              right: 20,
              zIndex: 99,
            }}
            onPress={() => {
              navigate(Screen_Name.DetailCustomer, {
                customer: {
                  id: '',
                  name: '',
                  company: '',
                  phone: '',
                  avt: '',
                  source: '',
                },
                onSave: handleAddCustomer,
                isNew: true, // truyền thêm để biết là thêm mới
              });
            }}
          >
            <Image
              source={icons.add}
              style={{ width: ms(30), height: ms(30) }}
            />
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default Khach;
