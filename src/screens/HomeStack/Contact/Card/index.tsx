import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import styles from './style';
import { navigate } from '../../../../navigation/RootNavigator';
import { Screen_Name } from '../../../../navigation/ScreenName';
import { link } from '../../../../utils/constants';
import AppStyles from '../../../../components/AppStyle';
import { formatPriceToTy } from '../../../../components/formatPrice';
import { Fonts } from '../../../../utils/fontSize';

type CardContactProps = {
  contact: any;
  updateContactSaved?: (contactId: string, isSaved: boolean) => void;
};

const CardContact: React.FC<CardContactProps> = ({
  contact,
  updateContactSaved,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate(Screen_Name.DetailContact_Screen, { contact })}
        style={[styles.cardContactWrapper]}
      >
        <View style={styles.mainContent}>
          <Image
            source={{
              uri: /^https?:\/\//.test(contact.companyLogoUrl || contact.avt)
                ? contact.avt || contact.logoUrl
                : `${link.url}${contact.companyLogoUrl || contact.logoUrl}`,
            }}
            style={styles.companyImage}
          />
          <View style={styles.contactInfo}>
            <Text
              style={[
                AppStyles.title,
                { marginBottom: 0, fontSize: Fonts.large },
              ]}
              numberOfLines={2}
            >
              {contact.name}
            </Text>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              {contact.company}
            </Text>
            <Text style={[AppStyles.text]} numberOfLines={1}>
              {contact.phone
                ? `${contact.phone} - ${contact.position}`
                : contact.position}
              {/* Assuming you want to display the contact's position */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardContact;
