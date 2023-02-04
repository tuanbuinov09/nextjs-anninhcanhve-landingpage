import Image from 'next/image';
import Link from 'next/link';

type ISectionProps = {
  item: any;
};

const ServiceItem = (props: ISectionProps) => (
  <div className="group w-1/4 px-2 mb-4 transition-all duration-200 flex flex-col">
    <div className="item-img group-hover:-translate-y-4 transition-all duration-200">
      <Link href={`${props.item.path}`}>
        <a>
          <Image src={props.item.img} alt={props.item.img} />
        </a>
      </Link>
    </div>
    <span className="text-sm font-semibold text-blue-900 text-center group-hover:opacity-80 mt-2">
      <Link href={`${props.item.path}`}>
        <a className="text-center w-full block">{props.item.text}</a>
      </Link>
    </span>
  </div>
);

export { ServiceItem };
