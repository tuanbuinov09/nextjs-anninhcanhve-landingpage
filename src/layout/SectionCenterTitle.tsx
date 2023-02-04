type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
};

const SectionCenterTitle = (props: ISectionProps) => (
  <h2 className="text-2xl text-blue-800 font-bold section-center-title">
    {props.title}
  </h2>
);

export { SectionCenterTitle };
