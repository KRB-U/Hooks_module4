import styled from 'styled-components';

const TodoContainer = styled.div`
  border: 2px solid;
  border-radius: 5px;
  border-color: ${({ completed }) => {
    if (completed) {
      return 'green';
    }
    return 'red';
  }};
  margin-bottom: 5px;
`;

export { TodoContainer };
