import styled from 'styled-components'

const Widget = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border: 1px solid #4CAF50;
background-color: #1C1824;
border-radius: 4px;
overflow: hidden;
`;

Widget.Content = styled.header`
padding: 24px 32px 32px 32px;
& > *:first-child{
  margin-top: 0;
}

& > *:last-child{
  margin-bottom: 0;
}
ul{
  list-style:none;
  padding: 0;
}
`;

Widget.Header = styled.header`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 18px 32px;
background-color: ${({theme}) => theme.colors.secondary};
*{
  margin: 0;
}
`;

export default Widget;