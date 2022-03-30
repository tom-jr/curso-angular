# Introdução

## Tópicos do curso

- Introdução
- Components e Templates
- Data-biding
- Diretivas 
- Serviços
- Formulários
- Roteamento
- Integração com servidor
- CRUD Mestre-Detalhe

## Requisitos

- HTML/CSS
- Javascript

## Angular 2
 Parceria da Google + Microsoft 
feito para ser usado com typeScript(SuperSet do Javascript)
Open source

## Blocos Principais

### Componente

Seria view, o que o usuário ira ver.

![img](/docs/assets/img/intrp_001.png)

**Template:** código HTML que será renderizado para o usuário
**Metadata:** Permite o Angular ler as class e fazer o processamento
**Data_Binding:**  Dados a serem mostrados na tela. Componente consegue conversar com o template.
**Comportamento_da_view:**  junção de tres itens: ***template***, ***controller*** e ***escopo***


### Component

Aplicações em Angular são feitas orientadas a componentes. Tudo na aplicação
ira ser um componente

![img](/docs/assets/img/intrp_002.png)

Temos um componente Pai(***root***)
Cada componente pode ter um componente.

## Serviços

Os componentes podem faz integração com servidor.
Utilizamos ***Serviços*** para não escrever toda a logica em nossos
componentes.

**Serviços** podem ser injetados em outros componentes

![img](/docs/assets/img/intrp_003.png)

## Router
No Angular também se trabalha com o conceito de **SPA**(Single, Page, Application)
Para o gerenciamento das mesmas, utilizaremos as **Rotas**(Router)

## Diretivas

Diretivas são responsáveis por modificar elementos DOM e/ou seu comportamento.

![img](/docs/assets/img/intrp_004.png)
