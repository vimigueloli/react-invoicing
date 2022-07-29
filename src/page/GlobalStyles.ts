import styled from 'styled-components';

export const Centered = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 100px;
  padding-right: 115px;
  width:800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-clip-box: inherit;
  @media print{
    margin-left: 0;
    margin-right: 0;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

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
  grid?: number;
  noPrint?: boolean;
}

function autoCompleter(input:number){
  let output = ''
  for(let i = 0 ; i < input ; i++){
    output = output+' auto'
  }
  return output
}

export const Line = styled.div<LineProps>`
  display: ${props=> props.grid? 'grid' :'flex'};
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
  ${props => props.grid && `grid-template-columns: ${autoCompleter(props.grid)}`};
  ${props => props.grid && `grid-template-rows: auto`};
  ${props => props.noPrint && `@media print { display: none; }`};
`;

export const Separator = styled.div`
  width: full;
  border-bottom: solid 1px #e7e7e7;
`;

export const Select = styled.select`
  margin-left: 1.3em;
  margin-top: 2px;
  margin-bottom: 3px;
`;

interface TextProps{
  color?: string;
  size?: string;
  weight?: string;
}

export const Text = styled.div<TextProps>`
  color: ${props=> props.color || '#000000'};
  font-size: ${props=> props.size || '14px'};
  font-weight: ${props=> props.weight || 'normal'};
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

interface ClickableProps{
  right?: string;
  left?: string;
  size?: string;
}

export const ClickableText = styled.span<ClickableProps>`
  cursor: pointer;
  color: #1f75c0;
  padding-left: ${props=> props.left || '0'};
  padding-right: ${props=> props.right || '0'};
  font-size: ${props=> props.size || '14px'};
  :hover{
    text-decoration: underline;
    color: #14548b;
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