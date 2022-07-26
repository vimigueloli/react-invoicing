import styled from 'styled-components';

interface LineProps {
  color?: string;
  bottom?: string;
  top?: string;
  height?: string;
  width?: string;
  left?: string;
  right?: string;
  justify?: string;
  align?: string;
  noPrint?: boolean;
}


export const Line = styled.div<LineProps>`
  display: flex;
  width: ${props=> props.width? props.width : 'auto'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  flex-direction: row;  
  background-color: ${props=> props.color || '#ffffff00'};
  margin-bottom: ${props=> props.bottom || '0'};
  margin-top: ${props=> props.top || '0'};
  height: ${props=> props.height || 'auto'};
  padding-left: ${props=> props.left || '0'};
  padding-right: ${props=> props.right || '0'};
  ${props => props.noPrint && `@media print { display: none; }`};
`;


interface TextProps{
    color?: string;
    size?: string;
    weight?: string;
    align?: string;
    width?: string;
}

export const Text = styled.div<TextProps>`
    width: ${props=> props.width? props.width : 'auto'};
    color: ${props=> props.color || '#000000'};
    font-size: ${props=> props.size || '14px'};
    font-weight: ${props=> props.weight || 'normal'};
    text-align: ${props=> props.align || 'left'};
`;

interface InputProps{
  weight?: string;
  width?: string;
  align?: string;
}

export const Input = styled.input<InputProps>`
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

interface ButtonProps{
    red?: boolean;
}

export const  Button = styled.button<ButtonProps>`
    cursor: pointer;
    background-color: ${props=> props.red? '#d2322d': '#3276b1'} ;
    color: #FFF;
    font-size: 16px;
    border-radius: 5px;
    height: 2em;
    padding: 0.1em 0.6em;
    border: solid 1px ${props=> props.red? '#aa2825': '#285e8e'};
    opacity: 0.8;
    :hover{
        opacity: 1;
    }
`;