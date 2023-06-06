import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  gap: 15px;
  background-color: var(--color__secondary);

  > h2 {
    align-self: center;
    margin-bottom: 15px;
  }

  > span {
    align-self: center;
  }

  > p {
    color: var(--negative);
  }

  @media (min-width: 768px) {
    width: 375px;
    align-self: center;
    margin: 0;
    padding: 10px;
  }
`;
