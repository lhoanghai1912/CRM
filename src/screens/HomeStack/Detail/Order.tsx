import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomHeader from '../../../components/CustomHeader';
import icons from '../../../assets/icons';
import NavBar from '../../../components/Navbar';
import { customerList, productList } from '../../../utils/data';
import AppStyles from '../../../components/AppStyle';
import { colors } from '../../../utils/color';
import { ms, s, spacing } from '../../../utils/spacing';

const DetailOrder = ({ navigation, route }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [orderData, setOrderData] = useState(route.params.order);

  const handleChange = (field, value) => {
    setOrderData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <NavBar
        title="Order Details"
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
      <View style={{ padding: spacing.medium }}>
        <Text style={styles.title}>Mã đơn: {orderData.id}</Text>
        {isEdit ? (
          <ScrollView>
            <Text style={AppStyles.text}>Chọn khách hàng:</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={orderData.customer}
                onValueChange={v => handleChange('customer', v)}
                // style={styles.input}
              >
                {customerList.map(c => (
                  <Picker.Item key={c.id} label={c.name} value={c.name} />
                ))}
              </Picker>
            </View>
            <TextInput
              style={styles.input}
              value={orderData.note || ''}
              onChangeText={v => handleChange('note', v)}
              placeholder="Ghi chú"
            />
            <Text style={AppStyles.text}>Chọn tệp khách hàng:</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={orderData.type}
                onValueChange={v => handleChange('type', v)}
              >
                <Picker.Item label="Bán lẻ" value="retail" />
                <Picker.Item label="Dự án" value="project" />
              </Picker>
            </View>
            <Text style={AppStyles.text}>Chọn trạng thái:</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={orderData.status}
                onValueChange={v => handleChange('status', v)}
              >
                <Picker.Item label="Đã giao" value="Đã giao" />
                <Picker.Item label="Đang xử lý" value="Đang xử lý" />
                <Picker.Item label="Chờ thanh toán" value="Chờ thanh toán" />
                <Picker.Item label="Đã hủy" value="Đã hủy" />
                <Picker.Item label="Đang vận chuyển" value="Đang vận chuyển" />
              </Picker>
            </View>
          </ScrollView>
        ) : (
          <>
            <Text style={AppStyles.text}>Khách hàng: {orderData.customer}</Text>
            <Text style={AppStyles.text}>Ghi chú: {orderData.note || '-'}</Text>
          </>
        )}
        <Text style={AppStyles.text}>
          Tệp khách hàng: {orderData.type === 'retail' ? 'Bán lẻ' : 'Dự án'}
        </Text>
        <Text style={AppStyles.text}>Trạng thái: {orderData.status}</Text>
        <Text style={AppStyles.text}>Ngày: {orderData.date}</Text>
        <Text style={[styles.title, { marginTop: 16 }]}>
          Danh sách sản phẩm:
        </Text>
      </View>
      <FlatList
        data={orderData.products}
        keyExtractor={(_, idx) => idx.toString()}
        scrollEnabled={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        renderItem={({ item, index }) => (
          <View style={styles.productCard}>
            {isEdit ? (
              <>
                <Text style={AppStyles.text}>Chọn sản phẩm:</Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={item.name}
                    onValueChange={v => {
                      const prod = productList.find(pr => pr.name === v);
                      const newProducts = [...orderData.products];
                      newProducts[index].name = v;
                      if (prod) newProducts[index].price = prod.price;
                      setOrderData(prev => ({
                        ...prev,
                        products: newProducts,
                      }));
                    }}
                  >
                    {productList.map(pr => (
                      <Picker.Item
                        key={pr.id}
                        label={pr.name}
                        value={pr.name}
                      />
                    ))}
                  </Picker>
                </View>
                <TextInput
                  style={styles.input}
                  value={item.quantity.toString()}
                  keyboardType="numeric"
                  onChangeText={v => {
                    const newProducts = [...orderData.products];
                    newProducts[index].quantity = Number(v);
                    setOrderData(prev => ({ ...prev, products: newProducts }));
                  }}
                  placeholder="Số lượng"
                />
                <TextInput
                  editable={false}
                  style={styles.readOnlyInput}
                  value={(item.price * item.quantity).toString()} // hiển thị thành tiền
                  placeholder="Giá"
                />
              </>
            ) : (
              <>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={AppStyles.text}>Số lượng: {item.quantity}</Text>
                <Text style={AppStyles.text}>
                  Giá: {item.price.toLocaleString()}đ
                </Text>
                <Text style={AppStyles.text}>
                  Thành tiền: {(item.price * item.quantity).toLocaleString()}đ
                </Text>
              </>
            )}
          </View>
        )}
        ListFooterComponent={
          <Text style={[styles.title, { marginTop: 16 }]}>
            Tổng giá trị:{' '}
            {orderData.products
              .reduce((sum, p) => sum + p.price * p.quantity, 0)
              .toLocaleString()}
            đ
          </Text>
        }
      />
      {isEdit && (
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => {
            // Xử lý lưu dữ liệu ở đây
            setIsEdit(false);
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            Lưu thay đổi
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontWeight: 'bold', fontSize: 16, marginBottom: 8 },
  productCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  productName: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 },
  input: {
    borderWidth: 2,
    padding: ms(2),
    borderColor: '#bbb',
    borderRadius: 8,
    marginVertical: spacing.small,
  },
  saveBtn: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
  },
  readOnlyInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginBottom: 6,
    backgroundColor: '#e0e0e0',
  },
});

export default DetailOrder;
