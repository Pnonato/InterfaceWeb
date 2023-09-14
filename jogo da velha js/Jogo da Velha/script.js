var jogo = []; // armazenar os dados sobre o jogo
var tabuleiro = []; // tabuleiro oq a gnt ve
var quemJoga = 0; // 0 = jogador ; 1 = CPU
var verifica;
var jogando = true;
var nivel = 1;
var jogadaCpu = 1;
var qmComeca = 1;


function Jogar(p){
    if ((jogando) && (quemJoga == 0)) {
        switch (p) {
            case 1:
                if (jogo[0][0] == ""){
                    jogo[0][0] = "X";
                    quemJoga = 1;
                }
            break;

            case 2:
                if (jogo[0][1] == ""){
                    jogo[0][1] = "X";
                    quemJoga = 1;
                }
            break;

            case 3:
                if (jogo[0][2] == ""){
                    jogo[0][2] = "X";
                    quemJoga = 1;
                }
            break;

            case 4:
                if (jogo[1][0] == ""){
                    jogo[1][0] = "X";
                    quemJoga = 1;
                }
            break;

            case 5:
                if (jogo[1][1] == ""){
                    jogo[1][1] = "X";
                    quemJoga = 1;
                }
            break;

            case 6:
                if (jogo[1][2] == ""){
                    jogo[1][2] = "X";
                    quemJoga = 1;
                }
            break;

            case 7:
                if (jogo[2][0] == ""){
                    jogo[2][0] = "X";
                    quemJoga = 1;
                }
            break;

            case 8:
                if (jogo[2][1] == ""){
                    jogo[2][1] = "X";
                    quemJoga = 1;
                }
            break;

            case 9: // default
                if (jogo[2][2] == ""){
                    jogo[2][2] = "X";
                    quemJoga = 1;
                }
            break;
        
            default:
                break;
        }
        if(quemJoga == 1){
            AtualizaTabuleiro();
            verifica = VerificaVitoria();
            if(verifica != ""){
                alert( verifica+ "Venceu");
                jogando = false;
            }
            CpuJoga();
        }
       
    }
}

function Inicia(){
    jogando = true;
    jogadaCpu = 1;
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    tabuleiro = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];

    AtualizaTabuleiro();

    if(qmComeca==1){
        qmComeca = 0;
        quemJoga = qmComeca;
        document.getElementById("qmcomeca").innerHTML="Quem Começa: Jogador";
    } else {
        qmComeca = 1;
        quemJoga = qmComeca;
        document.getElementById("qmcomeca").innerHTML="Quem Começa: CPU";
        CpuJoga();
    }

}

function AtualizaTabuleiro(){
    for(let linha = 0; linha < 3; linha++){
        for(let coluna = 0; coluna < 3; coluna++){
            if(jogo[linha][coluna] == "X"){
                
                tabuleiro[linha][coluna].innerHTML = "X";   
                tabuleiro[linha][coluna].style.cursor = "default";

            } else if(jogo[linha][coluna] == "O"){
                
                tabuleiro[linha][coluna].innerHTML = "O";  
                tabuleiro[linha][coluna].style.cursor = "default";  

        } else {
            tabuleiro[linha][coluna].innerHTML = "";  
            tabuleiro[linha][coluna].style.cursor = "pointer";
       }
     } 
  }
}

function CpuJoga(){
    if(jogando){
        var l, c;
        if(nivel == 1){
            do{
                l = Math.round(Math.random()*2);
                c = Math.round(Math.random()*2);
            } while(jogo[l][c] != "");
            jogo[l][c] = "O";
        } else if (nivel == 2){
            // NIVEL 2
        }
            verifica = VerificaVitoria();
            if(verifica != ""){
                alert(verifica+"Venceu");
                jogando = false;
            }
        AtualizaTabuleiro();
        quemJoga = 0;
    }
}

function VerificaVitoria(){
        var l, c;
        
        //LINHAS
        for(l = 0; l < 3; l++){
            if((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])){
                
                return jogo[l][0];
            }
        }

        //COLUNAS   
        for(c = 0; c < 3; c++){
            if((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])){
                
                return jogo[0][c];
            }
        }
        
        //DIAGONAIS
        if((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])){
                
            return jogo[0][0];
        }

        //SEGUNDA DIAGONAL
         if((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])){
                
            return jogo[0][2];
        }

        return "";
}
window.addEventListener("load", Inicia);
