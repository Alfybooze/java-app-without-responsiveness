function currency(rate,amount){
    this.rate = rate;
    this.amount = amount;
    this.currency_con = function(){
        var x = this.rate;
        var y = this.amount;
        console.log(x*y);
    }   
}
var Naira = new currency(100,1000);
var Dollar = new currency(50,200);

Naira.currency_con();
Dollar.currency_con();

