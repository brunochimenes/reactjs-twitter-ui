import { FormEvent, KeyboardEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { PaperPlaneRight } from "@phosphor-icons/react";

import {
  AnswerTweetForm,
  Button,
  Img,
  TweetLabel,
  TweetTextarea,
} from "./styles";

import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);

  const { content } = useParams();

  function handleCreateNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main>
      <Tweet content={content} />

      <Separator />

      <AnswerTweetForm onSubmit={handleCreateNewAnswer}>
        <TweetLabel htmlFor="tweet">
          <Img
            src="https://github.com/brunochimenes.png"
            alt="Bruno Carvalho"
          />

          <TweetTextarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </TweetLabel>

        <Button type="submit">
          <PaperPlaneRight
            className="button-icon"
            width={"1.5rem"}
            height={"1.5rem"}
            display="none"
          />

          <span className="button-text">Answer</span>
        </Button>
      </AnswerTweetForm>

      {answers.map((value) => {
        return <Tweet key={value} content={value} />;
      })}
    </main>
  );
}
