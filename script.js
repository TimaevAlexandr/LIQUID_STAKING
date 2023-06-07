//метод для переходов stake/unstake


var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
var label = document.getElementById('label_status');
const abi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"Stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UnStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
var state = 0;


// вывод того что получам при стейке
var input_field_of_stake = document.getElementById('Stake_entry');
var output_of_stake = document.getElementById('stake_get');

input_field_of_stake.addEventListener("input", () => {
    output_of_stake.textContent = `Что получаешь: ${input_field_of_stake.value * 1.1} BST`;
});


// вывод того что получаем при антсейке
var input_field_of_unstake = document.getElementById('unStake_entry');
var output_of_unstake = document.getElementById('unstake_get');

input_field_of_unstake.addEventListener("input", () => {
    output_of_unstake.textContent = `Что получаешь: ${input_field_of_unstake.value } ether`;
});


window.Stake = async () => {


    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract('0x185Fb7FB6D4Ed364d739916f39fD9f50A3d4bc62', abi, signer);


    var amount_to_stake = document.getElementById('Stake_entry').value;
    if(amount_to_stake == 0){
        return;
    }
    console.log("staking", amount_to_stake);

    var res1 = await contract.Stake()({ value: ethers.utils.parseEther(amount_to_stake), sender: signer});

}

window.UnStake = async (string_amount_to_unstake) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();

    var amount_to_unstake = Number(string_amount_to_unstake);
    if(amount_to_unstake == 0){
        return;
    }
    const contract = new ethers.Contract('0x185Fb7FB6D4Ed364d739916f39fD9f50A3d4bc62', abi, signer);

    var res2 = await contract.UnStake(amount_to_unstake)({ sender: signer});
    console.log("unstaking", amount_to_unstake);

  }








function change_to_stake()
{
    x.style.left='-420px';
    y.style.left='75px';
    z.style.left='110px';

};


function change_to_unstake()
{
    x.style.left='75px';
    y.style.left='475px';
    z.style.left='0px';
}

function to_stake(){
    button_stake = document.getElementById('btn');
}


window.connect = async () => {

    const button = document.getElementById("wallet-button");
    const showAccount = document.querySelector('.showAccount');
    //const showBalance = document.querySelector('.showBalance');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    account = await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner().getAddress();



    //showBalance.innerHTML = signer;
    button.innerHTML = "CONNECTED";

}

//метод для анимированного появления
AOS.init();