import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center mr-24">
    <div className="text-2xl text-gray-600 mb-0">{props.description}</div>

    <h1 className="text-3xl text-white font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>

    {props.button}
  </header>
);

export { HeroOneButton };
