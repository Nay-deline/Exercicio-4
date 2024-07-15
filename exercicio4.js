<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        img{
            width: 300px;
            height: auto;
        }
    </style>
</head>
<body>
    
    <h2 id="nomeCat"></h2>
    <img  id="imgCat" src="" alt="">

    <button id="carregar">carregar mais imagens</button>

    <script>
        let caixa = document.getElementById("informacoes");

    //Variável declarada fora do escopo da função para poder ser acessado pelo console.log()
        let data;

        let num = Math.floor(Math.random() * 20)

        let url = "https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=true&order=RANDOM&api_key=live_ke8qOyFByqYf8RoSQu4hH8CaDfLZQuzyjaJ6MMzhPPl1fKp6HcCKPNEoLaspqQdC";
        data = async () => (await fetch(url)).json();

        btt = document.getElementById("carregar");
        

        btt.onclick = () => {
            data().then((res) =>{
                let img = document.getElementById("imgCat").src= res[0].url;
                let nome = document.getElementById("nomeCat").innerHTML = res[0].breeds[0].name;

                console.log(res);
                console.log(num);

        }).catch((err) =>{
            alert(err);
        })

        }
    </script>
</body>
</html>