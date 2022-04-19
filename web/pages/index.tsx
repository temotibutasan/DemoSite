import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import ListItmes from "../components/ListItmes";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import styled from "styled-components";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
//const JPYC_TOKEN_ADDRESS = "0x2370f9d504c7a6E775bf6E14B3F12846b594cD53";
const JPYC_TOKEN_ADDRESS = "0xbD9c419003A36F187DAf1273FCe184e1341362C0";
const MATIC_TOKEN_ADDRESS = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";


function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>

      <MyHeader>
        <nav>
          <title>next-web3</title>
          <link rel="icon" href="/favicon.ico" />
          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </MyHeader>

      <main>
        <h1>
          勝手に応援
        </h1>

        {/** 接続情報 */}
        {isConnected && (
          <section>
            <ETHBalance />
            <TokenBalance tokenAddress={MATIC_TOKEN_ADDRESS} symbol="MATIC" />
            <TokenBalance tokenAddress={JPYC_TOKEN_ADDRESS} symbol="JPYC" />
            <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
          </section>
        )}
        <ListItmes />
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;

const MyHeader = styled.header`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background-color: black;
`;