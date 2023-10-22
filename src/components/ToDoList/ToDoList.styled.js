import styled from 'styled-components';

const changeBorderColor = ({ completed, theme }) => {
  console.log(theme);
  if (completed) {
    return theme.colors.green;
  }
  return theme.colors.red;
};

const TodoContainer = styled.div`
  border: 4px solid;
  border-radius: 10px;
  border-color: ${changeBorderColor};
  margin-bottom: 5px;
`;

export { TodoContainer };
