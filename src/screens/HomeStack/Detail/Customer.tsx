import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import NavBar from '../../../components/Navbar';
import { colors } from '../../../utils/color';
import icons from '../../../assets/icons';
import { ms, spacing } from '../../../utils/spacing';
import { Picker } from '@react-native-picker/picker';
import styles from './style';

const DetailCustomer = ({ navigation, route }) => {
  const { customer, onSave, isNew } = route.params || {};
  const [customerData, setCustomerData] = useState(
    customer || { name: '', company: '', phone: '', position: '', avt: '' },
  );
  const [isEdit, setIsEdit] = useState(isNew || false);
  const [otherSource, setOtherSource] = useState('');
  const handleChange = (field, value) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    let sourceValue = customerData.source;
    if (customerData.source === 'Khác') {
      sourceValue = `Khác (${otherSource})`;
    }
    if (onSave) {
      onSave({
        ...customerData,
        source: sourceValue,
        avt: customerData.avt || '',
      });
    }
    setIsEdit(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <NavBar
        title="Chi tiet khach hang"
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
      <ScrollView style={{ padding: 16, backgroundColor: colors.white }}>
        {isEdit ? (
          <>
            <Text style={styles.label}>Tên khách hàng:</Text>
            <TextInput
              style={styles.readOnlyInput}
              value={customerData.id}
              editable={false}
              placeholder="Mã hàng"
            />
            <Text style={styles.label}>Tên khách hàng:</Text>
            <TextInput
              style={styles.input}
              value={customerData.name}
              onChangeText={v => handleChange('name', v)}
              placeholder="Tên khách hàng"
            />
            <Text style={styles.label}>Công ty:</Text>
            <TextInput
              style={styles.input}
              value={customerData.company}
              onChangeText={v => handleChange('company', v)}
              placeholder="Tên công ty"
            />
            <Text style={styles.label}>Số điện thoại:</Text>
            <TextInput
              style={styles.input}
              value={customerData.phone}
              onChangeText={v => handleChange('phone', v)}
              placeholder="Số điện thoại"
              keyboardType="phone-pad"
            />
            <Text style={styles.label}>Nguồn:</Text>
            <View style={styles.inputPicker}>
              <Picker
                selectedValue={customerData.source}
                onValueChange={v => {
                  handleChange('source', v);
                  if (v !== 'Khác') setOtherSource('');
                }}
              >
                <Picker.Item label="Facebook" value="Facebook" />
                <Picker.Item label="Youtube" value="Youtube" />
                <Picker.Item label="Zalo" value="Zalo" />
                <Picker.Item label="Khác" value="Khác" />
              </Picker>
            </View>
            {customerData.source === 'Khác' && (
              <TextInput
                style={styles.input}
                value={otherSource}
                onChangeText={v => setOtherSource(v)}
                placeholder="Nhập nguồn khác"
              />
            )}
            {/* <Text style={styles.label}>Avatar URL:</Text>
            <TextInput
              style={styles.input}
              value={customerData.avt}
              onChangeText={v => handleChange('avt', v)}
              placeholder="Avatar URL"
            /> */}
            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.saveText}>Lưu</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.label}>Mã hàng: {customerData.id}</Text>
            <Text style={styles.label}>
              Tên khách hàng: {customerData.name}
            </Text>
            <Text style={styles.label}>Công ty: {customerData.company}</Text>
            <Text style={styles.label}>
              Số điện thoại: {customerData.phone}
            </Text>
            <Text style={styles.label}>Nguồn: {customerData.source}</Text>
            {/* <Text style={styles.label}>Avatar: {customerData.avt}</Text> */}
            <TouchableOpacity
              style={styles.editBtn}
              onPress={() => setIsEdit(true)}
            >
              <Text style={styles.saveText}>Chỉnh sửa</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: colors.background },
//   label: { fontWeight: 'bold', marginTop: 12, marginBottom: 4 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#bbb',
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 8,
//     backgroundColor: '#f9f9f9',
//   },
//   inputPicker: {
//     borderWidth: 2,
//     padding: ms(2),
//     borderColor: '#bbb',
//     borderRadius: 8,
//     marginVertical: spacing.small,
//   },
//   saveBtn: {
//     backgroundColor: '#2196F3',
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 16,
//     alignItems: 'center',
//   },
//   editBtn: {
//     backgroundColor: '#FFC107',
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 16,
//     alignItems: 'center',
//   },
//   readOnlyInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 6,
//     padding: 8,
//     marginBottom: 6,
//     backgroundColor: '#e0e0e0',
//   },
//   saveText: { color: '#fff', fontWeight: 'bold' },
// });

export default DetailCustomer;
