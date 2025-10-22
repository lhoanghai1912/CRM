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

type CardOrderProps = {
  order: any;
  updateOrderSaved?: (orderId: string, isSaved: boolean) => void;
};

const CardOrder: React.FC<CardOrderProps> = ({ order, updateOrderSaved }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đã giao':
        return '#4CAF50'; // xanh lá
      case 'Đang xử lý':
        return '#2196F3'; // xanh dương
      case 'Chờ thanh toán':
        return '#FFC107'; // vàng
      case 'Đã hủy':
        return '#F44336'; // đỏ
      case 'Đang vận chuyển':
        return '#9C27B0'; // tím
      default:
        return '#333';
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate(Screen_Name.DetailOrder, { order })}
        style={[styles.cardWrapper]}
      >
        <View style={styles.mainContent}>
          <View style={styles.statusbar}>
            <Text
              style={{
                flex: 1,
                marginVertical: spacing.medium,
                borderLeftWidth: 2,
                borderColor: getStatusColor(order.status),
              }}
            />
          </View>
          <View style={styles.Info}>
            {/* <Text
              style={[
                AppStyles.title,
                { marginBottom: 0, fontSize: Fonts.large },
              ]}
              numberOfLines={2}
            >
              {order.product}
            </Text> */}
            <Text style={[AppStyles.text]} numberOfLines={1}>
              {order.customer}
            </Text>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              {order.type === 'retail' ? 'Bán lẻ' : 'Dự án'} - SL:{' '}
              {order.products.reduce((sum, p) => sum + p.quantity, 0)}
            </Text>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              Tổng giá trị:{' '}
              {formatPriceToTy(
                order.products.reduce(
                  (sum, p) => sum + p.price * p.quantity,
                  0,
                ),
              )}
            </Text>
            <Text
              style={[
                AppStyles.text,
                {
                  color: getStatusColor(order.status),
                  fontWeight: 'bold',
                  marginTop: 4,
                },
              ]}
              numberOfLines={1}
            >
              {order.status}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardOrder;
