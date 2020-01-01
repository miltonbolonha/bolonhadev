---
title: O que é state machine (máquina de estados) ?
description: >-
  É um padrão de desenvolvimento web onde você constrói uma márquina e todas os
  seus dispositivos, a partir dos estados que gerenciam à máquina.
date: '2020-01-01'
image: /assets/images/state-machine-image.jpg
category: dev-stuffs
---
O som dos carros quando estão no **modo rádio** fazem com que o botão next funcione para ir para a próxima estação. Já quando está no **modo cd ou usb** o next funciona como trocar de música.

O botão next no caso é o dispositivo que possui diversas funções e essas funções são acessadas de acordo com o estado **modo** em que se encontra o som automotivo.

> É como se fosse uma ' **programação orientada à estados'**. Como se fosse, viu...

A partir do '_very first initial begin_' state do seu sistema, você desenvolverá todos os estados e fluxos entre eles, por exemplo, se você terá um botão de enviar, o estado inicial do botão será inativo, se você clicar no botão o fluxo do estado pode ser tanto enviar a informação, quanto dar erro.

Algo interessante é que os estados respeitam o fluxo que você desenvolveu, ou seja, você nunca conseguirá ativar determinado estado, se você não trilhar o caminho que você planejou. Isso torna o impossível, impossível !

Seus estados somente transitarão de um para o outro da forma com que você desenhou. Veja esse esquema no [XState Visualizer](https://xstate.js.org/viz/).

O XState é atualmente o mais conhecido auxílio para desenvolvimento de state machines. Até mesmo o pessoal da **Microsoft** usa state machine no **Visual Studio Code**. Pois é... estamos deixando passar algo.

Você gostou do artigo? Compartilhe nas suas redes sociais. Hey dev... tks.
