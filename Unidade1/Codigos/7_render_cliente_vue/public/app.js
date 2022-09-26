var vm = new Vue({
    el: '#app',
    data: {
        alunos: '',
    },
    created: function() {
        axios.get('http://localhost:3000/listaAlunos')
            .then(function(response) {
                console.log(response.data)
                vm.alunos = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
});