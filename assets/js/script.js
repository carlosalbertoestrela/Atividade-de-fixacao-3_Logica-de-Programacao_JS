//                              Funções
// Atividade 1:
function calcula_media(nota1=0,nota2=0){
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    let status;
    if(!nota1 || !nota2){
        return alert("A nota deve ser um número REAL");
    }
    else{
        media = (nota1+nota2)/2;
        if(media > 10 || media < 0){
            return alert("Média maxima = 10 \nMédia minima = 0 \n notas digitadas não retornaram uma média válida");
        }
        else{
            if(media == 10){
                status = "Aprovado com Distinção!";
            }
            else if(media >= 7){
                status = "Aprovado";
            }
            else{
                status = "Reprovado";
            }
        }
    }
    return `${status} com média ${media.toFixed()}`;

}

// Atividade 2:

function calculo_de_reajuste_salarial(salario){
    salario = parseFloat(salario);
    if(!salario || salario < 0){
        return alert("Salario deve ser um valor Real maior que 0! ")
    }
    else{
        let valor_reajuste;
        let percentual_reajuste;
        let novo_salario;
        if(salario < 280){
            percentual_reajuste = "20%";
            valor_reajuste = salario * .2;
        }
        else if (salario < 700){
            percentual_reajuste = "15%";
            valor_reajuste = salario * .15;
        }
        else if (salario < 1500){
            percentual_reajuste = "10%";
            valor_reajuste = salario * .1;
        }
        else{
            percentual_reajuste = "5%";
            valor_reajuste = salario * .05;
        }
        novo_salario = salario + valor_reajuste;

        return [salario, percentual_reajuste, valor_reajuste, novo_salario];
    }
    
    
}

// Atividade 3:

function calcula_salario_bruto(valor_hora, horas_mes){
    valor_hora = parseFloat(valor_hora);
    horas_mes = parseInt(horas_mes);
    if(!valor_hora || !horas_mes){
        return alert("Valores inválidos digitados")
    }
    else{
        return valor_hora * horas_mes;
    }

}

function folha_de_pagamento(salario_bruto){
    salario_bruto = parseFloat(salario_bruto);
    if(!salario_bruto){
       return alert("Salrio deve ser um número Real maior que 0!")
    }
    else{
        
        let fgts = salario_bruto * .11;
        let sindicato = salario_bruto * .03;
        let porcentagem_ir = (salario_bruto) => {
            if(salario_bruto > 2500){
                return .2;
            }
            else if(salario_bruto > 1500){
                return .1;
            }
            else if(salario_bruto > 900){
                return .05;
            }
            else{
                return 0;
            } 
        }
    
        let ir = salario_bruto  * porcentagem_ir(salario_bruto);
        let total_descontos = ir + sindicato + ir;
        let salario_liquido = salario_bruto - (total_descontos)

        return {
            "Salario Bruto": salario_bruto,
            "Imposto de Renda": ir,
            "FGTS": fgts,
            "Sindicato": sindicato,
            "SalarioLiquido": salario_liquido,
            "Porcentagem imposto de renda": (porcentagem_ir(salario_bruto)*100 + "%")
        }
    }
    

}

// Interação com o DOM

// at1
function q1(){
    let at1 = document.querySelector(".at1_answer");
    let nota1 = parseFloat(document.querySelector("#nota1").value);
    let nota2 = parseFloat(document.querySelector("#nota2").value);

    at1.innerHTML = `<hr><strong>${calcula_media(nota1,nota2)}</strong><hr>`;
}
// at2
function q2(){
    let at2 = document.querySelector(".at2_answer");
    let salario =parseFloat(document.querySelector(".salario").value) ;
    let info = calculo_de_reajuste_salarial(salario);
    at2.innerHTML = 
    `<hr> <strong>
    Antigo salário: R$${info[0]} <br>
    Percential do aumento: ${info[1]} <br>
    Valor do aumento: R$${info[2].toFixed(2)} <br>
    Novo salário: R$${info[3].toFixed(2)} <br>
    </strong> <hr>`
    ;
}
// at3
function q3(){
    let at3 = document.querySelector(".at3_answer");
    let hora_trabalhada = parseInt(document.querySelector(".hora_trabalhada").value);
    let valor_hora = parseFloat(document.querySelector(".valor_hora").value);
    

    salario_bruto = calcula_salario_bruto(valor_hora,hora_trabalhada);
    folha = folha_de_pagamento(salario_bruto)    

    at3.innerHTML = `
        ${folha["Salario Bruto"]}
        
        
    `

}

 