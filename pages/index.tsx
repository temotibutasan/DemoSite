import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import ListItems from "../components/ListItems";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import Modal from 'react-modal';
import { useState } from 'react';
import SendJpycDialog from "../components/dialog/SendJpycDialog";
import { ethers } from "ethers";
import useJpycSupportContract, { testSmartContract } from "../hooks/useJpycSupportContract";
import useJpycContract from "../hooks/useJpycContract";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
const JPYC_TOKEN_ADDRESS = "0xbD9c419003A36F187DAf1273FCe184e1341362C0";
const MATIC_TOKEN_ADDRESS = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";

// スタイリング
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  content : {
    width                 : '1px',
    height                : '1px',
  }
};

// アプリのルートを識別するクエリセレクタを指定する。
Modal.setAppElement('#__next')

function App() {
  const [show, setShow] = useState(false);
  const [sendJpycTo, setsendJpycTo] = useState("");
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();

  // sol
  const JSContract = useJpycSupportContract();
  const JContract = useJpycContract();

  // 連係情報
  // metamask
  const isConnected = typeof account === "string" && !!library;
  // twitter
  const [tiwtterID, setTiwtterID] = useState("未連携");

  const testClick = async () => {
    // 10, "toTwId1", 
    const inputYen = 10;
    const inputToTwId = "toTwId1";
    const inputFromTwId = "fromTwId1";
    const jpyc = ethers.utils.parseUnits(String(inputYen), 18);
    let tx = await JContract.approve(testSmartContract, jpyc);
    await JSContract.createProject(inputToTwId, inputFromTwId, JSContract.address, jpyc);
  }
  
  // モーダルを開く処理
  const openModal = () => {
    setShow(true);
  }

  const afterOpenModal = () => {
    // モーダルが開いた後の処理
  }

  // モーダルを閉じる処理
  const closeModal = () => {
    setShow(false);
  }

  // モーダルを開く処理
  const showSendJpycModalDialog = (sendTo: string) => {
    setShow(true);
    setsendJpycTo(sendTo);
  }
  const sendJpyc = async () => {
    alert(`Send Jpyc`);
  }

  return (
    <div>
      <Head>
        <title>next-web3-boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>國光dao有志</a>
          </Link>

          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>

      <main>
        <h1>
          勝手に応援
        </h1>
        {/** twitter連携 */}
        {
          <section>
            <h2>{`Twitter連携ID : ${tiwtterID}`}</h2>
          </section>
        }
        {/** 接続情報 */}
        {isConnected && (
          <section>
            <ETHBalance />
            <TokenBalance tokenAddress={JPYC_TOKEN_ADDRESS} symbol="JPYC" />
          </section>
        )}
        <button onClick={testClick}>検証用</button>
        <ListItems showSendJpycDialog={showSendJpycModalDialog} />
      </main>
      {show && (
        <Modal
            // isOpenがtrueならモダールが起動する
            isOpen={show}
            // モーダルが開いた後の処理を定義
            onAfterOpen={afterOpenModal}
            // モーダルを閉じる処理を定義
            onRequestClose={closeModal}
            // スタイリングを定義
            style={customStyles}

            childern={}
          >
            <SendJpycDialog sendTo={sendJpycTo} onCancel={closeModal} onApprove={sendJpyc} />
          </Modal>
        )
      }
      <style jsx>{`
        nav {
          display: onCancelflex;
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

export default App;
