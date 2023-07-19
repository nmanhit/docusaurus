import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ja/search',
    component: ComponentCreator('/ja/search', '375'),
    exact: true
  },
  {
    path: '/ja/versions',
    component: ComponentCreator('/ja/versions', 'c1b'),
    exact: true
  },
  {
    path: '/ja/docs/next',
    component: ComponentCreator('/ja/docs/next', 'a91'),
    routes: [
      {
        path: '/ja/docs/next/components/desktop/attachment',
        component: ComponentCreator('/ja/docs/next/components/desktop/attachment', '7e1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/button',
        component: ComponentCreator('/ja/docs/next/components/desktop/button', '55a'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/checkbox',
        component: ComponentCreator('/ja/docs/next/components/desktop/checkbox', 'd31'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/combobox',
        component: ComponentCreator('/ja/docs/next/components/desktop/combobox', '542'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/date-picker',
        component: ComponentCreator('/ja/docs/next/components/desktop/date-picker', 'e27'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/datetime-picker',
        component: ComponentCreator('/ja/docs/next/components/desktop/datetime-picker', '73c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/dialog',
        component: ComponentCreator('/ja/docs/next/components/desktop/dialog', '33f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/dropdown',
        component: ComponentCreator('/ja/docs/next/components/desktop/dropdown', '9f8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/field-group',
        component: ComponentCreator('/ja/docs/next/components/desktop/field-group', 'b71'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/multichoice',
        component: ComponentCreator('/ja/docs/next/components/desktop/multichoice', '4c1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/notification',
        component: ComponentCreator('/ja/docs/next/components/desktop/notification', 'd8c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/radio-button',
        component: ComponentCreator('/ja/docs/next/components/desktop/radio-button', 'e14'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/readonly-table',
        component: ComponentCreator('/ja/docs/next/components/desktop/readonly-table', 'e7c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/spinner',
        component: ComponentCreator('/ja/docs/next/components/desktop/spinner', '9eb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/table',
        component: ComponentCreator('/ja/docs/next/components/desktop/table', 'f65'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/tabs',
        component: ComponentCreator('/ja/docs/next/components/desktop/tabs', '4a5'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/text',
        component: ComponentCreator('/ja/docs/next/components/desktop/text', '2d6'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/textarea',
        component: ComponentCreator('/ja/docs/next/components/desktop/textarea', '15d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/desktop/time-picker',
        component: ComponentCreator('/ja/docs/next/components/desktop/time-picker', 'ab2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-button',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-button', 'e2c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-checkbox',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-checkbox', '3ee'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-date-picker',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-date-picker', 'e76'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-datetime-picker',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-datetime-picker', '57d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-dropdown',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-dropdown', 'ad7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-multichoice',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-multichoice', '57c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-notification',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-notification', '5c0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-radio-button',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-radio-button', '543'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-text',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-text', '8b1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-textarea',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-textarea', '4c3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/components/mobile/mobile-time-picker',
        component: ComponentCreator('/ja/docs/next/components/mobile/mobile-time-picker', '916'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/getting-started/custom-css',
        component: ComponentCreator('/ja/docs/next/getting-started/custom-css', 'f64'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/getting-started/quick-start',
        component: ComponentCreator('/ja/docs/next/getting-started/quick-start', 'b05'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/getting-started/usage-with-typescript',
        component: ComponentCreator('/ja/docs/next/getting-started/usage-with-typescript', 'fb2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/guides/attachment-customization',
        component: ComponentCreator('/ja/docs/next/guides/attachment-customization', '196'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/guides/bulk-update-customization',
        component: ComponentCreator('/ja/docs/next/guides/bulk-update-customization', 'e6e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/guides/cleaning-check-list-customization',
        component: ComponentCreator('/ja/docs/next/guides/cleaning-check-list-customization', '4d3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/guides/comparison-v0-v1',
        component: ComponentCreator('/ja/docs/next/guides/comparison-v0-v1', '796'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/guides/format-setting-plugin',
        component: ComponentCreator('/ja/docs/next/guides/format-setting-plugin', '1da'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/guides/mobile-timecard-customization',
        component: ComponentCreator('/ja/docs/next/guides/mobile-timecard-customization', '4b9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/guides/search-box-customization',
        component: ComponentCreator('/ja/docs/next/guides/search-box-customization', '9ed'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/guides/table-readonly-table-customization',
        component: ComponentCreator('/ja/docs/next/guides/table-readonly-table-customization', '94f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/guides/tabs-customization',
        component: ComponentCreator('/ja/docs/next/guides/tabs-customization', '4b8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/guides/version-conflicts-issue-solution',
        component: ComponentCreator('/ja/docs/next/guides/version-conflicts-issue-solution', '205'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/next/releases/release-notes',
        component: ComponentCreator('/ja/docs/next/releases/release-notes', 'f24'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.0.0',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.0.0', 'a6e'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.0.1',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.0.1', '62b'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.0.2',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.0.2', '163'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.0.3',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.0.3', '9fd'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.0.4',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.0.4', 'b9e'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.0.5',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.0.5', '814'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.1.0',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.1.0', '4ae'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.1.1',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.1.1', 'bf6'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.2.0',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.2.0', '91f'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.3.0',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.3.0', '48e'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.3.1',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.3.1', '73a'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.3.2',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.3.2', '7e7'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/releases/release-notes-v1.4.0',
        component: ComponentCreator('/ja/docs/next/releases/release-notes-v1.4.0', '300'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/next/utilities/version',
        component: ComponentCreator('/ja/docs/next/utilities/version', '836'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/ja/docs',
    component: ComponentCreator('/ja/docs', '115'),
    routes: [
      {
        path: '/ja/docs/components/desktop/attachment',
        component: ComponentCreator('/ja/docs/components/desktop/attachment', '449'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/button',
        component: ComponentCreator('/ja/docs/components/desktop/button', '6a0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/checkbox',
        component: ComponentCreator('/ja/docs/components/desktop/checkbox', '6e0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/combobox',
        component: ComponentCreator('/ja/docs/components/desktop/combobox', '466'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/date-picker',
        component: ComponentCreator('/ja/docs/components/desktop/date-picker', '7ca'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/datetime-picker',
        component: ComponentCreator('/ja/docs/components/desktop/datetime-picker', '391'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/dialog',
        component: ComponentCreator('/ja/docs/components/desktop/dialog', 'cc8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/dropdown',
        component: ComponentCreator('/ja/docs/components/desktop/dropdown', 'b24'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/field-group',
        component: ComponentCreator('/ja/docs/components/desktop/field-group', '8e2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/multichoice',
        component: ComponentCreator('/ja/docs/components/desktop/multichoice', '326'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/notification',
        component: ComponentCreator('/ja/docs/components/desktop/notification', 'f60'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/radio-button',
        component: ComponentCreator('/ja/docs/components/desktop/radio-button', '023'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/readonly-table',
        component: ComponentCreator('/ja/docs/components/desktop/readonly-table', '14d'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/spinner',
        component: ComponentCreator('/ja/docs/components/desktop/spinner', '004'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/table',
        component: ComponentCreator('/ja/docs/components/desktop/table', '4e7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/tabs',
        component: ComponentCreator('/ja/docs/components/desktop/tabs', 'c36'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/text',
        component: ComponentCreator('/ja/docs/components/desktop/text', 'b31'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/textarea',
        component: ComponentCreator('/ja/docs/components/desktop/textarea', 'a73'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/desktop/time-picker',
        component: ComponentCreator('/ja/docs/components/desktop/time-picker', '162'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-button',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-button', '52c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-checkbox',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-checkbox', '73e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-date-picker',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-date-picker', 'b39'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-datetime-picker',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-datetime-picker', '981'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-dropdown',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-dropdown', '170'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-multichoice',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-multichoice', '1d9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-notification',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-notification', '422'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-radio-button',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-radio-button', 'a9b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-text',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-text', '77b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-textarea',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-textarea', '37b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/components/mobile/mobile-time-picker',
        component: ComponentCreator('/ja/docs/components/mobile/mobile-time-picker', '68b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/getting-started/custom-css',
        component: ComponentCreator('/ja/docs/getting-started/custom-css', 'b57'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/getting-started/quick-start',
        component: ComponentCreator('/ja/docs/getting-started/quick-start', '536'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/getting-started/usage-with-typescript',
        component: ComponentCreator('/ja/docs/getting-started/usage-with-typescript', '7e4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/guides/attachment-customization',
        component: ComponentCreator('/ja/docs/guides/attachment-customization', 'd36'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/guides/bulk-update-customization',
        component: ComponentCreator('/ja/docs/guides/bulk-update-customization', '6a1'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/guides/cleaning-check-list-customization',
        component: ComponentCreator('/ja/docs/guides/cleaning-check-list-customization', 'ea8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/guides/comparison-v0-v1',
        component: ComponentCreator('/ja/docs/guides/comparison-v0-v1', 'c7e'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/guides/format-setting-plugin',
        component: ComponentCreator('/ja/docs/guides/format-setting-plugin', 'a6c'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/guides/mobile-timecard-customization',
        component: ComponentCreator('/ja/docs/guides/mobile-timecard-customization', '5bf'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/guides/search-box-customization',
        component: ComponentCreator('/ja/docs/guides/search-box-customization', '641'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/guides/table-readonly-table-customization',
        component: ComponentCreator('/ja/docs/guides/table-readonly-table-customization', '989'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/guides/tabs-customization',
        component: ComponentCreator('/ja/docs/guides/tabs-customization', '13b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/guides/version-conflicts-issue-solution',
        component: ComponentCreator('/ja/docs/guides/version-conflicts-issue-solution', 'd29'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/ja/docs/releases/release-notes',
        component: ComponentCreator('/ja/docs/releases/release-notes', '724'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.0.0',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.0.0', 'b79'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.0.1',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.0.1', 'ebd'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.0.2',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.0.2', 'c47'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.0.3',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.0.3', '0b4'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.0.4',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.0.4', '8ff'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.0.5',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.0.5', 'fe7'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.1.0',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.1.0', '8cd'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.1.1',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.1.1', 'a87'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.2.0',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.2.0', '242'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.3.0',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.3.0', '86a'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.3.1',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.3.1', '655'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.3.2',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.3.2', '370'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/releases/release-notes-v1.4.0',
        component: ComponentCreator('/ja/docs/releases/release-notes-v1.4.0', 'd5f'),
        exact: true,
        sidebar: "release-notes"
      },
      {
        path: '/ja/docs/utilities/version',
        component: ComponentCreator('/ja/docs/utilities/version', '6d7'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/ja/',
    component: ComponentCreator('/ja/', 'a09'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
