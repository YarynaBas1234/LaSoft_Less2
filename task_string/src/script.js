// task 4, 6 розкоментувати!!!!
// Task 9 доробити


// Task 1   (Створити метод який приймає, введену користувачем стрічку і виводить на екран 
// статистику по цій стрічці. Статистика повинна включати загальну кількість символів, 
// кількість букв (і скільки букв в верхньому регістрі і нижньому), кількість цифр, 
// символів пунктуації та кількість символів пробілів.)
function task1(str){
    let rez = "";
    let len = str.length;

    rez += "Довжина стрічки = " + len + "\n";

    let Aa = str.match(/[A-Za-zА-Яа-я]/g);
    let A = str.match(/[A-ZА-Я]/g);
    let a = str.match(/[a-zа-я]/g);
    let numbers = str.match(/[1-9]/g);
    let sumb = str.match(/[^A-Za-zА-Яа-я0-9 ]/g);
    let gap = str.match(/\s/g);

    if(Aa != null){
        rez += "Всі букви = " + Aa.length + "\n";
    }
    if(A != null){
        rez += "Верхній регістр = " + A.length + "\n";
    }
    if(a != null){
        rez += "Нижній регістр = " + a.length + "\n";
    }
    if(numbers != null){
        rez += "Кількість цифр = " + numbers.length + "\n";
    }
    if(sumb != null){
        rez += "Кількість символів = " + sumb.length + "\n";
    }
    if(gap != null){
        rez += "Кількість пробілів = " + gap.length + "\n";
    }
    console.log("----------Task 1\n" + rez);
}
task1("It`s the 16-th of June");





// Task 2 (Користувач вводить рядок і символ. У рядку знайти всі входження цього символу і 
// перевести його в верхній регістр, а також видалити частину рядка, починаючи з останнього 
// входження цього символу і до кінця.)
function task2(str, sumb){
    let repeatSumb = new RegExp(sumb,"g");
    let changeStr = str.replace(repeatSumb, sumb.toUpperCase());

    changeStr = changeStr.substring(0, str.lastIndexOf(sumb)); //substring видаляє
    console.log("----------Task 2\n" + str + "\n" + changeStr);
}
task2("cat cat cti cit", "a");




// Task 3 (Даний текст. Здійснити в цьому тексті пошук і заміну заданої фрази.)
function task3(phrase, chPhrase){
    let str = "It`s the 16-th of June of June";
    let repeatSumb = new RegExp(phrase,"g");
    console.log("----------Task 3\n" + str + "\n" + str.replace(repeatSumb, chPhrase));
}
task3("of June", "in the morning");




// Task 4 (Створити функцію, що дозволяє вставляти (видаляти) рядок символів в (з) масив (-а) рядків)
function task4(arr){
    console.log("----------Task 4\n" + arr);
    let rez = "";
    let choice = true;
    // for(;choice;){
        // choice = prompt("choice: 1-додати рядок; 2-видалити рядок");
        switch (choice) {
            case "1":
                let add = "me too";
                arr.push(add);
                console.log(arr);
                break;
            case "2":
                arr.pop();
                console.log(arr);            
                break;
            default:
                break;
        }
    // }
}
task4(["hello", "it`s our company", "nice to meet you"]);






// Task 5 (Створити функцію для перевірки коректності розстановки дужок у виразі)
function task5(str){
    let count = 0;
    let count2 = 0;
    let count3 = 0;
    console.log(str);
    for(let i=0; i<str.length; i++){
        if(str[i] == "(") count ++;
        if(str[i] == ")") count --;
        if(str[i] == "{") count2 ++;
        if(str[i] == "}") count2 --;
        if(str[i] == "[") count3 ++;
        if(str[i] == "]") count3 --;
        if(count < 0 || count2 < 0 || count3 < 0)   break;
    }
    if(count != 0 || count2 != 0 || count3 != 0){
        return false;
    }
    else{
        return true;
    }
}
console.log("----------Task 5\n" + task5("[]{(2+3(5-2))}"));





// Task 6 (Користувач вводить з клавіатури арифметичний вираз. Необхідно обчислити його значення 
// з урахуванням пріоритетів введених математичних операцій і дужок. Якщо у виразі зустрічаються 
// інші символи, видати повідомлення, що вираз введено некоректно.)
function task6(str){
    console.log("----------Task 6\n" + eval(str));
}
task6("5+5*2");
// task6(prompt("Enter math example: ")); //15 or 20






// Task 7 (Написати функцію, що перетворює дробове або ціле число в рядок)
function task7(number){
    console.log("----------Task 7\n" + number.toString());
}
task7(45.5);



// Task 8(Написати функцію, що перетворює рядок в дробове або ціле число)
function task8(num){
    console.log("----------Task 8\n");
    console.log(+num);
}
task8("45.5");






// Task 10 (Написати функцію, яка визначає чи є рядок паліндромом (тобто рядк, який можна читати зліва
// направо, і справа наліво: «А роза упала на лапу Азора», «Аргентина манить негра»).)
function task10(str){
    str = str.split(" ");
    str = str.join("");
    str = str.toLowerCase();
    
    if(str.lastIndexOf("ь")){
        str = str.replace(/ь/g, ""); //всі без ь
    }
    for(let i=0; i<str.length; i++){
        if(str[i] == str[str.length-1-i]){ //початкова стрічка
            // console.log(str); //стрічка без пробілів
            return "паліндромом";
        }
        else{
            return "не паліндром";
        }
    }
}
console.log("----------Task 10\n" + task10("ьупала на лапуь"));






// Task 11 (Скільки разів в рядку, введеним користувачем, зустрічається вказане слово?)
function task11(str, word){
    let repeatWord = new RegExp(word,"g");
    console.log("----------Task 11\n" + str.match(repeatWord).length);
}
task11("cat is the best cat, but dog is better than cat", "is");