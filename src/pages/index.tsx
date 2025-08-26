import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// Hero Section Component
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/whitepaper/introduction">
            Explore the Whitepaper 📄
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/HARVEST_User_Guide">
            Start Using HARVEST 🚀
          </Link>
          {/* The Docusaurus Tutorial button was here and has been removed */}
        </div>
      </div>
    </header>
  );
}

// Main Homepage Layout
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="HARVEST Blockchain: Cultivating Ethical Blockchain Innovation from Africa - Cardano Sidechain for Agriculture, Education, and RWAs.">
      <HomepageHeader />
      <main>
        {/* THIS IS THE ONLY "Our Mission" and "Our Vision" SECTION NOW */}
        <section className={clsx(styles.section, styles.missionVisionTopPadding)}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--6', styles.sectionContent)}>
                        <h2>Our Mission</h2>
                        <p>HARVEST is on a mission to bridge the gap between cutting-edge blockchain technology and tangible real-world impact. We are dedicated to creating practical, ethical and sustainable solutions for the agricultural and environmental sectors.</p>
                    </div>
                    <div className={clsx('col col--6', styles.sectionContent)}>
                        <h2>Our Vision</h2>
                        <p>We envision building an ethical Cardano sidechain ecosystem that fosters transparency, economic growth and community empowerment. HARVEST aims to be a global learning laboratory and a scalable template for decentralized innovation from Africa.</p>
                    </div>
                </div>
            </div>
        </section>

        <HomepageFeatures />

        {/* THIS IS THE "Join the HARVEST Ecosystem" SECTION */}
        <section className={clsx('hero hero--secondary', styles.callToAction)}>
          <div className="container">
            <h2 className="hero__title">Join the HARVEST Ecosystem</h2>
            <p className="hero__subtitle">Discover how HARVEST is transforming agriculture, education and finance with blockchain technology.</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/whitepaper/roadmap">
                See Our Roadmap
              </Link>
              <Link
                className="button button--primary button--lg"
                to="/docs/whitepaper/use-cases-applications">
                Explore Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}