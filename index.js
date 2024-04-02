const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');

// Set up Ethereum node connection
const provider = new HDWalletProvider('YOUR_MNEMONIC', 'https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY');
const web3 = new Web3(provider);

// Set up recipient addresses and amounts
const recipients = [
  { address: '0x123...', amount: web3.utils.toWei('0.1', 'ether') },
  { address: '0x456...', amount: web3.utils.toWei('0.2', 'ether') },
  { address: '0x789...', amount: web3.utils.toWei('0.3', 'ether') },
];

// Send ether to recipients
async function sendEther() {
  for (const recipient of recipients) {
    await web3.eth.sendTransaction({
      from: web3.eth.defaultAccount,
      to: recipient.address,
      value: recipient.amount,
      gas: 21000,
      gasPrice: web3.utils.toWei('10', 'gwei'),
    });

    console.log(`Sent ${web3.utils.fromWei(recipient.amount, 'ether')} ether to ${recipient.address}`);
  }
}

// Send ether to recipients every hour
setInterval(sendEther, 60 * 60 * 1000);
