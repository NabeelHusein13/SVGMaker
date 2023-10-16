const inquirer = require('inquirer');
const fs = require('fs')
const Shapes = require('./lib/shapes.js')

const questions = [
    { 
        type: "input", 
        message: "Enter 3 characters below", 
        name: "textCharacter" 
    },
    {
        type: 'list',
        message: 'Shape: ',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square']
    },
    { 
        type: "input", 
        message: "Enter a color or a hexvalue followed by a '#' symbol: ", 
        name: "color" 
    },
];


function main(){
    inquirer.prompt(questions
    ).then(parseResponse)
}

function parseResponse(response){

    
    switch(response.shape){
        case 'Circle':
            let circle = new Shapes.Circle()
            circle.setColor(response.color)
            circle.setText(response.textCharacter)
            writeSVG(circle.render())
            break;
        case 'Triangle':
            let triangle = new Shapes.Triangle()
            triangle.setColor(response.color)
            triangle.setText(response.textCharacter)
            writeSVG(triangle.render())
            break;
        case 'Square':
            let square = new Shapes.Square()
            square.setColor(response.color)
            square.setText(response.textCharacter)
            writeSVG(square.render())
            break;
        default:
            
            break;
    }

}

function writeSVG(svg){
    fs.writeFile('./examples/Logo.svg',svg, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg')
    )
}


main()