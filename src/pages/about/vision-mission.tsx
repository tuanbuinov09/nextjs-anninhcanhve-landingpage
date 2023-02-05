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

const VisionMission = () => {
  return (
    <>
      <Meta title={'Tầm nhìn - sứ mệnh'} description={AppConfig.description} />
      <Background color="bg-gray-200">
        <Section yPadding="py-2">
          <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
        </Section>

        <Banner2 />
        <SectionTitle title="TẦM NHÌN - SỨ MỆNH" />

        <Section>
          <div className="flex pb-4">
            <div className="w-2/3 pr-3 ">
              <SectionLeftTitle
                title="Tổng Công Ty Cổ Phần Bảo Vệ An Ninh Cảnh Vệ"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Tầm nhìn" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Bằng khát vọng tiên phong cùng chiến lược đầu tư - phát triển
                  bền vững, Kỷ Luật Thép - An Ninh Cảnh Vệ phấn đấu trở thành
                  Tập đoàn kinh tế đa ngành hàng đầu Việt Nam và khu vực; hướng
                  đến một Tập đoàn mang đẳng cấp quốc tế.
                </p>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ mong muốn tạo nên một thương hiệu Việt mang ý
                  nghĩa sâu xắc quân đội ngoài đời thực, thể hiện tầm vóc trí
                  tuệ và niềm tự hào của Việt Nam trên trường quốc tế.
                </p>
              </ParagraphWFull>

              <Subtitle title="Sứ Mệnh" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Đối với thị trường: Cung cấp các sản phẩm – dịch vụ đẳng cấp
                  với chất lượng quốc tế và am hiểu bản sắc địa phương; mang
                  tính độc đáo và sáng tạo cao. Bên cạnh giá trị chất lượng vượt
                  trội, trong mỗi sản phẩm – dịch vụ đều chứa đựng những thông
                  điệp văn hóa, nhằm thỏa mãn tối đa nhu cầu chính đáng của
                  khách hàng.
                </p>

                <p className="py-1 text-justify w-full">
                  Đối với cổ đông và đối tác: Đề cao tinh thần hợp tác cùng phát
                  triển; cam kết trở thành “Người đồng hành số 1” của các đối
                  tác và cổ đông; luôn gia tăng các giá trị đầu tư hấp dẫn và
                  bền vững..
                </p>

                <p className="py-1 text-justify w-full">
                  Đối với nhân viên: Xây dựng môi trường làm việc chuyên nghiệp,
                  năng động, sáng tạo và nhân văn; tạo điều kiện thu nhập cao và
                  cơ hội phát triển công bằng cho tất cả nhân viên.
                </p>

                <p className="py-1 text-justify w-full">
                  Đối với xã hội: Hài hòa lợi ích doanh nghiệp với lợi ích xã
                  hội; đóng góp tích cực vào các hoạt động hướng về cộng đồng,
                  thể hiện tinh thần trách nhiệm công dân và niềm tự hào dân
                  tộc.
                </p>
              </ParagraphWFull>
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

export default VisionMission;
