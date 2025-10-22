import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import icons from '../../../assets/icons';
import NavBar from '../../../components/Navbar';
import { donHangData, productList } from '../../../utils/data';
import AppStyles from '../../../components/AppStyle';
import { colors } from '../../../utils/color';
import { ms, spacing } from '../../../utils/spacing';
import styles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const DetailHoSo = ({ navigation, route }) => {
  const { hoSo, onSave, isNew } = route.params;
  console.log('DetailHoSo route.params:', route.params);

  const [hoSoData, setHoSoData] = useState(
    hoSo
      ? {
          ...hoSo,
          order:
            hoSo.order && !Array.isArray(hoSo.order) ? hoSo.order : undefined,
        }
      : {
          id: '',
          order: undefined,
          orderId: '',
          products: [],
          ngayDeNghiRut: '',
          nguoiDeNghi: '',
          note: '',
          status: '',
        },
  );
  const [isEdit, setIsEdit] = useState(isNew || false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChange = (field, value) => {
    setHoSoData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave({
        ...hoSoData,
        id: hoSoData.id || `DH${Date.now()}`, // sinh id nếu chưa có
      });
    }
    setIsEdit(false);
    navigation.goBack();
  };

  console.log('Rendering DetailHoSo with hoSoData:', hoSoData);

  return (
    <View style={styles.container}>
      <NavBar
        title="Chi tiet ho so"
        onPress={() => navigation.goBack()}
        icon1={isEdit ? icons.checked : icons.edit}
        onRightPress1={() => {
          if (isEdit) {
            // Xử lý lưu dữ liệu ở đây (gọi API hoặc cập nhật state cha)
            setIsEdit(false);
          } else {
            setIsEdit(true);
          }
        }}
      />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: colors.white,
          marginVertical: spacing.medium,
        }}
      >
        <View style={{ padding: spacing.medium }}>
          <Text style={styles.title}>Mã đơn: {hoSoData.id}</Text>
          {isEdit ? (
            <>
              {/* Chọn ngày đề nghị rút */}
              <Text style={AppStyles.text}>Ngày đề nghị rút:</Text>
              <TouchableOpacity
                style={styles.input}
                onPress={() => setShowDatePicker(true)}
              >
                <Text>
                  {hoSoData.ngayDeNghiRut
                    ? moment(hoSoData.ngayDeNghiRut).format('DD/MM/YYYY')
                    : 'Chọn ngày'}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={
                    hoSoData.ngayDeNghiRut
                      ? new Date(hoSoData.ngayDeNghiRut)
                      : new Date()
                  }
                  mode="date"
                  display="default"
                  onChange={(event, date) => {
                    setShowDatePicker(false);
                    if (date) {
                      handleChange(
                        'ngayDeNghiRut',
                        moment(date).format('YYYY-MM-DD'),
                      );
                    }
                  }}
                />
              )}
              {/* Chọn đơn hàng đề nghị rút */}
              <Text style={AppStyles.text}>Đơn hàng đề nghị rút:</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.Gray,
                  borderRadius: spacing.small,
                  marginBottom: spacing.small,
                }}
              >
                <Picker
                  selectedValue={hoSoData.order?.id || hoSoData.orderId}
                  onValueChange={v => {
                    handleChange('orderId', v);
                    const selectedOrder = donHangData.find(dh => dh.id === v);
                    handleChange('order', selectedOrder); // cập nhật object đơn hàng
                    handleChange(
                      'products',
                      selectedOrder ? selectedOrder.products : [],
                    );
                  }}
                >
                  {donHangData.map(dh => (
                    <Picker.Item key={dh.id} label={dh.id} value={dh.id} />
                  ))}
                </Picker>
              </View>
              <Text style={AppStyles.text}>Mã đơn hàng</Text>
              <TextInput
                style={styles.readOnlyInput}
                editable={false}
                value={hoSoData.order?.id || ''}
                onChangeText={v => handleChange('note', v)}
                placeholder="Ghi chú"
              />
              <Text style={AppStyles.text}>Người đề nghị:</Text>
              <TextInput
                style={styles.input}
                value={hoSoData.nguoiDeNghi || ''}
                onChangeText={v => handleChange('nguoiDeNghi', v)}
                placeholder="Người đề nghị"
              />
              {/* Ghi chú */}
              <Text style={AppStyles.text}>Ghi chú:</Text>
              <TextInput
                style={styles.input}
                value={hoSoData.note || ''}
                onChangeText={v => handleChange('note', v)}
                placeholder="Ghi chú"
              />
              <Text style={AppStyles.text}>Trạng thái hồ sơ:</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.Gray,
                  borderRadius: spacing.small,
                  marginBottom: spacing.small,
                }}
              >
                <Picker
                  selectedValue={hoSoData.status}
                  onValueChange={v => handleChange('status', v)}
                >
                  <Picker.Item label="Chờ duyệt" value="Chờ duyệt" />
                  <Picker.Item label="Đã duyệt" value="Đã duyệt" />
                  <Picker.Item label="Đã rút" value="Đã rút" />
                  <Picker.Item label="Từ chối" value="Từ chối" />
                </Picker>
              </View>
            </>
          ) : (
            <>
              <Text style={AppStyles.text}>
                Ngày đề nghị rút:{' '}
                {moment(hoSoData.ngayDeNghiRut).format('DD/MM/YYYY')}
              </Text>
              <Text style={AppStyles.text}>
                Đơn hàng đề nghị rút: {hoSoData.orderId}
              </Text>
              <Text style={AppStyles.text}>
                Tên hàng đề nghị rút:{' '}
                {Array.isArray(hoSoData.products)
                  ? hoSoData.products.map(p => p.name).join(', ')
                  : ''}
              </Text>
              <Text style={AppStyles.text}>
                Ghi chú: {hoSoData.note || '-'}
              </Text>
              <Text style={AppStyles.text}>
                Tệp khách hàng:{' '}
                {hoSoData.type === 'retail' ? 'Bán lẻ' : 'Dự án'}
              </Text>
              <Text style={AppStyles.text}>Trạng thái: {hoSoData.status}</Text>
            </>
          )}
        </View>

        {isEdit && (
          <>
            <TouchableOpacity
              style={styles.saveBtn}
              onPress={() => {
                // Xử lý lưu dữ liệu ở đây
                {
                  handleSave(), setIsEdit(false);
                }
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                Lưu thay đổi
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: colors.background },
//   title: { fontWeight: 'bold', fontSize: 16, marginBottom: 8 },
//   productCard: {
//     backgroundColor: '#f5f5f5',
//     bhoSoRadius: 8,
//     padding: 12,
//     marginBottom: 10,
//   },
//   productName: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 },
//   input: {
//     bhoSoWidth: 2,
//     padding: ms(2),
//     bhoSoColor: '#bbb',
//     bhoSoRadius: 8,
//     marginVertical: spacing.small,
//   },
//   saveBtn: {
//     backgroundColor: '#2196F3',
//     padding: 12,
//     bhoSoRadius: 8,
//     margin: 16,
//     alignItems: 'center',
//   },
//   readOnlyInput: {
//     bhoSoWidth: 1,
//     bhoSoColor: '#ccc',
//     bhoSoRadius: 6,
//     padding: 8,
//     marginBottom: 6,
//     backgroundColor: '#e0e0e0',
//   },
// });

export default DetailHoSo;
