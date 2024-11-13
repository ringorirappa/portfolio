import styled from '../style/layout.module.css';

type typeChildren = {
  id: string;
  className: string;
  children: React.ReactNode;
};

export default function Layout(props: typeChildren) {
  const { children, id, className } = props;
  return (
    <>
      <section id={id} className={`${styled.layout} ${className}`}>
        {children}
      </section>
    </>
  );
}
