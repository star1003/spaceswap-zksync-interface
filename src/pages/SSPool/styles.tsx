import styled from 'styled-components'

export const SSPoolContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0A0417;
  width: 100%;
  height: 100vh;
`

export const SSPoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width:60%;
`

export const AddLiquidityBox = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
`
export const AddLiquidityText = styled.div`
  font-family: Inter;
  font-size: 48px;
  font-weight: 500;
  line-height: 94px;
  letter-spacing: 0.02em;
  text-align: center;
  background: conic-gradient(from -1.38deg at 55.48% 110.64%, #AE23DE -13.29deg, #FFC7F9 8.27deg, #E486FB 43.68deg, #7F4FFD 301.02deg, #AE23DE 346.71deg, #FFC7F9 368.27deg);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`


export const GridHeader = styled.div`

`
export const Table = styled.table`
  display: grid;
  border-collapse: collapse;
  width:100%;
  /* border-style : 1px solid;
  border-bottom-color: black; */
`;

export const TableWrapper = styled(Table)`
  grid-template-columns: 25% 6% 9% 25% 25%;
`;

export const TableHeader = styled.tr`
  display: contents;
  color: var(--light-text-gray);
  font-size: 14px;
`;

interface HeaderCellProps {
  align?: string;
}

export const HeaderCell = styled.th<HeaderCellProps>`
  text-align: ${props => props.align};
  padding: 10px 4px;
`;

export const TableRow = styled.tr`
  font-size: 16px;
  line-height: 18px;
  color: var(--dark-text-gray);
  text-align: center;
  cursor: pointer;
  display: contents;
`;

export const TableBody = styled.tbody`
  display: contents;
`;

interface DataCellProps {
  color?: string;
  align?: string;
  weight?: string;
  wrapText?: boolean;
}
export const DataCell = styled.td<DataCellProps>`
  color: ${props => props.color};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  white-space: ${props => (props.wrapText ? 'nowrap' : 'inherit')};
  overflow: ${props => (props.wrapText ? 'hidden' : 'inherit')};
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--line-gray);
  padding: 14px;

  a {
    text-decoration: none;
    width: 100%;

    &:hover {
      color: var(--turquois-text-onHover);
    }
  }
`;