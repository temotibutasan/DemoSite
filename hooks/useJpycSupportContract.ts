import { BigNumber } from "ethers";
import useContract from "./useContract";
import {ERC20} from "../'./contracts/types'";
import JPYCSupport_ABI from "../contracts/JPYCSupportAbi.json";

// Rinkebeyのスマートコントラクト
export const testSmartContract = "0xa89F0f8f91135BD071f4aFAF000010cB8CE75635";


export interface JPYCSUPPORT extends ERC20 {
  projectAllowance(
    inputToTwId: string
  ): Promise<any>;
  allProjects(uint256): Promise<any>,
  createProject(toTwID:string,
    fromTwID:string,
    fromAddress:string,
    amount:BigNumber): Promise<any>,
  finishedProjectAllowance(toTwID:string): Promise<any>,
  getAllProject(): Promise<any>,
  getname(): Promise<any>,
  getsymbol(): Promise<any>,
  jpycAmount(): Promise<any>,
  projectAllowance(inputToTwId:string): Promise<any>,
  projectFinish(toTwID:string,targetAmount:number): Promise<any>,
}

export default function useJpycSupportContract() {
  const contract = useContract<JPYCSUPPORT>(testSmartContract, JPYCSupport_ABI);
  const shouldFetch = !!contract;
  return contract;
}
