export type ProjectProps = {
  name?: string;
  title?: string;
  image: string | React.SVGElementType;
  description: string;
  demo: string;
  repo: string;
};

export type IconLabelProps = {
  icon: string | React.SVGElementType;
  text: string;
};
