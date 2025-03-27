# Desafio: Refatoração do Arquivo `server.js` Usando Arquitetura de Camadas

## Objetivo
Refatorar o arquivo `server.js` para implementar a arquitetura de camadas, separando as responsabilidades em pastas específicas: `controllers`, `services` e `repositories`.

## Instruções
1. **Crie as pastas necessárias**:
   - `controllers`: Para lidar com as requisições HTTP e respostas.
   - `services`: Para conter a lógica de negócios.
   - `repositories`: Para gerenciar a interação com os dados (banco de dados ou outras fontes).

2. **Refatore o código**:
   - Mova a lógica de negócios para a camada de `services`.
   - Mova a lógica de manipulação de dados para a camada de `repositories`.
   - Deixe o arquivo `server.js` responsável apenas por configurar o servidor e as rotas, delegando as responsabilidades às camadas apropriadas.

3. **Exemplo de Estrutura Final**:
   ```
   c:\projetos\aulas\aula-31\
   ├── controllers\
   │   └── exampleController.js
   ├── services\
   │   └── exampleService.js
   ├── repositories\
   │   └── exampleRepository.js
   ├── server.js
   ```

4. **Certifique-se de**:
   - Usar boas práticas de modularização.
   - Manter o código limpo e organizado.
   - Testar o servidor após a refatoração para garantir que tudo funcione corretamente.

## Dica
- Utilize `module.exports` e `require` (ou `import/export`, se estiver usando ES Modules) para organizar e conectar as camadas.
- Cada camada deve ter uma única responsabilidade.

Boa sorte e boa codificação!
