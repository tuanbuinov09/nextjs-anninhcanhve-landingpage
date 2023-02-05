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

const FreeLawAdvise = () => {
  return (
    <>
      <Meta
        title={'Dịch Vụ Tư Vấn Luật Miễn Phí'}
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
                title="Dịch Vụ Tư Vấn Luật Miễn Phí"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Dịch Vụ Tư Vấn Luật Miễn Phí" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Khi doanh nghiệp hoạt động, một trong những điều cần được ưu
                  tiên hàng đầu đó là phải đảm bảo An Ninh cho doanh nghiệp. Bao
                  gồm an ninh trật tự doanh nghiệp, an ninh mạng, an ninh tài
                  chính, an ninh nhân sự và thậm chí an ninh văn hóa tác phong
                  doanh nghiệp.
                </p>
                <p className="py-1 text-justify w-full">Bao gồm:</p>
                <ul className="list-disc pl-8 pt-1">
                  <li className="text-justify">Tư vấn luật lao động.</li>
                  <li className="text-justify">
                    Tư vấn luật doanh nghiệp, luật sư riêng cho doanh nghiệp.
                  </li>
                  <li className="text-justify">
                    Tư vấn luật dân sự, tư vấn giải quyết tranh chấp dân sự.
                  </li>
                  <li className="text-justify">Tư vấn luật hành chính.</li>
                  <li className="text-justify">
                    Tư vấn thủ tục kiện tụng, tranh chấp, khiếu kiện tại tòa án.
                  </li>
                  <li className="text-justify">
                    Tư vấn luật hôn nhân gia đình, tranh chấp tài sản, li hôn,
                    quyền thừa kế, nuôi con…
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

export default FreeLawAdvise;
