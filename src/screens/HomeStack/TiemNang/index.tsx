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
import { tiemNangData } from '../../../utils/data';
import CardContact from '../Contact/Card';
import CustomHeader from '../../../components/CustomHeader';
import icons from '../../../assets/icons';
import { Screen_Name } from '../../../navigation/ScreenName';
import AppStyles from '../../../components/AppStyle';
import { spacing } from '../../../utils/spacing';
import { colors } from '../../../utils/color';

const PAGE_SIZE = 10;

const TiemNang = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [isShow, setIsShow] = useState(false);
  // Lấy data theo page
  const data = tiemNangData.slice(0, page * PAGE_SIZE);

  // Load thêm data khi scroll tới cuối
  const handleLoadMore = () => {
    if (data.length < tiemNangData.length) {
      setPage(prev => prev + 1);
    }
  };

  // Refresh lại danh sách
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
    setTimeout(() => setRefreshing(false), 500); // Giả lập refresh
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <CustomHeader
        title="Tiềm Năng"
        leftIcon={icons.back}
        leftPress={() => navigation.goBack()}
        rightIcon={icons.settings}
        rightPress={() => navigation.navigate(Screen_Name.ThietLapPhanHe)}
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
        <Text style={AppStyles.text}> {`# ${tiemNangData.length}`}</Text>
        <Image style={AppStyles.icon} source={isShow ? icons.down : icons.up} />
      </TouchableOpacity>
      {isShow && (
        <FlatList
          data={data}
          style={{
            backgroundColor: colors.white,
            marginBottom: spacing.medium,
          }}
          contentContainerStyle={{}} // Tăng paddingBottom
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardContact contact={item} />}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.2}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default TiemNang;
