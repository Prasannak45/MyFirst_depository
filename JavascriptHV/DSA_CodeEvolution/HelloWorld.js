async function func(){
   let string='';
   let targetString="hello world"
   let strCount=0;
   let array=['a', 'b', 'c', 'd','e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   while(string !=="hello world"){
    for(let i=0;i<array.length;i++){
        console.log(string +array[i]);
        if(targetString[strCount]===array[i]){
            string = string+array[i];
            strCount++;
            break;
        }
        await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(1);
            },50)
        })
    }
   } 
}
func();