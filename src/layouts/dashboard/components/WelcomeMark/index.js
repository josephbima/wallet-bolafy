import React from "react";

import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import welcome from "assets/images/welcome-profile.png";
import VuiButton from "components/VuiButton";

// Ramper
import {
  CHAIN,
  getRamperSigner,
  getUser,
  getWalletModel,
  init,
  openWallet,
  sendToken,
  signIn,
  signOut,
  User,
} from '@ramper/ethereum'
import { ethers } from 'ethers'
import { useMemo, useState } from 'react'
import axios from 'axios'

init({
  appId: 'hfokugwirb',
  appName: 'Polygon Test App',
  walletProviders: ['metamask'],
  defaultTokenAddresses: ['0x514910771af9ca656af840dff83e8264ecf986ca'],
  theme: 'dark',
  network: 'matic',
  authProviders: ['google', 'facebook', 'twitter', 'apple', 'email'],
})

const ALC_MATICMUM = 'pb7U0MNEw_0Pj8k4OvRXBikPlaA0Igt3'
const MATICMUM_ID = 80001

const ALC_POLYGON = 'lNBdnJqMlx6W92SYs4c8nO6C_kGaDvtK'
const MATIC_ID = 137

// NFTPort Consts
const alchemy = new ethers.providers.AlchemyProvider(MATIC_ID, ALC_POLYGON)



const WelcomeMark = () => {
  const [user, setUser] = useState(getUser())
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const wallet = useMemo(() => {
    return user ? getWalletModel(window.localStorage, CHAIN.ETHEREUM) : null
  }, [user])

  const handleSignIn = async () => {
    const signInResult = await signIn()
    setUser(signInResult.user ?? null)
  }

  const handleWalletInfo = () => {
    // console.log(wallet)
    if (address.length === 0){
    setLoading(true)
    if (wallet){
      setAddress(wallet.publicKey)}
  }
    // console.log('wa',wallet)
  }

  const userInfo = () => {
    console.log(getUser())
    // return getUser()
  }

  const handleOpenWalletView = () => {
    openWallet()
  }


  return (
    <Card sx={() => ({
      height: "340px",
      py: "32px",
      backgroundImage: `url(${welcome})`,
      backgroundSize: "cover",
      backgroundPosition: "50%"
    })}>
      <VuiBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <VuiBox>
          <VuiTypography color="text" variant="button" fontWeight="regular" mb="12px">
            Selamat Datang
          </VuiTypography>
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="18px">
            Francis Ferdinand
          </VuiTypography>
          <VuiTypography color="text" variant="h6" fontWeight="regular" mb="auto">
            Yuk, bikin wallet dengan mudah dan gratis
            <br /> Cukup dengan email.
          </VuiTypography>

          
        </VuiBox>
        <VuiTypography
          component="a"
          href="#"
          variant="button"
          color="white"
          fontWeight="regular"
          sx={{
            mr: "5px",
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",

            
          }}
        >
          <VuiButton onClick={handleSignIn} variant="gradient" color="info"> Klaim Dompet Bolafy Saya <Icon>lock</Icon> </VuiButton>
          
        </VuiTypography>
      </VuiBox>
    </Card>
  );
};

export default WelcomeMark;
