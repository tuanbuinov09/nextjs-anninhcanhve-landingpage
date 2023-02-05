import Link from 'next/link';

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

const FoundingHistory = () => {
  return (
    <>
      <Meta title={'Lịch sử hình thành'} description={AppConfig.description} />
      <Background color="bg-gray-200">
        <Section yPadding="py-2">
          <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
        </Section>

        <Banner2 />
        <SectionTitle title="LỊCH SỬ HÌNH THÀNH" />

        <Section>
          <div className="flex pb-4">
            <div className="w-2/3 pr-3 ">
              <SectionLeftTitle
                title="Tổng Công Ty Cổ Phần Bảo Vệ An Ninh Cảnh Vệ"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Giới thiệu" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Được thành lập bởi đội ngũ Sĩ Quan Quân Đội, Công An, Viện
                  Kiểm Sát đã và đang hoạt động trong ngành. Tổng Công Ty Bảo Vệ
                  An Ninh Cảnh Vệ hoạt động theo giấy phép số 0313919673 cấp tại
                  TP.HCM. Giấy chứng nhận đủ điều kiện về an ninh trật tự để
                  kinh doanh dịch vụ bảo vệ số 577/GCN cấp tại Công an TP.HCM.
                </p>
                <p className="py-1 text-justify w-full">
                  Hiện nay Tổng Công ty bảo vệ An Ninh Cảnh Vệ đuợc xem là nhà
                  cung cấp an ninh hàng đầu tại Việt Nam. Chúng tôi hiện cung
                  cấp nhiều loại hình an ninh cho các khách hàng, các nhà đầu tư
                  trong và ngoài nước.
                </p>
              </ParagraphWFull>

              <Subtitle title="Người đại diện theo pháp luật:" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  TỔNG GIÁM ĐỐC: PHẠM MINH CẢNH
                </p>

                <p className="py-1 text-justify w-full">
                  Giám Đốc Chi Nhánh: Bùi Long Tuấn.
                </p>

                <p className="py-1 text-justify w-full">
                  Tên giao dịch: AN NINH CANH VE PROTECTION SERVICES JOINT STOCK
                  COMPANY
                </p>

                <p className="py-1 text-justify w-full">
                  Tên viết tắt : ANCV Security Co., Ltd
                </p>

                <p className="py-1 text-justify w-full">
                  Vốn điều lệ: 7.000.000.000 đồng
                </p>

                <p className="py-1 text-justify w-full">
                  Trụ sở chính: 120 Đường số 1, Phường 13, Quận Gò Vấp, TPHCM
                </p>

                <p className="py-1 text-justify w-full">
                  Chi nhánh Bình Dương: 286W/2 – Khu phố 1B, Phường An Phú, Thị
                  xã Thuận An, Tỉnh Bình Dương – Việt Nam
                </p>

                <p className="py-1 text-justify w-full">
                  Điện thoại: 0908.080.237 / 0916.003.093
                </p>

                <p className="py-1 text-justify w-full">
                  Email: duong.anninhcanhve@gmail.com
                </p>

                <p className="py-1 text-justify w-full">
                  Website:{' '}
                  <Link href={'https://anninhcanhve.com.vn'}>
                    <a
                      href="https://anninhcanhve.com.vn"
                      className="underline text-blue-700 hover:opacity-80 transition-all"
                    >
                      https://anninhcanhve.com.vn
                    </a>
                  </Link>
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
              <Subtitle title="Nhân sự của chúng tôi:" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Tổng Công Ty Bảo Vệ An Ninh Cảnh Vệ bắt đầu chỉ với 39 Cán bộ
                  nhân viên Bảo Vệ được huấn luyện hoàn hảo, chúng tôi phải đối
                  mặt với rất nhiều khó khăn thử thách, nhưng tập thể cán bộ
                  nhân viên của chúng tôi đã đoàn kết, nổ lực, phấn đấu để không
                  ngừng gia tăng nhân lực và mở rộng thị trường. Đến nay, chúng
                  tôi đã mở rộng thêm 8 chi nhánh phân bố khắp các tỉnh thành
                  trên toàn quốc, tất cả Nhân Viên Bảo Vệ của chúng tôi điều
                  phải trải qua 2 tháng huấn luyện tập trung nghiệp vụ, võ thuật
                  và thực tập thực tế, ngoài ra Nhân Viên Bảo Vệ của chúng tôi
                  còn được những giảng viên đã từng công tác trong ngành Công An
                  huấn luyện và cấp giấy chứng nhận theo đúng luật pháp Việt
                  Nam.
                </p>

                <p className="py-1 text-justify w-full">
                  Trong suốt quá trình thành lập và phát triển, Tổng Công ty Bảo
                  Vệ An Ninh Cảnh Vệ chúng tôi đã gặt hái được những thành tựu
                  đáng kể. Bằng khát vọng tiên phong cùng chiến lược đầu tư -
                  Phát triển bền vững - Kỷ Luật Thép - An Ninh Cảnh Vệ phấn đấu
                  trở thành tập đoàn kinh tế đa ngành hàng đầu Việt Nam và khu
                  vực, hướng đến một tập đoàn mang đẳng cấp quốc tế.
                </p>

                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ mong muốn tạo nên một thương hiệu mang ý nghĩa
                  sâu sắc Quân đội ngoài đời thực, thể hiện tầm vóc, trí tuệ và
                  niềm tự hào của Việt Nam trên trường Quốc tế.
                </p>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Hoạt động của chúng tôi:" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Phạm vi hoạt động trên lãnh thổ Việt Nam và hiện nay chúng tôi
                  đang có mặt tại hơn 12 tỉnh thành để Chúng tôi cung cấp Dịch
                  Vụ Bảo Vệ cho khách hàng tại : TP. Hồ Chí Minh, Hà Nội, Đà
                  Nẵng, Đồng Nai, Bà Rịa – Vũng Tàu, Bình Dương, Cần thơ, Tiền
                  giang, Nha Trang ,Hải dương, Long An, Quãng Ninh.
                </p>

                <p className="py-1 text-justify w-full">
                  Sau nhiều năm thành lập và phát triển, Ban Giám Đốc cùng tập
                  thể cán bộ nhân viên của công ty đã không ngừng nỗ lực phấn
                  đấu với phương châm “KỶ LUẬT THÉP”, nhờ vậy công ty bảo vệ An
                  Ninh Cảnh Vệ đã có những bước tiến phát triển vượt bậc được
                  đào tạo bài bản, chính quy.
                </p>

                <p className="py-1 text-justify w-full">
                  Tổng Công Ty Bảo Vệ An Ninh Cảnh Vệ đạt được những thành quả
                  như ngày hôm nay, phải nói đến sự lãnh đạo tài tình của Ban
                  Giám đốc sự phấn đấu không ngừng của toàn thể cán bộ nhân viên
                  công ty, những con người ý thức nghề nghiệp cao, giỏi về
                  nghiệp vụ đã mang về vinh quang cho Công Ty An Ninh Cảnh Vệ,
                  cụ thể: giải nhất cuộc thi PCCC, nhiều bằng khen người tốt
                  việc tốt của nhân viên hỗ trợ lực lượng công an bắt cướp, hỗ
                  trợ điều tra các vụ mất trộm thu hồi tài sản cho các công ty.
                  Dựa trên những thành quả đã đạt được, chúng tôi khẳng định,
                  trong những năm tới, công ty chúng tôi sẽ đạt được nhiều thành
                  tích cao hơn, đóng góp cho ngành bảo vệ nói riêng và an ninh
                  trật tự của xã hội trong nước nói chung.
                </p>
                <p className="py-1 text-justify w-full">
                  Để đáp lại sự tín nhiệm của Quý khách hàng, trong năm 2016,
                  tập thể công ty An Ninh Cảnh Vệ chúng tôi tự tin mang đến một
                  dịch vụ bảo vệ tốt nhất, một sự an tâm tuyệt đối khi sử dụng
                  dịch vụ bảo vệ của Công ty chúng tôi. Cuối cùng, thay mặt ban
                  lãnh đạo Tổng Công Ty Bảo Vệ An Ninh Cảnh Vệ, Chúng tôi xin
                  gửi lời cám ơn chân thành nhất tới Quý Khách Hàng đã, đang và
                  sẽ hợp tác cùng Chúng tôi.
                </p>
              </ParagraphWFull>
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

export default FoundingHistory;
