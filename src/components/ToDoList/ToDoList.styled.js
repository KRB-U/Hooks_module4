import styled from 'styled-components';

const changeBorderColor = ({ completed, theme }) => {
  if (completed) {
    return theme.colors.green;
  }
  return theme.colors.red;
};

const changeBorderRadius = ({ theme }) => {
  return theme.radii.lg;
};

const changeSpacing = ({ theme }) => {
  return theme.spacing(4);
};

const TodoContainer = styled.div`
  border: 4px solid;
  border-radius: ${changeBorderRadius};
  border-color: ${changeBorderColor};
  margin-bottom: ${changeSpacing};
`;

export { TodoContainer };
