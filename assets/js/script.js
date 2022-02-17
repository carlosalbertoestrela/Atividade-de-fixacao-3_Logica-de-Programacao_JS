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
            novo_salario = salario + valor_reajuste;
        }

    }
    return [salario, percentual_reajuste, valor_reajuste, novo_salario];
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
        let porcentagem_imposto_renda = (salario_bruto) => {
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
    
        let imposto_renda = salario_bruto  * porcentagem_imposto_renda(salario_bruto);
        let total_descontos = imposto_renda + sindicato + imposto_renda;
        let salario_liquido = salario_bruto - (total_descontos)

        return {
            "salario Bruto": salario_bruto,
            "imposto de Renda": imposto_renda,
            "FGTS": fgts,
            "Sindicato": sindicato,
            "salarioLiquido": salario_liquido,
            "Porcentagem imposto de renda": (porcentagem_imposto_renda(salario_bruto)*100 + "%")
        }
    }
    

}

console.log(folha_de_pagamento(3000))