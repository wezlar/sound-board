import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import SoundButton from '../SoundButton/SoundButton'

const StyledWrapper = styled.div`
  padding: 10px;
`

const playSound = (keycode: number, isShiftPressed: boolean): void => {
  const audio = document.querySelector(`audio[data-key="${keycode}"]`) as HTMLAudioElement
  const key = document.querySelector(`div[data-key="${keycode}"]`) as HTMLDivElement
  if (audio === null) return

  // keycode !== 16 //shift key
  // original code was this, which meant that any other key wouldn't be stopped
  // we pressing again, it would just restart it, which might be a cool feature
  // if (keeycode === 32 && audio.currentTime !== 0) {
  // future logic should detect if shift if pressed and turn on the repeat option
  if (audio.currentTime !== 0 && !audio.ended && !isShiftPressed) {
    console.log('PAUSING', isShiftPressed)
    audio.pause()
    audio.currentTime = 0
    key.classList.add('playing')
    key.classList.remove('playing')
  } else {
    console.log('PLAYING', isShiftPressed)
    audio.currentTime = 0
    void audio.play()
    key.classList.add('playing')
  }
}

interface SoundProps {
  audio: string
  colour?: string
  height?: number
  keyCode: number
  label: string
  soundName: string
}

interface SoundBoardProps {
  sounds: SoundProps[]
}

const SoundBoard: React.FC<SoundBoardProps> = ({ sounds }) => {
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false)

  const handleMouseEvent = (e: React.MouseEvent): void => {
    const keycode = Number(e.currentTarget.getAttribute('data-key'))
    playSound(keycode, isShiftPressed)
  }

  const handleKeyPressEvent = (e: KeyboardEvent): void => {
    // console.log({ handleKeyPressEvent: e.keyCode })
    const keycode = e.keyCode
    if (keycode === 16) {
      console.log('SHIFT PRESSED')
      setIsShiftPressed(true)
      return
    }
    playSound(keycode, isShiftPressed)
  }

  const handleKeyReleaseEvent = (e: KeyboardEvent): void => {
    const keycode = e.keyCode
    if (keycode === 16) {
      console.log('SHIFT RELEASED')
      setIsShiftPressed(false)
    }
  }

  const handleEndOfAudio = (e: React.SyntheticEvent<HTMLAudioElement>): void => {
    const audioElement = e.currentTarget
    const parentElement = audioElement.parentNode
    console.log({ audioElement })
    if (parentElement instanceof HTMLElement) {
      parentElement.classList.remove('playing')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPressEvent)
    window.addEventListener('keyup', handleKeyReleaseEvent)

    return () => {
      window.removeEventListener('keydown', handleKeyPressEvent)
      window.removeEventListener('keyup', handleKeyReleaseEvent)
    }
  }, [])

  return (
    <StyledWrapper>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
        <Masonry gutter="10px">
          {sounds.map((sound, index) => (
            <SoundButton
              key={index}
              colour={sound.colour}
              keyCode={sound.keyCode}
              label={sound.label}
              soundName={sound.soundName}
              audioSrc={sound.audio}
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
