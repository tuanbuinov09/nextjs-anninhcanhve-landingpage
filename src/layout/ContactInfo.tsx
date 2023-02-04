import Link from 'next/link';

import {
  EnvelopIcon,
  GlobeIcon,
  MapPinIcon,
  TelePhoneIcon,
} from '../utils/Icon';

const ContactInfo = () => (
  <>
    <div className="mb-4">
      <p className="flex mb-1">
        <span className="mt-1 mr-2 info-icon">
          <MapPinIcon />
        </span>
        <span className="text-sm">
          Trụ sở chính: 286W/2 – Khu phố 1B, Phường An Phú, Thị xã Thuận An,
          Tỉnh Bình Dương – Việt Nam
        </span>
      </p>
      <p className="flex mb-1">
        <span className="mr-2 info-icon">
          <TelePhoneIcon />
        </span>
        <span className="text-sm text-blue-700 font-bold">0987.067.079</span>
      </p>
      <p className="flex mb-1">
        <span className="mr-2 info-icon">
          <EnvelopIcon />
        </span>
        <span className="text-sm text-cyan-800 font-bold">
          info@anninhcanhve.com.vn
        </span>
      </p>
      <p className="flex">
        <span className="mr-2 info-icon">
          <GlobeIcon />
        </span>
        <Link href={'https://anninhcanhve.com.vn'}>
          <a
            href="https://anninhcanhve.com.vn"
            className="underline text-blue-700 hover:opacity-80 transition-all"
          >
            https://anninhcanhve.com.vn
          </a>
        </Link>
        {/* <span className="text-sm">https://anninhcanhve.com.vn</span> */}
      </p>
    </div>

    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=286W/2 – Khu phố 1B, Phường An Phú, Thị xã Thuận An, Tỉnh Bình Dương – Việt Namord&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  </>
);

export { ContactInfo };
