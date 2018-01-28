function colouredList(input){
    let output = '<ul>\r\n';

    for ( let i = 1; i <=input; i++ ) {
        let color = '';
        if (i%2 === 1) {
            color = 'green';
        }else{
            color = 'blue'
        }

        output += `    <li><span style="color:${color}">${i}</span></li>\r\n`

    }
    output += '</ul>';

    return output
}


console.log( colouredList( 10 ) );
