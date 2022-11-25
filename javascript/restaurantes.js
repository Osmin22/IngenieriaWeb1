const restaurantes = [["img/La_cuchara.png","La cuchara","El mejor restaurante en comida tradicional"]
                     ,["img/La_montaña.png","La montaña","Ofrecemos platos de muy buen sador"]
                     ,["img/La_sopa.png","La sopa","Las mejores platos de colombia, estamos especializados en la elaboracion de sopas tradicionales de colombia"]]


const mostarrestaurantes = () =>{
    let max= restaurantes.length -1
    let min=0
    let maxfor= restaurantes.length
    let valor= true
    if(valor){
        document.write("<div id=\"\" class=\"div-class\" >"+"<section>")
        for(let i=0; i<maxfor;i++){
            const arreglo= restaurantes[i]
            document.write("<div class=\"div-section\">"+"<img src=\""+arreglo[0]+"\" width=\"100\" heigth=\"100\" alt=\"\" ><br>"+"<h3>"+arreglo[1]+"</h3><br>"+"<p>"+arreglo[2]+"</p>"+"</div>")
            if(i==max){
                valor=false
            }
        }
        document.write("</div>"+"</section>")
    }
} 

mostarrestaurantes();