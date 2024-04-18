let pg1={
    balance:0,
    it:0
};

function deposit(v)
{
    if(v>0)
    {
        pg1.balance +=v;
        pg1.it=v;
    }
}
function withdraw(v)
{
    if(v>0 && v<=pg1.balance)
    {
        pg1.balance -=v;
        pg1.it =-v;
    }
}
function statement()
{
    console.log("Balance" +pg1.balance);
console.log("last Transaction" +pg1.it);
}
deposit(100);
statement();
withdraw(50);
statement();