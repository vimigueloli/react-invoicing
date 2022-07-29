import styled from 'styled-components';

export const Centered = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 1em;
  padding-right: 1em;
  margin-top: 1em;
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

export const Separator = styled.div`
  width: full;
  border-bottom: solid 1px #e7e7e7;
`;


