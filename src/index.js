module.exports = function check(str, bracketsConfig) {
    var br = bracketsConfig.join('').split(',').join('');
    // стек открытых скобок
    var st = [];
    // стетчики одиночных символов
    var k=1; var k7=1; var k8=1;
    // итерируемся по строке
    for (var i = 0; i < str.length; ++i) {
        // текущий символ
        var ch = str[i];
        // ищем символ в скобках
        var ind = br.indexOf(ch);
    if(ch=='|'){
	    k+=1;
    }
    if(ch=='7'){
	    k7+=1;
    }
    if(ch=='8'){
	    k8+=1;
    }  
        // если символ найден
        if ((ind >= 0)&&(ch!='|')&&(ch!='7')&&(ch!='8')) {
            // проверяем, какая это символ
            if (ind & 1) {
                // если закрывающий символ, проверяем стек
                // стек пуст - плохо
                if (!st.length) return false;
                // извлекаем последнюю открывающий символ из стека
                var last_br = st.pop();
                // если она не соответствует закрывающему символу - плохо дело
                if (last_br != br[ind - 1]) return false;
            } else { 
                // открывающуй символ просто пихаем в стек
                st.push(ch);
            }
        }
         //| 
    if ((ch=='|')&&(k%2==0)) { 
	    st.push(ch);
    }
    if ((ch=='|')&&(k%2==1)) { 
        if (st[st.length-1] != '|') return false;
        else {
		st.pop();
	}
    }
        //7
    if ((ch=='7')&&(k7%2==0)) { 
	    st.push(ch);
    }
    if ((ch=='7')&&(k7%2==1)) {
        if (st[st.length-1] != '7') return false;
        else {
		st.pop();
	}
    }
        //8
    if ((ch=='8')&&(k8%2==0)) { 
	    st.push(ch);
    }
    if ((ch=='8')&&(k8%2==1)) {
        if (st[st.length-1] != '8') return false;
        else {
		st.pop();
	}
    }
    
    }
    // если после обхода всей строки стек пуст - всё ок
    return !st.length;
}




