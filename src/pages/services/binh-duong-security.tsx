import Image from 'next/image';

import img1 from '../../../public/assets/images/binh-duong-security/1.jpg';
import img2 from '../../../public/assets/images/binh-duong-security/2.jpg';
import img3 from '../../../public/assets/images/binh-duong-security/3.jpg';
import img4 from '../../../public/assets/images/binh-duong-security/4.jpg';
import img5 from '../../../public/assets/images/binh-duong-security/5.jpg';
import img6 from '../../../public/assets/images/binh-duong-security/6.jpg';
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

const BinhDuongSecurity = () => {
  return (
    <>
      <Meta
        title={'Dịch Vụ Bảo Vệ Bình Dương'}
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
                title="Dịch Vụ Bảo Vệ Bình Dương"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Dịch Vụ Bảo Vệ Bình Dương" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Dịch vụ bảo vệ tại Bình Dương hiện đang là một trong những
                  dịch vụ được tìm kiếm thông tin nhiều nhất tại Bình Dương. Là
                  một trong những vùng kinh tế trọng điểm với hơn 48 khu công
                  nghiệp trên khắp địa bàn, Bình Dương là một trong những vùng
                  có số lượng đông đúc người nhập cư từ các tỉnh thành khác. Vì
                  vậy, vấn đề an ninh luôn là một trong những vấn đề bức bách
                  đối với doanh nghiệp.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img1} alt="bao ve ngan hang binh duong" />
                </div>
                <p className="py-1 text-justify w-full">
                  Bình Dương hiện đang là một trong những vùng kinh tế trọng
                  điểm lớn của vùng Đông Nam Bộ với hơn 48 khu công nghiệp trên
                  khắp địa bàn, là một trong những vùng có số lượng lao động
                  nhập cư từ các tỉnh thành khác đổ dồn về đông đúc. Vì vậy, vấn
                  đề an ninh luôn là một trong những vấn đề bức bách đối với
                  doanh nghiệp.
                </p>{' '}
                <p className="py-1 text-justify w-full">
                  Khi doanh nghiệp cần một đội ngũ bảo vệ chuyên nghiệp, An Ninh
                  Cảnh Vệ luôn sẵn sàng cung cấp dịch vụ bảo vệ tại Bình Dương
                  với đội ngũ bảo vệ được huấn luyện nghiệp vụ kỹ lưỡng, kỷ
                  luật, luôn sẵn sàng ứng phó với mọi tình huống xấu nhất có thể
                  xảy ra.
                </p>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ với trải qua hơn 10 năm kinh nghiệm trong lĩnh
                  vực bảo vệ, hàng năm đều được vinh danh doanh nghiệp “ Thương
                  hiệu uy tín - Chất lượng cao” và nhiều danh hiệu uy tín khác.
                  Với bảo hiểm tài sản hơn 20 tỷ đồng.
                </p>
                <p className="py-1 text-justify w-full">
                  Ngoài ra, An Ninh Cảnh Vệ có 1 đội ngũ bảo vệ trẻ, luôn được
                  đào tạo nâng cao kỹ năng, nghiệp vụ định kỳ và cấp chứng chỉ
                  chính qui BCA, tuyển dụng và kiểm soát nhân viên nghiêm ngặt,
                  tư vấn nhanh 24/24 nhằm mang lại cho quý khách hàng chất lương
                  dịch vụ cao, sự yên tâm về tài sản, hàng hóa và hình ảnh đẹp
                  của quý công ty.
                </p>
                <p className="py-1 text-justify w-full">
                  Chúng tôi với phương châm lấy sự tin tưởng của khách hàng làm
                  mục tiêu phát triển. Chính vì thế, mà chúng tôi đã xây dựng
                  đội ngũ nhân viên phục vụ tốt nhất với nghiệp vụ và trách
                  nhiệm cao. Khách hàng sẽ thường xuyên được hỗ trợ các biện
                  pháp tối ưu nhất cùng với những cam kết chất lượng dịch vụ bảo
                  vệ như:
                </p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Cam kết cung ứng các dịch vụ bảo vệ chất lượng cao nhất.
                  </li>
                  <li className="text-justify">
                    Cam kết bảo vệ an ninh trật tự và tài sản an toàn nhất.
                  </li>
                  <li className="text-justify">
                    Cam kết mức giá dịch vụ sẽ hợp lý nhất.
                  </li>
                </ul>
                <p className="py-1 text-justify w-full">
                  Chúng tôi cung cấp dịch vụ bảo vệ cho tất cả các loại hình
                  doanh nghiệp như sau:
                </p>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Dịch Vụ Bảo Vệ Khách Sạn - Bảo Vệ Tòa Nhà" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Việc triển khai, khai thác công năng của chủ đầu tư nhằm đảm
                  bảo an ninh, tạo sự an tâm cho khách hàng thuê hoặc sử dụng cơ
                  sở hạ tầng là một vấn đề quan trọng đối với chủ đầu tư. Bên
                  cạnh đó, dịch vụ bảo vệ cũng là bộ mặt cho hình ảnh, chất
                  lương đối với chất lượng của dịch vụ của tòa nhà, khách sạn do
                  đó đội ngũ bảo vệ chất lượng là một bộ phận không thể thiếu.
                  An Ninh Cảnh Vệ với đội ngũ trẻ, khỏe và chuyên môn cao đủ
                  điều kiện đáp ứng các nhu cầu của Quý Khách hàng.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img2} alt="bao ve ngan hang binh duong" />
                </div>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Dịch Vụ Bảo Vệ Ngân Hàng" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Ngân hàng là một trung tâm tài chính có nhiều tài sản lớn với
                  lượng khách hàng giao dịch mỗi ngày rất lớn. Lợi dụng điểm yếu
                  này, nhiều kẻ có ý đồ xấu dòm ngó, tìm kiếm cơ hội để đột
                  nhập, trộm cướp. Rất nhiều trường hợp, những đối tượng xấu còn
                  khống chế nhân viên ngân hàng và khách hàng nhằm đe dọa để
                  chiếm đoạt tài sản. An Ninh Cảnh Vệ đã đào tạo đội bảo vệ của
                  mình với nghiệp vụ chuyên môn nghiệp vụ cao, trang bị vũ khí
                  và công cụ hỗ trợ phù hợp với từng vị trí nhằm đảm bảo an ninh
                  trật tự tại ngân hàng.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img3} alt="bao ve ngan hang binh duong" />
                </div>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Dịch Vụ Bảo Vệ Công Trình Xây Dựng" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Do nhu cầu phát triển cơ sở hạ tầng và mở rộng diện tích đô
                  thị. Vì vậy nhu cầu về xây dựng và phát triễn hạ tầng rất cao.
                  Các công trình xây dựng thường phải thi công trong một thời
                  gian dài mới hoàn thiện, vì thế các trang thiết bị, vật liệu…
                  thường được để tại chỗ sau mỗi ngày thi công. Việc bảo vệ
                  những trang thiết bị, vật tư này vô cùng quan trọng vì giá trị
                  tài sản lớn, nếu thất thoát sẽ ảnh hưởng tới tiến độ thi công
                  xây dựng ...
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img4} alt="bao ve ngan hang binh duong" />
                </div>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Dịch Vụ Bảo Vệ Nhà Máy, Xí Nghiệp, Khu Chế Xuất" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Đảm bảo an ninh trật tự doanh nghiệp là một trong những điều
                  ưu tiên cấp thiết để doanh nghiệp có thể yên tâm phát triển
                  sản xuất. Trong công cuộc đó, An Ninh Cảnh Vệ với nhiều năm
                  kinh nghiệm trong lĩnh vực bảo vệ chuyên nghiệp, tự hào là một
                  trong những đơn vị cung cấp dịch vụ bảo vệ an ninh cho doanh
                  nghiệp hàng đầu Việt Nam.
                </p>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Dịch Vụ Bảo Vệ Sự Kiện, Bảo Vệ Hoạt Động Cộng Đồng" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Để đảm bảo an toàn, giữ vững an ninh trật tự tại các sự kiện,
                  event thì lực lượng bảo vệ là yếu tố không thể thiếu. Tình
                  hình xã hội ngày nay khá phức tạp về những vụ việc cướp giật,
                  gây rối nơi công cộng, móc túi, rạch túi tại các sự kiện,
                  event… Nhằm trấn áp đối tượng tội phạm, ổn định an ninh trật
                  tự.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img5} alt="bao ve ngan hang binh duong" />
                </div>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Dịch Vụ Bảo Vệ Yếu Nhân" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Yếu nhân là những nhân vật quan trọng, có vai trò và tầm ảnh
                  hướng lớn đến một nhóm người, đất nước hoặc toàn thế giới. Sự
                  hiện diện của họ luôn cần được đảm bảo an toàn cá nhân chắc
                  chắn, vì vậy sẽ là trách nhiệm của vệ sĩ bảo vệ yếu nhân. Đòi
                  hỏi, bảo vệ có võ thuật cao, phản ứng nhanh, có đầy đủ tiêu
                  chuẩn nghiệp vụ, thái độ chuyên nghiệp, xử lý tình huống tốt
                  đáp ứng nhu cầu đủ các yêu cầu cần thiết của yếu nhân.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img6} alt="bao ve ngan hang binh duong" />
                </div>
              </ParagraphWFull>
              {/*  */}

              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Bên cạnh đó, chúng tôi còn cung cấp những dịch vụ bảo vệ khác:
                </p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Dịch vụ bảo vệ công xưởng, xí nghiệp.
                  </li>
                  <li className="text-justify">
                    Dịch vụ bảo vệ công ty tư nhân, công ty nhà nước.
                  </li>
                  <li className="text-justify">
                    Dịch vụ bảo vệ công trình xây dựng, công trình văn hóa.
                  </li>
                  <li className="text-justify">
                    Dịch vụ bảo vệ khu công nghiệp, khu chế xuất.
                  </li>
                  <li className="text-justify">
                    Dịch vụ bảo vệ sự kiện, các hoạt động cộng đồng.
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

export default BinhDuongSecurity;
