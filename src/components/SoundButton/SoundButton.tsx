import React from 'react'
import styled from 'styled-components'

interface SoundButtonProps {
  audioSrc: string
  colour?: string
  height?: number
  keyCode: number
  label: string
  onClick: (e: React.MouseEvent) => void
  onEnded: (e: React.SyntheticEvent<HTMLAudioElement>) => void
  soundName: string
}

const StyledSoundButton = styled.div<{ $colour?: string }>`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.$colour ?? '#eeeeee'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &.playing {
    /* border: 4px solid #03a729; */
    box-shadow: inset 0 0 0 4px #03a729;
  }
`

const StyledSoundButtonLabel = styled.span`
  display: block;
  margin-bottom: 5px;
`

const SoundButton: React.FC<SoundButtonProps> = ({
  audioSrc,
  colour,
  height,
  keyCode,
  label,
  onClick,
  onEnded,
  soundName,
}) => {
  const audioRef = React.useRef<HTMLAudioElement>(null)

  return (
    <StyledSoundButton data-key={keyCode} onClick={onClick} $colour={colour}>
      <StyledSoundButtonLabel>{soundName}</StyledSoundButtonLabel>
      <kbd>{label}</kbd>
      <audio ref={audioRef} data-key={keyCode} src={audioSrc} onEnded={onEnded}></audio>
    </StyledSoundButton>
  )
}

export default SoundButton
