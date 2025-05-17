import { SectionProps } from '../../types/Section';
import style from './Section.module.scss';

const Section: React.FC<SectionProps> = ({ title, children }): JSX.Element => {
  return (
    <section className={style.section__box}>
      {title !== undefined && <h2>{title}</h2>}
      {children !== undefined && children}
    </section>
  );
};

export default Section;
