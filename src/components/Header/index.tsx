import { ChainId } from 'spaceswap-sdk-zksync'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import styled from 'styled-components'

import Logo from '../../assets/svg/logo_white.png'
import LogoDark from '../../assets/svg/logo_pink.png'
import Wordmark from '../../assets/svg/wordmark_white.png'
import WordmarkDark from '../../assets/svg/wordmark.png'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'

import { YellowCard } from '../Card'
import Settings from '../Settings'
import Menu from '../Menu'

import Row, { RowBetween } from '../Row'
import Web3Status from '../Web3Status'
import VersionSwitch from './VersionSwitch'
import { ExternalLink } from '../../theme'

const HeaderTopTip = styled.div`
  width: 100%; 
  font-size: 12px; 
  padding: 6px 10px; 
  background-color: rgba(0,0,0,0.4); 
  display: flex; 
  justify-content: center; 
  color: #fff;
  flex-wrap: wrap;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

const BadgeTip = styled.span`
  position: absolute;
  right: 0;
  top: -15px;
  padding: 0 10px;
  font-size: 12px;
  color: #ffffff;
  border: 1px solid #f56c6c;
  border-radius: 10px;
  background-color: #f56c6c;
  transform: translateX(50%) scale(.8);  
`

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 0.5rem;
`};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;

  :hover {
    cursor: pointer;
  }
`

const TitleText = styled(Row)`
  width: fit-content;
  white-space: nowrap;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    img { 
      width: 4.5rem;
    }
  `};
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-end;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`



const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: null,
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.EVMOSTEST]: 'evmostest',
  [ChainId.EVMOS]: 'evmos',
  [ChainId.CELO]: 'celo',
  [ChainId.CELOALFAJORES]: 'celo-alfajores',
  [ChainId.ZKSYNCTEST]: 'zksync-test',
  [ChainId.ZKSYNC]: 'zksync',
  [ChainId.SCROLLTEST]: 'scroll-test',
}

const NETWORK_TOKEN: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: 'ETH',
  [ChainId.RINKEBY]: 'ETH',
  [ChainId.ROPSTEN]: 'ETH',
  [ChainId.GÖRLI]: 'ETH',
  [ChainId.KOVAN]: 'ETH',
  [ChainId.EVMOSTEST]: 'tEVMOS',
  [ChainId.EVMOS]: 'EVMOS',
  [ChainId.CELO]: 'CELO',
  [ChainId.CELOALFAJORES]: 'CELO',
  [ChainId.ZKSYNCTEST]: 'ETH',
  [ChainId.ZKSYNC]: 'ETH',
  [ChainId.SCROLLTEST]: 'ETH',
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  const [isDark] = useDarkModeManager()

  if(typeof(chainId) !== 'undefined' && account !== null && chainId === 42220){
    window.location.href = 'https://swap-celo.spacefi.io'
  }
  if(typeof(chainId) !== 'undefined' && account !== null && chainId === 44787){
    window.location.href = 'https://swap-celoalfa.spacefi.io'
  }
  if(typeof(chainId) !== 'undefined' && account !== null && chainId === 9000){
    window.location.href = 'https://swap-tevmos.spacefi.io'
  }
  if(typeof(chainId) !== 'undefined' && account !== null && chainId === 9001){
    window.location.href = 'https://swap-evmos.spacefi.io'
  }
  if(typeof(chainId) !== 'undefined' && account !== null && chainId === 280){
    window.location.href = 'https://swap-zksynctest.spacefi.io'
  }
  if(typeof(chainId) !== 'undefined' && account !== null && chainId === 534353){
    window.location.href = 'https://swap-scroll-testnet.spacefi.io'
  }
  if(typeof(chainId) !== 'undefined' && account !== null && chainId === 534351){
    window.location.href = 'https://swap-scroll-sepolia-testnet.spacefi.io'
  }



  return (
    <HeaderFrame>
      <HeaderTopTip>
        SpaceFi released
        <ExternalLink style={{ color: '#ab4df6',textDecoration: 'underline', padding: '0 3px' }} href='https://twitter.com/spacefi_io/status/1685962313109532673' target='_blank'>SpaceFi 2.0 Plan</ExternalLink>
        and the 3nd SPACE
        <ExternalLink style={{ color: '#ab4df6',textDecoration: 'underline', padding: '0 3px' }} href='https://twitter.com/spacefi_io/status/1701182021090079051' target='_blank'>Buyback & Burn: 160750 SPACE</ExternalLink>
      </HeaderTopTip>
      <RowBetween style={{ alignItems: 'flex-start' }} padding="1rem 1rem 0 1rem">
        <HeaderElement>
          <Title href=".">
            <UniIcon>
              <img style={{ width: '32px', height: '32px' }} src={isDark ? LogoDark : Logo} alt="logo" />
            </UniIcon>
            <TitleText>
              <img style={{ marginLeft: '4px', marginTop: '0px', width: '96px', height: '16px' }} src={isDark ? WordmarkDark : Wordmark} alt="logo" />
            </TitleText>
          </Title>

          {!isMobile && <ExternalLink href='/#/swap'  target='_self'> Swap</ExternalLink>}
          {!isMobile &&  <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>}
          {!isMobile && <ExternalLink href='/#/pool'  target='_self'> Pool</ExternalLink>}
          {!isMobile &&  <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>}
          {!isMobile && <ExternalLink href='https://app.spacefi.io/#/farm'  target='_self'> Farm</ExternalLink>}
          {!isMobile && <ExternalLink href='https://app.spacefi.io/#/farm'  target='_self'><TitleText style={{ fontSize:'10px', color:'#FFA07A'}}>&nbsp;(APR~650%)</TitleText></ExternalLink>}
          {!isMobile &&  <TitleText style={{ fontSize:'10px', color:'#FFA07A'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>}
          {!isMobile && <ExternalLink href='https://dexscreener.com/zksync/spacefi'  target='_blank'> Info</ExternalLink>}
          {!isMobile &&  <TitleText style={{ fontSize:'10px', color:'#FFA07A'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>}
          {!isMobile && <ExternalLink href='https://app.spacefi.io/#/bridge'  target='_self'> Bridge</ExternalLink>}
          {!isMobile &&  <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>}
          {!isMobile && <ExternalLink href='https://app.spacefi.io/#/points' target='_self' style={{ position: 'relative' }}> <BadgeTip>Live</BadgeTip> Points</ExternalLink>}
          {!isMobile &&  <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>}
          {!isMobile && <ExternalLink href='https://app.spacefi.io' target='_self'> Back Home</ExternalLink>}

        </HeaderElement>

        <HeaderControls>
          <HeaderElement>
            <TestnetWrapper>

              {!isMobile && chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
            </TestnetWrapper>
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                  {userEthBalance?.toSignificant(4)}
                </BalanceText>
              ) : null} {!isMobile && chainId && NETWORK_TOKEN[chainId] && <Text>{NETWORK_TOKEN[chainId]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
          <HeaderElementWrap>
            <VersionSwitch />
            <Settings />
            <Menu />
          </HeaderElementWrap>
        </HeaderControls>
      </RowBetween>
    </HeaderFrame>
  )
}
