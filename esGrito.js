function esGrito(text){
    let l = text.length;

    let i, j, x, sumaAlfa = 0, sumaExp = 0;

    let alfa  = 'abcdefghijklmnopqrstuvwxyz';
    let exp   = '!/()-_+^`><;,.:?';
    let lalfa = alfa.length;
    let lexp  = exp.length;


    for (i = 0; i < l; i++){
        for (j = 0; j < lalfa; j++){
            if (text.charAt(i) == alfa.charAt(j)){
                sumaAlfa += 1;
            }
        }
        for (x = 0; x < lexp; x++){
            if (text.charAt(i) == exp.charAt(x)){
                sumaExp += 1;
            }
        }
    }

    if (sumaAlfa >= sumaExp){
        return true;
    }
    else{
        return false;
    }
}