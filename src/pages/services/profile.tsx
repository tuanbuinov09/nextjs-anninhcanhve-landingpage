import Image from 'next/image';

import img1 from '../../../public/assets/images/profile/1.jpg';
import img10 from '../../../public/assets/images/profile/10.jpg';
import img11 from '../../../public/assets/images/profile/11.jpg';
import img12 from '../../../public/assets/images/profile/12.jpg';
import img2 from '../../../public/assets/images/profile/2.jpg';
import img3 from '../../../public/assets/images/profile/3.jpg';
import img4 from '../../../public/assets/images/profile/4.jpg';
import img5 from '../../../public/assets/images/profile/5.jpg';
import img6 from '../../../public/assets/images/profile/6.jpg';
import img7 from '../../../public/assets/images/profile/7.jpg';
import img8 from '../../../public/assets/images/profile/8.jpg';
import img9 from '../../../public/assets/images/profile/9.jpg';
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

const Profile = () => {
  return (
    <>
      <Meta title={'Hồ Sơ Năng Lực'} description={AppConfig.description} />
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
                title="Hồ Sơ Năng Lực"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Hồ Sơ Năng Lực" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ - Chứng nhận doanh nghiệp đủ điều kiện, chứng
                  nhận hồ sơ năng lực bảo vệ. Cung cấp dịch vụ bảo vệ nghiệp vụ
                  cao, uy tín.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img1} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img2} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img3} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img4} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img5} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img6} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img7} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img8} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img9} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img10} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img11} alt="ho so nang luc" />
                </div>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img12} alt="ho so nang luc" />
                </div>
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

export default Profile;
