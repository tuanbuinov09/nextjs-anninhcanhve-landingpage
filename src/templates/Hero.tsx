import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Banner2 } from './Banner2';
import { Logo } from './Logo';

const Hero = () => {
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
      <Banner2 />
    </Background>
  );
};

export { Hero };
