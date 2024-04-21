# Adicionar o Commitlint ao repositório

Siga os passos abaixo para adicionar o Commitlint ao repositório e configura-lo afim de garantir que os commits sigam o padrão SemVer (Semantic Versioning):

Vamos atualizar a documentação para incluir instruções específicas tanto para usuários de Linux quanto para usuários de Windows, garantindo que todos possam seguir as etapas sem problemas de compatibilidade. Abaixo, você encontrará a versão revisada:

## 1. Inicializar o projeto Node.js

Se você ainda não tem um `package.json` no seu repositório, você precisa inicializar seu projeto Node.js. Isso pode ser feito com o seguinte comando:

```bash
npm init -y
```

ou, se preferir usar o Yarn:

```bash
yarn init -y
```

Isso criará um `package.json` básico.

## 2. Instale o Commitlint e o Husky

Para sistemas baseados em Unix (Linux/macOS):

```bash
npm install --save-dev @commitlint/{cli,config-conventional} husky
```

ou, com o Yarn:

```bash
yarn add --dev @commitlint/{cli,config-conventional} husky
```

Para Windows, execute os comandos separadamente para cada pacote:

```bash
npm install --save-dev @commitlint/cli
npm install --save-dev @commitlint/config-conventional
npm install --save-dev husky
```

ou, com o Yarn para Windows:

```bash
yarn add --dev @commitlint/cli
yarn add --dev @commitlint/config-conventional
yarn add --dev husky
```

## 3. Configure o Commitlint

Crie um arquivo na raiz do seu projeto chamado `commitlint.config.js` e adicione o seguinte conteúdo:

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', ['lower-case']] // Opcional: regra para exigir descrição do commit em minúsculas
  }
};
```

## 4. **Configure o Husky (Manual Setup)**

Desde a versão 8 do Husky, o processo de configuração mudou. Siga estes passos:

- Crie o diretório `.husky` na raiz do projeto:
  
  ```bash
  mkdir -p .husky
  ```

- Crie um arquivo chamado `commit-msg` dentro do diretório `.husky` com o seguinte conteúdo:

  ```bash
  #!/bin/sh
  . "$(dirname "$0")/husky.sh"

  npx --no-install commitlint --edit "$1"
  ```

- Tornar o arquivo `commit-msg` executável (em sistemas Unix-like):

  ```bash
  chmod +x .husky/commit-msg
  ```

- Adicione ou atualize o script `prepare` em seu `package.json` para inicializar o Husky:

  ```json
  "scripts": {
    "prepare": "husky install"
  }
  ```

## 5. **Faça um commit inicial**

Depois de configurar tudo, é uma boa ideia fazer um commit inicial para testar se o Commitlint está funcionando conforme esperado. Adicione seus arquivos ao staging do Git e faça um commit:

```bash
git add .
git commit -m "chore: configure commitlint and husky"
```

## Atualizar o package.json

Atualize as informações do projeto como: description, keywords, autgor, license e outros.

### Exemplo de preenchimento do package.json

```json
{
  "name": "-demo-baseline-as-code",
  "version": "1.0.0",
  "description": "A essência do projeto \"-Demo-Baseline-As-Code\" nasce da busca por um sistema eficiente que habilite a publicação de baselines de segurança de maneira simplificada, mantendo um alto padrão de qualidade. O objetivo central é estabelecer um processo automatizado que não só valide a aderência dos documentos ao padrão de Semantic Versioning (SemVer) mas também assegure que eles cumpram as regras pré-definidas para pull requests (PRs). Além disso, o projeto enfatiza a governança dos documentos de baseline, implementada através da geração de hashes e de uma página dedicada (\"control\") que consolida informações cruciais dos baselines, incluindo versões, datas de publicação e os hashes correspondentes.",
  "main": "index.js",
  "directories": {
    "doc": "docs"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "prepare": "husky install",
    "start": "node index.js"
  },
  "keywords": [
    "security",
    "baseline",
    "documentation",
    "automated-publishing",
    "semantic-versioning",
    "governance"
  ],
  "author": "Raphael de Carvalho Florencio (Arquiteto de Segurança da Informação) <https://linkedin.com/in/raphaelflorencio>",
  "license": "MIT",
  "devDependencies": {
    "@commitlint/cli": "^19.2.2",
    "@commitlint/config-conventional": "^19.2.2",
    "husky": "^9.0.11"
  }
}
```
