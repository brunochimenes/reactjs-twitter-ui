import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = styled.aside`
  padding: 1.5rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 700px) {
    padding: 1.5rem 0.75rem;
    align-items: center;
  }
`;

export const LogoImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const NewTweet = styled.button`
  background: ${({ theme }) => theme.color.primary};
  border-radius: 9999px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 900;
  border: 0;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 700px) {
    .button-icon {
      display: block;
    }

    .button-text {
      display: none;
    }
  }
`;

export const MainNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const NavLink = styled(BaseNavLink)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.color.primary};
  }

  @media (max-width: 700px) {
    .link-text {
      display: none;
    }
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;

  @media (max-width: 700px) {
    .link-text {
      display: none;
    }
  }
`;
