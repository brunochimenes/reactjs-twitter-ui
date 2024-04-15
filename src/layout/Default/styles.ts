import styled from "styled-components";

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 300px 1fr;

  @media (max-width: 700px) {
    grid-template-columns: 88px 1fr;
  }
`;

export const Content = styled.div`
  border-left: 1px solid ${({ theme }) => theme.color.border};
  border-right: 1px solid ${({ theme }) => theme.color.border};
`;
