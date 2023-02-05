import Image from 'next/image';

import img1 from '../../../public/assets/images/binh-duong-bank-security/1.jpg';
import img2 from '../../../public/assets/images/binh-duong-bank-security/2.jpg';
import img3 from '../../../public/assets/images/binh-duong-bank-security/3.jpg';
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

const BinhDuongBankSecurity = () => {
  return (
    <>
      <Meta
        title={'Dịch Vụ Bảo Vệ Ngân Hàng Bình Dương'}
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
                title="Dịch Vụ Bảo Vệ Ngân Hàng Bình Dương"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Dịch Vụ Bảo Vệ Ngân Hàng Bình Dương" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Khi tình hình xã hội ngày càng nhiều bất ổn, những vụ trộm
                  cướp ngân hàng ngày càng manh động táo bạo. Nếu không có một
                  đội ngũ bảo vệ chuyên nghiệp để ngăn ngừa phòng chống, các vụ
                  trộm cướp có thể xảy ra bất cứ lúc nào và có thể dẫn đến những
                  hậu quả nghiệm trọng về tài sản, con người.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img1} alt="bao ve ngan hang binh duong" />
                </div>
                <p className="py-1 text-justify w-full">
                  Ngân hàng là một trung tâm tài chính có nhiều tài sản lớn với
                  lượng khách hàng giao dịch mỗi ngày rất lớn. Lợi dụng điểm yếu
                  này, nhiều kẻ có ý đồ xấu dòm ngó, tìm kiếm cơ hội để đột
                  nhập, trộm cướp. Rất nhiều trường hợp, những đối tượng xấu còn
                  khống chế nhân viên ngân hàng và khách hàng nhằm đe dọa để
                  chiếm đoạt tài sản.
                </p>{' '}
                <p className="py-1 text-justify w-full">
                  Thấu hiểu những nguy hiểm nêu trên. An Ninh Cảnh Vệ đã đào tạo
                  đội bảo vệ của mình với nghiệp vụ chuyên môn nghiệp vụ cao,
                  trang bị vũ khí và công cụ hỗ trợ phù hợp với từng vị trí nhằm
                  đảm bảo an ninh trật tự tại ngân hàng. Chúng tôi cung cấp dịch
                  vụ bảo vệ cho ngân hàng với những tiêu chí sau:
                </p>
                <ul className="list-disc pl-8 pt-1">
                  <li className="text-justify">
                    Bảo vệ kiểm soát, đề phòng kẻ xấu đội lốt khách hàng, đưa ra
                    những phương án hành động ngăn chặn kẻ có dấu hiệu khả nghi
                    nhằm bảo vệ an ninh tối đa.
                  </li>
                  <li className="text-justify">
                    Nhắc nhở khách hàng tuân thủ nội quy chung trước khi vào
                    ngân hàng.
                  </li>
                  <li className="text-justify">
                    Kiểm soát theo dõi chặt chẽ hệ thống camera an ninh.
                  </li>
                  <li className="text-justify">
                    Phát hiện xử lý ngay các trường hợp trộm cắp, cướp giật.
                    Phối hợp nhanh với chính quyền địa phương bàn giao xử lý.
                  </li>
                  <li className="text-justify">
                    Hộ tống, phụ trách đảm bảo an ninh cho các hoạt động vận
                    chuyển tiền giữa PGD/ chi nhánh.
                  </li>
                </ul>
                <p className="py-1 text-justify w-full">
                  Dịch vụ Bảo vệ ngân hàng sẽ gồm 2 dịch vụ chính:
                </p>
                <ul className="list-disc pl-8 pt-1">
                  <li className="text-justify">
                    Dịch vụ bảo vệ mục tiêu cố định là nhóm bảo vệ tại các phòng
                    giao dịch/ chi nhánh của ngân hàng.
                  </li>
                  <li className="text-justify">
                    Dịch vụ bảo vệ mục tiêu di động là nhóm chuyên áp tải tiền
                    tới cây ATM hoặc các Phòng giao dịch/ chi nhánh khác.
                  </li>
                </ul>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Tại Ngân Hàng" />
              <Subtitle title="Nhiệm Vụ Chính:" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <ul className="list-disc pl-8 pt-1">
                  <li className="text-justify">
                    Đề phòng kẻ xấu đội lốt khách hàng, nhân viên bảo vệ phải có
                    kinh nghiệm và dung nghiệp vụ để phân loại đánh giá đối
                    tượng và phát hiện ra kẻ khả nghi trước khi gây án, đưa ra
                    những phương án hành động ngăn chặn nhưng vẫn đảm bảo an
                    toàn cho khách hàng và nhân viên tại mục tiêu.
                  </li>
                  <li className="text-justify">
                    Đề phòng kẻ gian đánh lạc hướng làm nhân viên bảo vệ sơ hở
                    mất cảnh giác để đột nhập vào ngân hàng.
                  </li>
                  <li className="text-justify">
                    Những khách hàng rút lượng tiền mặt lớn nhân viên bảo vệ
                    phải đề cao cảnh giác với những người xung quanh họ và cần
                    theo dõi, ngầm bảo vệ họ khi ra xe, đảm bảo an toàn cho
                    khách hàng ra khỏi mục tiêu.
                  </li>
                  <li className="text-justify">
                    Nhắc nhở khách hàng, tuân theo các nội quy chung của ngân
                    hàng.
                  </li>
                  <li className="text-justify">
                    Nếu phát hiện những kẻ có ý đồ giao dịch nhằm móc túi, đánh
                    cắp tài sản của những khách hàng khác thì lực lượng bảo vệ
                    cần phải nhanh chóng ngăn chặn, trình báo ngay với cơ quan
                    Công an gần nhất.
                  </li>
                  <li className="text-justify">
                    Đối với ca đêm, đây là thời điểm có thể xảy ra những vụ
                    cướp, đột nhập vào để trộm, cướp vì thế cần có nhiệm vụ tuần
                    tra, canh gác đảm bảo mọi cửa ra vào, cửa sổ của ngân hàng
                    được đóng kín, chốt khóa an toàn.
                  </li>
                  <li className="text-justify">
                    Ngoài ra, cần đảm bảo an ninh phòng cháy, chữa cháy để tránh
                    các trường hợp xảy ra hỏa hoạn do các nguồn điện hoặc các lí
                    do khác gây ra.
                  </li>
                </ul>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Yêu Cầu" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <ul className="list-disc pl-8 pt-1">
                  <li className="text-justify">
                    Bảo vệ phải giữ kín bí mật không được tiết lộ những bí mật
                    của ngân hàng như: mã số khóa, sơ đồ hệ thống báo động,
                    phòng chống trộm cắp lượng tiền mới nhập về, quy tắc, cách
                    thức làm việc của nhân viên ngân hàng.
                  </li>
                  <li className="text-justify">
                    Nhân viên bảo vệ lầ bộ mặt của ngân hàng nên phải tỏ ra lịch
                    sự, nhã nhặn đối với khách hàng của ngân hàng nhưng tuyệt
                    đối không được quá thân mật, dẫn đến hành động bất nhã.
                  </li>
                  <li className="text-justify">
                    Luôn giữ tinh thần tỉnh táo, sức khỏe tốt và khả năng ứng
                    biến nhanh, giải quyết các tình huống phát sinh dù làm việc
                    ở ca đêm hay ca ngày.
                  </li>
                  <li className="text-justify">
                    Nhân viên bảo vệ phải am hiểu tường tận các ngõ ngách và các
                    khu vực trọng yếu của ngân hàng.
                  </li>
                  <li className="text-justify">
                    Nhân viên bảo vệ phải xác định được ngày, giờ cao điểm trong
                    ngân hàng.
                  </li>
                </ul>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img2} alt="bao ve ngan hang binh duong" />
                </div>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Vị Trí Áp Tải Tiền" />
              <Subtitle title="Nhiệm Vụ Chính:" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <ul className="list-disc pl-8 pt-1">
                  <li className="text-justify">
                    Nhiệm vụ chính của nhân viên bảo vệ là giữ an toàn cho tài
                    sản, tiền bạc và đảm bảo sức khỏe, tính mạng cho các nhân
                    viên ngân hàng trong quá trình vận chuyển tiền, giao tiền
                    đến các cơ quan hoặc các cây ATM.
                  </li>
                  <li className="text-justify">
                    Việc chất tiền bốc xếp phải có sự giám sát của người có thẩm
                    quyền theo đúng kế hoạch, nhân viên bảo vệ phải quan sát địa
                    điểm nơi lên xuống tiền.
                  </li>
                  <li className="text-justify">
                    Trong quá trình vận chuyển tiền, nhân viên bảo vệ cần theo
                    dõi, cảnh giác và phát hiện kịp thời những đối tượng có động
                    thái bám theo hay dõi xe chuyển tiền.
                  </li>
                  <li className="text-justify">
                    Nhân viên bảo vệ cần đảm bảo an toàn cho tài sản, tiền bạc
                    và tính mạng của những nhân viên trên xe chuyển tiền khi xe
                    dừng lại do gặp phải các sự cố như hư hỏng, kẹt xe, đèn đỏ…
                    Bảo vệ phải luôn quan sát kỹ, phát hiện nghi vấn, báo ngay
                    cho người có trách nhiệm lý do, địa điểm xe phải dừng.
                  </li>
                  <li className="text-justify">
                    Xe phải đi đúng tuyến quy định, không được tự tiện thay đổi.
                  </li>
                  <li className="text-justify">
                    Khi vận chuyển tiền đến địa điểm thì quá trình chuyển tiền
                    xuống, nhân viên bảo vệ cũng cần phải đề cao cảnh giác và
                    đảm bảo tiền được giao an toàn, tránh phát sinh tình huống
                    nguy hiểm.
                  </li>
                  <li className="text-justify">
                    Nếu không may xảy ra sự cố xảy ra trên đường, nhân viên bảo
                    vệ phải cố gắng xác nhận tướng mạo, trang phục đặc điểm,
                    hướng chạy và biển số xe của tội phạm, điện thoại báo ngay
                    cho phòng cảnh sát và đồng thời đưa ra biện pháp xử ý khác
                    tùy thuộc vào tình hình tại hiện trường.
                  </li>
                </ul>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Yêu Cầu" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Vận chuyển tiền trên đường là giai đoạn quan trọng và nguy
                  hiểm nhất, do đó nhân viên bảo vệ phải:
                </p>
                <ul className="list-disc pl-8 pt-1">
                  <li className="text-justify">
                    Chọn chỗ ngồi thích hợp trên xe để có thể quan sát được cả
                    trước lẫn sau và cả 2 bên thành xe.
                  </li>
                  <li className="text-justify">
                    Chọn chỗ ngồi thích hợp để có đủ diện tích, khoảng không
                    thích hợp cho việc phòng, chống sự tấn công của tội phạm
                    được linh hoạt và thuận tiện.
                  </li>
                  <li className="text-justify">
                    Đặc biệt chú ý các hiện tượng bất thường khi xe di chuyển
                    như có xe bám theo, có kẻ nhìn vào xe, có tai nạn giao thông
                    hay có kẻ chặn ngang đường… đặc biệt không được rời xe đề
                    phòng tội phạm dùng kế “điệu hổ ly sơn” động tác giả đánh
                    lạc hướng.
                  </li>
                  <li className="text-justify">
                    Lực lượng bảo vệ tham gia trong vận chuyển tiền cũng cần
                    phải nắm rõ tuyến đường, hướng di chuyển của xe để phát hiện
                    những điều bất thường nhanh chóng, hay có các biện pháp xử
                    lý, lựa chọn vị trí đỗ xe an toàn khi phát sinh các tình
                    huống xe bị hư hỏng.
                  </li>
                  <li className="text-justify">
                    Khi lên xuống tiền nhân viên bảo vệ phải chọn được vị trí
                    đứng thích hợp để sẵn sàng ứng phó với mọi trường hợp có thể
                    xảy ra.
                  </li>
                  <li className="text-justify">
                    Mọi thông tin về số xe chuyển tiền, kế hoạch di chuyển thời
                    gian, số tiền,… phải được giữ bí mật.
                  </li>
                  <li className="text-justify">
                    Tinh thần, sức khỏe của nhân viên bảo vệ phải luôn đảm bảo
                    tốt nhất, tỉnh táo và nhanh nhạy để kịp thời xử lý các thông
                    tin. Ngoài ra, phải thường xuyên kiểm tra các trang thiết bị
                    hỗ trợ cần thiếtđể có thể ứng phó với mọi tình huống.
                  </li>
                </ul>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img3} alt="bao ve ngan hang binh duong" />
                </div>
                <p className="py-1 text-justify w-full">
                  Đảm bảo an ninh trật tự tại ngân hàng, siêu thị cũng là một
                  trong những dịch vụ và phương châm hàng đầu tại An Ninh Cảnh
                  Vệ. Chúng tôi cung cấp dịch vụ bảo vệ cho ngân hàng, siêu thị
                  với những tiêu chí sau:
                </p>
                <ul className="list-disc pl-8 pt-1">
                  <li className="text-justify">
                    Bảo vệ kiểm soát đề phòng kẻ xấu đội lốt khách hàng, đưa ra
                    những phương án hành động ngăn chặn kẻ có dấu hiệu khả nghi
                    nhằm bảo vệ an ninh tối đa.
                  </li>
                  <li className="text-justify">
                    Nhắc nhở khách hàng tuân thủ nội quy chung trước khi vào
                    ngân hàng, siêu thị.
                  </li>
                  <li className="text-justify">
                    Kiểm soát theo dõi chặt chẽ hệ thống camera an ninh.
                  </li>
                  <li className="text-justify">
                    Phát hiện xử lý ngay các trường hợp trộm cắp, cướp giật.
                    Phối hợp nhanh với chính quyền địa phương bàn giao xử lý.
                  </li>
                  <li className="text-justify">
                    Bảo vệ ngân hàng, bảo vệ trung tâm thương mại, bảo vệ siêu
                    thị, bảo vệ khu vui chơi.
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

export default BinhDuongBankSecurity;
