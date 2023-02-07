import Image from 'next/image';

import img1 from '../../../public/assets/images/enterprise-security/1.jpg';
import img2 from '../../../public/assets/images/enterprise-security/2.jpg';
import img3 from '../../../public/assets/images/enterprise-security/3.jpg';
import img4 from '../../../public/assets/images/enterprise-security/4.jpg';
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

const EnterpriseSecurity = () => {
  return (
    <>
      <Meta
        title={'Dịch Vụ Bảo Vệ Doanh Nghiệp - Bảo Vệ Công Ty'}
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
                title="Dịch Vụ Bảo Vệ Doanh Nghiệp - Bảo Vệ Công Ty"
                customClass="pb-2 text-lg"
              />
              <Subtitle title="Dịch Vụ Bảo Vệ Doanh Nghiệp - Bảo Vệ Công Ty" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Dịch Vụ Bảo Vệ Doanh Nghiệp - Bảo Vệ Công Ty Bình Dương. Đảm
                  bảo an ninh trật tự doanh nghiệp là một trong những điều ưu
                  tiên cấp thiết để doanh nghiệp có thể yên tâm phát triển sản
                  xuất. Trong công cuộc đó, An Ninh Cảnh Vệ với nhiều năm kinh
                  nghiệm trong lĩnh vực bảo vệ chuyên nghiệp, tự hào là một
                  trong những đơn vị cung cấp dịch vụ bảo vệ an ninh cho doanh
                  nghiệp hàng đầu Việt Nam.
                </p>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img1} alt="bao ve doanh nghiep" />
                </div>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Dịch Vụ Bảo Vệ Doanh Nghiệp - Bảo Vệ Công Ty Bình Dương" />
              <Subtitle title="1. Mục đích" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Đưa ra phương án tối ưu nhất để đảm bảo tuyệt đối an toàn
                    mục tiêu bảo vệ.
                  </li>
                  <li className="text-justify">
                    Không ngừng nâng cao chất lượng dịch vụ theo hướng chuyên
                    nghiệp nhất.
                  </li>
                  <li className="text-justify">
                    Đảm bảo công tác bảo vệ tài sản, con người chặt chẽ và hiệu
                    quả nhất.
                  </li>
                </ul>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="2. Yêu cầu" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">
                  Dựa trên cơ sở đặc điểm vị trí và hoạt động kinh doanh đặc thù
                  của mục tiêu, mục đích yêu cầu của lực lượng bảo vệ phải làm
                  tốt các công việc sau:
                </p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Đảm bảo an ninh trật tự, an toàn về tài sản và con người.
                    Đảm bảo tốt công tác PCCC tại mục tiêu.
                  </li>
                  <li className="text-justify">
                    Tất cả mọi hành vi lợi dụng gây rối mất trật tự, trộm cắp,
                    phá hoại tài sản đều được phát hiện ngăn chặn và xử lý kịp
                    thời. Áp dụng các giải pháp, biện pháp cần thiết và đúng
                    luật pháp Việt Nam.
                  </li>
                  <li className="text-justify">
                    Tất cả các nhân viên bảo vệ trong khi làm nhiệm vụ phải luôn
                    trong tình trạng tỉnh táo, có mặt đúng vị trí, phải lịch sự,
                    tế nhị, nhã nhặn đối với tất cả mọi người.
                  </li>
                  <li className="text-justify">
                    Tăng cường công tác tuần tra, quan sát, đảm bảo an ninh trật
                    tự.
                  </li>
                  <li className="text-justify">
                    Thực hiện đúng các quy trình kiểm tra CITYBAS an ninh hàng
                    hóa theo tiêu chuẩn quốc tế.
                  </li>
                  <li className="text-justify">
                    Thực hiện quy trình 5S theo đúng tiêu chuẩn.
                  </li>
                </ul>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="3. Nhiệm Vụ Bảo Vệ Doanh Nghiệp Tại KCN VSIP 2 Bình Dương" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Đảm bảo an toàn con người, cháy nổ, tài sản, an ninh trật tự
                    trong khuôn viên công ty.
                  </li>
                  <li className="text-justify">
                    Kiểm soát chặt chẽ cán bộ công nhân viên ra vào đúng giờ,
                    đúng quy định (đồng phục, bảng tên). Chào và giao tiếp ứng
                    xử văn minh, lịch sự.
                  </li>
                  <li className="text-justify">
                    Giám sát, ghi nhận các phương tiện ra vào các cổng, thực
                    hiện công tác đăng ký. Giám sát xuất nhập hàng hóa, thiết bị
                    tài sản (ghi nhận đầy đủ, chính xác).
                  </li>
                  <li className="text-justify">
                    Kiểm soát nhà thầu vào thi công sửa chữa nếu có.
                  </li>
                  <li className="text-justify">
                    Kiểm tra đột xuất công nhân theo yêu cầu của Ban quản lý
                    công ty.
                  </li>
                  <li className="text-justify">
                    Ngăn cấm các trường hợp hút thuốc trong Nhà máy, xưởng sản
                    xuất.
                  </li>
                  <li className="text-justify">
                    Ngăn chặn các hành vi xâm phạm trái phép gây mất trật tự,
                    phá hoại tài sản hoặc đe dọa đến tính mạng của cán bộ công
                    nhân viên đang làm việc, trong phạm vi công ty. Phối hợp với
                    tổ trưởng xử lý vi phạm về an ninh trật tự trong công ty khi
                    có hành vi làm tổn hại tài sản, xâm hại thân thể… theo đúng
                    quy định của pháp luật.
                  </li>
                  <li className="text-justify">
                    Đảm bảo an ninh trật tự tại mục tiêu, duy trì tốt nội quy
                    của mục tiêu đề ra. Chống thất thoát tài sản, hàng hóa dưới
                    mọi hình thức.
                  </li>
                  <li className="text-justify">
                    Kiểm tra, kiểm soát người, phương tiện, vật dụng (trong giới
                    hạn luật pháp Việt Nam).
                  </li>
                  <li className="text-justify">
                    Kiểm tra, nhắc nhở, xử lý những hành vi, vi phạm nội qui quy
                    định của công ty. Báo cáo những bất thường khi đi tuần tra
                    như: mất điện đột xuất, chảy tràn nước, mất niêm phong…
                  </li>
                  <li className="text-justify">
                    Thường xuyên kiểm tra các hệ thống PCCC, hàng tuần báo cáo
                    an ninh trật tự, và an toàn.
                  </li>
                  <li className="text-justify">
                    Phối hợp với ban lãnh đạo tại mục tiêu thành lập đội PCCC cơ
                    sở, hướng dẫn và huấn luyện các thành viên trong đội thành
                    thạo về nghiệp vụ PCCC.
                  </li>
                  <li className="text-justify">
                    Phòng chống và phát hiện kịp thời các hiện tượng cháy nổ để
                    xử lý ngay, thông báo cho đơn vị chủ quản, các cơ quan có
                    chức năng phối hợp giải quyết kịp thời.
                  </li>
                  <li className="text-justify">
                    Không cho mọi người mang vào mục tiêu chất kích thích, chất
                    cháy, chất nổ, vũ khí, hàng hóa cấm theo quy định của pháp
                    luật và theo quy định.
                  </li>
                  <li className="text-justify">
                    Không cho quay phim chụp ảnh khi chưa có sự đồng ý của Ban
                    Giám đốc. Phối hợp với Công ty soát xét, kiểm tra lại ghi
                    hình từ camera.
                  </li>
                </ul>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img2} alt="bao ve doanh nghiep" />
                </div>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="4. Quy Trình Bảo Vệ Doanh Nghiệp - Bảo Vệ Công Ty" />
              <Subtitle title="Đối Với Ban Giá Đốc - Cá Nhân Có Chức Vụ Quan Trọng" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Không kiểm tra đối với BGĐ công ty.
                  </li>
                  <li className="text-justify">
                    Khi BGĐ công ty ra vào nhân viên bảo vệ phải thực hiện động
                    tác chào điều lệnh.
                  </li>
                  <li className="text-justify">
                    Hỗ trợ BGĐ công ty khi được yêu cầu trong phạm vi trách
                    nhiệm.
                  </li>
                </ul>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Đối với khách hàng" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">Kiểm soát đầu vào:</p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Bảo vệ tiếp khách với thái độ niềm nở lịch sự chào hỏi tìm
                    hiểu thông tin khách (tên gì, công ty, người cần gặp, có hẹn
                    trước?), bảo vệ liên hệ trực tiếp đến văn phòng hoặc thông
                    báo đến người cần gặp để xin ý kiến. HƯỚNG DẪN VÀO VĂN
                    PHÒNG.
                  </li>
                  <li className="text-justify">
                    Nếu nhận được thông tin đồng ý tiếp khách, bảo vệ làm thủ
                    tục đăng ký vào sổ khách, phát thẻ khách, báo vị trí tuần
                    tra dẫn khách vào đúng khu vực cần liên hệ hoặc khu vực chờ.
                  </li>
                  <li className="text-justify">
                    Nếu khách có mang theo các chất dễ cháy nổ, hung khí… bảo vệ
                    phải giữ lại liên hệ vào trong văn phòng xin ý kiến nếu đồng
                    ý, tiến hành làm thủ tục đăng ký tạm nhận lưu giữ tại bảo
                    vệ.
                  </li>
                  <li className="text-justify">
                    Phát thẻ xe cho khách hướng dẫn khách để xe đúng nơi quy
                    định.
                  </li>
                  <li className="text-justify">
                    Trường hợp nhận thông tin không tiếp khách, nhân viên bảo vệ
                    lịch sự thông báo với khách về việc bận đột xuất và xin
                    khách thông cảm và liên hệ sau với người cần gặp.
                  </li>
                </ul>

                <p className="py-1 text-justify w-full">Kiểm soát lối ra:</p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Bảo vệ thu thẻ xe, thẻ khách, trả tài sản lưu giữ (nếu có),
                    ký sổ giao nhận.
                  </li>
                  <li className="text-justify">
                    Dùng kỹ năng nghiệp vụ quan sát, nếu phát hiện khách mang
                    theo các loại tài sản của công ty, bảo vệ phải tế nhị yêu
                    cầu được kiểm tra giấy tờ, nếu hợp lệ thì giải quyết cho ra,
                    nếu không có giấy tờ hợp lệ bảo vệ giữ khách ở phòng bảo vệ
                    liên hệ với văn phòng của công ty ra giải quyết xác minh
                    nguồn gốc tài sản.
                  </li>
                  <li className="text-justify">
                    Lưu ý: Những khách VIP đến liên hệ đã được ban quản lý nhà
                    máy chỉ định ưu tiên bảo vệ chỉ ghi nhận thông tin, báo cáo
                    xin ý kiến trước khi cho vào không cần giữ giấy tờ liên
                    quan, ngoài ra phải thực hiện đúng quy định nhà máy yêu cầu.
                  </li>
                  <li className="text-justify">
                    Khi làm việc với khách nhân viên bảo vệ phải nói dễ nghe,
                    giải thích và hướng dẩn khách thật tỉ mĩ để đáp ứng nhu cầu
                    của mục tiêu hoạt động cũng như nội quy của chủ quản đề ra.
                  </li>
                </ul>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img3} alt="bao ve doanh nghiep" />
                </div>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Đối Với Cán Bộ Nhân Viên Doanh Nghiệp" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <p className="py-1 text-justify w-full">Kiểm soát đầu vào:</p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Duy trì nội quy, quy định của Công ty.
                  </li>
                  <li className="text-justify">
                    Ngăn chặn kiểm soát không để CBCNV mang hung khí, chất dễ
                    cháy nổ, chất cấm, có mùi rượu bia, chất kích thích từ ngoài
                    cổng.
                  </li>
                  <li className="text-justify">
                    Khi vào cổng bảo vệ duy trì an ninh trật tự, nề nếp vào
                    cổng, giám sát đồng phục theo quy định trước khi vào công
                    ty.
                  </li>
                  <li className="text-justify">
                    Phát và thu thẻ xe cho tất cả CBCNV công ty.
                  </li>
                  <li className="text-justify">
                    CBCNV khi vào cổng phải đúng giờ, Đối với CBCNV đi trễ giờ
                    làm việc bảo vệ yêu cầu ký xác nhận vào sổ theo dõi và gửi
                    về văn phòng để xử lý.
                  </li>
                  <li className="text-justify">
                    Bảo vệ không tiếp xúc với CBCNV trong công ty, tránh tình
                    trạng cả nể khó giải quyết công việc.
                  </li>
                  <li className="text-justify">
                    Giám sát việc mang đồ cá nhân vào khu sản xuất, cũng như ra
                    khỏi khu vực sản xuất.
                  </li>
                </ul>

                <p className="py-1 text-justify w-full">Kiểm soát lối ra:</p>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Nếu ra khỏi Công ty trong giờ làm việc: Phải có giấy ra vào
                    cổng được ký duyệt của người có thẩm quyền. Trường hợp khẩn
                    cấp như tai nạn lao động, công tác khẩn… Bảo vệ giải quyết
                    cho ra đồng thời liên hệ phòng hành chánh báo cáo sự việc.
                  </li>
                  <li className="text-justify">
                    Bảo vệ thu thẻ xe nếu CBCNV có phương tiện, trả tài sản cá
                    nhân và ký sổ giao nhận (trường hợp cá nhân gửi tài sản cho
                    bảo vệ).
                  </li>
                  <li className="text-justify">
                    Trang thiết bị, dụng cụ nhà máy khi mang ra ngoài phải có
                    giấy đề nghị với đầy đủ chữ ký của người có thẩm quyền.
                  </li>
                  <li className="text-justify">
                    Tất cả CBCNV khi ra cổng nếu có căn cứ nghi vấn thì bảo vệ
                    lịch sự yêu cầu từng cá nhân bị nghi vấn vào nơi kín đáo để
                    kiểm tra người (nam kiểm tra nam, nữ kiểm tra nữ) khi kiểm
                    tra phải văn minh lịch sự.
                  </li>
                  <li className="text-justify">
                    Trường hợp khi kiểm tra phát hiện CBCNV lấy trộm tài sản của
                    công ty thì bảo vệ phải giữ người, phương tiện (nếu cất dấu
                    trong xe) và tang vật báo ngay cho văn phòng và Ban Giám Đốc
                    công ty cử người phối hợp cùng bảo vệ lập biên bản và có
                    hướng xử lý.
                  </li>
                </ul>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Đối Với Các Đơn Vị Thầu Phụ - Thi Công" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Nhà thầu đến làm việc, thi công, lắp đặt phải đăng ký giấy
                    vào thi công.
                  </li>
                  <li className="text-justify">
                    Tất cả các trường hợp phải liên hệ vào bên trong văn phòng
                    để xác nhận thông tin.
                  </li>
                  <li className="text-justify">
                    Kiểm tra chặt chẽ đối chiếu theo danh sách của nhà thầu cung
                    cấp.
                  </li>
                  <li className="text-justify">
                    Ghi nhận các thông tin cá nhân theo mẫu sổ ra vào ghi nhận
                    số CMND.
                  </li>
                  <li className="text-justify">
                    Đăng ký trang thiết bị dụng cụ thi công thầu phụ trước khi
                    vào Công ty, đối chiếu kiểm soát chặt chẽ khi ra.
                  </li>

                  <li className="text-justify">
                    Thông báo nội quy, quy định đảm bảo công tác an toàn cháy
                    nổ, an ninh khu vực thi công.
                  </li>
                  <li className="text-justify">
                    Phát thẻ thầu phụ và yêu cầu mang thẻ trên túi áo hoặc đeo
                    vào cổ, trả lại thẻ khi ra về.
                  </li>
                  <li className="text-justify">
                    Phát thẻ xe hướng dẫn thầu phụ vào khu vực nhà xe được chỉ
                    định...
                  </li>
                  <li className="text-justify">
                    Thông báo cho vị trí chốt phụ và tuần tra theo dõi, hướng
                    dẫn nhà thầu đi đúng lối quy định.
                  </li>
                  <li className="text-justify">
                    Lưu trữ hồ sơ, CMND của nhà thầu, công nhân một cách có hệ
                    thống chuyên nghiệp.
                  </li>
                </ul>
                <div className="w-full mt-2">
                  {' '}
                  <Image src={img4} alt="bao ve doanh nghiep" />
                </div>
              </ParagraphWFull>
              {/*  */}
              <Subtitle title="Đối Với Công Tác Giao Nhận Bưu Phẩm - Thư Báo" />
              <ParagraphWFull customClass="pb-2" text={''}>
                <ul className="list-disc pt-1 pl-8 w-full">
                  <li className="text-justify">
                    Bảo vệ tiếp nhận các loại thư từ được gửi dến công ty, phận
                    loại, kiểm tra sơ bộ các bưu kiện, bưu phẩm, cập nhật vào sổ
                    giao nhận văn thư, chuyển đến P.TCHC, không được để thất
                    thoát hư hỏng, ẩm ướt, rách hoặc dính bẩn, nghiêm cấm hành
                    vi xé xem trộm thư từ điện tín.
                  </li>
                  <li className="text-justify">
                    Đối với bưu phẩm gửi cho cá nhân thì bảo vệ phải ghi chép
                    cập nhật vào sổ sách có chữ ký của người gửi, khi giao yêu
                    cầu người nhận ký nhận vào sổ, phải bảo quản nguyên vẹn đến
                    khi giao cho người nhận. (Giao bưu phẩm 2 lần/ngày sáng và
                    chiều nếu có, các thư khẩn phải giao ngay).
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

export default EnterpriseSecurity;
