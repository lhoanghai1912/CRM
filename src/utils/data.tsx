// export interface TiemNang {
//   id: string;
//   name: string;
//   company?: string;
//   phone?: string;
//   position?: string;
//   avt?: string;
// }

export interface Customer {
  id: string;
  name: string;
  company?: string;
  phone?: string;
  avt?: string;
  source?: string;
}

export interface DonHang {
  id: string;
  type: 'retail' | 'project';
  customer: string;
  products: DonHangProduct[];
  date: string;
  status: string;
  note?: string;
}

export interface CoHoi {
  id: string;
  customer: Customer; // id hoặc name khách hàng
  interest?: string; // nội dung quan tâm
  proposal?: string[]; // danh sách sản phẩm đề xuất
  note?: string; // ghi chú thêm
}

export interface HoSo {
  id: string; // Mã hồ sơ
  order: DonHang; // Mã đơn hàng
  ngayDeNghiRut: string; // Ngày đề nghị rút (yyyy-mm-dd)
  nguoiDeNghi: string; // Người đề nghị rút
  status: string; // Trạng thái hồ sơ
  note?: string; // Ghi chú
}

export const customerList: Customer[] = [
  {
    id: 'KH1',
    name: 'Nguyễn Minh Khôi',
    company: 'Công ty AlphaTech',
    phone: '090-0000-201',
    avt: 'https://i.pravatar.cc/150?img=1',
  },
  { id: 'KH2', name: 'Trần Thị Mai', phone: '090-0000-202' },
  {
    id: 'KH3',
    name: 'Lê Văn Hùng',
    company: 'Công ty GreenView',
    phone: '090-0000-203',
  },
  {
    id: 'KH4',
    name: 'Phạm Thị Hương',
    company: 'Công ty NovaLand',
    phone: '090-0000-204',
    avt: 'https://i.pravatar.cc/150?img=4',
  },
  { id: 'KH5', name: 'Hoàng Đức Anh', phone: '090-0000-205' },
  {
    id: 'KH6',
    name: 'Ngô Thị Linh',
    company: 'Công ty FPT Software',
    phone: '090-0000-206',
    avt: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: 'KH7',
    name: 'Đặng Văn Nam',
    phone: '090-0000-207',
    avt: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: 'KH8',
    name: 'Bùi Thanh Nga',
    company: 'Công ty VinAI',
    phone: '090-0000-208',
  },
  {
    id: 'KH9',
    name: 'Vũ Hoàng Phúc',
    company: 'Công ty Techcom',
    phone: '090-0000-209',
  },
  {
    id: 'KH10',
    name: 'Phan Thị Uyên',
    phone: '090-0000-210',
    avt: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: 'KH11',
    name: 'Nguyễn Quang Dũng',
    company: 'Công ty SmartCity',
    phone: '090-0000-211',
  },
  { id: 'KH12', name: 'Trần Thị Yến', phone: '090-0000-212' },
  {
    id: 'KH13',
    name: 'Lê Thành Công',
    company: 'Công ty MegaBuild',
    phone: '090-0000-213',
    avt: 'https://i.pravatar.cc/150?img=13',
  },
  {
    id: 'KH14',
    name: 'Phạm Thị Thảo',
    company: 'Công ty GlobalTech',
    phone: '090-0000-214',
  },
  { id: 'KH15', name: 'Hoàng Gia Bảo', phone: '090-0000-215' },
  {
    id: 'KH16',
    name: 'Ngô Thị Vân',
    company: 'Công ty VietTravel',
    phone: '090-0000-216',
    avt: 'https://i.pravatar.cc/150?img=16',
  },
  { id: 'KH17', name: 'Đặng Văn Sơn', phone: '090-0000-217' },
  {
    id: 'KH18',
    name: 'Bùi Thu Trang',
    company: 'Công ty GreenEnergy',
    phone: '090-0000-218',
  },
  {
    id: 'KH19',
    name: 'Vũ Văn Toàn',
    phone: '090-0000-219',
    avt: 'https://i.pravatar.cc/150?img=19',
  },
  { id: 'KH20', name: 'Phan Thị Kim', phone: '090-0000-220' },
  {
    id: 'KH21',
    name: 'Nguyễn Đức Long',
    company: 'Công ty Viettel',
    phone: '090-0000-221',
    avt: 'https://i.pravatar.cc/150?img=21',
  },
  {
    id: 'KH22',
    name: 'Trần Mỹ Duyên',
    company: 'Công ty VNPT',
    phone: '090-0000-222',
  },
  { id: 'KH23', name: 'Lê Hữu Tài', phone: '090-0000-223' },
  {
    id: 'KH24',
    name: 'Phạm Thị Quỳnh',
    phone: '090-0000-224',
    avt: 'https://i.pravatar.cc/150?img=24',
  },
  {
    id: 'KH25',
    name: 'Hoàng Tuấn Kiệt',
    company: 'Công ty DataMind',
    phone: '090-0000-225',
  },
  {
    id: 'KH26',
    name: 'Ngô Minh Châu',
    phone: '090-0000-226',
    avt: 'https://i.pravatar.cc/150?img=26',
  },
  {
    id: 'KH27',
    name: 'Đặng Hoài Nam',
    company: 'Công ty GalaxySoft',
    phone: '090-0000-227',
  },
  { id: 'KH28', name: 'Bùi Thị Thanh', phone: '090-0000-228' },
  {
    id: 'KH29',
    name: 'Vũ Minh Quân',
    phone: '090-0000-229',
    avt: 'https://i.pravatar.cc/150?img=29',
  },
  { id: 'KH30', name: 'Phan Hồng Nhung', phone: '090-0000-230' },
];

