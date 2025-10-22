import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './style';
import { navigate } from '../../../navigation/RootNavigator';
import { Screen_Name } from '../../../navigation/ScreenName';
import { link } from '../../../utils/constants';
import AppStyles from '../../../components/AppStyle';
import { formatPriceToTy } from '../../../components/formatPrice';
import { Fonts } from '../../../utils/fontSize';
import images from '../../../assets/images';

type CardChangeProps = {
  change: any;
  setChangeList: (fn: (prev: any[]) => any[]) => void;
};

const CardChange: React.FC<CardChangeProps> = ({ change, setChangeList }) => {
  const handleUpdateChange = updatedChange => {
    setChangeList(prev =>
      prev.map(c => (c.id === updatedChange.id ? updatedChange : c)),
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigate(Screen_Name.DetailChange, {
            change,
            onSave: handleUpdateChange, // truyền hàm cập nhật vào params
          })
        }
        style={[styles.cardWrapper]}
      >
        <View style={styles.mainContent}>
          <Image
            source={
              change.avt && /^https?:\/\//.test(change.avt)
                ? { uri: change.avt }
                : change.companyLogoUrl &&
                  /^https?:\/\//.test(change.companyLogoUrl)
                ? { uri: change.companyLogoUrl }
                : change.logoUrl
                ? { uri: `${link.url}${change.logoUrl}` }
                : images.avt_default // ảnh mặc định nếu không có uri hợp lệ
            }
            style={styles.companyImage}
          />
          <View style={styles.Info}>
            <Text
              style={[
                AppStyles.title,
                { marginBottom: 0, fontSize: Fonts.large },
              ]}
              numberOfLines={2}
            >
              {change.customer?.name}
            </Text>
            {change.interest && (
              <Text style={[AppStyles.text]} numberOfLines={1}>
                {change.interest}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardChange;
