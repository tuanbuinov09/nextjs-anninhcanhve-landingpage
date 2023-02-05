import Image from 'next/image';

import img1 from '../../../public/assets/images/house-security/1.jpg';
import { Background } from '../../background/Background';
import { ContactInfo } from '../../layout/ContactInfo';
import { FixedContact } from '../../layout/FixedContact';
import { Meta } from '../../layout/Meta';
import { ParagraphWFull } from '../../layout/ParagraphWFull';
import { Section } from '../../layout/Section';
import { SectionLeftTitle } from '../../layout/SectionLeftTitle';
import { SectionTitle } from '../../layout/SectionTitle';
import { ServicesVerticleItemList } from '../../layout/ServicesVerticleItemList';
import { Subtitle } from '../../layout/Subtitle';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { Banner2 } from '../../templates/Banner2';
import { Footer } from '../../templates/Footer';
import { Logo } from '../../templates/Logo';
import { AppConfig } from '../../utils/AppConfig';

const HouseSecurity = () => {
  return (
    <>
      <Meta
        title={'Dịch Vụ Bảo Vệ Tòa Nhà – Bảo Vệ Chung Cư'}
        description={AppConfig.description}
      />
      <Background color="bg-gray-200">
        <Section yPadding="py-2">
          <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
        </Section>

        <Banner2 />
        <SectionTitle title="DỊCH VỤ" />

        <Section>
          <div className="flex pb-4">
            <div className="w-2/3 pr-3 ">
              <SectionLeftTitle
                title="Dịch Vụ Bảo Vệ Tòa Nhà – Bảo Vệ Chung Cư"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Dịch Vụ Bảo Vệ Tòa Nhà – Bảo Vệ Chung Cư" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Đội ngũ bảo vệ tòa nhà luôn là đội ngũ trọng yếu nhất trong
                  việc giữ gìn an ninh trật tự tòa nhà – chung cư, đảm bảo cho
                  cư dân luôn có môi trường sống an ninh nhất. Vì vậy đội ngũ
                  bảo vệ tòa nhà cần phải có nghiệp vụ bảo vệ chuyên nghiệp, tư
                  duy kỷ luật thép để đảm bảo trật tự tuyệt đối.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img1} alt="bao ve ngan hang binh duong" />
                </div>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ cung cấp dịch vụ bảo vệ tòa nhà, bảo vệ chung
                  cư với những tố chất trọng yếu như sau:
                </p>
                <ul className="list-disc pl-8 pt-1">
                  <li className="text-justify">
                    Bảo vệ canh phòng an ninh bên ngoài, bên trong tòa nhà,
                    chung cư.
                  </li>
                  <li className="text-justify">
                    Kiểm soát ngăn ngừa xâm nhập bởi con người, tài sản có dấu
                    hiệu lạ, khả nghi.
                  </li>
                  <li className="text-justify">
                    Kiểm soát chặt chẽ tình trạng trộm cắp, che giấu tài sản
                    nhằm chiếm đoạt tài sản từ bên trong tòa nhà, chung cư.
                  </li>
                  <li className="text-justify">
                    Đảm bảo an ninh ngăn ngừa, phòng cháy chữa cháy.
                  </li>
                  <li className="text-justify">
                    Bảo vệ tiền sảnh, kiểm soát hướng dẫn khách ra vào.
                  </li>
                  <li className="text-justify">
                    Tuần tra thường xuyên đảm bảo an ninh mọi lúc cho tòa nhà,
                    chung cư.
                  </li>
                  <li className="text-justify">
                    Theo dõi chặt chẽ hệ thống camera, phát hiện xử lý các
                    trường hợp đột nhập trái phép, người có dấu hiệu tình nghi
                    trộm cắp, phá hoại tài sản.
                  </li>
                  <li className="text-justify">
                    Bảo vệ trông giữ, các thủ tục đăng ký gửi giữ xe.
                  </li>
                  <li className="text-justify">
                    Bảo trì công cụ vật dụng chuyên dụng đảm bảo an ninh cho tòa
                    nhà, chung cư.
                  </li>
                </ul>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Liên Hệ Dịch Vụ Bảo Vệ Tại Bình Dương" />
              <div className="mt-2">
                <p className="font-bold mb-1">
                  Công ty CP Dịch Vụ Bảo Vệ An Ninh Cảnh Vệ
                </p>
                <ContactInfo />
              </div>
              {/*  */}
            </div>
            <div className="w-1/3 pl-3">
              <SectionLeftTitle title="DỊCH VỤ" customClass="pb-2 text-lg" />
              <ServicesVerticleItemList />
            </div>
          </div>
        </Section>

        <FixedContact />
      </Background>
      <Footer />
    </>
  );
};

export default HouseSecurity;
