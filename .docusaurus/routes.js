import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/HARVEST-Docusaurus-Site/markdown-page',
    component: ComponentCreator('/HARVEST-Docusaurus-Site/markdown-page', '948'),
    exact: true
  },
  {
    path: '/HARVEST-Docusaurus-Site/docs',
    component: ComponentCreator('/HARVEST-Docusaurus-Site/docs', '170'),
    routes: [
      {
        path: '/HARVEST-Docusaurus-Site/docs',
        component: ComponentCreator('/HARVEST-Docusaurus-Site/docs', '56f'),
        routes: [
          {
            path: '/HARVEST-Docusaurus-Site/docs',
            component: ComponentCreator('/HARVEST-Docusaurus-Site/docs', '3a1'),
            routes: [
              {
                path: '/HARVEST-Docusaurus-Site/docs/HARVEST_Deployment_Guide',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/HARVEST_Deployment_Guide', '7c8'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/HARVEST_Technical_Documentation',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/HARVEST_Technical_Documentation', '974'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/HARVEST_User_Guide',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/HARVEST_User_Guide', 'fc5'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/whitepaper/abstract',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/whitepaper/abstract', '904'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/whitepaper/conclusion',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/whitepaper/conclusion', 'bf4'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/whitepaper/core-technology-architecture',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/whitepaper/core-technology-architecture', '4e1'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/whitepaper/ecosystem-community',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/whitepaper/ecosystem-community', 'b58'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/whitepaper/introduction',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/whitepaper/introduction', '9ec'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/whitepaper/roadmap',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/whitepaper/roadmap', '0c7'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/whitepaper/team-legal',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/whitepaper/team-legal', 'c37'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/whitepaper/tokenomics',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/whitepaper/tokenomics', '518'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/whitepaper/use-cases-applications',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/whitepaper/use-cases-applications', 'fa8'),
                exact: true,
                sidebar: "harvestSidebar"
              },
              {
                path: '/HARVEST-Docusaurus-Site/docs/whitepaper/vision-mission',
                component: ComponentCreator('/HARVEST-Docusaurus-Site/docs/whitepaper/vision-mission', '497'),
                exact: true,
                sidebar: "harvestSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/HARVEST-Docusaurus-Site/',
    component: ComponentCreator('/HARVEST-Docusaurus-Site/', '8d7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
