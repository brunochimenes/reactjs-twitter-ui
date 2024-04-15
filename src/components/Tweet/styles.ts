import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled(Link)`
  padding: 1.5rem 1.25rem;
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  text-decoration: none;
`;

export const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .nickname {
    font-size: 0.875rem;
    color: #89a2b8;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 0.75rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0.875rem;
  color: #89a2b8;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
