import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './style';
import { navigate } from '../../../navigation/RootNavigator';
import { Screen_Name } from '../../../navigation/ScreenName';
import { link } from '../../../utils/constants';
import AppStyles from '../../../components/AppStyle';
import { formatPriceToTy } from '../../../components/formatPrice';
import { Fonts } from '../../../utils/fontSize';
import { spacing } from '../../../utils/spacing';
import moment from 'moment';

type CardRutHoSoProps = {
  hoSo: any;
  setHoSoList: (fn: (prev: any[]) => any[]) => void;
};

const CardRutHoSo: React.FC<CardRutHoSoProps> = ({ hoSo, setHoSoList }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đã rút':
        return '#4CAF50'; // xanh lá
      case 'Đã duyệt':
        return '#2196F3'; // xanh dương
      case 'Chờ duyệt':
        return '#FFC107'; // vàng
      case 'Từ chối':
        return '#F44336'; // đỏ
      default:
        return '#333';
    }
  };

  const handleUpdateHoSo = updatedHoSo => {
    setHoSoList(prev =>
      prev.map(hoSo => (hoSo.id === updatedHoSo.id ? updatedHoSo : hoSo)),
    );
  };

  console.log('HoSo in CardRutHoSo:', hoSo);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigate(Screen_Name.DetailHoSo, {
            hoSo,
            onSave: handleUpdateHoSo, // truyền hàm cập nhật vào params
          })
        }
        style={[styles.cardWrapper]}
      >
        <View style={styles.mainContent}>
          <View style={styles.statusbar}>
            <Text
              style={{
                flex: 1,
                marginVertical: spacing.medium,
                borderLeftWidth: 2,
                borderColor: getStatusColor(hoSo.status),
              }}
            />
          </View>
          <View style={styles.Info}>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              Mã hồ sơ : {hoSo.id}
            </Text>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              Ngày đề nghị rút :{' '}
              {moment(hoSo.ngayDeNghiRut).format('DD/MM/YYYY')}
            </Text>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              Đơn hàng đề nghị rút : {hoSo.order?.id}
            </Text>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              Người đề nghị rút : {hoSo.nguoiDeNghi}
            </Text>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              Ghi chú: {hoSo.note}
            </Text>
            <Text
              style={[
                AppStyles.text,
                {
                  color: getStatusColor(hoSo.status),
                  fontWeight: 'bold',
                  marginTop: 4,
                },
              ]}
              numberOfLines={1}
            >
              {hoSo.status}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardRutHoSo;
