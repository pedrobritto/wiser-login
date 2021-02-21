# Wiser Login

## Executando a aplicação localmente

No diretório raíz da aplicação:

1. No terminal, execute `yarn` para instalar todas as dependências necessárias;
2. Em seguida, para executar a aplicação localmente, digite `yarn dev` em seu terminal para rodar uma build de desenvolvimento.
3. Caso queira rodar a build de produção localmente, execute `yarn build` seguido por `yarn start`.

## Como funciona a validação do formulário

A validação do formulário é feita à partir do `endpoint` `api/auth`.

Caso as credenciais não estejam no formato correto, mensagens de erro serão exibidos abaixo de cada campo do formulário com informações sobre o problema e os dados não serão enviados ao endpoint de validação.

Caso as credenciais estejam corretas, os dados serão enviados ao endpoint de validação.

### Simulando uma resposta de erro

Para simular uma resposta de credenciais inválidas, utilize qualquer e-mail que contenha `erro@` no campo e-mail, como `erro@exemplo.com` e qualquer senha com pelo menos 8 caracteres.

Exemplo de resposta de erro:

```json
{
  "success": false,
  "error_code": "INVALID_CREDENTIALS"
}
```

### Simulando uma resposta bem sucedida

Qualquer e-mail que não contenha `erro@` no campo e-mail retornará uma resposta bem sucedida.

Exemplo de resposta bem sucedida:

```json
{
  "success": true,
  "token": "EXAMPLE_TOKEN"
}
```
