import Image from 'next/image';

import img1 from '../../../public/assets/images/event-security/1.jpg';
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

const EventSecurity = () => {
  return (
    <>
      <Meta
        title={'Dịch Vụ Bảo Vệ Sự Kiện – Yếu Nhân'}
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
                title="Dịch Vụ Bảo Vệ Sự Kiện – Yếu Nhân"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Dịch Vụ Bảo Vệ Sự Kiện – Yếu Nhân" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Trong các trường hợp khẩn cấp đặc biệt nghiêm trọng như khủng
                  bố, đình công, bạo loạn… Đội ngũ bảo vệ là một trong những
                  nhân tố quan trọng để tiến hành ngăn chặn đám đông, bảo vệ yếu
                  nhân trước đám đông, giữ trật tự an ninh cho những sự kiện
                  trọng đại được diễn ra suôn sẻ.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img1} alt="bao ve su kien - yeu nhan" />
                </div>

                <p className="py-1 text-justify w-full">
                  Để đồng hành cùng doanh nghiệp, đảm bảo giữ gìn an ninh trật
                  tự cho các sự kiện quan trọng, bảo vệ cá nhân – VIP. Đội ngũ
                  An Ninh Cảnh Vệ cung cấp các dịch vụ như sau:
                </p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Bảo vệ kiểm soát lối ra vào sự kiện.
                  </li>
                  <li className="text-justify">
                    Bảo vệ kiểm soát trật tự đám đông.
                  </li>
                  <li className="text-justify">
                    Bảo vệ an toàn cho các nhân vật quan trọng.
                  </li>
                  <li className="text-justify">
                    Đội ngũ bảo vệ được đào tạo nghiệp vụ bài bản, linh hoạt
                    giải quyết các sự cố không mong muốn trong sự kiện.
                  </li>
                  <li className="text-justify">
                    Sử dụng vật dụng hỗ trợ nghiệp vụ như gậy sắt, dùi cui, roi
                    điện, gậy sáng điều phối xe.
                  </li>
                  <li className="text-justify">
                    Theo dõi gắt gao, phát hiện và xử lý ngăn chặn các trường
                    hợp có dấu hiệu khả nghi nổi loạn, bạo động, trộm cắp.
                  </li>
                </ul>
                <p className="py-1 text-justify w-full">
                  Để được tư vấn chi tiết Dịch Vụ Bảo Vệ Sự Kiện – Yếu Nhân, vui
                  lòng liên hệ với chúng tôi để được tư vấn miễn phí và giải đáp
                  một cách cụ thể nhất.
                </p>
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

export default EventSecurity;
