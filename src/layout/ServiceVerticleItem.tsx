import Link from 'next/link';

type ISectionProps = {
  item: any;
};

const ServiceVerticleItem = (props: ISectionProps) => (
  <div className="group transition-all duration-200 flex flex-col">
    <span className="text-sm font-medium text-blue-900 group-hover:opacity-80 mt-2 border-b-2 pb-2 border-gray-500 border-dashed">
      <Link href={`${props.item.path}`}>
        <a className="text-justify w-full block">{props.item.text}</a>
      </Link>
    </span>
  </div>
);

export { ServiceVerticleItem };
