import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  > div {
    display: flex;
    gap: 2rem;
    padding: 1rem;
    border-radius: 4px;

    > form {
      align-self: start;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      width: 375px;
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    margin: 15px 0 30px 0;
  }
`;
