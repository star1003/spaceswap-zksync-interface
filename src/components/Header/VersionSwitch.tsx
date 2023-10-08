import { stringify } from 'qs'
import React, { useCallback, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import useParsedQueryString from '../../hooks/useParsedQueryString'
import useToggledVersion, { Version } from '../../hooks/useToggledVersion'
import { MouseoverTooltip } from '../Tooltip'



interface VersionToggleProps extends React.ComponentProps<typeof Link> {
  enabled: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VersionToggle = styled(({ enabled, ...rest }: VersionToggleProps) => <Link {...rest} />)<VersionToggleProps>`
  border-radius: 12px;
  opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
  cursor: ${({ enabled }) => (enabled ? 'pointer' : 'default')};
  background: ${({ theme }) => theme.bg3};
  color: ${({ theme }) => theme.primary1};
  display: flex;
  width: fit-content;
  margin-left: 0.5rem;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`

export default function VersionSwitch() {
  const version = useToggledVersion()
  const location = useLocation()
  const query = useParsedQueryString()
  const versionSwitchAvailable = location.pathname === '/swap' || location.pathname === '/send'

  const toggleDest = useMemo(() => {
    return versionSwitchAvailable
      ? {
          ...location,
          search: `?${stringify({ ...query, use: version === Version.v1 ? undefined : Version.v1 })}`
        }
      : location
  }, [location, query, version, versionSwitchAvailable])

  const handleClick = useCallback(
    e => {
      if (!versionSwitchAvailable) e.preventDefault()
    },
    [versionSwitchAvailable]
  )

  const toggle = (
    <VersionToggle enabled={versionSwitchAvailable} to={toggleDest} onClick={handleClick}>

    </VersionToggle>
  )
  return versionSwitchAvailable ? (
    toggle
  ) : (
    <MouseoverTooltip text="This page is only compatible with Uniswap V2.">{toggle}</MouseoverTooltip>
  )
}
