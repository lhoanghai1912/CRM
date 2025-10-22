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
import { coHoiData, donHangData, hoSoData } from '../../../utils/data';
import CustomHeader from '../../../components/CustomHeader';
import icons from '../../../assets/icons';
import { Screen_Name } from '../../../navigation/ScreenName';
import AppStyles from '../../../components/AppStyle';
import { ms, spacing } from '../../../utils/spacing';
import { colors } from '../../../utils/color';
import CardOrder from '../Card/Order';
import { navigate } from '../../../navigation/RootNavigator';
import CardChange from '../Card/Change';
import CardRutHoSo from '../Card/RutHoSo';

const PAGE_SIZE = 10;

const RutHoSo = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [changeList, setChangeList] = useState(hoSoData);
  const data = changeList.slice(0, page * PAGE_SIZE);

  // Load thêm data khi scroll tới cuối
  const handleLoadMore = () => {
    if (data.length < hoSoData.length) {
      setPage(prev => prev + 1);
    }
  };

  // Refresh lại danh sách
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    setTimeout(() => setRefreshing(false), 500); // Giả lập refresh
  }, []);

  const handleAddOrder = newChange => {
    setChangeList(prev => [{ ...newChange, id: `DH${Date.now()}` }, ...prev]);
  };

  console.log('changeList', changeList);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <CustomHeader
        title="Rut Ho So"
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
        <Text style={AppStyles.text}> {`# ${changeList.length}`}</Text>
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
              <CardRutHoSo hoSo={item} setHoSoList={setChangeList} />
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
              console.log('id', changeList.length + 1);
              navigate(Screen_Name.DetailHoSo, {
                hoso: {
                  id: `HS${changeList.length + 1}`,
                  order: undefined, // hoặc bỏ trường này
                  orderId: '',
                  products: [],
                  ngayDeNghiRut: new Date().toISOString().split('T')[0],
                  nguoiDeNghi: 'Chu tai khoan hien tai',
                  note: '',
                  status: '',
                },
                onSave: handleAddOrder,
                isNew: true,
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
    // <View>
    //   <Text>RutHoSo Screen</Text>
    // </View>
  );
};

export default RutHoSo;
