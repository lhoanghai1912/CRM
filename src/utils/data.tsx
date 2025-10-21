export interface TiemNang {
  id: string;
  name: string;
  company?: string;
  phone?: string;
  position?: string;
  avt?: string;
}

export const tiemNangData: TiemNang[] = Array.from({ length: 30 }, (_, i) => ({
  id: (i + 1).toString(),
  name: `Khách hàng ${i + 1}`,
  company: `Công ty ${i + 1}`,
  phone: `090-0000-${(100 + i).toString().padStart(3, '0')}`,
  position: i % 3 === 0 ? 'Kế toán' : i % 3 === 1 ? 'Giám đốc' : 'Quản lý',
  avt: `https://i.pravatar.cc/150?img=${i + 1}`,
}));

// export const tiemNangData: TiemNang[] = [
//   {
//     id: '1',
//     name: 'Anh Khương',
//     company: 'Công Ty Cổ Phần Xuất Nhập Khẩu Lộc Hương',
//     phone: '098-7858-108',
//     position: 'Kế toán',
//     avt:'https://i.pravatar.cc/150?img=1',
//   },
//   {
//     id: '2',
//     name: 'Anh Hiển',
//     company: 'Cty TNHH XNK Ngân Hương',
//     phone: '',
//     position: 'Kế toán trưởng',
//     avt: 'https://i.pravatar.cc/150?img=2',
//   },
//   {
//     id: '3',
//     name: 'Bành Tú Dung',
//     company: 'CÔNG TY TNHH DỊCH VỤ KIM PHÁT',
//     phone: '090-3989-368',
//     position: 'Kế toán',
//     avt: 'https://i.pravatar.cc/150?img=3',
//   },
//   {
//     id: '4',
//     name: 'bình',
//     company: 'CÔNG TY TNHH Tư Vấn Đầu Tư Khởi Thịnh Phát',
//     phone: '',
//     position: 'Kế toán',
//     avt: undefined,
//   },
//   {
//     id: '5',
//     name: 'Bùi Mai Phương Trinh',
//     company: 'Công ty TNHH TM DV Sản xuất Xuất nhập khẩu Việt Nhật',
//     phone: '',
//     position: 'Kế toán trưởng',
//     avt: undefined,

//   },
//   {
//     id: '6',
//     name: 'Bùi Thị Ánh Tuyết',
//     company: 'Công Ty TNHH Hóa Công Nghệ Na No',
//     phone: '',
//     position: 'quản lý',
//     avt: undefined,
//   },
//   {
//     id: '7',
//     name: 'Bùi Thị Chinh',
//     company: 'Công Ty TNHH Hóa Công Nghệ Na No',
//     phone: '090-3757-598',
//     position: 'Giám đốc',
//     avt: undefined,
//   },
//   {
//     id: '8',
//     name: 'Cao Thụy Uyên Mi',
//     company: 'CÔNG TY TNHH DỊCH VỤ KIM PHÁT',
//     phone: '090-7380-699',
//     position: 'Kế toán',
//     avt: 'https://i.pravatar.cc/150?img=4',

//   },
// ];
