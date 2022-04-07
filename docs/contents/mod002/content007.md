# Ciclo de vida de component

![img](/docs/assets/img/ciclo_vida_component_001.png)

***ngOnInit*** é um dos métodos que mais se usa

***onChange*** utilizado para quando trabalhamos com inputs properties

***ngOnDestroy*** utilizamos muito para destruir inscrição de observable

Quando utilizamos inputs é ideal que usemos o ng onChange

Quando destruirmos algo podemos liberar os espaços da memoria utilizando
o ngOnDestroy , no método realizamos as operações para finalizarmos as tarefas
que não estamos mais usando 