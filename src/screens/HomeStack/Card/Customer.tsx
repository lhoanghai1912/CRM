import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './style';
import { navigate } from '../../../navigation/RootNavigator';
import { Screen_Name } from '../../../navigation/ScreenName';
import { link } from '../../../utils/constants';
import AppStyles from '../../../components/AppStyle';
import { formatPriceToTy } from '../../../components/formatPrice';
import { Fonts } from '../../../utils/fontSize';

type CardCustomerProps = {
  customer: any;
  updateCustomerSaved?: (customerId: string, isSaved: boolean) => void;
};

const CardCustomer: React.FC<CardCustomerProps> = ({
  customer,
  updateCustomerSaved,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigate(Screen_Name.DetailCustomer_Screen, { customer })
        }
        style={[styles.cardWrapper]}
      >
        <View style={styles.mainContent}>
          <Image
            source={{
              uri: /^https?:\/\//.test(customer.companyLogoUrl || customer.avt)
                ? customer.avt || customer.logoUrl
                : `${link.url}${customer.companyLogoUrl || customer.logoUrl}`,
            }}
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
              {customer.name}
            </Text>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              {customer.company}
            </Text>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              {customer.phone
                ? `${customer.phone} - ${customer.position}`
                : customer.position}
              {/* Assuming you want to display the customer's position */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardCustomer;
