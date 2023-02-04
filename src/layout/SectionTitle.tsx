type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
};

const SectionTitle = (props: ISectionProps) => (
  <h2 className="text-3xl text-gray-900 font-bold section-title bg-white max-w-screen-lg mt-4 mx-auto">
    {props.title}
  </h2>
);

export { SectionTitle };
