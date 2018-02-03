function linkExtract(arr) {
    //let regex = /([w]{3}\.[a-zA-Z-\d]+\.[\.a-z]{1,})|[w]{3}\.[a-zA-Z-\d]+\.[a-z]+[\.]/;
    let regex = /([w]{3}\.[a-zA-Z-\d]+\.[\.a-z]{1,})|[w]{3}\.[a-zA-Z-\d]+\.[a-z]+[\.]/;
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        let match = regex.exec(obj);

        if (match) {
            output.push(match[0])
        }
    }
    return output.join('\n')
}

console.log(linkExtract(
    ['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:',
        'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko']
));
console.log(linkExtract([
    'Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc'
]));


function extractLinks(arr) {
    let pattern = /www\.[A-Za-z\d\-]+(\.[a-z]+)+/g;
    let links = [];
    for (let sentence of arr) {
        let match = pattern.exec(sentence);
        while (match) {
            links.push(match[0]);
            match = pattern.exec(sentence)
        }
    }
    return links.join('\n')
}