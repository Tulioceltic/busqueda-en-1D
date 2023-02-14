let acompaf=[];
let gradof=[];
let acompad=[];
let gradod=[];

function inicio (){
    let grado=prompt("Ingrese el grado de la ecuacion");

    for (i=0;i<=grado;i++){
        acompaf.push(parseFloat(prompt("Ingrese el cociente de: X^"+i+" Si es decimal use (.)")));
        gradof.push(i);
    }

    for (i=1;i<=grado;i++){
        acompad.push(acompaf[i]*i);
        gradod.push(i-1);
    }
    let funcionEvaluar=funcion(acompaf);
    let funcionDerivada=funcion(acompad);

    document.getElementById("funcion").innerHTML = funcionEvaluar;
    document.getElementById("derivada").innerHTML = funcionDerivada;
    
}

function funcion (a){
    let ecuacion="Y=";
    for (i in a){
        if (a[i]==0){
            continue;
        }
        if (i==0){
            if (a[i]<0){
                ecuacion=ecuacion+a[i].toString();
            } else {
                ecuacion=ecuacion+"+"+a[i].toString();
            }
        } else {
            if (a[i]<0){
                ecuacion=ecuacion+a[i].toString()+"X^"+i.toString();
            } else {
                ecuacion=ecuacion+"+"+a[i].toString()+"X^"+i.toString();
            }
        }
    }
    return ecuacion;
}

function evaluar(ecuacion,punto) {
    let cont=0;
    let valor=0;
    for (i of ecuacion){
        let exp=punto**cont;
        let multi=exp*i;
        cont=cont+1;
        valor=valor+multi;
    }
    return valor;
}

function prom(a,b){
    let valor = parseFloat(a)+parseFloat(b);
    valor=valor/2;
    return valor;
}

function minimizar(){
    let cotaI = prompt("Digite la cota inferior (si es decimal use .)");
    let cotaS = prompt("Digite la cota superior (si es decimal use .)");
    let listaCotaI =[];
    let listaCotaS =[];
    let punto;
    let listaPuntos=[];
    let valor;
    let listaValores=[];
    while (cotaS-cotaI>=0.02){
        listaCotaI.push(cotaI);
        listaCotaS.push(cotaS);
        punto=prom(cotaI,cotaS);
        valor=evaluar(acompad,punto);
        listaValores.push(valor);
        listaPuntos.push(punto);
        if (valor<=0){
            cotaI=punto;
        } else {
            cotaS=punto;
        }
    }
    listaCotaI.unshift("Cota Inferior");
    listaCotaS.unshift("Cota Superior");
    listaPuntos.unshift("Punto a evaluar");
    listaValores.unshift("Resultado f'(x)");
    listaCotaI=listaCotaI.join("<br>");
    listaCotaS=listaCotaS.join("<br>");
    listaPuntos=listaPuntos.join("<br>");
    listaValores=listaValores.join("<br>");
    document.getElementById("here").innerHTML = "<h3>Minimizando</h3>";
    document.getElementById("cotaI").innerHTML = listaCotaI;
    document.getElementById("cotaS").innerHTML = listaCotaS;
    document.getElementById("puntos").innerHTML = listaPuntos;
    document.getElementById("valores").innerHTML = listaValores;
}

function maximizar(){
    let cotaI = prompt("Digite la cota inferior (si es decimal use .)");
    let cotaS = prompt("Digite la cota superior (si es decimal use .)");
    let listaCotaI =[];
    let listaCotaS =[];
    let punto;
    let listaPuntos=[];
    let valor;
    let listaValores=[];
    while (cotaS-cotaI>=0.02){
        listaCotaI.push(cotaI);
        listaCotaS.push(cotaS);
        punto=prom(cotaI,cotaS);
        valor=evaluar(acompad,punto);
        listaValores.push(valor);
        listaPuntos.push(punto);
        if (valor<=0){
            cotaS=punto;
        } else {
            cotaI=punto;
        }
    }
    listaCotaI.unshift("Cota Inferior");
    listaCotaS.unshift("Cota Superior");
    listaPuntos.unshift("Punto a evaluar");
    listaValores.unshift("Resultado f'(x)");
    listaCotaI=listaCotaI.join("<br>");
    listaCotaS=listaCotaS.join("<br>");
    listaPuntos=listaPuntos.join("<br>");
    listaValores=listaValores.join("<br>");
    document.getElementById("here").innerHTML = "<h3>Maximizando</h3>";
    document.getElementById("cotaI").innerHTML = listaCotaI;
    document.getElementById("cotaS").innerHTML = listaCotaS;
    document.getElementById("puntos").innerHTML = listaPuntos;
    document.getElementById("valores").innerHTML = listaValores;
}
