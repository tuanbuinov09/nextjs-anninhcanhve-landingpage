import Image from 'next/image';

import logoImg from '../../public/assets/images/logo_an_ninh_canh_ve.png';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Banner2 = () => (
  <div className="mt-10">
    <Section yPadding="pb-3 pt-3">
      <div className="flex items-center bg-slate-800 py-10 justify-between">
        <div className=" ">
          <Image src={logoImg} alt="logo" />
        </div>
        <HeroOneButton
          title={
            <>
              {'Hotline: '}
              <span className="text-primary-500">0987.707.768</span>
            </>
          }
          description="Dịch vụ bảo vệ chuyên nghiệp."
          // button={
          //   <Link href="https://creativedesignsguru.com/category/nextjs/">
          //     <a>
          //       <Button xl>Download Your Free Theme</Button>
          //     </a>
          //   </Link>
          // }
          button={undefined}
        />
      </div>
    </Section>
  </div>
);

export { Banner2 };
