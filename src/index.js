module.exports = function check(str, bracketsConfig) {
  
    // пары открывающих-закрывающих скобок
    var br = bracketsConfig.join('').split(',').join('');
    // стек открытых скобок
    var st = [];var k=0; var k7=0;var k8=0;
    // бежим по всей строке
    for (var i = 0; i < str.length; ++i) {
        // текущий символ
        var ch = str[i];
        // ищем символ в скобках
        var ind = br.indexOf(ch);
    if(str[i]=='|'){k+=1;}
    if(str[i]==7){k7+=1;}
    if(str[i]==8){k8+=1;}
        // если скобка найдена
        if (ind >= 0&&(str[i]!='|')&&(str[i]!='7')&&(str[i]!='8')) {
            // проверяем, какая это скобка
            if (ind & 1) {
                // если закрывающая скобка, проверяем стек
                // стек пуст - плохо
                if (!st.length) return false;
                // извлекаем последнюю открытую скобку из стека
                var last_br = st.pop();
                // если она не соответствует закрывающей скобке - тоже плохо
                if (last_br != br[ind - 1]) return false;
            } else { 
                // открывающую скобку просто пихаем в стек
                st.push(ch);
            }
        }
		if (ind >= 0&&(str[i]=='|')&&(k%2==1)) { st.push(ch);}
    if (ind >= 0&&(str[i]=='|')&&(k%2==0)) { st.pop();}
        //7
    if (ind >= 0&&(str[i]==7)&&(k%2==1)) { st.push(ch);}
    if (ind >= 0&&(str[i]==7)&&(k%2==0)) { st.pop();}
        //8
    if (ind >= 0&&(str[i]==8)&&(k%2==1)) { st.push(ch);}
    if (ind >= 0&&(str[i]==8)&&(k%2==0)) { st.pop();}
    
		
    }
    // если после обхода всей строки стек пуст - всё ок
    return !st.length;
}


