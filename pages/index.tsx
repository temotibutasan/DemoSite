import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import ListItems from "../components/ListItems";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
const JPYC_TOKEN_ADDRESS = "0xbD9c419003A36F187DAf1273FCe184e1341362C0";
const MATIC_TOKEN_ADDRESS = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";


function Home() {
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>next-web3-boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>國光DAO有志</a>
          </Link>

          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>

      <main>
        <h1>
          勝手に応援
        </h1>

        {/** 接続情報 */}
        {isConnected && (
          <section>
            <ETHBalance />
            <TokenBalance tokenAddress={JPYC_TOKEN_ADDRESS} symbol="JPYC" />
          </section>
        )}
        <ListItems />
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          height:80px;
          left:20px;
          rigth:20px;
          background-color: black;
          align-items: center;
        }

        main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;