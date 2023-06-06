import styled from "styled-components";

export const ButtonPrimaryLarge = styled.button`
  height: 3.75rem;
  color: var(--color__grey__0);
  background-color: var(--color__primary);
  padding: 0.625rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  :hover {
    background-color: var(--color__primary__50);
  }
`;

export const ButtonGreyLarge = styled.button`
  height: 3.75rem;
  color: var(--color__grey__100);
  background-color: var(--color__grey__0);
  padding: 0.625rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  :hover {
    color: var(--color__grey__0);
    background-color: var(--color__primary);
  }
`;

export const ButtonPrimaryMedium = styled.button`
  height: 2.5rem;
  color: var(--color__grey__0);
  background-color: var(--color__primary);
  padding: 0.625rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  :hover {
    background-color: var(--color__primary__50);
  }
`;

export const ButtonGreyMedium = styled.button`
  width: 100%;
  height: 2.5rem;
  color: var(--color__grey__100);
  background-color: var(--color__grey__0);
  padding: 0.625rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  :hover {
    color: var(--color__grey__0);
    background-color: var(--color__primary);
  }
`;
