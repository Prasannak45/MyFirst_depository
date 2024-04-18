class C1 {
   a = 0;
   b = 0;
   print() {
       console.log(this.a);
       console.log(this.b);
   }

}

class C2 {
   obj = new C1();
   c = 0;
   d = 0;
   print() {
       this.obj.print();
       console.log(this.c);
       console.log(this.d);
   }
}

var obj1 = new C1();
obj1.print()
obj1.a = 10;
obj1.b = 20;
obj1.print();

var obj2 = new C2();
obj2.print()
obj2.obj.a = 100;
obj2.obj.b = 200;
obj2.c = 300;
obj2.d = 400;
obj2.print();