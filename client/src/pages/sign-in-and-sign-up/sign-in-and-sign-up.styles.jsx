import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 1000px) {
    padding: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 45px;
  }
`;
