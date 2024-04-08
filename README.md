# -Demo-Baseline-As-Code

## Sobre o Projeto

A essência do projeto "-Demo-Baseline-As-Code" nasce da busca por um sistema eficiente que habilite a publicação de baselines de segurança de maneira simplificada, mantendo um alto padrão de qualidade. O objetivo central é estabelecer um processo automatizado que não só valide a aderência dos documentos ao padrão de Semantic Versioning (SemVer) mas também assegure que eles cumpram as regras pré-definidas para pull requests (PRs). Além disso, o projeto enfatiza a governança dos documentos de baseline, implementada através da geração de hashes e de uma página dedicada ("control") que consolida informações cruciais dos baselines, incluindo versões, datas de publicação e os hashes correspondentes.

Este sistema foi concebido para demonstrar que é possível criar um processo de publicação de baselines rápido, moderno e automatizado, sem cair na armadilha da complexidade e burocracia. Através da utilização de práticas contemporâneas como revisões de PRs automatizadas e manuais, e a integração com ferramentas como Dependabot, o projeto -Demo-Baseline-As-Code representa um paradigma de como a gestão de baselines de segurança pode ser otimizada para atender às necessidades dinâmicas e rigorosas do cenário atual de segurança da informação.

## Características Principais

- **Validação Automática**: Uso de linters integrados ao GitHub para assegurar a conformidade e qualidade das baselines de segurança.
- **Publicação Facilitada**: Baselines são transformadas em documentos acessíveis, publicados automaticamente no GitHub Pages através de Material MKDocs.
- **Integração CI/CD**: Processo automatizado no GitHub para contínua validação e publicação, simplificando o ciclo de vida do desenvolvimento.

## Estrutura do projeto

```plaintext
-Demo-Baseline-As-Code/
│
├── .github/                   # Configurações e automações específicas do GitHub
│   ├── workflows/             # Contém os arquivos de configuração do GitHub Actions para CI/CD
│   └── ISSUE_TEMPLATE/        # Templates para a criação de issues no GitHub
│
├── docs/                      # Documentação do projeto escrita em Markdown
│   ├── index.md               # Página inicial da documentação no site gerado pelo MkDocs
│   ├── setup/                 # Documentação sobre configuração do projeto
│   │   ├── installation.md    # Instruções detalhadas de instalação
│   │   ├── configuration.md   # Explicações sobre a configuração do ambiente e do projeto
│   │   └── ci_cd_integration.md # Descrição da integração e configuração do CI/CD
│   ├── baselines/             # Documentos de baselines de segurança
│   │   ├── baseline1.md       # Documento de baseline específico
│   │   ├── baseline2.md       # Outro documento de baseline
│   │   └── ...                # Demais documentos de baselines
│   ├── control/               # Página de controle dos baselines
│   │   └── index.md           # Documento com nomes, versões, datas de publicação e hashes
│   ├── configuration/         # Seção com as configurações do projeto
│   │   ├── linters.md         # Configurações dos linters
│   │   ├── integrations.md    # Detalhes das integrações do projeto
│   │   └── ci_cd.md           # Configurações do CI/CD
│   └── ...                    # Outras seções da documentação
│
├── src/                       # Código fonte do projeto, incluindo scripts de automação
│
├── tests/                     # Testes automatizados para validar as funcionalidades
│
├── .gitignore                 # Lista de arquivos e diretórios a serem ignorados pelo Git
│
├── README.md                  # Descrição geral do projeto, instruções de setup e uso
│
├── LICENSE                    # O arquivo de licença do projeto, especificando os termos de uso
│
└── requirements.txt           # Lista as dependências Python necessárias para o projeto
```

### Detalhamento da Estrutura

- **.github/**:
  - `workflows/`: Armazena os arquivos de workflow do GitHub Actions, que automatizam o processo de teste, build e deploy.
  - `ISSUE_TEMPLATE/`: Modelos de issues para padronizar a criação de novas issues pelos usuários.
- **docs/**:
  - `index.md`: A homepage da documentação web gerada pelo MkDocs.
  - `setup/`: Contém arquivos que detalham a instalação e configuração do projeto.
  - `baselines/`: Contém os documentos Markdown de cada baseline de segurança. Estes documentos serão a base da seção de baselines no site gerado pelo MkDocs.
  - `control/`: Contém um documento `index.md` que serve como a página de controle dos baselines. Este arquivo listará os nomes dos documentos, suas versões, datas de publicação e os hashes correspondentes.
  - `configuration/`: Uma seção dedicada às configurações do projeto, onde cada aspecto da configuração (linters, integrações, CI/CD) é detalhado em seu próprio arquivo Markdown.
- **src/**: Contém todo o código fonte do projeto, incluindo scripts de automação e outras ferramentas desenvolvidas.
- **tests/**: Diretório que contém os testes automatizados, importante para a verificação da qualidade e funcionamento do código.
- **.gitignore**: Define quais arquivos e diretórios devem ser ignorados pelo controle de versão, como arquivos de configuração locais e diretórios de dependências.
- **README.md**: O primeiro arquivo que os usuários verão ao visitar o repositório; contém uma visão geral do projeto, como instalar e começar a usá-lo, e como contribuir.
- **LICENSE**: Detalha os termos sob os quais o software é licenciado, esclarecendo o que outros desenvolvedores podem e não podem fazer com o seu código.
- **requirements.txt**: Especifica todas as bibliotecas Python externas que o projeto depende, permitindo fácil instalação em ambientes de desenvolvimento semelhantes.

## A FAZER

1. **Configuração Inicial do Projeto:**
   - [ ] Configurar o repositório no GitHub e definir as branch policies para bloquear commits diretos na main, exigindo PRs.
   - [ ] Adicionar o Commitlint para garantir que os commits sigam o padrão SemVer.

2. **Integração e Automação:**
   - [ ] Integrar o Dependabot para validação de componentes vulneráveis e abertura automática de PRs para correção.
   - [ ] Definir regras no Danger para revisão automática das PRs.
   - [ ] Criar um passo de validação no GitHub Actions que gere um hash para cada documento.

3. **Configuração de MkDocs e GitHub Pages:**
   - [ ] Configurar MkDocs Material para publicação das páginas no GitHub Pages.
   - [ ] Adicionar o linter de Markdown para garantir a qualidade da documentação.
   - [ ] Aprimorar o MkDocs para permitir pesquisa de documentos por nome, parte do nome, categorias e tags.

4. **Documentação e Versionamento:**
   - [ ] Criar e publicar a documentação inicial usando MkDocs no GitHub Pages.
   - [ ] Configurar uma página no MkDocs para registrar o hash e as informações de versão de cada documento, incluindo data de publicação e hash correspondente.
   - [ ] Garantir que a tabela de versões dos documentos seja atualizada automaticamente a cada alteração.
