import { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

type INavbarProps = {
  logo: ReactNode;
  // children: ReactNode;
};

const navigationRoutes = [
  {
    path: '/about',
    text: 'Giới thiệu',
    subPath: [
      { path: '/greeting', text: 'Thư ngỏ' },
      { path: '/founding-history', text: 'Lịch sử hình thành' },
      { path: '/vision-mission', text: 'Tầm nhìn - Sứ mệnh' },
      { path: '/core-value', text: 'Giá trị cốt lõi' },
    ],
  },
  {
    path: '/services',
    text: 'Dịch vụ',
    subPath: [
      {
        path: '/binh-duong-bank-security',
        text: 'Dịch Vụ Bảo Vệ Ngân Hàng Bình Dương',
      },
      {
        path: '/house-security',
        text: 'Dịch Vụ Bảo Vệ Tòa Nhà - Bảo Vệ Chung Cư',
      },
      {
        path: '/enterprise-security-advise',
        text: 'Dịch Vụ Tư Vấn An Ninh Doanh Nghiệp',
      },
      {
        path: '/free-law-advise',
        text: 'Dịch Vụ Tư Vấn Luật Miễn Phí',
      },
      {
        path: '/binh-duong-security',
        text: 'Dịch Vụ Bảo Vệ Bình Dương',
      },
      {
        path: '/enterprise-security',
        text: 'Dịch Vụ Bảo Vệ Doanh Nghiệp - Bảo Vệ Công Ty',
      },
      {
        path: '/event-security',
        text: 'Dịch Vụ Bảo Vệ Sự Kiện - Yếu Nhân',
      },
      {
        path: '/profile',
        text: 'Hồ Sơ Năng Lực',
      },
    ],
  },
  { path: '/news', text: 'Tin tức' },
  {
    path: '/recruit-training',
    text: 'Tuyển dụng - đào tạo',
    subPath: [
      { path: '/recruit', text: 'Tuyển Dụng Nhân Viên Bảo Vệ' },
      { path: '/training', text: 'Đào Tạo Nghiệp Vụ Bảo Vệ' },
    ],
  },
  { path: '/contact', text: 'Liên hệ' },
];

const NavbarTwoColumns = (props: INavbarProps) => {
  const router = useRouter();

  return (
    <div className=" fixed top-0 right-0 left-0 header bg-white">
      <div className="max-w-screen-lg w-full mx-auto flex flex-wrap justify-between items-center ">
        <div>
          <Link href="/">
            <a>{props.logo}</a>
          </Link>
        </div>

        <nav>
          <ul className="navbar flex items-center font-medium text-xl text-gray-800">
            {/* {props.children} */}
            {navigationRoutes.map((singleRoute) => {
              return singleRoute.subPath ? (
                <li
                  key={singleRoute.path}
                  className={
                    router.pathname === singleRoute.path
                      ? 'active submenu-container'
                      : 'submenu-container'
                  }
                >
                  <a>{singleRoute.text}</a>
                  <a className="chevron-down-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </a>

                  <ul className="submenu">
                    {singleRoute.subPath.map((subRoute) => {
                      return (
                        <li key={subRoute.path}>
                          <Link href={`${singleRoute.path}/${subRoute.path}`}>
                            <a>{subRoute.text}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ) : (
                <li
                  key={singleRoute.path}
                  className={
                    router.pathname === singleRoute.path ? 'active' : ''
                  }
                >
                  <Link href={singleRoute.path}>
                    <a>{singleRoute.text}</a>
                  </Link>
                </li>
              );
            })}
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
          </ul>
        </nav>
      </div>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  );
};

export { NavbarTwoColumns };
