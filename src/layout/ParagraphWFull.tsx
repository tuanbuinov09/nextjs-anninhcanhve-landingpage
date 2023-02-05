import { ReactNode } from 'react';

import Link from 'next/link';

type IParagraphProps = {
  text: string;
  seeMoreLink?: string;
  align?: string;
  customClass?: string;
  children?: ReactNode;
};

const ParagraphWFull = (props: IParagraphProps) => (
  <div className={`flex justify-center flex-wrap ${props.customClass}`}>
    <h2 className="text-base text-gray-900 text-justify ">
      {props.text}
      <div className="flex justify-end w-full">
        {props.seeMoreLink ? (
          <div className="see-more-link text-base text-blue-900 font-bold hover:opacity-70 transition-all duration-200">
            <Link href={props.seeMoreLink}>
              <a>{'Xem thêm >>'}</a>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </h2>
    {props.children}
  </div>
);

export { ParagraphWFull };
