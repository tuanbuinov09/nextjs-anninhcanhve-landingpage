import Link from 'next/link';

type IParagraphProps = {
  text: string;
  seeMoreLink?: string;
  align?: string;
};

const Paragraph = (props: IParagraphProps) => (
  <div className="flex justify-center flex-wrap">
    <h2 className="text-lg text-gray-900 paragraph-center ">
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
  </div>
);

export { Paragraph };
