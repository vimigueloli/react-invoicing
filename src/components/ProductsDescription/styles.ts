import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';
interface InputProps{
    weight?: string;
    width?: string;
    align?: string;
}

export const NumberInput = styled(CurrencyInput)<InputProps>`
    font-weight: ${props=> props.weight || 'normal'};
    border: 1px solid #FFF;
    padding: 4px;
    width: ${props=> props.width || 'auto'};
    text-align: ${props=> props.align || 'left'};
    :hover{
        border: 1px solid #CCC;
    }
    :focus{
        border: 1px solid #CCC;
    }
`;

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    border-spacing: 0;
    tr{
        height: 2.6em;
        border-bottom: solid 1px #e7e7e7;
    }
`;

interface TableRowProps{
    dark?: boolean;
}

export const Tr = styled.tr<TableRowProps>`
    background-color: ${props=> props.dark? '#f9f9f9': '#00000000'};
`;

interface TableCellProps{
    right?: boolean;
    left?: boolean;
    align?: string;
}
export const Td = styled.td<TableCellProps>`
    position:relative;
    padding-left: ${props=> props.left ? '1em' : '0'};
    padding-right: ${props=> props.right ? '1em' : '0'};
`;