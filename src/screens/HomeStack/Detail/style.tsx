import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/color';
import { ms, spacing } from '../../../utils/spacing';

const styles = StyleSheet.create({
  productName: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 },

  container: { flex: 1, backgroundColor: colors.background },
  label: { fontWeight: 'bold', marginTop: 12, marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: spacing.small,
    marginBottom: spacing.small,
    backgroundColor: '#f9f9f9',
    padding: spacing.small,
  },
  inputPicker: {
    borderWidth: 2,
    padding: ms(2),
    borderColor: '#bbb',
    borderRadius: spacing.small,
    marginVertical: spacing.small,
  },
  saveBtn: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: spacing.small,
    marginTop: spacing.medium,
    alignItems: 'center',
  },

  productCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: spacing.small,
    padding: 12,
    marginBottom: 10,
  },
  editBtn: {
    backgroundColor: '#FFC107',
    padding: 12,
    borderRadius: spacing.small,
    marginTop: spacing.medium,
    alignItems: 'center',
  },
  readOnlyInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: spacing.small,
    padding: spacing.small,
    marginBottom: spacing.small,
    backgroundColor: '#e0e0e0',
  },
  saveText: { color: '#fff', fontWeight: 'bold' },
  title: {
    fontWeight: 'bold',
    fontSize: spacing.medium,
    marginBottom: spacing.small,
  },
});

export default styles;
