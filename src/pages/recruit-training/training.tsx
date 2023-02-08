import { Background } from '../../background/Background';
import { FixedContact } from '../../layout/FixedContact';
import { Meta } from '../../layout/Meta';
import { ParagraphWFull } from '../../layout/ParagraphWFull';
import { Section } from '../../layout/Section';
import { SectionLeftTitle } from '../../layout/SectionLeftTitle';
import { SectionTitle } from '../../layout/SectionTitle';
import { ServicesVerticleItemList } from '../../layout/ServicesVerticleItemList';
import { TrunkBox } from '../../layout/TrunkBox';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { Banner2 } from '../../templates/Banner2';
import { Footer } from '../../templates/Footer';
import { Logo } from '../../templates/Logo';
import { AppConfig } from '../../utils/AppConfig';

const Training = () => {
  return (
    <>
      <Meta
        title={'Đào tạo nghiệp vụ bảo vệ'}
        description={AppConfig.description}
      />
      <Background color="bg-gray-200">
        <Section yPadding="py-2">
          <NavbarTwoColumns logo={<Logo xl />}></NavbarTwoColumns>
        </Section>

        <Banner2 />
        <SectionTitle title="Đào tạo" />

        <Section>
          <div className="flex pb-4">
            <div className="w-2/3 pr-3">
              <SectionLeftTitle
                title="Đào tạo nghiệp vụ bảo vệ"
                customClass="pb-2 text-lg"
              />
              <ParagraphWFull customClass="pb-2" text={''}>
                <TrunkBox
                  title="GIÁO TRÌNH ĐÀO TẠO NGHIỆP VỤ VÀ KỸ NĂNG XỬ LÝ CỦA AN NINH CẢNH VỆ"
                  customClass="mt-2 text-center text-blue-800"
                  customParaClass="p-0 border-t-0 border-b-0 border-l-0 border-r-0"
                >
                  <table className="list-disc pt-1 w-full a-table b-table text-sm">
                    <tr>
                      <th className="text-left text-blue-800" colSpan={4}>
                        I. Khái niệm chung
                      </th>
                      <th className="w-20">Thời gian đào tạo</th>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">1</td>
                      <td>Khái niệm tổng quát ngành Bảo vệ - Vệ sỹ.</td>
                      <td className="w-1 text-center">10</td>
                      <td>Nghiệp vụ đóng mở và quản lý niêm phong.</td>
                      <td rowSpan={9} className="text-center">
                        15 ngày
                      </td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">2</td>
                      <td>Danh dự và lòng trung thành.</td>
                      <td className="w-1 text-center">11</td>
                      <td>Nghiệp vụ nhận dạng và ghi nhớ.</td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">3</td>
                      <td>Điều lệnh, nghi thức, tác phong, đội ngũ.</td>
                      <td className="w-1 text-center">12</td>
                      <td>Nghiệp vụ bảo vệ mục tiêu cố định và di động.</td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">4</td>
                      <td>Chức năng, nhiệm vụ, quyền hạn.</td>
                      <td className="w-1 text-center">13</td>
                      <td>Nghiệp vụ bảo vệ hiện trường.</td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">5</td>
                      <td>Nghiệp vụ tuần tra, kiểm soát.</td>
                      <td className="w-1 text-center">14</td>
                      <td>Sơ đồ và phân tích mục tiêu.</td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">6</td>
                      <td>Cách sử dụng và thực tập các biên bản, báo cáo.</td>
                      <td className="w-1 text-center">15</td>
                      <td>Các trường hợp cấp cứu,di chuyển nạn nhân.</td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">7</td>
                      <td>Ứng xử, giao tiếp và thực hành.</td>
                      <td className="w-1 text-center">16</td>
                      <td>Kỹ năng quan sát, phương pháp ước đạt.</td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">8</td>
                      <td>Hướng dẫn ghi chép sổ bảo vệ.</td>
                      <td className="w-1 text-center">17</td>
                      <td>Phương pháp huấn luyện nhân viên.</td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">9</td>
                      <td> Nghiệp vụ nhận biết, ngăn ngừa và xử lý sự cố.</td>
                      <td className="w-1 text-center"></td>
                      <td></td>
                    </tr>

                    {/*  */}
                    <tr>
                      <th className="text-left text-blue-800" colSpan={4}>
                        II. Kiến thức pháp luật
                      </th>
                      <th className="w-20"></th>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">1</td>
                      <td>
                        Các điều khoản liên quan trong Bộ luật hình sự và Bộ
                        luật tố tụng hình sự.
                      </td>
                      <td className="w-1 text-center">3</td>
                      <td>
                        Các điều khoản liên quan trong Bộ luật Dân sự và Bộ luật
                        tố tụng Dân sự.
                      </td>
                      <td rowSpan={2} className="text-center">
                        7 ngày
                      </td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">2</td>
                      <td>
                        Các điều khoản liên quan trong Bộ luật hành chính và
                        luật Lao động.
                      </td>
                      <td className="w-1 text-center">4</td>
                      <td>Các điều khoản liên quan trong luật kinh tế.</td>
                    </tr>

                    {/* III */}
                    <tr>
                      <th className="text-left text-blue-800" colSpan={4}>
                        III. Kỹ năng, chiến thuật, võ thuật
                      </th>
                      <th className="w-20"></th>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">1</td>
                      <td>Các kỹ thuật cơ bản.</td>
                      <td className="w-1 text-center">4</td>
                      <td>Kỹ thuật phòng vệ tránh né.</td>
                      <td rowSpan={3} className="text-center">
                        7 ngày
                      </td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">2</td>
                      <td>Kỹ thuật khống chế, khóa và gỡ khóa.</td>
                      <td className="w-1 text-center">5</td>
                      <td>Kỹ thuật đối kháng chiến đấu.</td>
                    </tr>

                    <tr>
                      <td className="w-1 text-center">3</td>
                      <td>Chiến thuật tấn công và tự vệ.</td>
                      <td className="w-1 text-center">6</td>
                      <td>Nâng cao.</td>
                    </tr>

                    {/* IV */}
                    <tr>
                      <th className="text-left text-blue-800" colSpan={4}>
                        IV. Kỹ thuật phòng cháy, chữa cháy
                      </th>
                      <th className="w-20"></th>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">1</td>
                      <td>Các nguyên tắc cơ bản về PCCC.</td>
                      <td className="w-1 text-center">3</td>
                      <td>Phát hiện và nhận biết cháy nổ.</td>
                      <td rowSpan={2} className="text-center">
                        5 ngày
                      </td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">2</td>
                      <td>Các biện pháp phòng cháy chữa cháy.</td>
                      <td className="w-1 text-center">4</td>
                      <td>Các tình huống cháy nổ và sơ cấp cứu.</td>
                    </tr>
                    {/* V */}
                    <tr>
                      <th className="text-left text-blue-800" colSpan={4}>
                        V. Khả năng sử dụng trang thiết bị
                      </th>
                      <th className="w-20"></th>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">1</td>
                      <td>Kỹ năng sử dụng và bảo quản công cụ hỗ trợ.</td>
                      <td className="w-1 text-center">3</td>
                      <td>Kỹ năng sử dụng thiết bị báo cháy báo khói.</td>
                      <td rowSpan={2} className="text-center">
                        4 ngày
                      </td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">2</td>
                      <td>Kỹ năng vận hành hệ thống theo dõi và báo động.</td>
                      <td className="w-1 text-center">4</td>
                      <td>Kỹ năng sự dụng các thiết bị đặc biệt.</td>
                    </tr>
                    {/* VI */}
                    <tr>
                      <th className="text-left text-blue-800" colSpan={4}>
                        VI. Kỹ năng giao tiếp
                      </th>
                      <th className="w-20"></th>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">1</td>
                      <td>Tác phong ngôn ngữ, chào hỏi, xưng hô.</td>
                      <td className="w-1 text-center">5</td>
                      <td>Ngoại ngữ anh văn giao tiếp cơ bản.</td>
                      <td rowSpan={4} className="text-center">
                        7 ngày
                      </td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">2</td>
                      <td>Kỹ năng truyền đạt giao tiếp, điện thoại.</td>
                      <td className="w-1 text-center">6</td>
                      <td>Phối hợp và cộng tác với công an chính quyền.</td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">3</td>
                      <td>Tác phong lễ tân, điều lệnh, nghi thức.</td>
                      <td className="w-1 text-center">7</td>
                      <td> Trang phục, thái độ, phong cách, nếp sống.</td>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">4</td>
                      <td>Tôn trọng khách hàng và các nội quy điều lệ.</td>
                      <td className="w-1 text-center">7</td>
                      <td>Kỹ năng xử lý tình huống.</td>
                    </tr>

                    {/* VII */}
                    <tr>
                      <th className="text-left text-blue-800" colSpan={4}>
                        VII. Nghiệp vụ đặc biệt
                      </th>
                      <th className="w-20"></th>
                    </tr>
                    <tr>
                      <td className="w-1 text-center">1</td>
                      <td>Nghiệp vụ sơ cấp cứu, giải tán và di tản.</td>
                      <td className="w-1 text-center">2</td>
                      <td>Kỹ năng Marketing và kinh doanh căn bản.</td>
                      <td rowSpan={1} className="text-center">
                        15 ngày
                      </td>
                    </tr>
                  </table>
                </TrunkBox>
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

export default Training;
