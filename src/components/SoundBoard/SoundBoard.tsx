import React, { useEffect } from 'react'
import styled from 'styled-components'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { type ModeType } from '../../App'
import SoundBoards from '../../audio/soundboards'
import SoundButton from '../SoundButton/SoundButton'

const StyledWrapper = styled.div`
  padding: 10px;
`

const playSound = (keycode: number): void => {
  const audio = document.querySelector(`audio[data-key="${keycode}"]`) as HTMLAudioElement
  const key = document.querySelector(`div[data-key="${keycode}"]`) as HTMLDivElement
  if (audio === null) return

  audio.currentTime = 0
  audio.volume = Number(audio.dataset?.volume) ?? 1
  void audio.play()
  key.classList.add('playing')
}

const stopAllSounds = (): void => {
  console.log('Stopping all sounds')
  const audioElements = document.querySelectorAll('audio')

  audioElements.forEach((audio) => {
    audio.pause()
    audio.currentTime = 0
    const parentElement = audio?.parentNode
    if (parentElement instanceof HTMLElement) {
      parentElement?.classList?.remove('playing')
    }
  })
}

export interface SoundProps {
  audio: string
  colour?: string
  height?: number
  keyCode: number
  label: string
  soundName: string
  volume?: number
}

interface SoundBoardProps {
  mode: ModeType
}

const SoundBoard: React.FC<SoundBoardProps> = ({ mode }) => {
  const sounds = SoundBoards[mode]

  const handleKeyPressEvent = (e: KeyboardEvent): void => {
    console.log({ handleKeyPressEvent: e.keyCode, key: e.key })
    const keycode = e.keyCode
    if (keycode === 27) {
      // escape key
      stopAllSounds()
    }
    playSound(keycode)
  }

  const handleMouseEvent = (e: React.MouseEvent): void => {
    const keycode = Number(e.currentTarget.getAttribute('data-key'))
    playSound(keycode)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPressEvent)

    return () => {
      window.removeEventListener('keydown', handleKeyPressEvent)
    }
  }, [])

  const handleEndOfAudio = (e: React.SyntheticEvent<HTMLAudioElement>): void => {
    const audioElement = e.currentTarget
    const parentElement = audioElement.parentNode
    if (parentElement instanceof HTMLElement) {
      parentElement.classList.remove('playing')
    }
  }

  return (
    <StyledWrapper>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 470: 2, 750: 3, 900: 4, 1200: 5, 1400: 6 }}>
        <Masonry gutter="10px">
          {sounds.map((sound, index) => (
            <SoundButton key={index} sound={sound} onClick={handleMouseEvent} onEnded={handleEndOfAudio} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </StyledWrapper>
  )
}

export default SoundBoard
