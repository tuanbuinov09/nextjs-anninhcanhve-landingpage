import { Background } from '../../background/Background';
import { FixedContact } from '../../layout/FixedContact';
import { Meta } from '../../layout/Meta';
import { ParagraphWFull } from '../../layout/ParagraphWFull';
import { Section } from '../../layout/Section';
import { SectionLeftTitle } from '../../layout/SectionLeftTitle';
import { SectionTitle } from '../../layout/SectionTitle';
import { ServicesVerticleItemList } from '../../layout/ServicesVerticleItemList';
import { Subtitle } from '../../layout/Subtitle';
import { TrunkBox } from '../../layout/TrunkBox';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { Banner2 } from '../../templates/Banner2';
import { Footer } from '../../templates/Footer';
import { Logo } from '../../templates/Logo';
import { AppConfig } from '../../utils/AppConfig';

const Recruit = () => {
  return (
    <>
      <Meta
        title={'Tuyển Dụng Nhân Viên Bảo Vệ'}
        description={AppConfig.description}
      />
      <Background color="bg-gray-200">
        <Section yPadding="py-2">
          <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
        </Section>

        <Banner2 />
        <SectionTitle title="Tuyển Dụng" />

        <Section>
          <div className="flex pb-4">
            <div className="w-2/3 pr-3 ">
              <SectionLeftTitle
                title="Tuyển Dụng Nhân Viên Bảo Vệ"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="I. ĐỐI TƯỢNG VÀ TIÊU CHUẨN TUYỂN DỤNG :" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full font-bold">
                  1. Đối tượng
                </p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Là công dân Việt Nam không tiền án tiền sự.
                  </li>
                </ul>
                <p className="py-1 text-justify w-full font-bold">
                  2. Tiêu chuẩn
                </p>
                <table className="list-disc pt-1 w-full a-table">
                  <tr>
                    <th className="">Tiêu chuẩn</th> <th className="">Nam</th>{' '}
                    <th className="">Nữ</th>
                  </tr>
                  <tr>
                    <td>Chiều cao</td> <td>Từ 1m70 trở lên</td> <td>Từ 1m62</td>
                  </tr>
                  <tr>
                    <td>Cân nặng</td> <td>60 kg</td> <td>47 kg</td>
                  </tr>
                  <tr>
                    <td>Tuổi</td> <td>20 – 45 tuổi</td> <td>20 - 35 tuổi</td>
                  </tr>
                </table>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Ưu tiên: Bộ đội xuất ngũ, Công an phục viên, người biết
                    ngoại ngữ, võ thuật, lái xe (tất cả phải có chứng nhận hoặc
                    văn bằng)…. Hoặc các chứng chỉ, văn bằng có liên quan đến
                    nghành nghề bảo vệ.
                  </li>
                </ul>
                <p className="py-1 text-justify w-full font-bold">
                  3. Khu vực tuyển dụng
                </p>
                <TrunkBox title="Khu vực Bình Dương">
                  <p className="py-1 text-justify w-full">
                    Địa chỉ: 286W/2 - Khu phố 1B, P. An Phú, TX Thuận An, Bình
                    Dương.
                  </p>
                  <p className="py-1 text-justify w-full">
                    ĐT: 0908.080.237 / 0987.067.709
                  </p>
                </TrunkBox>
              </ParagraphWFull>

              <Subtitle title="II. CÁC CHẾ ĐỘ" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full font-bold">
                  1. Mức Lương:
                </p>
                <p className="py-1 text-justify w-full">
                  Mức lương từ 4.750.000 đồng đến 5.800.000 đồng
                </p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Hoàn tất khóa đào tạo nghiệp vụ bảo vệ chuyên nghiệp, PCCC,
                    Sơ cấp cứu, kỹ năng giao tiếp... trước khi nhận việc.
                  </li>
                  <li className="text-justify">
                    Ngày lễ tết được tính đúng theo luật lao động.
                  </li>
                  <li className="text-justify">
                    Tổng Lương = Lương tháng + các phụ cấp khác.
                  </li>
                </ul>
                <p className="py-1 text-justify w-full font-bold">
                  2. Các phụ cấp khác bao gồm:
                </p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">Phụ cấp làm thêm giờ.</li>
                  <li className="text-justify">
                    Phụ cấp học vấn: tốt nghiệp PTTH, võ thuật... được trợ cấp:
                    200.000đ/tháng.
                  </li>
                  <li className="text-justify">
                    Phụ cấp vùng, mức phức tạp: 200.000đ đến 500.000đ (tùy vào
                    từng "M").
                  </li>
                  <li className="text-justify">
                    Chế độ tăng lương: Theo quy định của pháp luật nhà nước.
                    Ngoài ra nhân viên nào làm tốt, có năng lực chuyên môn Công
                    ty sẽ xem xét tăng lương, tặng bằng khen hoặc bổ nhiệm các
                    chức vụ quản lý.
                  </li>
                  <li className="text-justify">Phụ cấp thâm niên.</li>
                  <li className="text-justify">
                    Thưởng đột xuất và thưởng năm.
                  </li>
                  <li className="text-justify">
                    Được ký hợp đồng lao động, tham gia bảo hiểm xã hội, y tế và
                    tai nạn.
                  </li>
                  <li className="text-justify">
                    Quy chế khen thưởng kỷ luật áp dụng theo quy chế Công ty.
                  </li>
                </ul>
                {/*  */}
                <p className="py-1 text-justify w-full font-bold">
                  3. Các chế độ khác:
                </p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Hỗ trợ chi phí xe cho những nhân viên ở các tỉnh xa.
                  </li>
                  <li className="text-justify">
                    Kể từ khi ký Hợp đồng lao động nếu nhân viên làm việc đủ 12
                    tháng sẽ có chế độ hỗ trợ vay vốn.
                  </li>
                </ul>
                {/*  */}
                <p className="py-1 text-justify w-full font-bold">
                  4. Hồ sơ tuyển dụng bao gồm:
                </p>
                <ul className="list-decimal pt-1 pl-8 w-full">
                  <li className="text-justify">01 Đơn xin việc.</li>
                  <li className="text-justify">
                    02 Sơ yếu lý lịch dán ảnh đóng dấu giáp lai và có xác nhận
                    của chính quyền địa phương.
                  </li>
                  <li className="text-justify">
                    Bản sao các văn bằng, chứng chỉ có xác nhận của địa phương.
                  </li>
                  <li className="text-justify">01 Giấy khám sức khỏe.</li>
                  <li className="text-justify">
                    Quyết định nghỉ việc của doanh nghiệp mới nghỉ (nếu trước đó
                    có đi làm).
                  </li>
                  <li className="text-justify">
                    Bản sao CMND, hộ khẩu, tạm trú, tạm vắng.
                  </li>
                  <li className="text-justify">
                    Xác nhận hạnh kiểm được xác nhận bởi các công an cấp phường
                    xã.
                  </li>
                  <li className="text-justify">04 ảnh 3x4 mới nhất.</li>
                </ul>
                {/*  */}
                <p className="py-1 text-justify w-full font-bold italic underline">
                  Lưu ý:
                </p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Công ty sẽ giữ CMND gốc 20 ngày để xác minh tiền án tiền sự.
                  </li>
                  <li className="text-justify">
                    Tất cả hồ sơ đều có xác nhận của chính quyền địa phương
                    trong vòng 2 tháng gần nhất.
                  </li>
                </ul>
                {/*  */}
                <p className="py-1 text-justify w-full font-bold">
                  5. Chế độ đối với người giới thiệu:
                </p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Trường hợp nhân viên công ty đánh giá người có đủ tiêu chuẩn
                    Đạo đức – Trình độ - Tố chất Ngành, giới thiệu vào làm việc
                    tại <span className="font-bold">An Ninh Cảnh Vệ</span> sẽ
                    được hưởng 600.000đ/ 1 người.
                  </li>
                  <li className="text-justify">
                    Trên đây là thông báo tuyển dụng của An Ninh Cảnh Vệ gửi tới
                    người lao động. Chúng tôi cam kết thực hiện đúng nội dung đã
                    thông báo trên tinh thần đảm bảo mọi quyền lợi chính đáng
                    của người lao động.
                  </li>
                </ul>
              </ParagraphWFull>
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-center w-full font-bold">
                  ****************************
                </p>
              </ParagraphWFull>
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-center w-full font-bold">
                  MỌI CHI TIẾT XIN LIÊN HỆ: CÔNG TY CỔ PHẦN AN NINH CẢNH VỆ
                </p>
              </ParagraphWFull>
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-center font-bold w-full">
                  Địa chỉ: 286W/2 – Khu phố 1B, Phường An Phú, Thị xã Thuận An,
                  Tỉnh Bình Dương
                </p>
                <p className="py-1 text-center font-bold w-full">
                  Điện thoại: 0908.080.237 / 0916.003.093
                </p>
                <p className="py-1 text-center font-bold w-full">
                  Cán bộ tuyển dụng: 0916.003.093 (Mr. Tuấn)
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

export default Recruit;
