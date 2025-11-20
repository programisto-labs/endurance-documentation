import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '5-minute installation',
    image: '/img/illustrations/1.png',
    description: (
      <>
        Start your project in minutes. Endurance installs quickly
        and guides you step-by-step to create your first API. No complex configuration,
        just working code.
      </>
    ),
  },
  {
    title: 'Reusable modules',
    image: '/img/illustrations/2.png',
    description: (
      <>
        Extend your API with ready-to-use modules available on NPM.
        Search for packages prefixed "edrm-" to discover authentication modules,
        user management, and much more.
      </>
    ),
  },
  {
    title: 'Flexible scalability',
    image: '/img/illustrations/3.png',
    description: (
      <>
        Start with a monorepo, switch to microservices when you want.
        Endurance's modular architecture allows you to change approach without rewriting your code.
      </>
    ),
  },
  {
    title: 'Native TypeScript',
    image: '/img/illustrations/4.png',
    description: (
      <>
        Benefit from type safety and complete autocompletion.
        Endurance is entirely written in TypeScript for a better development experience.
      </>
    ),
  },
  {
    title: 'Complete ecosystem',
    image: '/img/illustrations/5.png',
    description: (
      <>
        Everything you need is included: authentication, database,
        events, CRON jobs, webhooks, Swagger, and even an MCP server for AI.
      </>
    ),
  },
  {
    title: 'Production-ready',
    image: '/img/illustrations/6.png',
    description: (
      <>
        Deploy with confidence with integrated production features:
        error handling, logging, monitoring, and much more.
      </>
    ),
  },
];

function Feature({ title, description, image }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureImageContainer}>
          <img src={image} alt={title} className={styles.featureImage} />
          <div className={styles.glowEffect}></div>
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>Everything you need</h2>
          <p className={styles.featuresSubtitle}>
            Endurance combines simplicity and power to create modern APIs
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
