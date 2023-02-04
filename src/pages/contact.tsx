import { Background } from '../background/Background';
import { ContactForm } from '../layout/ContactForm';
import { ContactInfo } from '../layout/ContactInfo';
import { FixedContact } from '../layout/FixedContact';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { SectionCenterTitle } from '../layout/SectionCenterTitle';
import { SectionTitle } from '../layout/SectionTitle';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Banner2 } from '../templates/Banner2';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

const Contact = () => {
  return (
    <>
      <Meta title={'Liên hệ'} description={AppConfig.description} />
      <Background color="bg-gray-200">
        <Section yPadding="py-2">
          <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
          {/* children of NavbarTwoColumns */}
          {/* <li className={router.pathname === '/' ? 'active' : ''}>
        <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
          <a>Giới thiệu</a>
        </Link>
      </li>
      <li className={router.pathname === '/' ? 'active' : ''}>
        <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
          <a>Dịch vụ</a>
        </Link>
      </li>
      <li className={router.pathname === '/' ? 'active' : ''}>
        <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
          <a>Tin tức</a>
        </Link>
      </li>
      <li className={router.pathname === '/' ? 'active' : ''}>
        <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
          <a>Tuyển dụng - đào tạo</a>
        </Link>
      </li>

      <li className={router.pathname === '/contact' ? 'active' : ''}>
        <Link href="/contact">
          <a>Liên hệ</a>
        </Link>
      </li> */}
          {/* end children of NavbarTwoColumns */}
        </Section>

        <Banner2 />
        <SectionTitle title="LIÊN HỆ" />

        <Section>
          <SectionCenterTitle title="CÔNG TY CỔ PHẦN BẢO VỆ AN NINH CẢNH VỆ - BÌNH DƯƠNG" />
          <div className="flex pb-4">
            <div className="w-1/2 pr-2">
              <ContactInfo />
            </div>
            <div className="w-1/2 pl-2 -mt-4">
              <ContactForm />
            </div>
          </div>
        </Section>

        <FixedContact />
      </Background>
      <Footer />
    </>
  );
};

export default Contact;
