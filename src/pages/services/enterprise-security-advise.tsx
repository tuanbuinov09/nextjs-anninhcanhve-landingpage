import Image from 'next/image';

import img1 from '../../../public/assets/images/enterprise-security-advise/1.jpg';
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

const EnterpriseSecurityAdvise = () => {
  return (
    <>
      <Meta
        title={'Dịch Vụ Tư Vấn An Ninh Doanh Nghiệp'}
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
                title="Dịch Vụ Tư Vấn An Ninh Doanh Nghiệp"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="An Ninh Doanh Nghiệp bao gồm những gì?" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Khi doanh nghiệp hoạt động, một trong những điều cần được ưu
                  tiên hàng đầu đó là phải đảm bảo An Ninh cho doanh nghiệp. Bao
                  gồm an ninh trật tự doanh nghiệp, an ninh mạng, an ninh tài
                  chính, an ninh nhân sự và thậm chí an ninh văn hóa tác phong
                  doanh nghiệp.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img1} alt="bao ve ngan hang binh duong" />
                </div>
                <p className="py-1 text-justify w-full">
                  Tại An Ninh Cảnh Vệ, chúng tôi cung cấp đến khách hàng dịch vụ
                  tư vấn miễn phí những điều cần biết về An Ninh Trật Tự doanh
                  nghiệp, được xây dựng theo các tiêu chuẩn như sau:
                </p>
                <ul className="list-disc pl-8 pt-1">
                  <li className="text-justify">
                    Quy định đội ngũ bảo vệ, giữ gìn trật tự doanh nghiệp, phòng
                    chống trộm cắp, xô xát.
                  </li>
                  <li className="text-justify">
                    Chức năng nhiệm vụ và quyền hạn của đội ngũ bảo vệ.
                  </li>
                  <li className="text-justify">
                    Tuần tra, kiểm soát người ra vào.
                  </li>
                  <li className="text-justify">
                    Lập các giấy tờ, biên bản ghi chép sổ bảo vệ.
                  </li>
                  <li className="text-justify">
                    Quản lý đóng mở và niêm phong đối với các tài liệu bảo mật
                    của doanh nghiệp.
                  </li>
                  <li className="text-justify">
                    Huấn luyện nhân viên các biện pháp ngăn ngừa cháy nổ, phòng
                    cháy chữa cháy.
                  </li>
                  <li className="text-justify">
                    Sơ cứu và di chuyển đối với các trường hợp khẩn cấp về sức
                    khỏe/ tính mạng con người.
                  </li>
                  <li className="text-justify">
                    Bảo quản trang thiết bị cần thiết cho việc đảm bảo an ninh
                    doanh nghiệp.
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

export default EnterpriseSecurityAdvise;
