module.exports = {
  apps: [{
    name: 'surbhi-site',
    script: 'build/index.js',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      STEPS_API_URL: '',
      VISUAL_STORIES_API_URL: '',
      TALKS_API_URL: ''
    }
  }]
};
