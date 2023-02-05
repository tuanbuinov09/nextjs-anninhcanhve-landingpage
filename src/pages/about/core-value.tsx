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

const CoreValue = () => {
  return (
    <>
      <Meta title={'Giá trị cốt lõi'} description={AppConfig.description} />
      <Background color="bg-gray-200">
        <Section yPadding="py-2">
          <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
        </Section>

        <Banner2 />
        <SectionTitle title="GIÁ TRỊ CỐT LÕI" />

        <Section>
          <div className="flex pb-4">
            <div className="w-2/3 pr-3 ">
              <SectionLeftTitle
                title="Tổng Công Ty Cổ Phần Bảo Vệ An Ninh Cảnh Vệ"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Tín" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ bảo vệ chữ Tín như bảo vệ danh dự của chính
                  mình; Luôn chuẩn bị đầy đủ năng lực thực thi và nỗ lực hết
                  mình để đảm bảo đúng cam kết.
                </p>
              </ParagraphWFull>

              <Subtitle title="Tâm" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ đặt chữ Tâm làm nền tảng; Luôn thượng tôn pháp
                  luật, duy trì đạo đức; Lấy khách hàng và nhân viên làm trung
                  tâm.
                </p>
              </ParagraphWFull>
              <Subtitle title="Trí" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ coi sáng tạo là sức sống, là đòn bẩy phát
                  triển; Đề cao tinh thần dám nghĩ, dám làm; Chủ trương xây dựng
                  một “doanh nghiệp học tập”.
                </p>
              </ParagraphWFull>
              <Subtitle title="Tâm" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ đặt chữ Tâm làm nền tảng; Luôn thượng tôn pháp
                  luật, duy trì đạo đức; Lấy khách hàng và nhân viên làm trung
                  tâm.
                </p>
              </ParagraphWFull>
              <Subtitle title="Tốc" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ đặt tôn chỉ “tốc độ, hiệu quả trong từng hành
                  động”; Thực hành “quyết định nhanh – hợp tác nhanh – triển
                  khai nhanh – phản ứng nhanh – thay đổi và thích ứng nhanh...”
                </p>
              </ParagraphWFull>
              <Subtitle title="Tinh" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ đặt mục tiêu: Con người tinh hoa – Sản phẩm/
                  Dịch vụ tinh hoa – Cuộc sống tinh hoa – Xã hội tinh hoa.
                </p>
              </ParagraphWFull>
              <Subtitle title="Nhân" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  An Ninh Cảnh Vệ xây dựng các mối quan hệ với tinh thần nhân
                  văn; coi trọng đối tác và người lao động như là tài sản quý
                  giá nhất; Tạo dựng “Nhân hòa” trên cơ sở công bằng, chính trực
                  và nêu cao sức mạnh đoàn kết.
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

export default CoreValue;
