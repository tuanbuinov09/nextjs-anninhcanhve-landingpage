type ISectionProps = {
  title?: string;
  description?: string;
  customClass?: string;
};

const SectionLeftTitle = (props: ISectionProps) => (
  <h2
    className={`text-xl text-blue-800 font-bold section-left-title text-left pt-2 border-b-2 border-gray-700 ${props.customClass}`}
  >
    {props.title}
  </h2>
);

export { SectionLeftTitle };
