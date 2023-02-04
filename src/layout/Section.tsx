import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-0'
    } bg-white mt-4`}
  >
    {/* {(props.title || props.description) && (
      <div className="mb-4 text-center">
        {props.title && (
          // <h2 className="text-3xl text-gray-900 font-bold section-title">
          //   {props.title}
          // </h2>
          <SectionTitle title={props.title} />
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )} */}

    {props.children}
  </div>
);

export { Section };
