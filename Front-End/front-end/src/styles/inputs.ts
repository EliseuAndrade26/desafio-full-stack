import styled from "styled-components";

export const StyledInput = styled.input`
  border: 2px solid transparent;
  border-radius: 4px;
  padding: 10px;
  color: var(--color__grey__50);
  :focus {
    outline-color: var(--color__primary__50);
  }
`;
