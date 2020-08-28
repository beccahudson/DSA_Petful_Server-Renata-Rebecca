const app = require('../src/app');

describe('App', () => {
  it('GET / Ok!! It is working!', () => {
    return supertest(app)
      .get('/')
      .expect(200);
  });
});
