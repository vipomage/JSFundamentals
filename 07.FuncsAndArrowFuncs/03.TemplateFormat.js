function xmlTemplateFormat( arr ) {
    let output = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>';
    for ( let i = 0; i < arr.length; i += 2 ) {
        let question = arr[ i ];
        let answer = arr[ i+1 ];

        output += `
  <question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>`
    }
    output += '\n</quiz>';

    return output;
}


console.log( xmlTemplateFormat( [ "Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton" ] ) );

console.log( xmlTemplateFormat( [ 'Dry ice is a frozen form of which gas?',
    'Carbon Dioxide', 'What is the brightest star in the night sky?', 'Sirius' ] ) );