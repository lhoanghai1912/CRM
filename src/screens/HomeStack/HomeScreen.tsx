import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AppButton from '../../components/AppButton';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/userSlice';
import icons from '../../assets/icons';
import CustomHeader from '../../components/CustomHeader';
import { navigate } from '../../navigation/RootNavigator';
import { Screen_Name } from '../../navigation/ScreenName';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { colors } from '../../utils/color';
import { spacing } from '../../utils/spacing';

const PAGE_SIZE = 10;

const tasks = {
  '2025-10-20': [
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Tạo dữ liệu',
      time: '08:00',
      desc: 'Thực hiện tạo dữ liệu demo cho khách hàng trải nghiệm',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
    {
      name: 'Demo sản phẩm',
      time: '08:00 - 10:00',
      desc: 'Demo sản phẩm cho khách hàng',
      day: '2025-10-28',
    },
  ],
  '2025-10-21': [
    {
      name: 'Khai thác thông tin',
      time: '12:00',
      desc: 'Thu nhập thông tin khách hàng',
      day: '2025-10-29',
    },
  ],
  '2025-10-22': [
    {
      name: 'Chốt hợp đồng',
      time: '13:30 - 14:30',
      desc: 'Chốt hợp đồng với công ty 3T',
      day: '2025-10-30',
    },
  ],
};

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  const [currentWeekDate, setCurrentWeekDate] = useState(selectedDate);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const allTasksForSelectedDate = tasks[selectedDate] || [];
  const tasksForSelectedDate = allTasksForSelectedDate.slice(
    0,
    page * PAGE_SIZE,
  );
  const [loadingMore, setLoadingMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const noMoreData =
    tasksForSelectedDate.length >= allTasksForSelectedDate.length;

  const getWeekDates = (dateStr: string) => {
    const startOfWeek = moment(dateStr).startOf('isoWeek');
    return Array.from({ length: 7 }, (_, i) =>
      startOfWeek.clone().add(i, 'days').format('YYYY-MM-DD'),
    );
  };
  const weekDates = getWeekDates(selectedDate);

  const handleLoadMore = () => {
    try {
    } catch (error) {}
    if (tasksForSelectedDate.length < allTasksForSelectedDate.length) {
      setPage(prev => prev + 1);
    }
  };

  // Refresh khi kéo xuống
  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    // Nếu có API thì gọi lại API ở đây
    setTimeout(() => setRefreshing(false), 1000); // giả lập refresh
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskCard}>
      <Text style={styles.taskTitle}>{item.name}</Text>
      <Text style={styles.taskDesc}>{item.desc}</Text>
      <View style={styles.taskInfoRow}>
        <Text style={styles.taskTime}>{item.time}</Text>
      </View>
    </View>
  );

  const renderFooter = () => {
    if (loadingMore) {
      return (
        <View style={{ padding: spacing.medium, alignItems: 'center' }}>
          <ActivityIndicator size="small" />
        </View>
      );
    }
    if (!loading && noMoreData && tasksForSelectedDate.length > 0) {
      return (
        <View style={{ padding: spacing.medium, alignItems: 'center' }}>
          <Text style={{ color: '#888' }}>Đã hết dữ liệu</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Trang chủ"
        leftIcon={icons.calendar}
        leftPress={() => setCalendarVisible(!calendarVisible)}
        rightIcon={icons.search}
        rightIcon2={icons.username}
        rightPress2={() => navigate(Screen_Name.Profile)}
      />
      <View style={styles.weekRow}>
        {weekDates.map(date => (
          <TouchableOpacity
            key={date}
            style={[
              styles.dayItem,
              selectedDate === date && styles.daySelected,
            ]}
            onPress={() => setSelectedDate(date)}
          >
            <Text
              style={
                selectedDate === date ? styles.dayTextSelected : styles.dayText
              }
            >
              {moment(date).format('dd')}
            </Text>
            <Text
              style={
                selectedDate === date ? styles.dayTextSelected : styles.dayText
              }
            >
              {moment(date).date()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Calendar
        current={selectedDate}
        onDayPress={day => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#2E66E7' },
        }}
        style={{
          margin: 10,
          borderRadius: 8,
          elevation: 2,
          display: calendarVisible ? 'flex' : 'none',
        }}
      />
      <View style={styles.mainContent}>
        <FlatList
          data={tasksForSelectedDate}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={renderTask}
          ListEmptyComponent={
            <View style={styles.emptyData}>
              <Text>Không có công việc</Text>
            </View>
          }
          style={{
            backgroundColor: colors.white,
            marginBottom: spacing.medium,
          }}
          contentContainerStyle={{}} // Tăng paddingBottom
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.2}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    marginVertical: spacing.medium,
    marginHorizontal: spacing.small,
    borderColor: colors.Gray,
    // backgroundColor: colors.Gray,
    flex: 1,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 8,
  },
  dayItem: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    minWidth: 40,
  },
  daySelected: {
    backgroundColor: '#2E66E7',
  },
  dayText: {
    color: '#222',
  },
  dayTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    zIndex: 10,
  },
  taskCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.Gray,
    borderWidth: 0.5,
    marginBottom: spacing.medium,
    padding: spacing.medium,
    elevation: 2,
  },
  taskTitle: { fontWeight: 'bold', fontSize: spacing.medium },
  taskDesc: { color: '#555', marginVertical: 4 },
  taskInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  taskTime: { color: '#f60', fontWeight: 'bold', fontSize: 13 },
  emptyData: { padding: 20, alignItems: 'center' },
});

export default HomeScreen;
