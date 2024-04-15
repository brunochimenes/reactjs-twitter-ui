import styled from "styled-components";

export const NewTweetForm = styled.form`
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TweetLabel = styled.label`
  display: flex;
  gap: 0.75rem;
`;

export const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
`;

export const TweetTextarea = styled.textarea`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
  border: 0;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0.75rem;
  resize: none;
  color: ${({ theme }) => theme.color.text};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.text};
  }
`;

export const Button = styled.button.attrs({
  type: "submit",
})`
  margin-left: auto;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 900;
  border: 0;

  &:hover {
    filter: brightness(0.9);
  }
`;
