import { ServiceVerticleItem } from './ServiceVerticleItem';

const itemList: any[] = [
  {
    path: '/services/binh-duong-bank-security',
    text: 'Dịch Vụ Bảo Vệ Ngân Hàng Bình Dương',
  },
  {
    path: '/services/house-security',
    text: 'Dịch Vụ Bảo Vệ Tòa Nhà - Bảo Vệ Chung Cư',
  },
  {
    path: '/services/enterprise-security-advise',
    text: 'Dịch Vụ Tư Vấn An Ninh Doanh Nghiệp',
  },
  {
    path: '/services/free-law-advise',
    text: 'Dịch Vụ Tư Vấn Luật Miễn Phí',
  },
  {
    path: '/services/binh-duong-security',
    text: 'Dịch Vụ Bảo Vệ Bình Dương',
  },
  {
    path: '/services/enterprise-security',
    text: 'Dịch Vụ Bảo Vệ Doanh Nghiệp - Bảo Vệ Công Ty',
  },
  {
    path: '/services/event-security',
    text: 'Dịch Vụ Bảo Vệ Sự Kiện - Yếu Nhân',
  },
  {
    path: '/services/profile',
    text: 'Hồ Sơ Năng Lực',
  },
];
const ServicesVerticleItemList = () => (
  <div className="bg-whitept-4">
    {itemList ? (
      itemList.map((_item, index) => {
        return <ServiceVerticleItem key={index} item={_item} />;
      })
    ) : (
      <></>
    )}
  </div>
);

export { ServicesVerticleItemList };
