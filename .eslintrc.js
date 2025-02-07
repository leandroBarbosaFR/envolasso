module.exports = {
  root: true,
  extends: ['eslint-config-custom'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/react-ui']
    }
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'build',
    '**/*.json',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo'
  ],
    rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}']
    }
  ]
};
