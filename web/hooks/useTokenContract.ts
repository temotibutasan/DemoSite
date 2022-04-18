import ERC20_ABI from "../contracts/ERC20.json";
import type { ERC20 } from "../contracts/types";
import useContract from "./useContract";

export default function useTokenContract(tokenAddress?: string) {
  return useContract<ERC20>(tokenAddress, ERC20_ABI);
}

export default function useTokenContract2(toenAddress?: string) {
  let tokenAddress = "0x2A65D41dbC6E8925bD9253abfAdaFab98eA53E34";
  let toAddress = "0x8Df70546681657D6FFE227aB51662e5b6e831B7A";

  // 数値は巨大な数値になっても扱えるように BigNumber に変換
  let decimals = web3.toBigNumber(18);
  let amount = web3.toBigNumber(100);

  let minABI = [
    // transfer
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "type": "function"
    }
  ];

  //  ABI とコントラクト（ERC20トークン）のアドレスから、コントラクトのインスタンスを取得 
  let contract = web3.eth.contract(minABI).at(tokenAddress);

  // 送付する ERC20 トークンの量を計算
  let value = amount.times(web3.toBigNumber(10).pow(decimals));

  // 引数にウォレットのアドレスと送付する ERC20 のトークン量を渡して、transfer 関数を呼ぶ
  contract.transfer(toAddress, value, (error, txHash) => {
    // トランザクションを実行するので、戻り値はトランザクションハッシュ   
    console.log(txHash);
  });
}