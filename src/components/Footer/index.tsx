import React from 'react'
import { isMobile } from 'react-device-detect'

import styled from 'styled-components'

import Logo from '../../assets/svg/logo_white.png'
import LogoDark from '../../assets/svg/logo_pink.png'
import BLogo from '../../assets/svg/B_white.png'
import BLogoDark from '../../assets/svg/B.png'
import DiscordLogo from '../../assets/svg/discord_white.png'
import DiscordLogoDark from '../../assets/svg/discord.png'
import DocLogo from '../../assets/svg/Doc_white.png'
import DocLogoDark from '../../assets/svg/Doc.png'
import MLogo from '../../assets/svg/M_white.png'
import MLogoDark from '../../assets/svg/M.png'
import YLogo from '../../assets/svg/Y_white.png'
import YLogoDark from '../../assets/svg/Y.png'
import Wordmark from '../../assets/svg/wordmark_white.png'
import WordmarkDark from '../../assets/svg/wordmark.png'
import { useDarkModeManager } from '../../state/user/hooks'


import Row, { RowBetween } from '../Row'
import { ExternalLink } from '../../theme'

const FooterFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 12px 0 0 0;
    width: calc(100%);
    position: relative;
  `};
`

const RowBetweenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem;
  width: 100%;
  @media screen and (max-width: 1200px){
    padding: 10rem 0;
  }
`

const FooterElement = styled.div`
  display: flex;
  flex-direction: column;
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
`

const UniIcon = styled.span`
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

const Ptext = styled.p`
  width: 420px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  line-height: 36px;
  margin-bottom: 35px;
  @media screen and (max-width: 1000px){
    width: 300px;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
` 

const UlflexElement = styled.p`
  width: 100%;
  display: flex;
` 

const FooterControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-wrap: wrap;
  `};
`

const FooterControlsUl = styled.ul`
    margin-left: 80px
    @media screen and (max-width: 1100px){
      margin-left: 40px
    }
    @media screen and (max-width: 800px){
      margin-left: 0px
    }
    ${({ theme }) => theme.mediaWidth.upToSmall`
      width: 50%;
      margin-left: 0;
      margin-top: 50px;
  `};
`


