# Wiser Login

> Link da aplicação rodando em produção: http://wiser-login-woad.vercel.app/

## Executando a aplicação localmente

No diretório raíz da aplicação:

1. No terminal, execute `yarn` para instalar todas as dependências necessárias;
2. Em seguida, para executar a aplicação localmente, digite `yarn dev` em seu terminal para rodar uma build de desenvolvimento.
3. Caso queira rodar a build de produção localmente, execute `yarn build` seguido por `yarn start`.

## Como funciona a aplicação

A aplicação é bem simples. Ao preencher os campos do formulário e clicar em `ENTRAR`, uma requisição é enviada para um endpoint de autenticação, retornando erro ou sucesso, dependendo dos valores do formulário (ver mais abaixo).

O status de autenticação é armazenado no estado global da aplicação (Redux), com uso de Async Thunks, que controla a exibição de uma pequena notificação de sucesso ou erro no canto inferior esquerdo da tela.

## Como funciona a validação do formulário

A primeira validação é feita no front end. Caso as credenciais não estejam no formato correto, mensagens de erro serão exibidos abaixo de cada campo do formulário com informações sobre o problema e os dados não serão enviados ao endpoint de validação.

Alguns erros de validação são: Campo obrigatório não preenchido, e-mail com formato inválido, senha com menos de 8 caracteres.

Caso a validação no front end esteja correta, os dados serão enviados ao endpoint de validação `api/auth`, que retornará uma resposta de erro ou de sucesso dependendo do valor do campo e-mail.

### Simulando uma resposta de erro

Para simular uma resposta de credenciais inválidas, utilize qualquer e-mail que contenha `erro@` no campo e-mail, como `erro@exemplo.com` e qualquer valor com pelo menos 8 caracteres no campo senha .

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
