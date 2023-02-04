import { FixedContact } from '../layout/FixedContact';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600 bg-gray-200">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    {/* <Banner /> */}
    <FixedContact />
    <Footer />
  </div>
);

export { Base };
