## Configurar a Proteção de Branch

1. Vá ao seu repositório no GitHub.
2. Clique em "Settings" na barra de navegação superior.
3. No menu lateral, clique em "Branches" sob a seção "Code and automation".
4. Em "Branch protection rules", clique em "Add branch protecction rule".
5. No campo "Branch name pattern", digite main para aplicar a regra à branch principal.
6. Marque as opções "Require  pull request before merging" e "Require approvals" que será exibida assim que você marcar a primeira. Isso exigirá revisões de PR antes de permitir a fusão na branch main.
    - Você pode configurar opções adicionais aqui, como o número de revisores necessários, entre outros.
7. Marque a opção "Do not allow bypassing the above settings" para aplicar essas regras também aos administradores do repositório.
8. Clique em "Create" para salvar as regras.
