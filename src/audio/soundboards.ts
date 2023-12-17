import jordan from './jordan/jordansoundboard'

import JordanYay from './jordan/Jordan-yay.m4a'
import JordanWicked from './jordan/Jordan-wicked.m4a'

import OwenWilsonWow from './Owen-Wilson-wow.m4a'
import EmotionalDamage from './emotional-damage.mp3'

import Cheering from './Cheering.m4a'
import Correct from './Correct.m4a'
import Wrong from './Wrong.m4a'
import DrumRollFancy from './Drum-Roll-Fancy.m4a'
import DrumRoll from './Drum-Roll.m4a'
import SadTrombone from './sad-trombone.mp3'
import Tada from './tada.mp3'
import MarioLostLife from './mario-lost-life.mp3'
import DeathFlute from './death-flute-heart-will-go-on.mp3'
import DeathEnthusiasm from './death-curb-your-enthusiasm-theme.mp3'
import ObiWanHelloThere from './obi-wan-hello-there.mp3'
import haha from './ha-ha.mp3'
import CorrectPositiveNotification from './correct-positive-notification.m4a'
import CartoonPositiveSound from './cartoon-positive-sound.wav'
import CartoonFailurePiano from './cartoon-failure-piano.wav'
import CorrectAnswerReward from './correct-answer-reward.m4a'
import WinningAnExtraBonus from './winning-an-extra-bonus.wav'
import WrongAnswerFail from './wrong-answer-fail-notification.wav'
import NegativeAnswerLose from './negative-answer-lose.m4a'

import WickedWicked from './wicked-wicked.m4a'
import JungleIsMassive from './jungle-is-massive.m4a'
import Booyaka from './booyaka.m4a'

import Airhorn from './airhorn.mp3'
import Aww from './aww.mp3'

import JingleHouseNews from './Jingle-House-News.m4a'
import JingleGongLong from './Jingle-Gong-Long.m4a'
import JingleGongShort from './Jingle-Gong-Short.m4a'
import Countdown from './20-sec-countdown.mp3'
import JohnCena from './john-cena.mp3'
import SimpleCountdown from './simple-countdown.m4a'
import JokeDrum from './joke-drum.m4a'

type HexColor = `#${string}`

interface AudioFileType {
  audio: string
  colour: HexColor
  keyCode: number
  label: string
  soundName: string
  volume?: number
  height?: number
}

export type SoundBoardType = AudioFileType[]

