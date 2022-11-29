var vm = new Vue({
    el: '#app',
    data: {
        alunos: '',
        mensagem:'sem mensagem no momento....'
    },
    methods:
    {
        // essa função é disparada quando um dos botões for pressionado
        // o this usando na chamada permite que o botao pressionado seja identificado

        chama: function(e){
                let id=e.innerHTML
                console.log('Botao '+id+'  pressionado')
                this.mensagem=' a mensagem aqui se refere ao botao '+id;
                axios.get('http://localhost:3000/infoAluno?id='+id)
            .then(function(response) {
               
            })
            .catch(function(error) {
                console.log(error);
            });

            }
    },

    created: function() {
        // O created eh invocado quando o objeto vue for criado
        // neste exemplo, a primeira coisa a realizar eh fazer uma requisição ao servidor para
        // recuperar a lista de alunos e colocar dentro de uma variavel do vue que será
        // utilizada para criar varios botoes dinamicamente

        axios.get('http://localhost:3000/listaAlunos')
            .then(function(response) {
                // lista de alunos recebida
                console.log(response.data)
                vm.alunos = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
});