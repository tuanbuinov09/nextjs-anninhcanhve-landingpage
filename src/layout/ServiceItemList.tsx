import img8 from '../../public/assets/images/18.jpg';
import img1 from '../../public/assets/images/bao-ve-ngan-hang-sieu-thi-3.jpg';
import img7 from '../../public/assets/images/bao-ve-su-kien-yeu-nhan.jpg';
import img2 from '../../public/assets/images/bao-ve-toa-nha-chung-cu.jpg';
import img6 from '../../public/assets/images/dich-vu-bao-ve-binh-duong-16.jpg';
import img5 from '../../public/assets/images/dich-vu-bao-ve-binh-duong.jpg';
import img3 from '../../public/assets/images/dich-vu-tu-an-ninh-doanh-nghiep-2.jpg';
import img4 from '../../public/assets/images/dich-vu-tu-van-luat-mien-phi-3.jpg';
import { ServiceItem } from './ServiceItem';

const itemList: any[] = [
  {
    img: img1,
    path: 'about/binh-duong-bank-security',
    text: 'Dịch Vụ Bảo Vệ Ngân Hàng Bình Dương',
  },
  {
    img: img2,
    path: 'about/house-security',
    text: 'Dịch Vụ Bảo Vệ Tòa Nhà - Bảo Vệ Chung Cư',
  },
  {
    img: img3,
    path: 'about/enterprise-security-advise',
    text: 'Dịch Vụ Tư Vấn An Ninh Doanh Nghiệp',
  },
  {
    img: img4,
    path: 'about/free-law-advise',
    text: 'Dịch Vụ Tư Vấn Luật Miễn Phí',
  },
  {
    img: img5,
    path: 'about/binh-duong-security',
    text: 'Dịch Vụ Bảo Vệ Bình Dương',
  },
  {
    img: img6,
    path: '/enterprise-security',
    text: 'Dịch Vụ Bảo Vệ Doanh Nghiệp - Bảo Vệ Công Ty',
  },
  {
    img: img7,
    path: '/event-security',
    text: 'Dịch Vụ Bảo Vệ Sự Kiện - Yếu Nhân',
  },
  {
    img: img8,
    path: '/profile',
    text: 'Hồ Sơ Năng Lực',
  },
];
const ServiceItemList = () => (
  <div className="flex bg-white flex-wrap pt-4">
    {itemList ? (
      itemList.map((_item, index) => {
        return <ServiceItem key={index} item={_item} />;
      })
    ) : (
      <></>
    )}
  </div>
);

export { ServiceItemList };
