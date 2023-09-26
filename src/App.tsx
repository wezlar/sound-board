import React from 'react'
import SoundBoard from './components/SoundBoard/SoundBoard'

import MaleHouseNewsAudio from './audio/Break-Is-Over-with-Voicemod-Text-to-Song.mp3'
import FemaleHouseNewsAudio from './audio/Hallelujah-with-Voicemod-Text-to-Song.mp3'
import OwenWilsonWow from './audio/Owen-Wilson-Wow.m4a'
import EmotionalDamage from './audio/emotional-damage.mp3'
import JordanYay from './audio/Jordan-yay.m4a'
import JordanSuccessfulStart from './audio/Jordan-successful-start.m4a'
import JordanFantasticDay from './audio/Jordan-fantastic-day.m4a'
import JordanThankYou from './audio/Jordan-thank-you.m4a'
import JordanSoundOfSilence from './audio/Jordan-sound-of-silence.m4a'

const sounds = [
  {
    audio: MaleHouseNewsAudio,
    colour: '#915353',
    keyCode: 32,
    label: 'Space',
    soundName: 'House News Jingle 1',
  },
  {
    audio: FemaleHouseNewsAudio,
    colour: '#535791',
    keyCode: 65,
    label: 'A',
    soundName: 'House News Jingle 2',
  },
  {
    audio: OwenWilsonWow,
    colour: '#53915e',
    keyCode: 83,
    label: 'S',
    soundName: 'Owen Wilson - Wow',
  },
  {
    audio: OwenWilsonWow,
    colour: '#53915e',
    keyCode: 83,
    label: 'S',
    soundName: 'Emotional Damage',
  },
  {
    audio: JordanYay,
    colour: '#a8216e',
    keyCode: 81,
    label: 'Q',
    soundName: 'Jordan - Yay',
  },
  {
    audio: JordanSuccessfulStart,
    colour: '#a8216e',
    keyCode: 87,
    label: 'W',
    soundName: 'Jordan - Successful Start',
  },
  {
    audio: JordanFantasticDay,
    colour: '#a8216e',
    keyCode: 69,
    label: 'E',
    soundName: 'Jordan - Fantastic Day',
  },
  {
    audio: JordanThankYou,
    colour: '#a8216e',
    keyCode: 82,
    label: 'R',
    soundName: 'Jordan - Thank You',
  },
  {
    audio: JordanSoundOfSilence,
    colour: '#a8216e',
    keyCode: 84,
    label: 'T',
    soundName: 'Jordan - Sound of Silence',
  },
  // Add more sounds here
]

const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Soundboard</p>
      </header>
      <main>
        <SoundBoard sounds={sounds} />
      </main>
    </div>
  )
}

export default App
