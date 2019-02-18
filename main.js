/*
var markAge = window.prompt("Please enter your age");
var markMass = window.prompt("Please enter your mass");
var johnAge = window.prompt("Please enter your age");
var johnMass = window.prompt("Please enter your mass");
var markBMI = markMass/(markAge);
var johnBMI = johnMass/(johnAge);

var compareBMI = markBMI > johnBMI;

console.log(compareBMI);*/
/*var age = 13;
switch (true) {
    case age <= 11:
    console.log('False');
    break;

    case age >= 13:
    console.log('True');
    break;
}*/

// challenge Code 4

/*var John = {
    fName : 'John Freman',
    mass : 34,
    height : 15,
    bmi : function (){
        var  bm = this.mass / (this.height * this.height);
        return bm;
    }
};

var Mark = {
    fName : 'Mark Push',
    mass : 2,
    height : 20,
    bmi : function (){
        var  bm = this.mass / (this.height * this.height);
        return bm;
    }
};

if (John.bmi > Mark.bmi){
    console.log('John as the highest MBI, with '+ ' '+ John.bmi + '  BMI');
} else if (Mark.bmi > John.bmi){
    console.log('Mark as the highest MBI, with '+ ' '+ Mark.bmi + '  BMI');
} else{
    console.log('Both John and Mark have same BMI');
}
*/



// Challenge 5 Object and array tip calculator

var joseph = {
    bills : [124, 48, 268, 180, 42],
    tipCalc : function(){
        this.tips = [];
        var tip;
        for (i = 0; i  < this.bills.length; i++ ){
            if (this.bills[i] < 50){
                tip = (20/100) * this.bills[i];
            } else if(this.bills[i] >= 50 && this.bills[i] < 200){
                tip = (15/100) * this.bills[i];
            } else {
                tip = (10/100) * this.bills[i];
            }

            this.tips.push(tip);
        }
        return this.tips;
    }
};
joseph.tipCalc();
console.log(joseph);
