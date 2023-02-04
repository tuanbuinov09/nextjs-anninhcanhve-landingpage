// import Image from 'next/image';

// import logo from '../../public/assets/images/logo_an_ninh_canh_ve.png';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '120' : '90';
  const fontStyle = props.xl ? 'font-semibold text-xl' : 'font-semibold text-l';

  return (
    <span
      className={`text-gray-900 inline-flex items-center ${fontStyle} logo`}
    >
      {/* <svg
        className="text-primary-500 stroke-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}
      {/* <Image width={120} height={120} src={logo} alt="a" /> */}
      Trang chủ
      {/* {AppConfig.site_name} */}
    </span>
  );
};

export { Logo };
