import { ServiceVerticleItem } from './ServiceVerticleItem';

const itemList: any[] = [
  {
    path: 'about/binh-duong-bank-security',
    text: 'Dịch Vụ Bảo Vệ Ngân Hàng Bình Dương',
  },
  {
    path: 'about/house-security',
    text: 'Dịch Vụ Bảo Vệ Tòa Nhà - Bảo Vệ Chung Cư',
  },
  {
    path: 'about/enterprise-security-advise',
    text: 'Dịch Vụ Tư Vấn An Ninh Doanh Nghiệp',
  },
  {
    path: 'about/free-law-advise',
    text: 'Dịch Vụ Tư Vấn Luật Miễn Phí',
  },
  {
    path: 'about/binh-duong-security',
    text: 'Dịch Vụ Bảo Vệ Bình Dương',
  },
  {
    path: '/enterprise-security',
    text: 'Dịch Vụ Bảo Vệ Doanh Nghiệp - Bảo Vệ Công Ty',
  },
  {
    path: 'about/event-security',
    text: 'Dịch Vụ Bảo Vệ Sự Kiện - Yếu Nhân',
  },
  {
    path: 'about/profile',
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
