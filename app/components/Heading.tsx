type pageTitle = {
  title: string;
};

export default function Heading(props: pageTitle) {
  const { title } = props;
  return <h2 className="heading">{title}</h2>;
}
