class BaseShape{
    color;
    text;
    svgString;

    setText(text){
        this.text = text
    }

    setColor(color){
        this.color = color
    }

    render(){
        return this.svgString
    }
}

class Triangle extends BaseShape{

    
    render(){

        this.svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><!-- Triangle --><polygon points="150,10 10,190 290,190" fill="${this.color}" /><!-- Text --><text x="128" y="130" fill="white" font-size="24">${this.text}</text></svg>`

        return this.svgString

    }

}

class Square extends BaseShape{

    render(){

        this.svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><!-- Square --><rect x="10" y="10" width="280" height="180" fill="${this.color}" /><!-- Text --><text x="130" y="101" fill="white" font-size="24">${this.text}</text></svg>`

        return this.svgString
    }
}

class Circle extends BaseShape{
    render(){
        return this.svgString = `<svg width="3=300" height="200" xmlns="http://www.w3.org/2000/svg"><!-- Circle --><circle cx="150" cy="100" r="80" fill="${this.color}" /><!-- Text --><text x="128" y="110" fill="white" font-size="24">${this.text}</text></svg>`
    }
}

module.exports = {Triangle, Square, Circle}