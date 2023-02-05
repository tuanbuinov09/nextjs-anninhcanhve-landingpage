type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
};

const Subtitle = (props: ISectionProps) => (
  <h2 className="text-lg text-blue-800 font-bold section-left-title text-left pt-2">
    {props.title}
  </h2>
);

export { Subtitle };