const normal: SoundBoardType = [
  {
    audio: Cheering,
    colour: '#d5521a',
    keyCode: 32,
    label: 'Space',
    soundName: 'Crowd Cheer',
    volume: 0.5,
    height: 1,
  },
  {
    audio: Airhorn,
    colour: '#43bab2',
    keyCode: 49,
    label: '1',
    soundName: 'Airhorn',
  },
  {
    audio: Aww,
    colour: '#43bab2',
    keyCode: 50,
    label: '2',
    soundName: 'Aww',
  },
  {
    audio: ObiWanHelloThere,
    colour: '#43bab2',
    keyCode: 51,
    label: '3',
    soundName: 'Obi Wan Hello There',
  },
  {
    audio: haha,
    colour: '#43bab2',
    keyCode: 52,
    label: '4',
    soundName: 'Ha ha',
  },
  {
    audio: NegativeAnswerLose,
    colour: '#d2d51a',
    keyCode: 53,
    label: '5',
    soundName: 'Negative Answer Lose',
    volume: 0.5,
  },
  {
    audio: CartoonFailurePiano,
    colour: '#d2d51a',
    keyCode: 54,
    label: '6',
    soundName: 'Cartoon Failure Piano',
    volume: 0.5,
  },

  {
    audio: WickedWicked,
    colour: '#009688',
    keyCode: 81,
    label: 'Q',
    soundName: 'Wicked',
  },
  {
    audio: JungleIsMassive,
    colour: '#009688',
    keyCode: 87,
    label: 'W',
    soundName: 'Jungle is Massive',
  },
  {
    audio: JordanWicked,
    colour: '#009688',
    keyCode: 69,
    label: 'e',
    soundName: 'Jordan - Wicked',
  },
  // {
  //   audio: BBBB,
  //   colour: '#009688',
  //   keyCode: 82,
  //   label: 'r',
  //   soundName: 'BBBB'
  // },
  {
    audio: Booyaka,
    colour: '#009688',
    keyCode: 84,
    label: 't',
    soundName: 'Booyakasha',
  },

  {
    audio: JingleHouseNews,
    colour: '#535791',
    keyCode: 65,
    label: 'A',
    soundName: 'House News Jingle',
    height: 2,
    volume: 0.7,
  },
  {
    audio: JingleGongShort,
    colour: '#535791',
    keyCode: 83,
    label: 'S',
    soundName: 'Gong Jingle Short',
    height: 2,
    volume: 0.7,
  },
  {
    audio: JingleGongLong,
    colour: '#535791',
    keyCode: 68,
    label: 'd',
    soundName: 'Gong Jingle Long',
    height: 2,
    volume: 0.7,
  },
  {
    audio: Countdown,
    colour: '#535791',
    keyCode: 70,
    label: 'F',
    soundName: 'Countdown',
  },
  {
    audio: JohnCena,
    colour: '#535791',
    keyCode: 71,
    label: 'G',
    soundName: 'John Cena',
    volume: 0.6,
  },
  {
    audio: SimpleCountdown,
    colour: '#535791',
    keyCode: 74,
    label: 'J',
    soundName: 'Simple Countdown',
  },
  {
    audio: JokeDrum,
    colour: '#535791',
    keyCode: 72,
    label: 'H',
    soundName: 'Joke Drum',
  },
  {
    audio: JordanYay,
    colour: '#a8216e',
    keyCode: 97,
    label: '1',
    soundName: 'Jordan - Yay',
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
    volume: 0.7,
  },
  {
    audio: DeathFlute,
    colour: '#53915e',
    keyCode: 73,
    label: 'I',
    soundName: 'Death Flute',
  },
  {
    audio: DeathEnthusiasm,
    colour: '#53915e',
    keyCode: 79,
    label: 'O',
    soundName: 'Death Enthusiasm',
    volume: 0.7,
  },
  {
    audio: CorrectPositiveNotification,
    colour: '#d2d51a',
    keyCode: 16,
    label: 'Shift',
    soundName: 'Correct Positive Notification',
    volume: 0.5,
  },
  {
    audio: CartoonPositiveSound,
    colour: '#d2d51a',
    keyCode: 192,
    label: '` or ~',
    soundName: 'Correct Positive Sound',
    volume: 0.5,
  },
  {
    audio: Correct,
    colour: '#d2d51a',
    keyCode: 90,
    label: 'Z',
    soundName: 'Correct',
    volume: 0.5,
  },
  {
    audio: CorrectAnswerReward,
    colour: '#d2d51a',
    keyCode: 88,
    label: 'X',
    soundName: 'Correct Answer Reward',
    volume: 0.5,
  },
  {
    audio: Tada,
    colour: '#d2d51a',
    keyCode: 67,
    label: 'C',
    soundName: 'Tada',
  },
  {
    audio: WinningAnExtraBonus,
    colour: '#d2d51a',
    keyCode: 86,
    label: 'V',
    soundName: 'Winning a Bonus',
  },
  {
    audio: DrumRollFancy,
    colour: '#d2d51a',
    keyCode: 66,
    label: 'B',
    soundName: 'Drum Roll Fancy',
  },
  {
    audio: DrumRoll,
    colour: '#d2d51a',
    keyCode: 78,
    label: 'N',
    soundName: 'Drum Roll',
  },
  {
    audio: WrongAnswerFail,
    colour: '#d2d51a',
    keyCode: 77,
    label: 'M',
    soundName: 'Wrong Answer Fail',
  },
  {
    audio: Wrong,
    colour: '#d2d51a',
    keyCode: 188,
    label: ', or <',
    soundName: 'Wrong',
  },
  {
    audio: SadTrombone,
    colour: '#d2d51a',
    keyCode: 190,
    label: '. or >',
    soundName: 'Sad Trombone',
    volume: 0.8,
  },
  {
    audio: MarioLostLife,
    colour: '#d2d51a',
    keyCode: 191,
    label: '/',
    soundName: 'Mario Lost Life',
  },
  // Add more sounds here
]

export default {
  normal,
  jordan,
}
