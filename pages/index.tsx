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
import {myFunctionJPYC} from "../pages/api/index2" 


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
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    width                 : '500px',
    height                : '300px',
    transform             : 'translate(-50%, -50%)'
  }
};

// アプリのルートを識別するクエリセレクタを指定する。
Modal.setAppElement('#__next')

function App() {
  const [show, setShow] = useState(false);
  const [sendJpycTo, setsendJpycTo] = useState("");
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;

  // モーダルを開く処理
  const openModal = () => {
    setShow(true);
  }

  // モーダルを開く処理
  const showSendJpycModalDialog = (sendTo: string) => {
    setShow(true);
    setsendJpycTo(sendTo);
  }

  const afterOpenModal = () => {
    // モーダルが開いた後の処理
  }

  // モーダルを閉じる処理
  const closeModal = () => {
    setShow(false);
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

        {/** 接続情報 */}
        {isConnected && (
          <section>
            <ETHBalance />
            <TokenBalance tokenAddress={JPYC_TOKEN_ADDRESS} symbol="JPYC" />
          </section>
        )}
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
          >
            <SendJpycDialog sendTo={sendJpycTo} onCancel={closeModal} onApprove={closeModal} />
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