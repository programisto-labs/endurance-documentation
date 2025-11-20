import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CodeBlock from '@theme/CodeBlock';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeText}>🚀 Modular TypeScript Framework</span>
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            Build space-ready APIs with{' '}
            <span className={styles.gradientText}>Endurance</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            A modern and modular Express.js framework for creating scalable Node.js APIs.
            Simple architecture, reusable modules, production-ready and AI ready.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaButton)}
              to="/docs/intro">
              Get started now →
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.secondaryButton)}
              to="https://github.com/programisto-labs/endurance">
              View on GitHub
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>TypeScript</div>
              <div className={styles.statLabel}>100% Typed</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>Modular</div>
              <div className={styles.statLabel}>Flexible architecture</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5 min</div>
              <div className={styles.statLabel}>To get started</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroGeometricShapes}>
        <div className={clsx(styles.star, styles.star1)}></div>
        <div className={clsx(styles.star, styles.star2)}></div>
        <div className={clsx(styles.star, styles.star3)}></div>
        <div className={clsx(styles.star, styles.star4)}></div>
        <div className={clsx(styles.star, styles.star5)}></div>
        <div className={clsx(styles.star, styles.star6)}></div>
        <div className={clsx(styles.star, styles.star7)}></div>
        <div className={clsx(styles.star, styles.star8)}></div>
        <div className={clsx(styles.star, styles.star9)}></div>
        <div className={clsx(styles.star, styles.star10)}></div>
        <div className={clsx(styles.star, styles.star11)}></div>
        <div className={clsx(styles.star, styles.star12)}></div>
        <div className={clsx(styles.star, styles.star13)}></div>
        <div className={clsx(styles.star, styles.star14)}></div>
        <div className={clsx(styles.star, styles.star15)}></div>
        <div className={clsx(styles.star, styles.star16)}></div>
        <div className={styles.spaceship}></div>
      </div>
    </header>
  );
}

function CodeExample() {
  return (
    <section className={styles.codeSection}>
      <div className="container">
        <div className={styles.codeContent}>
          <div className={styles.codeText}>
            <div className={styles.codeIllustration}>
              <img src="/img/illustrations/7.png" alt="Simple code, powerful architecture" className={styles.illustrationSvg} />
            </div>
            <h2 className={styles.sectionTitle}>
              Simple code, powerful architecture
            </h2>
            <p className={styles.sectionDescription}>
              Endurance allows you to create complex APIs with clear and intuitive syntax.
              Each module is independent and can be reused or deployed separately.
            </p>
            <ul className={styles.featureList}>
              <li>✅ TypeScript routers with classes</li>
              <li>✅ MongoDB schemas with Typegoose</li>
              <li>✅ Integrated event system</li>
              <li>✅ Kafka and AMQP support</li>
              <li>✅ Authentication and authorization</li>
              <li>✅ MCP server for AI</li>
            </ul>
          </div>
          <div className={styles.codeBlock}>
            <CodeBlock language="typescript">
              {`import { EnduranceRouter, EnduranceRequest, Response } from '@programisto/endurance';
import { app } from '@programisto/endurance';
import WebhookSchema from '../models/webhook.schema';

class WebhookRouter extends EnduranceRouter {
  protected setupRoutes(): void {
    this.get('/', {}, async (req: EnduranceRequest, res: Response) => {
      const WebhookModel = WebhookSchema.getModel();
      const webhooks = await WebhookModel.find({});
      res.json({ webhooks });
    });

    this.post('/', {
      requireAuth: true,
      permissions: ['canManageWebhooks']
    }, async (req: EnduranceRequest, res: Response) => {
      const WebhookModel = WebhookSchema.getModel();
      const webhook = new WebhookModel(req.body);
      await webhook.save();
      res.status(201).json({ webhook });
    });
  }
}

export default new WebhookRouter(
  app.getAuthMiddleware(), 
  app.getUpload()
);`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuiltOn() {
  return (
    <section className={styles.builtOnSection}>
      <div className="container">
        <h2 className={styles.builtOnTitle}>Built on a foundation of fast, production-grade tooling</h2>
        <div className={styles.poweredByContainer}>
          <div className={styles.poweredByChip}>
            <div className={styles.poweredByText}>Powered By</div>
          </div>
          <div className={styles.connectionLines}>
            <div className={styles.connectionLine}>
              <div className={styles.currentFlow}></div>
            </div>
            <div className={styles.connectionLine}>
              <div className={styles.currentFlow}></div>
            </div>
            <div className={styles.connectionLine}>
              <div className={styles.currentFlow}></div>
            </div>
          </div>
        </div>
        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <div className={styles.techIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.techTitle}>
              Express.js
              <span className={styles.techArrow}> ↗</span>
            </h3>
            <p className={styles.techDescription}>
              The fast, unopinionated, minimalist web framework for Node.js. Endurance leverages Express's powerful routing and middleware system to provide a flexible foundation for building APIs.
            </p>
          </div>
          <div className={styles.techCard}>
            <div className={styles.techIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor" />
              </svg>
            </div>
            <h3 className={styles.techTitle}>
              Node.js
              <span className={styles.techArrow}> ↗</span>
            </h3>
            <p className={styles.techDescription}>
              The JavaScript runtime built on Chrome's V8 engine. Endurance is built for Node.js, enabling server-side JavaScript execution and asynchronous I/O for high-performance APIs.
            </p>
          </div>
          <div className={styles.techCard}>
            <div className={styles.techIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="7" r="1" fill="currentColor" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
                <circle cx="12" cy="17" r="1" fill="currentColor" />
              </svg>
            </div>
            <h3 className={styles.techTitle}>
              MongoDB
              <span className={styles.techArrow}> ↗</span>
            </h3>
            <p className={styles.techDescription}>
              The developer data platform. Endurance integrates seamlessly with MongoDB through Typegoose, providing type-safe schemas and a flexible document-based database solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyEndurance() {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Why choose Endurance?</h2>
        <div className={styles.reasonsGrid}>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>⚡</div>
            <h3>Fast development</h3>
            <p>
              Create your first API in less than 5 minutes. The modular architecture
              allows you to focus on your business, not on configuration.
            </p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🔧</div>
            <h3>Reusable modules</h3>
            <p>
              Use pre-built modules from NPM (prefix "edrm-") or create your own.
              Easily share between projects or with the community.
            </p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>📈</div>
            <h3>Guaranteed scalability</h3>
            <p>
              Move from monorepo to microservices without rewriting your code.
              Each module is independent and can be deployed separately.
            </p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🤖</div>
            <h3>AI integrated</h3>
            <p>
              Built-in MCP server for native integration with AI assistants.
              Generate code, create modules, all from your IDE.
            </p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🛡️</div>
            <h3>Type-safe</h3>
            <p>
              100% TypeScript with strict types. Catch errors at compile time
              and benefit from full autocompletion in your IDE.
            </p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🚀</div>
            <h3>Production-ready</h3>
            <p>
              Built-in Swagger, error handling, logging, CRON jobs, webhooks.
              Everything you need to deploy to production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Modular TypeScript Framework for Node.js APIs`}
      description="Endurance is a modern and modular Express.js framework for creating scalable Node.js APIs. Simple architecture, reusable modules, and production-ready.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CodeExample />
        <BuiltOn />
        <WhyEndurance />
      </main>
    </Layout>
  );
}
