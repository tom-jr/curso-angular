# Forms

No template drive, criamos uma variável local no Form que 
desejamos controlar com o Angular. 

~~~ html

~~~

E a variável que criarmos devemos associa-la ao ngForm. Dessa forma o 
Angular vai poder passar a gerenciar o Form. o ng Form é do modulo de **FormModule**

~~~ html

~~~

O angula tem um diretiva chamada ***(ngSubmit)***. U eventBind que roda um método
apos o click de submit do Form. No método que sera executado no ngSubmit nos adicionamos
como parâmetro a variável de referencia ao Form que criamos

~~~ html

~~~


Nos adicionaremos nos campos de input um name e a diretiva ng Model para que possamos manipular os 
valores dos inputs. Dessa forma o objeto do Form passara a carregar os valores dos inputs

~~~ html

~~~





