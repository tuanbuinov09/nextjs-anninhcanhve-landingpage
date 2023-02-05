import { Background } from '../../background/Background';
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

const Greeting = () => {
  return (
    <>
      <Meta title={'Thư ngỏ'} description={AppConfig.description} />
      <Background color="bg-gray-200">
        <Section yPadding="py-2">
          <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
        </Section>

        <Banner2 />
        <SectionTitle title="THƯ NGỎ" />

        <Section>
          <div className="flex pb-4">
            <div className="w-2/3 pr-3 ">
              <SectionLeftTitle
                title="CÔNG TY CỔ PHẦN BẢO VỆ AN NINH CẢNH VỆ BÌNH DƯƠNG"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Thưa quý khách hàng!" />
              <ParagraphWFull
                customClass="pb-2"
                text="Công Ty bảo vệ An Ninh Cảnh Vệ xin gởi lời chào trân trọng nhất tới quý khách hàng. Với nhiều năm kinh nghiệm trong lĩnh vực bảo vệ chuyên nghiệp, Công Ty bảo vệ An Ninh Cảnh Vệ tự hào là một trong những nhà cung cấp dịch vụ an ninh chuyên nghiệp tại Việt Nam."
              />

              <Subtitle title="Các loại hình dịch vụ bảo vệ như sau:" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Dịch vụ bảo vệ chuyên nghiệp: Cung cấp nhân viên bảo vệ chuyên
                  nghiệp{' '}
                </p>

                <p className="py-1 text-justify w-full">
                  Đào tạo, huấn luyện các kỹ năng nghiệp vụ bảo vệ.
                </p>

                <p className="py-1 text-justify w-full">
                  Kinh doanh và lắp đặt các hệ thống an ninh, thiết bị PCCC.
                </p>

                <p className="py-1 text-justify w-full">
                  Lắp đặt các hệ thống định vị cố định, định vị duy chuyển giám
                  sát từ xa, trực tuyến ...
                </p>

                <p className="py-1 text-justify w-full">
                  Cung cấp nhân viên giám sát vật tư, tài sản cố định.
                </p>

                <p className="py-1 text-justify w-full">
                  Cung cấp cán bộ chỉ huy an ninh, quản lý toà nhà cao tầng,
                  chung cư.{' '}
                </p>

                <p className="py-1 text-justify w-full">
                  Đầu tư, khai thác dịch vụ giữ xe thông minh.....{' '}
                </p>

                <p className="py-1 text-justify w-full">
                  Đầu tư, khai thác dịch vụ giữ xe thông minh.....{' '}
                </p>

                <p className="py-1 text-justify w-full">
                  Bảo vệ ngân hàng, nhà hàng, khách sạn, nhà máy, xí nghiệp,....
                </p>

                <p className="py-1 text-justify w-full">
                  Bảo vệ văn phòng, cơ quan, bệnh viện, siêu thị, trường học,...
                </p>

                <p className="py-1 text-justify w-full">
                  Bảo vệ hội chợ triển lãm, khởi công, khánh thành,...
                </p>

                <p className="py-1 text-justify w-full">
                  Bảo vệ Ngân hàng, phụ trách phản ứng nhanh tủ rút tiền ATM,
                  phòng chống tội phạm công nghệ cao.
                </p>

                <p className="py-1 text-justify w-full">
                  Bảo vệ nhà máy, xí nghiệp, kho bãi, khu công nghiệp, các công
                  trình xây dựng,...
                </p>

                <p className="py-1 text-justify w-full">
                  Bảo vệ Văn phòng các cơ quan Đại sứ quán, Khu thương mại phức
                  hợp, Trung tâm triển lãm, Câu lạc bộ, Sân vận động,...
                </p>

                <p className="py-1 text-justify w-full">
                  Bảo vệ quán Bar, Nhà hàng, Khách sạn,... Dịch vụ áp tải tiền,
                  hàng hoá,...
                </p>

                <p className="py-1 text-justify w-full">
                  Bảo vệ yếu nhân, nhà riêng, hộ tống phái đoàn, hội thảo, các
                  buổi hoà nhạc,...
                </p>

                <p className="py-1 text-justify w-full">
                  Giám sát bán hàng, bảo vệ và quản lý hàng hóa tài sản bảo đảm,
                  ...
                </p>

                <p className="py-1 text-justify w-full">
                  Cùng sự phát triển của xã hội, Tính chuyên nghiệp của mỗi
                  ngành nghề với những đặc trưng riêng biệt sẽ mang lại hiệu quả
                  tối đa.Vì vậy dịch vụ bảo vệ mà chúng tôi cung cấp dựa trên
                  các yếu tố chủ lực.
                </p>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Về con người:" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Ban lãnh đạo sáng lập công ty những người đã nắm giữ các chức
                  vụ cấp cao trong nghành, nhiều năm hoạt động và cống hiến
                  trong nghành quân đội, công an, trực thuộc bộ chính trị...{' '}
                </p>

                <p className="py-1 text-justify w-full">
                  Cán bộ quản lý điều hành: Trình độ đại học, cao đẳng chuyên
                  ngành, hiểu biết và nắm vững luật pháp, có kinh nghiệm và
                  nhiều kỹ năng nổi bật trong công tác quản lý, điều hành dịch
                  vụ an ninh – an toàn, nhiều người đã từng là cán bộ chỉ huy,
                  quản lý trong ngành công an, quân đội.
                </p>

                <p className="py-1 text-justify w-full">
                  Cán bộ giảng dạy: Với đội ngũ giảng viên là những người giàu
                  kinh nghiệm công tác thực tế tại các mục tiêu bảo vệ và các
                  cựu giảng viên công an, quân đội.
                </p>

                <p className="py-1 text-justify w-full">
                  Cán bộ kỹ thuật: Gồm một đội ngũ là những kỹ thuật viên về
                  thiết bị điện tử của các hệ thống an ninh các tòa nhà, trung
                  tâm thương mại....
                </p>

                <p className="py-1 text-justify w-full">
                  Nhân viên bảo vệ: Quy tụ những con người tâm huyết, giàu kinh
                  nghiệm với thâm niên nhiều năm công tác trong lĩnh vực bảo vệ
                  chuyên nghiệp. Và các chiến sĩ bộ đội sao khi ra quân, đào tạo
                  theo một giáo trình chuyên nghành riêng biệt do đội ngũ giảng
                  viên nhiều năm kinh nghiệm của chúng tôi biên soạn.
                </p>
              </ParagraphWFull>

              {/*  */}
              <Subtitle title="Về thiết bị an ninh:" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Các thiết bị giám sát, kiểm tra, báo động, báo cháy hiện đại
                  nhất hiện nay của công ty chúng tôi được tích hợp và lập trình
                  trong một hệ thống, hoạt động hiệu quả dưới sự vận hành của
                  nhân viên bảo vệ chuyên nghiệp An Ninh Cảnh Vệ.
                </p>

                <p className="py-1 text-justify w-full">
                  Trang bị hỗ trợ : An Ninh Cảnh Vệ tự hào là nhà cung cấp được
                  sử dụng và cấp phép các loại công cụ trang bị hỗ trợ hiện đại
                  như súng Rulo, RG 88, M22, roi điện JSJ928, ZZ1101, X8, TW09
                  ,các loại khiên chống bạo động, các loại áo giáp chống đạn
                  chống đâm,.....
                </p>

                <p className="py-1 text-justify w-full">
                  Sự kết hợp giữa nhân tố con người và thiết bị công nghệ cao,
                  tạo nên một thương hiệu Uy Tín & Tin Cậy cho Khách Hàng đối
                  với dịch vụ bảo vệ của An Ninh Cảnh Vệ . Công ty chúng tôi
                  mong muốn và luôn sẵn sàng phục vụ quý khách bằng một dịch vụ
                  tiêu chuẩn và chuyên nghiệp.
                </p>
              </ParagraphWFull>

              <Subtitle title="Hãy liên hệ với chúng tôi để được tư vấn và giải đáp một cách cụ thể nhất" />
              <Subtitle title="Hotline: 0987.707.768" />
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

export default Greeting;
