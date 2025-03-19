            function adicionarTarefa() {

            //recebe o valor do input do usuário
                  const variavelTarefa = document.getElementById("inputTarefa")
                  let tarefa = variavelTarefa.value.trim()

                  let mensagem = document.getElementById("mensagem")

            //se o valor for vazio então mostre uma mensagem de erro
            if (tarefa == ""){
                  let mensagemErro = "Digite uma tarefa para adiciona-la";
                  mensagem.textContent = mensagemErro;
            } else{
                  let mensagemSucesso = "Tarefa adicionada com sucesso!";
                  //pega o elemento por id mensagem e joga na variavel 
                  mensagem.textContent = mensagemSucesso;
                  
            

            //pega o elemento por id mensagem e joga na variavel 
                  document.getElementById("mensagem").textContent = mensagemSucesso;

            //cria a variavelLista, associa ao html pelo id listaTarefas
                  const variavelLista = document.getElementById("listaTarefas")

            //cria variavel novaTarefa e cria uma lista no html toda vez que adicionar uma nova tarefa
                  let novaTarefa = document.createElement("li")

            //adiciona a variavel a tarefa com intuito de dar valor(texto)
                  novaTarefa.textContent = tarefa

            //mostra que a cada lista criada, é criada uma nova tarefa
                  variavelLista.appendChild(novaTarefa)

            //da valor pra a variavelTarefa
                  variavelTarefa.value = ""

            
            }
            inputTarefa.value = ""
            }