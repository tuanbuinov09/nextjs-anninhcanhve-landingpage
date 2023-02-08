import { ParagraphWFull } from './ParagraphWFull';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  customClass?: string;
  customParaClass?: string;
  children?: Node[];
};

const TrunkBox = (props: ISectionProps) => (
  <div className="w-full">
    <h2
      className={`text-base font-bold section-left-title text-left border p-2 border-gray-600 ${props.customClass}`}
    >
      {props.title}
    </h2>
    <ParagraphWFull
      text=""
      customClass={`border border-l border-r border-b border-t-0 border-gray-600 p-2 ${props.customParaClass}`}
    >
      {props.children}
    </ParagraphWFull>
  </div>
);

export { TrunkBox };
