var pg1 ={
    balance:0,
    it:0
};

var pg2={
    balance:0,
    it:0
};

function deposit1(v)
{
    pg1.balance=pg1.balance +v;
    pg1.it=v;
}


function withdraw1(v)
{
    if(pg1.balance>=v)
    {
        pg1.balance=pg1.balance-v;
        pg1.it=-v;
    }
}
function statement1()
{
    console.log("Balance"+pg1.balance);
    console.log("Last Transaction"+pg1.it);

}
function deposit2(v)
{
pg2.balance=pg2.balance +v;
pg2.it =v;
}
function withdraw2(v);
{
    if(pg2.balance >=v){
        pg2.balance=pg2.balance -v;
        pg2.it=-v;
    }
}
function statement2()
{
    console.log("Balance="+pg2.balance);
    console.log("transaction"+pg2.it);
}
deposit1(100);
statement();