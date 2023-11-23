import React from 'react'
import styled from 'styled-components'
import type { SoundProps } from '../SoundBoard/SoundBoard'

interface SoundButtonProps {
  sound: SoundProps
  onClick: (e: React.MouseEvent) => void
  onEnded: (e: React.SyntheticEvent<HTMLAudioElement>) => void
}

const StyledSoundButton = styled.div<{ $colour?: string; $height?: number }>`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.$colour ?? '#eeeeee'};
  min-height: ${(props) => Number(props.$height) * 60 ?? '60'}px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &.playing {
    box-shadow: inset 0 0 0 4px #03a729;
  }
`

const StyledSoundButtonLabel = styled.span`
  display: block;
  margin-bottom: 5px;
`

const SoundButton: React.FC<SoundButtonProps> = ({ onClick, onEnded, sound }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null)

  const { audio, colour, height = 1, keyCode, label, soundName, volume = 1 } = sound

  return (
    <StyledSoundButton data-key={keyCode} onClick={onClick} $colour={colour} $height={height}>
      <StyledSoundButtonLabel>{soundName}</StyledSoundButtonLabel>
      <kbd>{label}</kbd>
      <audio ref={audioRef} data-key={keyCode} src={audio} onEnded={onEnded} data-volume={volume}></audio>
    </StyledSoundButton>
  )
}

export default SoundButton
