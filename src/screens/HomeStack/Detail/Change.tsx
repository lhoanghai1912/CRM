import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import NavBar from '../../../components/Navbar';
import { colors } from '../../../utils/color';
import icons from '../../../assets/icons';
import { ms, spacing } from '../../../utils/spacing';
import { Picker } from '@react-native-picker/picker';
import { customerList, productList } from '../../../utils/data';
import AppStyles from '../../../components/AppStyle';
import styles from './style';

const DetailChange = ({ navigation, route }) => {
  const { change, onSave, isNew } = route.params || {};
  const [changeData, setChangeData] = useState(change);
  const [isEdit, setIsEdit] = useState(isNew || false);
  const [otherSource, setOtherSource] = useState('');
  const [showProposalModal, setShowProposalModal] = useState(false);
  const handleChange = (field, value) => {
    setChangeData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    let sourceValue = changeData.source;
    if (changeData.source === 'Khác') {
      sourceValue = `Khác (${otherSource})`;
    }
    if (onSave) {
      onSave({
        ...changeData,
        source: sourceValue,
        avt: changeData.avt || '',
      });
    }
    setIsEdit(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <NavBar
        title="Chi tiet co hoi"
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
            <Text style={styles.label}>Mã cơ hội:</Text>
            <TextInput
              style={styles.readOnlyInput}
              value={changeData.id}
              editable={false}
              placeholder="Mã cơ hội"
            />
            <Text style={styles.label}>Mã khách hàng:</Text>
            <TextInput
              style={styles.readOnlyInput}
              value={changeData.customer?.id}
              editable={false}
              placeholder="Mã khách hàng"
            />
            <Text style={styles.label}>Tên khách hàng:</Text>
            <View style={styles.input}>
              <Picker
                selectedValue={changeData.customer?.id}
                onValueChange={id => {
                  const selectedCustomer = customerList.find(c => c.id === id);
                  handleChange('customer', selectedCustomer);
                }}
              >
                {customerList.map(c => (
                  <Picker.Item key={c.id} label={c.name} value={c.id} />
                ))}
              </Picker>
            </View>
            <Text style={styles.label}>Số điện thoại:</Text>
            <TextInput
              style={styles.input}
              value={changeData.customer?.phone}
              onChangeText={v => handleChange('phone', v)}
              placeholder="Số điện thoại"
              keyboardType="phone-pad"
            />
            <Text style={styles.label}>Quan tâm:</Text>
            <TextInput
              style={styles.input}
              value={changeData.interest}
              onChangeText={v => handleChange('interest', v)}
              placeholder="Quan tâm"
            />
            <Text style={styles.label}>Đề xuất:</Text>
            <TouchableOpacity
              style={[
                styles.input,
                { minHeight: 40, justifyContent: 'center' },
              ]}
              onPress={() => setShowProposalModal(true)}
            >
              <Text>
                {Array.isArray(changeData.proposal) &&
                changeData.proposal.length > 0
                  ? changeData.proposal.join(', ')
                  : 'Chọn sản phẩm đề xuất'}
              </Text>
            </TouchableOpacity>

            <Modal
              visible={showProposalModal}
              transparent
              animationType="slide"
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 12,
                    padding: 20,
                    width: '80%',
                    maxHeight: '70%',
                  }}
                >
                  <Text style={[styles.label, { marginBottom: 12 }]}>
                    Chọn sản phẩm đề xuất
                  </Text>
                  <ScrollView>
                    {productList.map(product => (
                      <TouchableOpacity
                        key={product.id}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginBottom: 8,
                        }}
                        onPress={() => {
                          const proposals = changeData.proposal || [];
                          if (proposals.includes(product.name)) {
                            handleChange(
                              'proposal',
                              proposals.filter(p => p !== product.name),
                            );
                          } else {
                            handleChange('proposal', [
                              ...proposals,
                              product.name,
                            ]);
                          }
                        }}
                      >
                        <View
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#2196F3',
                            backgroundColor: (
                              changeData.proposal || []
                            ).includes(product.name)
                              ? '#2196F3'
                              : '#fff',
                            marginRight: 10,
                          }}
                        />
                        <Text>{product.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                  <TouchableOpacity
                    style={[styles.saveBtn, { marginTop: 10 }]}
                    onPress={() => setShowProposalModal(false)}
                  >
                    <Text style={styles.saveText}>Xong</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.saveText}>Lưu</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.label}>Mã cơ hội: {changeData.id}</Text>
            <Text style={styles.label}>
              Mã khách hàng: {changeData.customer?.id}
            </Text>
            <Text style={styles.label}>
              Tên khách hàng: {changeData.customer?.name}
            </Text>
            <Text style={styles.label}>Quan tâm: {changeData.interest}</Text>
            <Text style={styles.label}>Đề xuất: {changeData.proposal}</Text>
            {/* <Text style={styles.label}>Avatar: {changeData.avt}</Text> */}
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
//   productName: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 },

//   container: { flex: 1, backgroundColor: colors.background },
//   label: { fontWeight: 'bold', marginTop: 12, marginBottom: 4 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#bbb',
//     borderRadius: 8,
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

//   productCard: {
//     backgroundColor: '#f5f5f5',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 10,
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

export default DetailChange;
