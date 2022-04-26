import useContract from "./useContract";
import {ERC20} from "../'./contracts/types'";
import JPYC_ABI from "../contracts/JPYCAbi.json";

// Rinkebeyのスマートコントラクト
export const JPYC_TOKEN_ADDRESS = "0xbD9c419003A36F187DAf1273FCe184e1341362C0";

export default function useJpycContract() {
  const contract = useContract<ERC20>(JPYC_TOKEN_ADDRESS,JPYC_ABI);
  const shouldFetch = !!contract;
  return contract;
}
