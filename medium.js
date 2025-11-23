function ceateWallet()
{
  return{
    addMonet:function(amount){
      balance+=amount;
    },
    checkBalance:function(){
      return balance;
    }
  };
}
//const myWallet = createWallet();
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700