export const productList = [
  { id: '1', name: 'Toyota Vios', price: 500_000_000 },
  { id: '2', name: 'Honda City', price: 520_000_000 },
  { id: '3', name: 'Ford Transit', price: 900_000_000 },
  { id: '4', name: 'Hyundai County', price: 800_000_000 },
  { id: '5', name: 'Mazda CX-5', price: 650_000_000 },
  { id: '6', name: 'Kia Morning', price: 350_000_000 },
  { id: '7', name: 'VinFast Lux A', price: 900_000_000 },
  { id: '8', name: 'Mitsubishi Xpander', price: 624_000_000 },
  { id: '9', name: 'Suzuki Ertiga', price: 500_000_000 },
  { id: '10', name: 'Isuzu D-Max', price: 600_000_000 },
];

export interface DonHangProduct {
  name: string;
  quantity: number;
  price: number;
}

export const donHangData: DonHang[] = Array.from({ length: 30 }, (_, i) => ({
  id: `DH${(i + 1).toString().padStart(3, '0')}`,
  type: i % 2 === 0 ? 'retail' : 'project',
  customer: customerList[i % customerList.length].name,
  products: [
    {
      name: productList[i % productList.length].name,
      quantity: i % 2 === 0 ? 1 : Math.floor(Math.random() * 5) + 2,
      price: productList[i % productList.length].price,
    },
    {
      name: productList[(i + 1) % productList.length].name,
      quantity: i % 2 === 0 ? 1 : Math.floor(Math.random() * 3) + 1,
      price: productList[(i + 1) % productList.length].price,
    },
  ],
  date: `2025-10-${((i % 30) + 1).toString().padStart(2, '0')}`,
  status: [
    'Đã giao',
    'Đang xử lý',
    'Chờ thanh toán',
    'Đã hủy',
    'Đang vận chuyển',
  ][i % 5],
  note: i % 2 === 0 ? '' : `Dự án số ${i + 1}`,
}));

export const coHoiData: CoHoi[] = [
  {
    id: 'CH1',
    customer: customerList[1],
    interest: 'Xe du lịch 7 chỗ',
    proposal: ['Ford Transit', 'Hyundai County'], // các dòng xe liên quan
    note: 'Khách quan tâm xe chở khách',
  },
  {
    id: 'CH2',
    customer: customerList[5],
    interest: 'Xe gia đình nhỏ gọn',
    proposal: ['Toyota Vios', 'Honda City', 'Kia Morning'],
    note: 'Khách hỏi về xe tiết kiệm nhiên liệu',
  },
  {
    id: 'CH3',
    customer: customerList[10],
    interest: 'SUV',
    proposal: ['Mazda CX-5'],
    note: 'Khách thích xe gầm cao',
  },
  {
    id: 'CH4',
    customer: customerList[15],
    interest: 'Xe thể thao',
    proposal: ['Ford Mustang', 'Chevrolet Camaro'],
    note: 'Khách quan tâm xe thể thao hiệu suất cao',
  },
];

export const hoSoData: HoSo[] = [
  {
    id: 'HS1',
    order: donHangData[0],
    ngayDeNghiRut: '2025-10-10',
    nguoiDeNghi: 'Nguyễn Văn A',
    note: 'Đề nghị rút lần 1',
    status: 'Đã duyệt',
  },
  {
    id: 'HS2',
    order: donHangData[5],
    ngayDeNghiRut: '2025-10-15',
    nguoiDeNghi: 'Trần Thị Mai',
    note: 'Khách cần rút sớm',
    status: 'Chờ duyệt',
  },
  {
    id: 'HS3',
    order: donHangData[10],
    ngayDeNghiRut: '2025-10-20',
    nguoiDeNghi: 'Phan Thị Uyên',
    note: '',
    status: 'Đã rút',
  },
];
