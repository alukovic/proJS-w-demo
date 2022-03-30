window.addEventListener('load', watermarkF());

//programWatermarkSadrzaj => proJS
//let programWatermarkSadrzaj = document.querySelector('.programWatermarkSadrzaj');
//programWatermarkSadrzaj.addEventListener('load', watermarkF());

function watermarkF(){

    let proJS = document.createElement('div');
    document.body.appendChild(proJS);

    proJS.style.width = '70%';
    proJS.style.margin = '0 auto 0 auto';

    //a.target.removeEventListener(a.type, arguments.callee);
    //proJS.textContent = 'Watermark tehnike | JavaScript'; 
    proJS.textContent = 'Watermark techniques | JavaScript'; 
    let opisA = document.createElement('p');

    /*
    let jezikSR = document.createElement('p');
    jezikSR.textContent = 'SR';
    proJS.appendChild(jezikSR);

    let jezikEN = document.createElement('p');
    jezikEN.textContent = 'EN';
    proJS.appendChild(jezikEN);
    */

    //opisA.textContent = 'Prikaz menija za dodavanje watermarka: ';
    opisA.textContent = 'Show watermark insertion menu: ';
    proJS.appendChild(opisA);

    //let meniA = document.createElement('class');
    let slikawA = document.createElement('img');
    let divSlikawA = document.createElement('div');
    proJS.appendChild(divSlikawA);

    divSlikawA.appendChild(slikawA);

    slikawA.src = 'ico/meniA.png';
    slikawA.style.padding = '0.5em';
    slikawA.style.border = '2px';
    slikawA.style.color = 'rgb(47, 38, 173)';
    slikawA.style.width = '2em';
    slikawA.style.borderRadius = '10px';
    slikawA.style.margin = '0 auto 0 auto';

    slikawA.addEventListener('mouseover', () => {
        slikawA.style.borderStyle = 'dotted';
    });

    slikawA.addEventListener('mouseout', () => {
        slikawA.style.borderStyle = 'dashed';
    });

    slikawAsl = new Image();

    function slikaAf(a){

        a.target.removeEventListener(a.type, arguments.callee);

        /*divA */
        let divA = document.createElement('div');
        proJS.appendChild(divA);

        let wA = document.createElement('p');
        //wA.textContent = 'Unesite originalnu sliku: ';
        wA.textContent = 'Insert the original image: ';
        divA.appendChild(wA);

        let ulazA = document.createElement('input');
        ulazA.type = 'file';
        divA.appendChild(ulazA);

        let whrA = document.createElement('hr');
        whrA.width = 300;
        divA.appendChild(whrA);

        let wKanvasA = document.createElement('canvas');
        divA.appendChild(wKanvasA);

        let ctxWkanvasA = wKanvasA.getContext('2d');
    
        ulazA.addEventListener('change', function(){
            
            if(this.files && this.files[0]){

                slikawAsl.src = URL.createObjectURL(this.files[0]);

                slikawAsl.addEventListener('load', function(){

                    if(slikawAsl.width >= 1920){

                        wKanvasA.width = slikawAsl.width;
                        wKanvasA.height = slikawAsl.height;

                    } else {

                        wKanvasA.width = slikawAsl.width;
                        wKanvasA.height = slikawAsl.height;

                    }

                    //ctxWkanvasA.clearRect(0, 0, wKanvasA.width, wKanvasA.height);
                    ctxWkanvasA.drawImage(slikawAsl, 0, 0, wKanvasA.width, wKanvasA.height);

                    //Novo
                    let wA3 = document.createElement('p');
                    //wA3.textContent = 'Vrednosti piksela ulazne slike: ';
                    wA3.textContent = 'Input image pixel values: ';
                    divA.appendChild(wA3);

                    //let
                    pikseliWA = document.createElement('textarea');
                    pikseliWA.style.border = '2px dotted rgb(47, 38, 173)';
                    pikseliWA.style.borderRadius = '10px';
                    divA.appendChild(pikseliWA);

                    let whrA6 = document.createElement('hr');
                    whrA.width = 300;
                    divA.appendChild(whrA6); 

                    let pikseliWApikseli = ctxWkanvasA.getImageData(0, 0, wKanvasA.width, wKanvasA.height);
                    //console.log(pikseliWApikseli.data);

                    //Globalni niz - bez let
                    pikseliWAniz = new Array();

                    for(let i = 0; i < pikseliWApikseli.data.length; i++){
                        pikseliWAniz.push(pikseliWApikseli.data[i]);
                    };

                    pikseliWA.value = pikseliWAniz; 

                    //a
                    let wA4 = document.createElement('p');
                    //Novo | 14.3.2022. : test 256
                    //wA4.textContent = 'Vrednosti prvih 64 piksela ulazne slike: ';
                    wA4.textContent = 'Values the first 64 pixels of the input image: ';
                    divA.appendChild(wA4);

                    //let
                    pikseliWA64 = document.createElement('textarea');
                    pikseliWA64.style.border = '2px dotted rgb(47, 38, 173)';
                    pikseliWA64.style.borderRadius = '10px';
                    divA.appendChild(pikseliWA64);

                    let whrA7 = document.createElement('hr');
                    whrA7.width = 300;
                    divA.appendChild(whrA7); 

                    let pikseliWApikseli64 = ctxWkanvasA.getImageData(0, 0, wKanvasA.width, wKanvasA.height);
                    
                    //Globalni niz - bez let
                    pikseliWAniz64 = new Array();

                    //Novi test: 1024 umesto 256 => PSNR(1024) = 42dB PSNR(256) = 56
                    //Novi test #2 128 PSNR(128) = 61.77 dB
                    //Novi test #3 64 PSNR(64) = 66.55 dB
                    
                    for(let i = 0; i < 64; i++){
                        pikseliWAniz64.push(pikseliWApikseli64.data[i]);
                    };

                    pikseliWA64.value = pikseliWAniz64; 
                    //console.log(pikseliWAniz64);

                    //////////
                    /////////
                    //Aca 2.4.4 24.3.2022. Čet. | Test #1

                    let whrA1 = document.createElement('hr');
                    whrA1.width = 300;
                    divA.appendChild(whrA1);
                    
                    let btnWnovaSlika = document.createElement('button');
                    divA.appendChild(btnWnovaSlika);
            
                    //btnWnovaSlika.textContent = 'Nova slika';
                    btnWnovaSlika.textContent = 'New image';
            
                    btnWnovaSlika.addEventListener('click', () => {
            
                        ulazA.value = '';
                        pikseliWA.value = '';
                        pikseliWA64.value = '';
                        ctxWkanvasA.clearRect(0, 0, wKanvasA.width, wKanvasA.height);
            
                        pkA.value = '';
            
                    });
            
                     /*divA */
                    /*divA1 */

                    //Generisanje pseudo-slučajnog koda:
                    let divA1 = document.createElement('div');
                    proJS.appendChild(divA1);
            
                    let wA1 = document.createElement('p');
                    //wA1.textContent = 'Generisanje pseudo-slučajnog koda: ';
                    wA1.textContent = 'Generate pseudo-random code: ';
                    divA1.appendChild(wA1);
            
                    let btnWpseudoKod = document.createElement('button');
                    //btnWpseudoKod.textContent = 'Pseudo-kod';
                    btnWpseudoKod.textContent = 'Pseudo-code';
                    btnWpseudoKod.style.width = '8em';
                    divA1.appendChild(btnWpseudoKod);
                    
                    let N = 64;

                    //Globalni niz - bez let
                    nizA = new Array();

                    btnWpseudoKod.addEventListener('click', () => {
            
                        const bitovi = (a, b) => {
                            return Math.floor((Math.random() * (b - a + 0.75))) + a;
                        }
            
                        for(let i = 0; i <N; i++){
                            nizA.push(bitovi(0, 1));
                        }
            
                        console.log(nizA);
            
                        //let
                        pkA = document.createElement('textarea');
                        pkA.style.border = '2px dotted rgb(47, 38, 173)';
                        pkA.style.borderRadius = '10px';
                        pkA.value = nizA;
                        divA1.appendChild(pkA);
            
                        let pkAt = document.createElement('p');
                        //pkAt.textContent = 'Broj elemenata pseudo-slučajne sekvence: ';
                        pkAt.textContent = 'Number of pseudo-random sequence elements: ';
                        divA1.appendChild(pkAt);
            
                        let pkAi = document.createElement('input');
                        pkAi.value = nizA.length;
                        divA1.appendChild(pkAi);
            
                        let whrA5 = document.createElement('hr');
                        whrA5.width = 300;
                        proJS.appendChild(whrA5);
            
                    });
            
                    /*divA1 */

                                
                    let divAa = document.createElement('div');
                    proJS.appendChild(divAa);
            
                    //BPSK modulacija 
                    let btnBit = document.createElement('button');
                    btnBit.textContent = 'BPSK';
                    divAa.appendChild(btnBit);
            
                    btnBit.addEventListener('click', function(){
            
                        console.log('Aca 2.4.4 | 14.3.2022. Pon. - BPSK početak');
                        console.log('Aca 2.4.4 | 24.3.2022. Čet. - BPSK nastavak');
                        //bit = [1, 0, 1, 0, 1];
                        console.log('Sekvenca ulaznih bita: ', nizA);
            
                        let canvasBit = document.createElement('canvas');
                        divAa.appendChild(canvasBit);
            
                        const ctxBit = canvasBit.getContext('2d');
                        const bitGraf = new Chart(ctxBit, {
                        type: 'bar',
                        data: {
                            labels: nizA,
                            datasets: [{
                                label: 'Pseudo-code value | Input signal',
                                data: nizA,
                                backgroundColor: [
                                   'rgba(47, 38, 173, 0.2)' 
                                //'rgba(255, 99, 132, 0.2)',
                                //'rgba(54, 162, 235, 0.2)',
                                //'rgba(255, 206, 86, 0.2)',
                                //'rgba(75, 192, 192, 0.2)',
                                //'rgba(153, 102, 255, 0.2)',
                                //'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    //'rgba(255, 99, 132, 1)',
                                    //'rgba(54, 162, 235, 1)',
                                    //'rgba(255, 206, 86, 1)',
                                    //'rgba(75, 192, 192, 1)',
                                    //'rgba(153, 102, 255, 1)',
                                    //'rgba(255, 159, 64, 1)'
                                    'black'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                beginAtZero: true
                                }
                            }
                        }
                        });
            
                    console.log('Sekvenca bez vraćanja na nulu - NRZ');
            
                        NRZsekvenca = new Array();
                        Vp = 1;
                        NRZsekvenca = nizA.map((a) => {
            
                            if(a >= 1){
                                return a * Vp;
                            } else if(a < 1){
                                return -Vp;
                            }
            
                        });
            
                        console.log('Nove vrednosti NRZ sekvence su: ', NRZsekvenca);
            
                        let canvasNRZ = document.createElement('canvas');
                        divAa.appendChild(canvasNRZ);
            
                        const ctxNRZ = canvasNRZ.getContext('2d');
                        const NRZGraf = new Chart(ctxNRZ, {
                        type: 'bar',
                        data: {
                            labels: nizA,
                            datasets: [{
                                label: 'Pseudo code-value | NRZ | Input signal',
                                data: NRZsekvenca,
                                backgroundColor: [
                                   'rgba(47, 38, 173, 0.2)' 
                                //'rgba(255, 99, 132, 0.2)',
                                //'rgba(54, 162, 235, 0.2)',
                                //'rgba(255, 206, 86, 0.2)',
                                //'rgba(75, 192, 192, 0.2)',
                                //'rgba(153, 102, 255, 0.2)',
                                //'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    //'rgba(255, 99, 132, 1)',
                                    //'rgba(54, 162, 235, 1)',
                                    //'rgba(255, 206, 86, 1)',
                                    //'rgba(75, 192, 192, 1)',
                                    //'rgba(153, 102, 255, 1)',
                                    //'rgba(255, 159, 64, 1)'
                                    'black'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                beginAtZero: true
                                }
                            }
                        }
                        });
            
                        f = 5;
                        T = 1;
                        t = 0.05;
            
                        nosilac = new Array();
                        vr = new Number();
            
                        nosilac = NRZsekvenca.map(a => {
            
                            return (a * (Math.sqrt(2/T)) * Math.cos(2 * Math.PI * f * t)).toFixed(2);
            
                        });
            
                        /*
                        //test preko for petlje
                        for(let i = 0; i < f; i +=t){
            
                            vr = (Math.sqrt(2/T)) * Math.cos(2 * Math.PI * f * t * i);
                            nosilac.push(vr);
            
                        }
                        */
            
                        modulacija = new Array();
                        modulacijaA = new Array();
                        modulacijaAa = new Array();
                        s = 0;
                        sNiz = new Array();
            
                        modulacija = nosilac.map(a => {
            
                            for(let i = 0; i < f; i += t){
            
                                s++;
                
                                vr = Number((Math.sqrt(2/T)) * Math.cos(2 * Math.PI * f * t * i)).toFixed(2);
                                modulacijaA.push(vr); 
                                sNiz.push(s);

                                if(a > 0){
                                    modulacijaAa = modulacijaA.map(a => a);
                                } else {
                                    modulacijaAa = modulacijaA.map(a => - a);
                                }

                            }
                            
                            return modulacijaAa;

                        });
            
                        console.log('Nosilac: ', nosilac);
                        console.log('ModulacijaA: ', modulacijaA);
                        console.log('ModulacijaAa: ', modulacijaAa);

                        let canvasModulacija = document.createElement('canvas');
                        divAa.appendChild(canvasModulacija);
            
                        const ctxModulacija = canvasModulacija.getContext('2d');
                        const modulacijaGraf = new Chart(ctxModulacija, {
                        type: 'bar',
                        data: {
                            labels: sNiz, //modulacijaA
                            datasets: [{
                                //label: 'Vrednosti signala nakon BPSK modulacije',
                                label: 'Signal values after BPSK modulation',
                                data: modulacijaAa,
                                backgroundColor: [
                                   'rgba(47, 38, 173, 0.2)' 
                                //'rgba(255, 99, 132, 0.2)',
                                //'rgba(54, 162, 235, 0.2)',
                                //'rgba(255, 206, 86, 0.2)',
                                //'rgba(75, 192, 192, 0.2)',
                                //'rgba(153, 102, 255, 0.2)',
                                //'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    //'rgba(255, 99, 132, 1)',
                                    //'rgba(54, 162, 235, 1)',
                                    //'rgba(255, 206, 86, 1)',
                                    //'rgba(75, 192, 192, 1)',
                                    //'rgba(153, 102, 255, 1)',
                                    //'rgba(255, 159, 64, 1)'
                                    'black'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                beginAtZero: true
                                }
                            }
                        }
                        });
            
                        //
                        console.log('Bit: ', nizA);
                        console.log('NRZ sekvenca: ', NRZsekvenca);
                        console.log('Nosilac: ', nosilac);
                        console.log('Modulacija: ', modulacija);
                        console.log('sNiz: ', sNiz);

                        //Aca 2.4.4 24.3.2022. Čet. | test
                        nizM = new Array(64);
                        console.log('modulacijaAa: ', modulacijaAa);
                        nizMf = new Array();
                        arSrMf = new Number();

                        let aN = Number(Math.round(Math.random() * 10));
                        console.log('aN = ', aN);
        
                        for(let i = aN; i < aN + 64; i++){
                            nizM.push(modulacijaAa[i]);
                        }

                        nizMf = nizM.filter(String);
                        arSrMf = Number((nizMf.reduce((a, b) => a + b) / nizMf.length).toFixed(2));
                        console.log('nizM: ', nizM);
                        console.log('nizMf: ', nizMf);
                        console.log('vrMf: ', arSrMf);

                    });
            
                    /*divA2 */
                    let whrA8 = document.createElement('hr');
                    whrA8.width = 300;
                    proJS.appendChild(whrA8);
            
                    let divA2 = document.createElement('div');
                    proJS.appendChild(divA2);
            
                    let wA4a = document.createElement('p');
                    //wA4a.textContent = 'Zamena vrednosti koeficijenata ulazne slike i pseudo-slučajne sekvence: ';
                    wA4a.textContent = 'Changing the values ot the input coefficients of the image and the pseudo-random sequence: ';
                    divA2.appendChild(wA4a);
            
                    let btnWproracun = document.createElement('button');
                    //btnWproracun.textContent = 'Proračun';
                    btnWproracun.textContent = 'Computation';
                    divA2.appendChild(btnWproracun);
            
                    btnWproracun.addEventListener('click', function(){
            
                        let wA5 = document.querySelector('p');
                        //wA5.textContent = 'Proračun: ';
                        wA5.textContent = 'Computation: ';
                        divA2.appendChild(wA5);
            
                        let whrA9 = document.createElement('hr');
                        whrA9.width = 300;
                        divA2.appendChild(whrA9);
            
                        proracunWA = document.createElement('textarea');
                        proracunWA.style.border = '2px dotted rgb(47, 38, 173)';
                        proracunWA.style.borderRadius = '10px';
                        divA2.appendChild(proracunWA);
            
                        proracunNizA = new Array();
                        //console.log('Prvih 64 piksela ulazne slike: ', pikseliWAniz64);
                        //console.log('Pseudo-slučajna sekvenca: ', nizA);
                        
                        /*
                        //Novo - test:
                        //Podela niza na podnizove: 
                        podnizA = new Array();
                        podnizAf = new Array();
                        podnizAo = new Array();
                        podnizAoF = new Array();
            
                        let br = 0;
                        for(let i = 0; i < 64; i+=8){
            
                            br++;
                            podnizA[br] = pikseliWAniz64.slice(i, i + 8);
                            
                            
                            if(br % 2 == 0){
                                podnizAo[br] = podnizA[br].map(a => a**2);
                            } else if(br % 2 == 1) {
                                podnizAo[br] = podnizA[br].map(a => a + 2);
                            }
                            
                        }
            
                        podnizAf = podnizA.filter(String);
                        podnizAoF = podnizAo.filter(String);
                        //console.log('PodnizA: ', podnizA);
                        console.log('PodnizAf: ', podnizAf);
                        console.log('podnizAo: ', podnizAo);
                        console.log('podnizAoF: ', podnizAoF);
                        */
            
                        proracunNizA = pikseliWAniz64.map((a, b) => {
            
                            //return a + Math.round(nizA[b] * 0.75);
                            return a - nizMf[b];
            
                        });
            
                        //let
                        podnizProracunA = new Array();
                        podnizProracunAf = new Array();
            
                        podnizProracunAo = new Array();
                        podnizProracunAoF = new Array();
            
                        noviNizProracun = new Array();
                        br = 0;

                        //Novoo | Test | 14.3.2022. | 8 => 4
                        for(let i = 0; i < 64; i+=4){
            
                            br++;
                            podnizProracunA[br] = proracunNizA.slice(i, i + 4);
            
                            if(br % 2 == 0){

                                //podnizProracunAo[br] = podnizProracunA[br].map(a => a + 1.35);
                                podnizProracunAo[br] = podnizProracunA[br].map(a => a + arSrMf);

                            } else if(br % 2 == 1){

                                //podnizProracunAo[br] = podnizProracunA[br].map(a => a - 0.75);
                                podnizProracunAo[br] = podnizProracunA[br].map(a => a - arSrMf);

                            }
                            
                        }
            
                        podnizProracunAf = podnizProracunA.filter(String);
                        podnizProracunAoF = podnizProracunAo.filter(String);
                        
                        noviNizProracun = podnizProracunAo.flat();
            
                        //console.log('Novi niz: ', proracunNizA);
                        //console.log('podnizProracunAf: ', podnizProracunAf);
                        //console.log('podnizProracunAoF: ', podnizProracunAoF);
                        //console.log('noviNizProracun: ', noviNizProracun);
                        
                        //proracunWA.value = proracunNizA;
            
                        //Novoooo:
                        proracunWA.value = noviNizProracun;

                        console.log('proracunNizA: ', proracunNizA);
                        console.log('podnizProračunA: ', podnizProracunA);
                        console.log('podnizProracunAoF', podnizProracunAoF);
                        console.log('noviNizProracun: ', noviNizProracun);

                    });
            
                    let whrA4 = document.createElement('hr');
                    whrA4.width = 300;
                    proJS.appendChild(whrA4);
            
                    /*divA2 */
                    /*divA3 */
                    let divA3 = document.createElement('div');
                    proJS.appendChild(divA3);
                    
                    let wA2 = document.createElement('p');
                    //wA2.textContent = 'Dodavanje watermarka: ';
                    wA2.textContent = 'Watermark insertion: ';
                    divA3.appendChild(wA2);
                        
                    let btnWdodavanje = document.createElement('button');
                    //btnWdodavanje.textContent = 'Dodavanje';
                    btnWdodavanje.textContent = 'Insert';
                    divA3.appendChild(btnWdodavanje); 
                    
                    btnWdodavanje.addEventListener('click', () => {
                    
                        let dodavanjeT = document.createElement('p');
                        //dodavanjeT.textContent = 'Slika sa (umetnutim) dodatim watermarkom: ';
                        dodavanjeT.textContent = 'Image with watermark inserted: ';
                        divA3.appendChild(dodavanjeT); 
                        
                        //let
                        wKanvasA1 = document.querySelector('canvas');
                        divA3.appendChild(wKanvasA1);
            
                        if(slikawAsl.width >= 1920){
            
                            wKanvasA1.width = slikawAsl.width;
                            wKanvasA1.height = slikawAsl.height;
            
                        } else {
            
                            wKanvasA1.width = slikawAsl.width;
                            wKanvasA1.height = slikawAsl.height;
            
                        }
                        
                        sirina = slikawAsl.width;
                        visina = slikawAsl.height;
            
                        //console.log('Širina i visina su: ', sirina, visina);
                        //let
                        ctxWkanvasA1 = wKanvasA1.getContext('2d');
                        //console.log('Broj piksela ulazne slike je: ', pikseliWAniz.length);
            
                        slikaSaWatermarkomNiz = new Array();
            
                        slikaSaWatermarkomNizA1 = new Array();
                        for(let i = 64; i < pikseliWAniz.length; i++){
                            slikaSaWatermarkomNizA1.push(pikseliWAniz[i]);
                        }
                        //Novoooo: proracunNizA => noviNizProracun
                        //console.log('Prvih 64 elemenata niza nakon proračuna nad pikselima: ', noviNizProracun);
                        //console.log('Elementi slike bez prvih 64 vrednosti piksela: ', slikaSaWatermarkomNizA1);
                        
                        slikaSaWatermarkomNiz = [].concat(noviNizProracun, slikaSaWatermarkomNizA1);
                        //console.log('Novi, sveobuhvatni niz slike sa umetnutim watermarkom: ', slikaSaWatermarkomNiz);
            
                        slikaSaWatermarkomNizU8C = new Uint8ClampedArray(slikaSaWatermarkomNiz);
                        //console.log('slikaSaWatermarkomNizU8C: ', slikaSaWatermarkomNizU8C);
            
                        slikaWslikaApodaci = new ImageData(slikaSaWatermarkomNizU8C, sirina, visina);
                        ctxWkanvasA1.putImageData(slikaWslikaApodaci, 0, 0);
            
                    });
                    
                    let btnWnoviUnos = document.createElement('button');
                    //btnWnoviUnos.textContent = 'Novi unos';
                    btnWnoviUnos.textContent = 'New input';
                    divA3.appendChild(btnWnoviUnos);
                    
                    btnWnoviUnos.addEventListener('click', () => {
                        window.location.reload(true);
                    });
            
                    /*divA3 */
                    let whrA4a = document.createElement('hr');
                    whrA4a.width = 300;
                    proJS.appendChild(whrA4a);
            
                    /*divA4 */
                    divA4 = document.createElement('div');
                    proJS.appendChild(divA4);
            
                    let wA6 = document.createElement('p');
                    //wA6.textContent = 'Izvlačenje watermarka: ';
                    wA6.textContent = 'Watermark extraction: ';
                    divA4.appendChild(wA6);

                    //let
                    let btnWizdvajanje = document.createElement('button');
                    btnWizdvajanje.textContent = 'Extract';
                    divA4.appendChild(btnWizdvajanje);

                    btnWizdvajanje.addEventListener('click', () => {
                        
                        //let
                        let divA4a = document.createElement('div');
                        divA4.appendChild(divA4a);

                        let txtWiz = document.createElement('p');
                        txtWiz.textContent = 'Watermark value: ';
                        divA4a.appendChild(txtWiz);

                        let txtaWizdvajanje = document.createElement('textarea');
                        divA4a.appendChild(txtaWizdvajanje);

                        let wIzvlacenjeA = ctxWkanvasA1.getImageData(0, 0, wKanvasA1.width, wKanvasA1.height);
                        console.log('vIzvlacenjeNizA: ', wIzvlacenjeA);
                        let wWatermark = wIzvlacenjeA.data;

                        txtaWizdvajanje.value = wWatermark;

                    });

                    /*divA4 */
            
                    let whrA5 = document.createElement('hr');
                    whrA5.width = 300;
                    proJS.appendChild(whrA5);
            
                    /*divA5 */
                    divA5 = document.createElement('div');
                    proJS.appendChild(divA5);
                    
                    let wA7 = document.createElement('p');
                    //wA7.textContent = 'Parametri za poređenje watermarka: ';
                    wA7.textContent = 'Watermark comparasion parameters: ';
                    divA5.appendChild(wA7);
                    
                    let wA7a = document.createElement('p');
                    wA7a.style.fontWeight = 'bold';
                    //wA7a.textContent = 'PSNR i SSIM ';
                    wA7a.textContent = 'PSNR and SSIM ';
                    divA5.appendChild(wA7a);
                    /*divA5 */
            
                    let whrA6_ = document.createElement('hr');
                    whrA6_.width = 300;
                    proJS.appendChild(whrA6_);
            
                     /*divA6 */
                     //Izvlačenje watermarka
                    /*divA6 */
            
                    /*divA7 */
                    //Parametri za poređenje watermarka
                    divA6a = document.createElement('div');
                    proJS.appendChild(divA6a);
            
                    let btnWpodaci = document.createElement('button');
                    //btnWpodaci.textContent = 'Podaci';
                    btnWpodaci.textContent = 'Data';
                    divA6a.appendChild(btnWpodaci);
            
                    divA7 = document.createElement('div');
                    proJS.appendChild(divA7);
            
                    btnWpodaci.addEventListener('click', () => {
                        
                        //wtPSNR - ***********
                        let wtPSNR = document.createElement('p');
                        //wtPSNR.textContent = 'Podaci o parametru PSNR: ';
                        wtPSNR.textContent = 'PSNR parameter data: ';
                        wtPSNR.style.fontWeight = 'bold';
                        divA7.appendChild(wtPSNR);
            
                        let whrA6a1 = document.createElement('hr');
                        whrA6a1.width = 300;
                        divA7.appendChild(whrA6a1);
            
                        //dimSlika
                        dimSlika = slikawAsl.width * slikawAsl.height;
                        console.log('Širina slike: ', slikawAsl.width);
                        console.log('Visina slike: ', slikawAsl.height);
                        console.log('Dimenzija slika: ', dimSlika);
            
                        let wDimSlika = document.createElement('p');
                        //wDimSlika.textContent = 'Dimenzije slike u pikselima: ';
                        wDimSlika.textContent = 'Image dimensions in pixels: ';
                        divA7.appendChild(wDimSlika);
            
                        let inpDimSlika = document.createElement('input');
                        inpDimSlika.value = `${slikawAsl.width} x ${slikawAsl.height}`;
                        divA7.appendChild(inpDimSlika);
            
                        /*
                        let whrA6b = document.createElement('hr');
                        whrA6b.width = 300;
                        divA7.appendChild(whrA6b);
                        */
            
                        //S1
                        S1 = pikseliWAniz.reduce((a, b) => a + b, 0);
                        //console.log('S1 = ', S1);
            
                        let wS1 = document.createElement('p');
                        //wS1.textContent = 'Zbir svih piksela ulazne slike: ';
                        wS1.textContent = 'Sum of all pixels of the input image: ';
                        divA7.appendChild(wS1);
            
                        let inpS1 = document.createElement('input');
                        inpS1.value = S1;
                        divA7.appendChild(inpS1);
            
                        /*
                        let whrA7 = document.createElement('hr');
                        whrA7.width = 300;
                        divA7.appendChild(whrA7);
                        */
            
                        //S2
                        S2 = slikaSaWatermarkomNiz.reduce((a, b) => a + b, 0);
                        //console.log('S2 = ', S2);
            
                        let wS2 = document.createElement('p');
                        //wS2.textContent = 'Zbir svih piksela slike sa watermarkom: ';
                        wS2.textContent = 'Sum of all pixels of the watermarked image: ';
                        divA7.appendChild(wS2);
            
                        let inpS2 = document.createElement('input');
                        inpS2.value = S2;
                        divA7.appendChild(inpS2);
            
                        /*
                        let whrA8 = document.createElement('hr');
                        whrA8.width = 300;
                        divA7.appendChild(whrA8);
                        */
            
                        //srKvGr
                        srednjaKvadratnaGreska = (S1 - S2)**2 / dimSlika;
                        //console.log('Srednja kvadratna greška je: ', srednjaKvadratnaGreska);
            
                        //Novooo | Nova formula ta proračun srednje kvadratne greške | 10.3.2022. 
                        srKvGrNiz = new Array();
                        srKvGrNiz = pikseliWAniz.map((a, b) => (a - slikaSaWatermarkomNiz[b])**2);
                        srKvGrVr = srKvGrNiz.reduce((a, b) => a + b, 0);
                        srednjaKvadratnaGreskaA = srKvGrVr / dimSlika;
            
                        console.log('srKvGrNiz: ', srKvGrNiz);
                        console.log('srKvGrVr: ', srKvGrVr);
                        console.log('srednjaKvadratnaGreska: ', srednjaKvadratnaGreska);
                        console.log('srednjaKvadratnaGreskaA: ', srednjaKvadratnaGreskaA);
            
                        let wSrKvVr = document.createElement('p');
                        //wSrKvVr.textContent = 'Srednja kvadratna greška: ';
                        wSrKvVr.textContent = 'Mean square error - MSE: ';
                        divA7.appendChild(wSrKvVr);
            
                        let inpSrKv = document.createElement('input');
                        inpSrKv.value = srednjaKvadratnaGreska;
                        divA7.appendChild(inpSrKv);
            
                        /*
                        let whrA8a = document.createElement('hr');
                        whrA8a.width = 300;
                        divA7.appendChild(whrA8a);
                        */
            
                        //PSNR
                        PSNRv1 = 10 * Math.log10(255**2/srednjaKvadratnaGreska);
                        PSNR = 10 * Math.log10(255**2/srednjaKvadratnaGreskaA);
            
                        console.log('PSNRv1 = ', PSNRv1);
                        console.log('PSNR = ', PSNR);
            
                        let wPSNR = document.createElement('p');
                        wPSNR.textContent = 'Odnos signal-šum tj. PSNR: ';
                        wPSNR.textContent = 'Peak Signal to Noise Ratio - PSNR: ';
                        divA7.appendChild(wPSNR);
            
                        let inpPSNR = document.createElement('input');
                        inpPSNR.value = PSNR;
                        divA7.appendChild(inpPSNR);
            
                        let whrA9 = document.createElement('hr');
                        whrA9.width = 300;
                        divA7.appendChild(whrA9);
                        
                        //wtSSIM - **********
                        let wtSSIM = document.createElement('p');
                        wtSSIM.textContent = 'Podaci o parametru SSIM: ';
                        wtSSIM.textContent = 'SSIM parameter data: ';
                        wtSSIM.style.fontWeight = 'bold';
                        divA7.appendChild(wtSSIM);
            
                        let whrA10 = document.createElement('hr');
                        whrA10.width = 300;
                        divA7.appendChild(whrA10);
            
                        //luminentnost (osvetljaj/osvetljenost)
                        //luminentnost - x
                        
                        let Nx = pikseliWAniz.length;
            
                        let wNx = document.createElement('p');
                        wNx.textContent = 'Broj piksela originalne slike: ';
                        wNx.textContent = 'The number of pixels in the original image: ';
                        divA7.appendChild(wNx);
            
                        let inpNx = document.createElement('input');
                        inpNx.value = Nx;
                        divA7.appendChild(inpNx);
            
                        /*
                        let whrA11 = document.createElement('hr');
                        whrA11.width = 300;
                        divA7.appendChild(whrA11);
                        */
            
                        //sumx
                        let sumx = pikseliWAniz.reduce((a, b) => a + b, 0);
            
                        let wsumx = document.createElement('p');
                        wsumx.textContent = 'Zbir piksela originalne slike: ';
                        wsumx.textContent = 'Pixel sum of the original image: ';
                        divA7.appendChild(wsumx);
            
                        let inpSumx = document.createElement('input');
                        inpSumx.value = sumx;
                        divA7.appendChild(inpSumx);
            
                        //mix
                        let mix = (1 / Nx) * sumx; 
                        //console.log('Nx = ', Nx);
                        //console.log('sumx = ', sumx);
                        //console.log('mix = ', mix);
            
                        let wmix = document.createElement('p');
                        wmix.textContent = 'Osvetljenost (luminentost) originalne slike - mi(x): ';
                        wmix.textContent = 'Original image luminence - mi(x): ';
                        divA7.appendChild(wmix);
            
                        let inpWmix = document.createElement('input');
                        inpWmix.value = mix;
                        divA7.appendChild(inpWmix);
            
                        //luminentnost - y
                        //Ny
                        let Ny = slikaSaWatermarkomNiz.length;
            
                        let wNy = document.createElement('p');
                        wNy.textContent = 'Broj piksela slike sa watermarkom: ';
                        wNy.textContent = 'The number of pixels in the watermarked image: ';
                        divA7.appendChild(wNy);
            
                        let inpNy = document.createElement('input');
                        inpNy.value = Ny;
                        divA7.appendChild(inpNy);
            
                        //sumy
                        let sumy = slikaSaWatermarkomNiz.reduce((a, b) => a + b, 0);
            
                        let wsumy = document.createElement('p');
                        wsumy.textContent = 'Zbir svih piksela slike sa watermarkom: ';
                        wsumy.textContent = 'The sum of all pixels of the watermarked image: ';
                        divA7.appendChild(wsumy);
            
                        let inpWsumy = document.createElement('input');
                        inpWsumy.value = sumy;
                        divA7.appendChild(inpWsumy);
            
                        //miy
                        let miy = (1 / Ny) * sumy;
                        //console.log('Ny = ', Ny);
                        //console.log('sumy = ', sumy);
                        //console.log('miy = ', miy);
            
                        let wmiy = document.createElement('p');
                        wmiy.textContent = 'Osvetljenost (luminentnost) slike sa watermarkom - mi(y): ';
                        wmiy.textContent = 'Watermarked image luminence - mi(y): ';
                        divA7.appendChild(wmiy);
            
                        let inpWmiy = document.createElement('input');
                        inpWmiy.value = miy;
                        divA7.appendChild(inpWmiy);
            
                        //kontrast
                        //x
                        let sigmaxNiz = new Array();
            
                        sigmaxNiz = pikseliWAniz.map((a) => (a - mix)**2);
                        let sumaSigmaxNiz = sigmaxNiz.reduce((a, b) => a + b, 0);
            
                        //sigmax
                        let sigmax = Math.sqrt((1/(Nx - 1)) * sumaSigmaxNiz);
                        //console.log('Niz sigma(x): ', sigmaxNiz);
                        //console.log('Suma sigma(x) niz: ', sumaSigmaxNiz);
                        //console.log('sigma(x) = ', sigmax);
            
                        let wsigmax = document.createElement('p');
                        wsigmax.textContent = 'Kontrast originalne slike - sigma(x): ';
                        wsigmax.textContent = 'Original image contrast - sigma(x): ';
                        divA7.appendChild(wsigmax);
            
                        let inpSigmax = document.createElement('input');
                        inpSigmax.value = sigmax;
                        divA7.appendChild(inpSigmax);
            
                        let C1 = 1; 
            
                        //y
                        let sigmayNiz = new Array();
            
                        sigmayNiz = slikaSaWatermarkomNiz.map((a) => (a - miy)**2);
                        let sumaSigmayNiz = sigmayNiz.reduce((a, b) => a + b, 0);
            
                        //sigmay
                        let sigmay = Math.sqrt((1/(Ny - 1)) * sumaSigmayNiz);
                        //console.log('Niz sigma(y): ', sigmayNiz);
                        //console.log('Suma sigma(y) niz: ', sumaSigmayNiz);
                        //console.log('sigma(y) = ', sigmay);
            
                        let wsigmay = document.createElement('p');
                        wsigmay.textContent = 'Kontrast slike sa watermarkom - sigma(y): ';
                        wsigmay.textContent = 'Watermarked image contrast - sigma(y): ';
                        divA7.appendChild(wsigmay);
            
                        let inpSigmay = document.createElement('input');
                        inpSigmay.value = sigmay;
                        divA7.appendChild(inpSigmay);
            
                        let C2 = 2;
                        //struktura
            
                        //funkcija za poređenje luminentnosti (osvetljenosti)
            
                        //funkcija za poređenje kontrasta
            
                        //funkcija za poređenje strukture
            
                        //standardna devijacija
                        //console.log('Nx = ', Nx);
                        //console.log('Ny = ', Ny);
                        xNiz = pikseliWAniz.map(a => a - mix, 0);
                        yNiz = slikaSaWatermarkomNiz.map(a => a - miy, 0);
            
                        //console.log('xNiz: ', xNiz);
                        //console.log('yNiz: ', yNiz);
            
                        let sumaXYniz = xNiz.map((a, b) => a * yNiz[b]);
                        //console.log('sumaXYniz: ', sumaXYniz); 
                        sumaXY = sumaXYniz.reduce((a, b) => a + b, 0);
                        //console.log('sumaXY = ', sumaXY);
            
                        //let sumaXY = sumaSigmaxNiz * sumaSigmayNiz;
            
                        //sigmaxy
                        let sigmaxy = (1/(Nx - 1)) * sumaXY;
                        //console.log('sigmaxy = ', sigmaxy);
            
                        let wsigmaxy = document.createElement('p');
                        wsigmaxy.textContent = 'Standardna devijacija datih slika - sigma(xy): ';
                        wsigmaxy.textContent = 'Standard deviation of given images - sigma(xy): ';
                        divA7.appendChild(wsigmaxy);
            
                        let inpSigmaxy = document.createElement('input');
                        inpSigmaxy.value = sigmaxy;
                        divA7.appendChild(inpSigmaxy);
            
                        //SSIM
                        let SSIM = ((2 * mix * miy + C1) * (2 * sigmaxy + C2)) / ((mix**2 + miy**2 + C1) * (sigmax**2 + sigmay**2 + C2));
                        //console.log('SSIM = ', SSIM);
            
                        let wSSIM = document.createElement('p');
                        wSSIM.textContent = 'Indeks strukturalne sličnosti tj. SSIM: ';
                        wSSIM.textContent = 'Structural Similarity Index - SSIM: ';
                        divA7.appendChild(wSSIM);
            
                        let inpSSIM = document.createElement('input');
                        inpSSIM.value = SSIM;
                        divA7.appendChild(inpSSIM);
            
                    });
            
                    /*divA7 */
                    

                    /////////
                    /////////

                });

            }

        });


    }
    
    slikawA.addEventListener('click', slikaAf);

}