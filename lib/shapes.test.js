const shape = require('./shapes')

describe('Shapes', () => {
    it('Creates a triangle', () => {
      
        Triangle = new shape.Triangle()
        Triangle.setText('TXT')
        Triangle.setColor('blue')
        expect(Triangle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><!-- Triangle --><polygon points="150,10 10,190 290,190" fill="blue" /><!-- Text --><text x="128" y="130" fill="white" font-size="24">TXT</text></svg>`)
        
    });

    it('Creates a Square', () => {
        
        Square = new shape.Square()
        Square.setText('TXT')
        Square.setColor('blue')
        expect(Square.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><!-- Square --><rect x="10" y="10" width="280" height="180" fill="blue" /><!-- Text --><text x="130" y="115" fill="white" font-size="24">TXT</text></svg>`)
    });

    it('Creates a Circle', () => {
       
        Circle = new shape.Circle()
        Circle.setText('TXT')
        Circle.setColor('blue')
        expect(Circle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><!-- Circle --><circle cx="150" cy="100" r="80" fill="blue" /><!-- Text --><text x="128" y="110" fill="white" font-size="24">TXT</text></svg>`)
    });

});