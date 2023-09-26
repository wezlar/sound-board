import React from 'react'
import SoundBoard from './components/SoundBoard/SoundBoard'

import OwenWilsonWow from './audio/Owen-Wilson-wow.m4a'
import EmotionalDamage from './audio/emotional-damage.mp3'
import JordanYay from './audio/Jordan-yay.m4a'
import JordanSuccessfulStart from './audio/Jordan-successful-start.m4a'
import JordanFantasticDay from './audio/Jordan-fantastic-day.m4a'
import JordanThankYou from './audio/Jordan-thank-you.m4a'
import JordanSoundOfSilence from './audio/Jordan-sound-of-silence.m4a'

import Cheering from './audio/Cheering.m4a'
import Correct from './audio/Correct.m4a'
import Wrong from './audio/Wrong.m4a'
import DrumRollFancy from './audio/Drum-Roll-Fancy.m4a'
import DrumRoll from './audio/Drum-Roll.m4a'

import JingleHouseNews from './audio/Jingle-House-News.m4a'
import JingleGongLong from './audio/Jingle-Gong-Long.m4a'
import JingleGongShort from './audio/Jingle-Gong-Short.m4a'

const sounds = [
  {
    audio: Cheering,
    colour: '#d2d51a',
    keyCode: 32,
    label: 'Space',
    soundName: 'Crowd Cheer',
  },
  {
    audio: JingleHouseNews,
    colour: '#535791',
    keyCode: 65,
    label: 'A',
    soundName: 'House News Jingle',
    height: 2,
  },
  {
    audio: JingleGongShort,
    colour: '#535791',
    keyCode: 83,
    label: 'S',
    soundName: 'Gong Jingle Short',
    height: 2,
  },
  {
    audio: JingleGongLong,
    colour: '#535791',
    keyCode: 68,
    label: 'd',
    soundName: 'Gong Jingle Long',
    height: 2,
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
  {
    audio: OwenWilsonWow,
    colour: '#53915e',
    keyCode: 89,
    label: 'Y',
    soundName: 'Owen Wilson - Wow',
  },
  {
    audio: EmotionalDamage,
    colour: '#53915e',
    keyCode: 85,
    label: 'U',
    soundName: 'Emotional Damage',
  },

  {
    audio: Correct,
    colour: '#d2d51a',
    keyCode: 90,
    label: 'Z',
    soundName: 'Correct',
  },
  {
    audio: Wrong,
    colour: '#d2d51a',
    keyCode: 88,
    label: 'X',
    soundName: 'Wrong',
  },
  {
    audio: DrumRoll,
    colour: '#d2d51a',
    keyCode: 67,
    label: 'C',
    soundName: 'Drum Roll',
  },
  {
    audio: DrumRollFancy,
    colour: '#d2d51a',
    keyCode: 86,
    label: 'V',
    soundName: 'Drum Roll Fancy',
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