export default function Footer() {

  const [isDark] = useDarkModeManager()

  return (
    <FooterFrame>
      
      {!isMobile &&  
        <RowBetweenBox>
          <FooterElement>
            <Title href="https://app.spacefi.io">
              <UniIcon>
                <img style={{ width: '44px', height: '44px' }} src={isDark ? LogoDark : Logo} alt="logo" />
              </UniIcon>
              <TitleText>
                <img style={{ marginLeft: '4px', marginTop: '0px', width: '120px', height: '20px' }} src={isDark ? WordmarkDark : Wordmark} alt="logo" />
              </TitleText>
            </Title>
            <Ptext style={{ color: isDark ? '#000' : '#fff' }} >SpaceFi is the DeFi hub on zkSync Era with DEX+NFT+Spacebase+Launchpad, exploring the Layer2 ecosystem.</Ptext>
            <UlflexElement>
              <Title href="https://twitter.com/spacefi_io" target="_blank" >
                <UniIcon>
                  <img style={{ width: '44px', height: '44px', marginRight: '14px'}} src={isDark ? BLogoDark : BLogo} alt="logo" />
                </UniIcon>
              </Title>
              <Title href="https://discord.gg/fnEGN3E2ca" target="_blank" >
                <UniIcon>
                  <img style={{ width: '44px', height: '44px',  marginRight: '14px'}} src={isDark ? DiscordLogoDark : DiscordLogo} alt="logo" />
                </UniIcon>
              </Title>
              <Title href="https://www.youtube.com/channel/UCg_vqttyVABAfhtfZJOPykg" target="_blank" >
                <UniIcon>
                  <img style={{ width: '44px', height: '44px',  marginRight: '14px'}} src={isDark ? YLogoDark : YLogo} alt="logo" />
                </UniIcon>
              </Title>
              <Title href="https://space-finance.medium.com/" target="_blank" >
                <UniIcon>
                  <img style={{ width: '44px', height: '44px',  marginRight: '14px'}} src={isDark ? MLogoDark : MLogo} alt="logo" />
                </UniIcon>
              </Title>
              <Title href="https://docs.spacefi.io" target="_blank" >
                <UniIcon>
                  <img style={{ width: '44px', height: '44px',  marginRight: '14px'}} src={isDark ? DocLogoDark : DocLogo} alt="logo" />
                </UniIcon>
              </Title>
            </UlflexElement>
          </FooterElement>
          <FooterControls>
            <FooterControlsUl>
              <li>PRODUCTS</li>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='/#/swap'  target='_self'> Swap</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://app.spacefi.io/#/farm'  target='_blank'> Farm</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://app.spacefi.io/#/mint'  target='_blank'> NFT</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://app.spacefi.io/#/starter'  target='_blank'> Starter</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://app.spacefi.io/#/spacebase' target='_blank'> Spacebase</ExternalLink>
            </FooterControlsUl>
            <FooterControlsUl>
              <li>COMMUNITY</li>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://twitter.com/spacefi_io'  target='_blank'> Twitter</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://discord.gg/fnEGN3E2ca'  target='_blank'> Discord</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://www.youtube.com/channel/UCg_vqttyVABAfhtfZJOPykg'  target='_blank'> YouTube</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://space-finance.medium.com/'  target='_blank'> Medium</ExternalLink>
            </FooterControlsUl>
            <FooterControlsUl>
              <li>SUPPORT</li>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://docs.spacefi.io'  target='_blank'> Docs</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://drive.google.com/drive/folders/19CesXs5J8jv8GY3q-BmA5utbSQUPlD9g?usp=sharing'  target='_blank'> Media Kit</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://dexscreener.com/zksync/spacefi'  target='_blank'> DEX Screener</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://www.geckoterminal.com/zksync/spacefi_zksync/pools'  target='_blank'> GeckoTerminal</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://www.coingecko.com/en/coins/spacefi' target='_blank'> CoinGecko</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: isDark ? '#000' : '#fff' }} href='https://coinmarketcap.com/currencies/spacefi-evmos' target='_blank'> CoinMarketCap</ExternalLink>
            </FooterControlsUl>
          </FooterControls>
        </RowBetweenBox>
      }
      {isMobile &&  
        <RowBetween style={{ flexDirection: 'column' }} padding="2rem">
          <FooterElement>
            <Title href="https://app.spacefi.io">
              <UniIcon>
                <img style={{ width: '33px', height: '33px' }} src={isDark ? LogoDark : Logo} alt="logo" />
              </UniIcon>
              <TitleText>
                <img style={{ marginLeft: '4px', marginTop: '0px', width: '131px', height: '22px' }} src={isDark ? WordmarkDark : Wordmark} alt="logo" />
              </TitleText>
            </Title>
            <Ptext>SpaceFi is a cross-chain web3 platform on Evmos and zkSync, with DEX+NFT+Starter+Spacebase as initial product. The first to connect Cosmos and Layer2.</Ptext>
            <UlflexElement>
              <Title href="https://twitter.com/spacefi_io" target="_blank" >
                <UniIcon>
                  <img style={{ width: '44px', height: '44px', marginRight: '14px'}} src={isDark ? BLogoDark : BLogo} alt="logo" />
                </UniIcon>
              </Title>
              <Title href="https://discord.gg/fnEGN3E2ca" target="_blank" >
                <UniIcon>
                  <img style={{ width: '44px', height: '44px',  marginRight: '14px'}} src={isDark ? DiscordLogoDark : DiscordLogo} alt="logo" />
                </UniIcon>
              </Title>
              <Title href="https://www.youtube.com/channel/UCg_vqttyVABAfhtfZJOPykg" target="_blank" >
                <UniIcon>
                  <img style={{ width: '44px', height: '44px',  marginRight: '14px'}} src={isDark ? YLogoDark : YLogo} alt="logo" />
                </UniIcon>
              </Title>
              <Title href="https://space-finance.medium.com/" target="_blank" >
                <UniIcon>
                  <img style={{ width: '44px', height: '44px',  marginRight: '14px'}} src={isDark ? MLogoDark : MLogo} alt="logo" />
                </UniIcon>
              </Title>
              <Title href="https://docs.spacefi.io" target="_blank" >
                <UniIcon>
                  <img style={{ width: '44px', height: '44px',  marginRight: '14px'}} src={isDark ? DocLogoDark : DocLogo} alt="logo" />
                </UniIcon>
              </Title>
            </UlflexElement>
          </FooterElement>
          <FooterControls>
            <FooterControlsUl>
              <li>PRODUCTS</li>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='/#/swap'  target='_self'> Swap</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://app.spacefi.io/#/farm'  target='_blank'> Farm</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://app.spacefi.io/#/mint'  target='_blank'> NFT</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://app.spacefi.io/#/starter'  target='_blank'> Starter</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://app.spacefi.io/#/spacebase' target='_blank'> Spacebase</ExternalLink>
            </FooterControlsUl>
            <FooterControlsUl>
              <li>COMMUNITY</li>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://twitter.com/spacefi_io'  target='_blank'> Twitter</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://discord.gg/fnEGN3E2ca'  target='_blank'> Discord</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://www.youtube.com/channel/UCg_vqttyVABAfhtfZJOPykg'  target='_blank'> YouTube</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://space-finance.medium.com/'  target='_blank'> Medium</ExternalLink>
            </FooterControlsUl>
            <FooterControlsUl>
              <li>SUPPORT</li>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://docs.spacefi.io'  target='_blank'> Docs</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://drive.google.com/drive/folders/19CesXs5J8jv8GY3q-BmA5utbSQUPlD9g?usp=sharing'  target='_blank'> Media Kit</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://dexscreener.com/zksync/spacefi'  target='_blank'> DEX Screener</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://www.geckoterminal.com/zksync/spacefi_zksync/pools'  target='_blank'> GeckoTerminal</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://www.coingecko.com/en/coins/spacefi' target='_blank'> CoinGecko</ExternalLink>
              <TitleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TitleText>
              <ExternalLink style={{ color: '#fff' }} href='https://coinmarketcap.com/currencies/spacefi-evmos' target='_blank'> CoinMarketCap</ExternalLink>
            </FooterControlsUl>
          </FooterControls>
        </RowBetween>
      }
    </FooterFrame>
  )
}
