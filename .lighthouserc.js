module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start',
      startServerReadyPattern: 'ready on',
      url: ['http://localhost:3000/', 'http://localhost:3000/docs'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
