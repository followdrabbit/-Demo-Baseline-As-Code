module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'subject-case': [2, 'always', ['lower-case']] // Opcional: regra para exigir descrição do commit em minúsculas
    }
  };