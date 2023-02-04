import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';

const AboutPage = () => {
  return (
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

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'The modern landing page for\n'}
              <span className="text-primary-500">React developers</span>
            </>
          }
          description="The easiest way to build a React landing page in seconds."
          button={
            <Link href="https://creativedesignsguru.com/category/nextjs/">
              <a>
                <Button xl>Download Your Free Theme</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export default AboutPage;
