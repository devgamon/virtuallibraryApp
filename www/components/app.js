    var form = document.getElementById("entrar");
    var login = document.getElementById("login");
    var senha = document.getElementById("senha");

     form.addEventListener("click", function(){
        var formData = new FormData();
        formData.append('login', `${login.value}`);
        formData.append('senha', `${senha.value}`);

        fetch('https://profrodolfo.com.br/biblioteca/usuario.php',
            {
                body: formData,
                method: "post",
                mode: 'cors',
                cache: 'default'
            })  .then(response => {response.json()
            .then(data => {
                console.log(data);
              if(data.erro){
                    alert("UsuÃ¡rio e/ou senha invÃ¡lidos");
                }else{
                  alert(data.dados.nome);
                  location.href = "acervo.html";
                }
            })
          });
      });  