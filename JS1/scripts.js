// array
let ingredientes = [
    '2 xícaras (chá) de açúcar',
     '3 xícaras (chá) de farinha de trigo',
    '4 colheres (sopa) de margarina',
    '3 ovos',
     ' 1/2 xícara (chá) de leite',
];




for(let i = 0; i < ingredientes.length; i++) {

    let liHtml = '<li>' + ingredientes[i] + '</li>';
    let ul = document.querySelector('ul');

    //Forma 1
    //ul.innerHTML = ul.innerHTML + liHtml;

    //Forma 2
    ul.append(liHtml);
}


