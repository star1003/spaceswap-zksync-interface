import React, { useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { Pair } from 'spaceswap-sdk-zksync'
import { Link } from 'react-router-dom'

import Question from '../../components/QuestionHelper'
import FullPositionCard from '../../components/PositionCard'
import { useTokenBalancesWithLoadingIndicator } from '../../state/wallet/hooks'
import { TYPE } from '../../theme'
import { Text } from 'rebass'
import { LightCard } from '../../components/Card'
import { RowBetween } from '../../components/Row'
import { ButtonPrimary } from '../../components/Button'
import { AutoColumn } from '../../components/Column'

import { useActiveWeb3React } from '../../hooks'
import { usePairs } from '../../data/Reserves'
import { toV2LiquidityToken, useTrackedTokenPairs } from '../../state/user/hooks'

import { Dots } from '../../components/swap/styleds'
import {SSPoolContainer,SSPoolWrapper,AddLiquidityBox, AddLiquidityText} from './styles'


export default function SSPool() {
  const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map(tokens => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map(tpwlt => tpwlt.liquidityToken), [
    tokenPairsWithLiquidityTokens
  ])
  
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some(V2Pair => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))


  const pairWithLpTokens = useMemo(() => tokenPairsWithLiquidityTokens.map(({ tokens }) => tokens), [
    tokenPairsWithLiquidityTokens
  ])
  
  const v2AllPairs = usePairs(pairWithLpTokens)
  {/*@ts-ignore*/}
  const allV2AllPairsWithLiquidity = useMemo(
    () => v2AllPairs.map(([, pair]) => pair).filter((v): v is Pair => Boolean(v)),
    [v2AllPairs]
  )
  return (
      <SSPoolContainer>
        <SSPoolWrapper>
          <AddLiquidityBox>
            <AddLiquidityText>Liquidity Pools</AddLiquidityText>
            <ButtonPrimary id="join-pool-button" as={Link} style={{ padding: 16 , width:380 , height:68 }} to="/add/ETH">
              <Text fontWeight={500} fontSize={20}>
                +Add Liquidity
              </Text>
          </ButtonPrimary>
          </AddLiquidityBox>
          <div style={{width:'100%' , height:'1px' , background: '#7A52FE'}}/>
          <AutoColumn gap="lg" justify="start"  style={{}}>
              <Text fontSize={36} fontWeight={900} color='white'>Your Liquidity</Text>
          </AutoColumn>
        </SSPoolWrapper>
        {/* <>
        {allV2AllPairsWithLiquidity.map(v2Pair => (  
              <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
        ))}
        </> */}
        
        <AutoColumn gap="lg" justify="center" style={{display:'none'}}>
          <ButtonPrimary id="join-pool-button" as={Link} style={{ padding: 16 }} to="/add/ETH">
            <Text fontWeight={500} fontSize={20}>
              +Add Liquidity
            </Text>
          </ButtonPrimary>
 
          <AutoColumn gap="12px" style={{ width: '100%' }}>
            <RowBetween padding={'0 8px'}>
              <Text color={theme.text1} fontWeight={500}>
                Your Liquidity
              </Text>
              <Question text="When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below." />
            </RowBetween>

            {!account ? (
                <LightCard padding="40px">
                  <TYPE.body color={theme.text3} textAlign="center">
                    Connect to a wallet to view your liquidity.
                  </TYPE.body>
                </LightCard>
            ) : v2IsLoading ? (
                <LightCard padding="40px">
                  <TYPE.body color={theme.text3} textAlign="center">
                    <Dots>Loading</Dots>
                  </TYPE.body>
                </LightCard>
            ) : allV2PairsWithLiquidity?.length > 0 ? (
                <>
                  {allV2PairsWithLiquidity.map(v2Pair => (
                      <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                  ))}
                </>
            ) : (
                <LightCard padding="40px">
                  <TYPE.body color={theme.text3} textAlign="center">
                    No liquidity found.
                  </TYPE.body>
                </LightCard>
            )}

            {/* <div>
              <Text textAlign="center" fontSize={14} style={{ padding: '.5rem 0 .5rem 0' }}>
                {"Don't see a pool you joined?"}{' '}
                <StyledInternalLink id="import-pool-link" to={'/find'}>
                  {'Import it.'}
                </StyledInternalLink>
              </Text>
            </div> */}
          </AutoColumn>

        </AutoColumn>
        

      </SSPoolContainer>
  )
}
