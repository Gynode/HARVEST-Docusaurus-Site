import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  harvestSidebar: [
    {
      type: 'category',
      label: 'Whitepaper',
      items: [
        'whitepaper/introduction', // This now expects introduction.md
        'whitepaper/abstract',
        'whitepaper/vision-mission',
        { // This is the change
          type: 'doc',
          id: 'whitepaper/core-technology-architecture',
          label: 'Core Technology',
        },
        'whitepaper/tokenomics',
        'whitepaper/use-cases-applications',
        {
          type: 'doc',
          id: 'whitepaper/ecosystem-community',
          label: 'Ecosystem & Community', // The desired shorter label
        },
        'whitepaper/roadmap',
        {
          type: 'doc',
          id: 'whitepaper/team-legal',
          label: 'Team & Legal Considerations', // The desired shorter label
        },
        'whitepaper/conclusion',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'HARVEST_User_Guide',
        'HARVEST_Deployment_Guide',
        'HARVEST_Technical_Documentation',
      ],
    },
  ],
};

export default sidebars;