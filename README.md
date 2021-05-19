## Magento Modulo de Auto Completar CEP - BR

- Simples solução para auto-completar campos ao preencher o CEP no campo de endereço.
- Funcionando no **Checkout**, **Carrinho** e **Perfil** (area de alterar endereço).
- Usando a [Brasil API](https://github.com/BrasilAPI/BrasilAPI "Brasil API"), podendo ser facilmente substituida por uma de sua escolha.
- Testado e criado usando Magento 2.3.6
## Video
[![](https://i.imgur.com/1xQXqvW.gif)](https://i.imgur.com/1xQXqvW.gif)
### Instalação (Apenas manual)
- Faça o [download](https://github.com/LimaJonas/magento-autocomplete-cep-br/releases "download") do modulo.
- Em [Magento_Root]/App/Code, crie as pastas Jonaslima/Autocomplete.
- Extraia arquivos dentro da pasta Autocomplete.
- Execute os comandos:

```
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy pt_BR -f
php bin/magento cache:flush
```
- Pronto, instalado. Basta ir no checkout, preencher o CEP e testar!
## Alterar API
- Para alterar a API usada, é necessário alterar os 3 arquivos que fazem a alteração dos campos (**cartAddress.js**, **checkoutAddress.js** e **customerAddress.js**), todas estão na pasta [Modulo_Root]/view/frontend/web/js/. 
- Altere o link da api na linha 10 de todos os arquivos citados.
- **Lembre-se** de alterar como as variaveis estão obtendo os dados, substituindo pelo vetor gerado com a API. Segue o exemplo

```javascript
var cep = document.getElementsByName("postcode")[0].value;

// API usada, substituir link
$.getJSON("https://brasilapi.com.br/api/cep/v1/"+ cep, function(data) {
// Substiruir variaveis conforme a API customizada indique
var rua = data.street; 
var bairro = data.neighborhood; 
var cidade = data.city; 
var uf = data.state;
 
```
