function convertirName(name){
    let consonante = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ";
    let cadena = "";
    let len = name.length;

    

    for (let i = 0; i < len; i++){
            if (consonante.includes(name.charAt(i)) == true){
                    if (consonante.includes(name.charAt(i+1)) == true){
                        cadena += name.substring(i, i+1) + 'u';
                    }
                    else {
                        cadena += name.charAt(i);
                    }
                }
                
                else {
                    cadena += name.charAt(i);
                }
            } 

    cadena += "-san";

    return cadena;

}