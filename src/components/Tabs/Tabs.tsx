'use client';

import { useState } from 'react';
import Image from 'next/image';
import Styles from './Tabs.module.css';
import ArrowIcon from '../ArrowIcon/ArrowIcon';

type TabKey = 'data' | 'carbone' | 'csrd' | 'analyse';

interface TabInfo {
  title: string;
  tags: { text: string; }[];
  description: string;
  image: string;
  backgroundColor?: string;
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('data');

  const tabsData: Record<TabKey, TabInfo> = {
    data: {
      title: 'ESG Data Solution',
      tags: [
        { text: 'MOT CLE ASSOCIE' },
        { text: 'MOT CLE ASSOCIE' }
      ],
      description: 'Automatically collect data, launch campaigns, establish quality processes, and build an organization that mirrors your own, all within our platform. Benchmark best practices, set scoring rules, and track performance with custom dashboards.',
      image: '/t1.png',
      backgroundColor: '#ffdda5'
    },
    carbone: {
      title: 'Bilan Carbone',
      tags: [
        { text: 'CALCUL CARBONE' },
        { text: 'TRAJECTOIRE' }
      ],
      description: 'Mesurez et réduisez votre empreinte carbone avec des outils de calcul précis. Définissez des objectifs ambitieux, suivez vos progrès et construisez une stratégie de décarbonation adaptée à votre organisation.',
      image: '/t1.png',
      backgroundColor: '#d1e7dd'
    },
    csrd: {
      title: 'CSRD',
      tags: [
        { text: 'CONFORMITÉ' },
        { text: 'REPORTING' }
      ],
      description: 'Préparez-vous à la directive CSRD avec nos outils de conformité. Automatisez la collecte de données, générez des rapports conformes et assurez-vous de respecter toutes les exigences réglementaires.',
      image: '/t1.png',
      backgroundColor: '#f8d7da'
    },
    analyse: {
      title: "Analyse d'impact et conformité",
      tags: [
        { text: 'ANALYSE IMPACT' },
        { text: 'CONFORMITÉ' }
      ],
      description: "Analysez l'impact de vos activités sur l'environnement et la société. Mesurez votre performance ESG, identifiez les risques et opportunités, et assurez votre conformité réglementaire.",
      image: '/t1.png',
      backgroundColor: '#dfe2e6'
    }
  };

  const currentTab = tabsData[activeTab];

  const [isChanging, setIsChanging] = useState(false);

  const handleTabChange = (tab: TabKey) => {
    if (tab === activeTab) return;

    setIsChanging(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsChanging(false);
    }, 300);
  };


  return (
    <section className={Styles.esgSection}>
      <div className={Styles.container}>

        <header className={Styles.header}>
          <h2 className={Styles.title}>
            All your ESG journey needs <br />in one platform
          </h2>
          <nav className={Styles.tabs}>
            <button
              className={`${Styles.tab} ${activeTab === 'data' ? Styles.active : ''}`}
              onClick={() => handleTabChange('data')}
            >
              ESG Data Solution
            </button>
            <button
              className={`${Styles.tab} ${activeTab === 'carbone' ? Styles.active : ''}`}
              onClick={() => handleTabChange('carbone')}
            >
              Carbon Assessment
            </button>
            <button
              className={`${Styles.tab} ${activeTab === 'csrd' ? Styles.active : ''}`}
              onClick={() => handleTabChange('csrd')}
            >
              CSRD
            </button>
            <button
              className={`${Styles.tab} ${activeTab === 'analyse' ? Styles.active : ''}`}
              onClick={() => handleTabChange('analyse')}
            >
              Impact Analysis & Compliance
            </button>
          </nav>
        </header>

        <div
          className={`
            ${Styles.content}
            ${isChanging ? Styles.changing : ''}
          `}
          style={{ backgroundColor: currentTab.backgroundColor || '#ffdda5' }}
        >
          <div className={Styles.textBlock}>
            <div className={Styles.textBlockHeader}>
              <h2 className={Styles.subtitle}>{currentTab.title}</h2>
              <div className={Styles.tags}>
                {currentTab.tags.map((button, index) => (
                  <span
                    key={index}
                    className={Styles.tag}
                  >
                    {button.text}
                  </span>
                ))}
              </div>
            </div>
            <div className={Styles.description}>
              <p>{currentTab.description}</p>
            </div>
          </div>

          <div className={Styles.imageBlock}>
            <div className={Styles.dashboardMockup}>
              <Image
                src={currentTab.image}
                alt={`Illustration of ${currentTab.title}`}
                width={492}
                height={380}
                className={Styles.dashboardImage}
              />
            </div>
            <a className="linkMedium" href="/logiciel-esg">
              <span>Learn more</span>
              <ArrowIcon size={17} color='#453848' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
