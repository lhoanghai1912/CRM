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
import { donHangData } from '../../../utils/data';
import CustomHeader from '../../../components/CustomHeader';
import icons from '../../../assets/icons';
import { Screen_Name } from '../../../navigation/ScreenName';
import AppStyles from '../../../components/AppStyle';
import { ms, spacing } from '../../../utils/spacing';
import { colors } from '../../../utils/color';
import CardOrder from '../Card/Order';
import { navigate } from '../../../navigation/RootNavigator';

const PAGE_SIZE = 10;

const DonHang = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [donHangList, setDonHangList] = useState(donHangData);
  const data = donHangList.slice(0, page * PAGE_SIZE);

  // Load thêm data khi scroll tới cuối
  const handleLoadMore = () => {
    if (data.length < donHangData.length) {
      setPage(prev => prev + 1);
    }
  };

  // Refresh lại danh sách
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    setTimeout(() => setRefreshing(false), 500); // Giả lập refresh
  }, []);

  const handleAddOrder = newOrder => {
    setDonHangList(prev => [{ ...newOrder, id: `DH${Date.now()}` }, ...prev]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <CustomHeader
        title="Đơn hàng"
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
        <Text style={AppStyles.text}> {`# ${donHangList.length}`}</Text>
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
              <CardOrder order={item} setDonHangList={setDonHangList} />
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
              navigate(Screen_Name.DetailOrder, {
                order: {
                  id: '',
                  type: 'retail',
                  customer: '',
                  products: [],
                  date: '',
                  status: '',
                  note: '',
                },
                onSave: handleAddOrder,
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

export default DonHang;
