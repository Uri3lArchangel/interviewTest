import React, { useEffect, useState } from "react";
// import Link from 'next/link'
import { Link } from "react-scroll";
import { Button } from "react-bootstrap";
import logo from "../../photos/EtherLogo-removebg.png";
import { button, navBar } from "./header";
import Image from "next/image";
import { connectWallet, web3Provider } from "../Utils/walletconnection";
import { useRouter } from "next/router";

export default function Header({ infurakey, formatic }) {
  const router = useRouter()
  const [connected,setConnectd] = useState(false)
  useEffect(()=>{
    if(web3Provider){
      setConnectd(true)
      window.ethereum.on("accountsChanged",(accounts)=>{
          if(accounts.length === 0){router.reload()}
        
      })
    }else{
      console.log(web3Provider)
      setConnectd(false)
    }
  },[connected]) 
  return (
    <>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg"
          // style={{background: 'rgba(204, 204, 204, 0.5)'}}>
          style={navBar}
        >
          <div className="container-fluid ">
            <Link
              className="navbar-brand"
              style={{ color: "black" }}
              href="#home"
            >
              <Image
                src={logo}
                width="110px"
                height="20"
                style={{ fontSize: "22px", fontWeight: "bold" }}
                alt="Ethrtainment"
              />
              EthrtainmentLive
            </Link>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link
                  to="home"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="how"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  How It Works
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="events"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="stream"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Streaming
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {connected?<></>:<Button style={button} onClick={async()=>{await connectWallet(formatic,infurakey);}}>
            Connect
          </Button>}
        </nav>
      </div>
    </>
  );
}

