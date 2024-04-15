import { ArrowsClockwise, ChatCircle, Heart } from "@phosphor-icons/react";

import { Button, Container, Content, Footer, Header, Img } from "./styles";

interface TweetProps {
  content: string | undefined;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Container to={`/status/${content}`}>
      <Img src="https://github.com/brunochimenes.png" alt="Bruno Carvalho" />

      <Content>
        <Header>
          <strong>Bruno Carvalho</strong>

          <span className="nickname">@brunocarvalho</span>
        </Header>

        <p>{content}</p>

        <Footer>
          <Button type="button">
            <ChatCircle width={"1.25rem"} height={"1.25rem"} />
            20
          </Button>

          <Button type="button">
            <ArrowsClockwise width={"1.25rem"} height={"1.25rem"} />
            20
          </Button>

          <Button type="button">
            <Heart width={"1.25rem"} height={"1.25rem"} />
            20
          </Button>
        </Footer>
      </Content>
    </Container>
  );
}
