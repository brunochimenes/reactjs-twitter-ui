import { FormEvent, KeyboardEvent, useState } from 'react'

import { Button, Img, NewTweetForm, TweetLabel, TweetTextarea } from './styles'

import { Separator } from '../../components/Separator'
import { Tweet } from '../../components/Tweet'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState<string[]>([])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main>
      <NewTweetForm onSubmit={createNewTweet}>
        <TweetLabel htmlFor="tweet">
          <Img
            src="https://github.com/brunochimenes.png"
            alt="Bruno Carvalho"
          />

          <TweetTextarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          />
        </TweetLabel>

        <Button type="submit">Tweet</Button>
      </NewTweetForm>

      <Separator />

      {tweets.map((value) => {
        return <Tweet key={value} content={value} />
      })}
    </main>
  )
}
