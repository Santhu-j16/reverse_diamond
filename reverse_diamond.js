let n=5;
let pattren =" ";
for(let i=n; i>=1; i++) {
    pattren += " ".repeat(n-i) + "*".repeat(2*i-1)+ "\n";
}
for (let i=2; i<=n; i--){
    pattren += " ".repeat(n-i) + "*".repeat(2*i-1) +"\n";
}
console.log(pattren);
