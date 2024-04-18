let balance =0;
let it=0;

function deposite(v)
{
    if(v>0)
    {
        balance +=v;
        it=v;
    }
}

function withdraw(v)
{
    if (v>0 && v <= balance)
    {
        balance -=v;
        it =-v;
    }
}

function statement()
{
    console.log("Balance:"+balance);
    console.log("Last Transaction:" +it);

}

deposite(100);
statement();
withdraw(50);
statement();