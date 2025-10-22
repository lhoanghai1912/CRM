export interface TiemNang {
  id: string;
  name: string;
  company?: string;
  phone?: string;
  position?: string;
  avt?: string;
}

export interface Customer {
  id: string;
  name: string;
  company?: string;
  phone?: string;
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

export const customerList: Customer[] = [
  {
    id: '1',
    name: 'Nguyễn Minh Khôi',
    company: 'Công ty AlphaTech',
    phone: '090-0000-201',
    avt: 'https://i.pravatar.cc/150?img=1',
  },
  { id: '2', name: 'Trần Thị Mai', phone: '090-0000-202' },
  {
    id: '3',
    name: 'Lê Văn Hùng',
    company: 'Công ty GreenView',
    phone: '090-0000-203',
  },
  {
    id: '4',
    name: 'Phạm Thị Hương',
    company: 'Công ty NovaLand',
    phone: '090-0000-204',
    avt: 'https://i.pravatar.cc/150?img=4',
  },
  { id: '5', name: 'Hoàng Đức Anh', phone: '090-0000-205' },
  {
    id: '6',
    name: 'Ngô Thị Linh',
    company: 'Công ty FPT Software',
    phone: '090-0000-206',
    avt: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: '7',
    name: 'Đặng Văn Nam',
    phone: '090-0000-207',
    avt: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: '8',
    name: 'Bùi Thanh Nga',
    company: 'Công ty VinAI',
    phone: '090-0000-208',
  },
  {
    id: '9',
    name: 'Vũ Hoàng Phúc',
    company: 'Công ty Techcom',
    phone: '090-0000-209',
  },
  {
    id: '10',
    name: 'Phan Thị Uyên',
    phone: '090-0000-210',
    avt: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: '11',
    name: 'Nguyễn Quang Dũng',
    company: 'Công ty SmartCity',
    phone: '090-0000-211',
  },
  { id: '12', name: 'Trần Thị Yến', phone: '090-0000-212' },
  {
    id: '13',
    name: 'Lê Thành Công',
    company: 'Công ty MegaBuild',
    phone: '090-0000-213',
    avt: 'https://i.pravatar.cc/150?img=13',
  },
  {
    id: '14',
    name: 'Phạm Thị Thảo',
    company: 'Công ty GlobalTech',
    phone: '090-0000-214',
  },
  { id: '15', name: 'Hoàng Gia Bảo', phone: '090-0000-215' },
  {
    id: '16',
    name: 'Ngô Thị Vân',
    company: 'Công ty VietTravel',
    phone: '090-0000-216',
    avt: 'https://i.pravatar.cc/150?img=16',
  },
  { id: '17', name: 'Đặng Văn Sơn', phone: '090-0000-217' },
  {
    id: '18',
    name: 'Bùi Thu Trang',
    company: 'Công ty GreenEnergy',
    phone: '090-0000-218',
  },
  {
    id: '19',
    name: 'Vũ Văn Toàn',
    phone: '090-0000-219',
    avt: 'https://i.pravatar.cc/150?img=19',
  },
  { id: '20', name: 'Phan Thị Kim', phone: '090-0000-220' },
  {
    id: '21',
    name: 'Nguyễn Đức Long',
    company: 'Công ty Viettel',
    phone: '090-0000-221',
    avt: 'https://i.pravatar.cc/150?img=21',
  },
  {
    id: '22',
    name: 'Trần Mỹ Duyên',
    company: 'Công ty VNPT',
    phone: '090-0000-222',
  },
  { id: '23', name: 'Lê Hữu Tài', phone: '090-0000-223' },
  {
    id: '24',
    name: 'Phạm Thị Quỳnh',
    phone: '090-0000-224',
    avt: 'https://i.pravatar.cc/150?img=24',
  },
  {
    id: '25',
    name: 'Hoàng Tuấn Kiệt',
    company: 'Công ty DataMind',
    phone: '090-0000-225',
  },
  {
    id: '26',
    name: 'Ngô Minh Châu',
    phone: '090-0000-226',
    avt: 'https://i.pravatar.cc/150?img=26',
  },
  {
    id: '27',
    name: 'Đặng Hoài Nam',
    company: 'Công ty GalaxySoft',
    phone: '090-0000-227',
  },
  { id: '28', name: 'Bùi Thị Thanh', phone: '090-0000-228' },
  {
    id: '29',
    name: 'Vũ Minh Quân',
    phone: '090-0000-229',
    avt: 'https://i.pravatar.cc/150?img=29',
  },
  { id: '30', name: 'Phan Hồng Nhung', phone: '090-0000-230' },
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

export interface DonHang {
  id: string;
  type: 'retail' | 'project';
  customer: string;
  products: DonHangProduct[];
  date: string;
  status: string;
  note?: string;
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
