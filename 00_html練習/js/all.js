var age = 18;
var age = 20;

const a = "ben";
const str = `hello, ${a} hava a nice day`;
console.log(str);
console.log(str.replace('ben','Bill'))

const str1="Javascript and Javascript are hard to learn!";
console.log(str1.replace('Javascript','java'));
console.log(str1.toUpperCase());

const data = [3,4,6];
data[0] = 1;
data[1] = 2;
data[2] = 3;
console.log(data);

console.log(1=='1')  //ture，驗值
console.log(1==='1') //false ，驗值和型別

x = (1=='1') && (1==='1');
     //true       false

y = (1!='1') || (10==='10');
    //false       false
z = !(1==='1') //true
console.log(x,y,z);

let p = "asdfsdfdsfadfdsafsdfsdfadfsdf"
console.log(p.length);
console.log(p.indexOf('s'));
console.log(p.lastIndexOf('s'));
// let str = "gdsgdfsgjsdfgdfsegsdfgdfsg"
// console.log(str.length); //得到:26

let c = "My name is Ben";
console.log(c.slice(3,7));

let d = "b,c,d,e,f,g";
console.log(d[1]);
let d1 =d.split(',');
console.log(d1[1]);


let num = 123;
console.log(typeof(num));

let num1 = num.toString();
console.log(typeof(num1));

let num2=3.1415926;
console.log(num2.toFixed(2));
let num3=parseInt(num2);
console.log(num3);


let data9=new Map();
data9.set('Ben','boy');
data9.set('Mary','girl');
data9.set('Kevin','male');
console.log(data9.size);
console.log(data9.get('Ben'));
console.log(data9.has('ben'));
for(let value of data9.values()){
    console.log(value);
}
data9.delete('Ben');
console.log(data9.size);

data9.clear();
console.log(data9.size);

let dat = new Date();
console.log(dat);

let dat1 = new Date(2023,0,01,08,30,20,20);
console.log(dat1);

let dat2 = new Date('2023/02/24');
console.log(dat2);

//json檔的編譯
let obj = JSON.parse('{"aaa":1,"bbb":2}');
console.log(obj.aaa);

//做完之後才使用json檔印出
let obj1 = {aaa:1,bbb:2};
console.log(JSON.stringify(obj1.aaa));
