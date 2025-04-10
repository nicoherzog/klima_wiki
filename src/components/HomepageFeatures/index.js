import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/templates/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
  {
    title: 'Unsere erste React Komponente :3',
    Svg: require('@site/static/img/svg/earth.svg').default,
    description: (
      <>
        Tolle Vector-Graphics? Kein Problem.
      </>
    ),
  },
  {
    title: 'Portugiesische Kakteen',
    img: '/img/jpg/kaktus.jpg',
    description: (
      <>
        Sehen sie nicht fabelhaft aus in ihrer Umgebung?
      </>
    ),
  },
  {
    title: 'Phänomenale Burgen',
    img: '/img/jpg/burg.jpg',
    description: (
      <>
        Einfach unglaublich.
      </>
    ),
  },
];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

function Feature({Svg, img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={img} className={styles.featureSvg} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
