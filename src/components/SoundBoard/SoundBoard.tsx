import React, { useEffect } from 'react'
import styled from 'styled-components'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import SoundButton from '../SoundButton/SoundButton'

const StyledWrapper = styled.div`
  padding: 10px;
`

const playSound = (keycode: number): void => {
  const audio = document.querySelector(`audio[data-key="${keycode}"]`) as HTMLAudioElement
  const key = document.querySelector(`div[data-key="${keycode}"]`) as HTMLDivElement
  if (audio === null) return

  audio.currentTime = 0
  console.log({ volume: audio.volume, data: audio.dataset?.volume })
  audio.volume = Number(audio.dataset?.volume) ?? 1
  console.log({ volume: audio.volume })
  void audio.play()
  key.classList.add('playing')
  // }
}

const stopAllSounds = (): void => {
  console.log('Stopping all sounds')
  const audioElements = document.querySelectorAll('audio')

  audioElements.forEach((audio) => {
    audio.pause()
    audio.currentTime = 0
  })
}

interface SoundProps {
  audio: string
  colour?: string
  height?: number
  keyCode: number
  label: string
  soundName: string
  volume?: number
}

interface SoundBoardProps {
  sounds: SoundProps[]
}

const SoundBoard: React.FC<SoundBoardProps> = ({ sounds }) => {
  const handleKeyPressEvent = (e: KeyboardEvent): void => {
    console.log({ handleKeyPressEvent: e.keyCode })
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
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
        <Masonry gutter="10px">
          {sounds.map((sound, index) => (
            <SoundButton
              key={index}
              colour={sound.colour}
              keyCode={sound.keyCode}
              height={sound.height}
              label={sound.label}
              soundName={sound.soundName}
              audioSrc={sound.audio}
              volume={sound.volume}
              onClick={handleMouseEvent}
              onEnded={handleEndOfAudio}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </StyledWrapper>
  )
}

export default SoundBoard
