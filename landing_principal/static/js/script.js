const selector = selector => document.querySelector(selector);

fetch(`https://api.waqi.info/feed/here/?token=1211c97c41147ca1e1f5ccad441024e83acbfd8e`)
.then(data => data.json())
.then(intel => {
    data = intel.data;
    // console.log(data);
    // No momento esta informação não foi disponibilizada pela a estação de consulta.
    if(data.aqi) indicePoluentes = data.aqi; else indicePoluentes = '-'
    // idx = data.idx;
    // city = data.city.name;
    if(data.attributions[0].name) estacao = data.attributions[0].name; else estacao = '-'
    if(data.time.s) consultado = data.time.s; else consultado = '-'
    if(data.iaqi.co) co = data.iaqi.co.v; else co = '0'
    if(data.iaqi.h) h = data.iaqi.h.v; else h = '-'
    if(data.iaqi.no2) no2 = data.iaqi.no2.v; else no2 = '0'
    if(data.iaqi.o3) o3 = data.iaqi.o3.v; else o3 = '-'
    if(data.iaqi.p) p = data.iaqi.p.v; else p = '0'
    if(data.iaqi.pm10) pm10 = data.iaqi.pm10.v; else pm10 = '0'
    if(data.iaqi.pm25) pm25 = data.iaqi.pm25.v; else pm25 = '0'
    if(data.iaqi.so2) so2 = data.iaqi.so2.v; else so2 = '0'
    // t = data.iaqi.t.v;
    if(data.iaqi.w) w = data.iaqi.w.v; else w = '-'
    // wg = data.iaqi.wg.v;
    // console.log(data);
    
    
    if(estacao) selector('#estacao').append(estacao);
    // selector('#temp').append();
    if(indicePoluentes) selector('#indice').append(indicePoluentes);
    // selector('#status').append();
    if(consultado) selector('#consultado').append(consultado);
    if(co) selector('#COprogress').value = co;
    if(h) selector('#h').append(h);
    if(no2) selector('#NO2progress').value = no2;
    if(o3) selector('#o3').append(o3);
    if(p) selector('#Pprogress').value = p;
    if(pm25) selector('#pm25').append(pm25);
    if(pm10) selector('#pm10').append(pm10);
    if(so2) selector('#SO2progress').value = so2;
    // selector('#t').append(t);
    if(w) selector('#w').append(w);
    // selector('#wg').append(wg);

    if (indicePoluentes <= 50) {
        selector('#indiceText').append(' - Consideravel Bom');
        selector('#indice').classList.toggle('indice-verde')
    }

    else if (indicePoluentes <= 100) {
        selector('#indiceText').append(' - Consideravel Moderado');
        selector('#indice').classList.toggle('indice-amarelo')
    }

    else if (indicePoluentes <= 150) {
        selector('#indiceText').append(' - Consideravel Agressivo a Pessoas Sensiveis');
        selector('#indice').classList.toggle('indice-laranja')
    }

    else if (indicePoluentes <= 200) {
        selector('#indiceText').append(' - Consideravel Insalubre');
        selector('#indice').classList.toggle('indice-vermelho')
    }

    else if (indicePoluentes <= 300) {
        selector('#indice').append(' - Considerado Muito Insalubre');
        selector('#indice').classList.toggle('indice-roxo')
    }

    else {
        selector('#indiceText').append(' - Consideravel Perigoso');
        selector('#indice').classList.toggle('indice-marrom')
    }

    // console.log(data);

});
    
fetch(`https://api.hgbrasil.com/weather?key=42e7332c&city_name=Sao%20Paulo,SP&format=json-cors`)
.then(data2 => data2.json())
.then(intel => {
    // const selector = selector => document.querySelector(selector);
    data2 = intel.results;
    temp = data2.temp;
    dataConsulta = data2.date;
    horaConsulta = data2.time;
    weatherCondicao = ['Tempestade Forte', 'Tempestade Tropical', 'Furacão', 'Tempestades Severas', 'Tempestades', 'Misto de Neve e Chuva', 'Misto de Chuva e Gelo', 'Misto de Neve e Gelo', 'Geada Fina', 'Chuviscos', 'Congelamento e Chuva', 'Alguns Chuviscos', 'Alguns Chuviscos', 'Neve Baixa', 'Tempestade com Neve', 'Ventania com Neve', 'Neve', 'Granizo', 'Gelo', 'Poeira', 'Neblina', 'Tempestade de Areia', 'Fumacento', 'Vento Acentuado', 'Ventania', 'Tempo Frio', 'Tempo Nublado', 'Tempo Limpo', 'Tempo Nublado', 'Parcialmente Nublado', 'Parcialmente Nublado', 'Tempo Limpo', 'Ensolarado', 'Estrelado', 'Ensolarado com Muitas Nuvens', 'Misto de Chuva e Granizo', 'Ar Quente', 'Tempestades Isoladas', 'Trovoadas Dispersas', 'Trovoadas Dispersas', 'Chuvas Esparsas', 'Pesados de Neve', 'Chuviscos com Neve', 'Neve Pesada', 'Sol com Poucas Nuvens', 'Chuva', 'Queda de Neve', 'Tempestades Isoladas', 'Serviço não Disponivel'];
    nrCondicao = data2.condition_code;
    condicaoAtual = weatherCondicao[parseInt(nrCondicao)];
    diaNoite = data2.currently;
    cidade = data2.city;
    humidade = data2.humidity;
    velocidadeVento = data2.wind_speedy;
    amanhecer = data2.sunrise;
    anoitecer = data2.sunset;
    conditionSlug = data2.condition_slug;
    nomeCidade = data2.city_name;

    // console.log(data2);
    // console.log(condicaoAtual);
    selector('#temp').append(temp);
    // selector('#data-consulta').append(dataConsulta);
    // selector('#hora-consulta').append(horaConsulta);
    selector('#condicaoAtual').append(condicaoAtual);
    // selector('#dia-noite').append(diaNoite);
    // selector('#city').append(cidade);
    selector('#humidade').append(humidade);
    selector('#velocidadeVento').append(velocidadeVento);
    // selector('#amanhecer').append(amanhecer);
    // selector('#anoitecer').append(anoitecer);
    // selector('#condition-slug').append(conditionSlug);
    selector('#city').append(nomeCidade);
});