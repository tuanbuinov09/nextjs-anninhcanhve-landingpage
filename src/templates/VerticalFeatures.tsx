import Image from 'next/image';
import { useRouter } from 'next/router';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from '../../public/assets/images/1.jpg';
import img2 from '../../public/assets/images/2.jpg';
import img3 from '../../public/assets/images/3.jpg';
import img4 from '../../public/assets/images/4.jpg';
import img5 from '../../public/assets/images/5.jpg';
import img6 from '../../public/assets/images/6.jpg';
import img7 from '../../public/assets/images/7.jpg';
import img8 from '../../public/assets/images/8.jpg';
// import img9 from '../../public/assets/images/9.jpg';
import { ContactForm } from '../layout/ContactForm';
import { Paragraph } from '../layout/Paragraph';
import { Section } from '../layout/Section';
import { SectionCenterTitle } from '../layout/SectionCenterTitle';
import { SectionTitle } from '../layout/SectionTitle';
import { ServiceItemList } from '../layout/ServiceItemList';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const VerticalFeatures = () => {
  const router = useRouter();
  return (
    <>
      <SectionTitle title="BAN LÃNH ĐẠO" />
      <Section
        yPadding="py-4"
        // title="BAN LÃNH ĐẠO"
        // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
      >
        <Carousel
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          // autoPlay={props.deviceType !== 'mobile'}
          transitionDuration={500}
          autoPlay={true}
          autoPlaySpeed={2500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          infinite={true}
          // swipeable={false}
          draggable={false}
          showDots={true}
        >
          <div>
            <Image src={img1} alt="image1" />
            {/* <p className="legend">Image 1</p> */}
          </div>
          <div>
            <Image src={img2} alt="image2" />
            {/* <p className="legend">Image 2</p> */}
          </div>
          <div>
            <Image src={img3} alt="image3" />
            {/* <p className="legend">Image 3</p> */}
          </div>
          <div>
            <Image src={img4} alt="image4" />
            {/* <p className="legend">Image 4</p> */}
          </div>
          <div>
            <Image src={img5} alt="image5" />
            {/* <p className="legend">Image 5</p> */}
          </div>
          <div>
            <Image src={img6} alt="image6" />
            {/* <p className="legend">Image 6</p> */}
          </div>
          <div>
            <Image src={img7} alt="image7" />
            {/* <p className="legend">Image 7</p> */}
          </div>
          <div>
            <Image src={img8} alt="image8" />
            {/* <p className="legend">Image 8</p> */}
          </div>
          {/* <div> */}
          {/* <Image src={img9} alt="image9" /> */}
          {/* <p className="legend">Image 9</p> */}
          {/* </div> */}
        </Carousel>
      </Section>
      <SectionTitle title="GIỚI THIỆU" />
      <Section yPadding="pb-4">
        <SectionCenterTitle title="CÔNG TY CỔ PHẦN BẢO VỆ AN NINH CẢNH VỆ - BÌNH DƯƠNG" />
        <Paragraph
          text="Được thành lập bởi đội ngũ Sĩ Quan Quân Đội, Công An, Viện Kiểm Soát đã và đang hoạt động trong ngành. Tổng Công Ty Bảo Vệ An Ninh Cảnh Vệ hoạt động theo giấy phép số 0313919673 cấp tại TP.HCM. Giấy chứng nhận đủ điều kiện về an ninh trật tự để kinh doanh dịch vụ bảo vệ số 577/GCN cấp tại Công an TP.HCM. Hiện nay Tổng Công ty bảo vệ An Ninh Cảnh Vệ được xem là nhà cung cấp an ninh hàng đầu tại Việt Nam. Chúng tôi hiện cung cấp nhiều loại hình an ninh cho các khách hàng, các nhà đầu tư trong và ngoài nước."
          seeMoreLink={`${router.basePath}about/founding-history`}
        />
      </Section>
      <SectionTitle title="DỊCH VỤ CỦA CHÚNG TÔI" />
      <Section>
        <ServiceItemList />
      </Section>
      <SectionTitle title="LIÊN HỆ VỚI CHÚNG TÔI" />
      <Section>
        <ContactForm />
      </Section>
      {/* <Section>
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="/assets/images/feature.svg"
          imageAlt="First feature alt text"
        />
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="/assets/images/feature2.svg"
          imageAlt="Second feature alt text"
          reverse
        />
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="/assets/images/feature3.svg"
          imageAlt="Third feature alt text"
        />
      </Section> */}
    </>
  );
};

export { VerticalFeatures };
