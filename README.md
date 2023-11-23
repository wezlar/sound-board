# Soundboard

Quick project to add audio snippets to a soundboard to be used during meetings or quiz nights.

## Adding new Audio

All audio files that can play in a browser can be used. Current ones are stored in `/src/audio/`. Add any new ones to that folder.

You then need to head over to the `App.tsx` file and import the new audio file.

Final step is to update the sounds array with a new Sound Object:

```
{
  audio: OwenWilsonWow,
  colour: '#53915e',
  keyCode: 89,
  label: 'Y',
  soundName: 'Owen Wilson - Wow',
  volume: 1.0, // optional
  height: 1, // optional
},
```

The audio is the file you've imported. The colour is the button colour that appears on the screen. Keycode is the keyboard code of the shortcut you want to press (they print out in the console if you are unsure which one you need). The label is the label of the Key being pressed so that it indicates it on the screen. And finally there is soundName which is a visual name for the sound that makes the button clear which audio it is for.

Volume and height are both optional. Both default to `1` if not provided. Volume can range from `0` to `1`, with 1 being full volume. `0.5` would be half volume. Height is for the height of the button. Changing this to 2 would double the height of the button.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### List of keys

Below are a list of keys and their corresponding keycodes

| Keycode | Key     |
| ------- | ------- |
| `49`    | `1`     |
| `50`    | `2`     |
| `51`    | `3`     |
| `52`    | `4`     |
| `53`    | `5`     |
| `54`    | `6`     |
| `55`    | `7`     |
| `56`    | `8`     |
| `57`    | `9`     |
| `48`    | `0`     |
| `81`    | `q`     |
| `87`    | `w`     |
| `69`    | `e`     |
| `82`    | `r`     |
| `84`    | `t`     |
| `89`    | `y`     |
| `85`    | `u`     |
| `73`    | `i`     |
| `79`    | `o`     |
| `80`    | `p`     |
| `65`    | `a`     |
| `83`    | `s`     |
| `68`    | `d`     |
| `70`    | `f`     |
| `71`    | `g`     |
| `72`    | `h`     |
| `74`    | `j`     |
| `75`    | `k`     |
| `76`    | `l`     |
| `90`    | `z`     |
| `88`    | `x`     |
| `67`    | `c`     |
| `86`    | `v`     |
| `66`    | `b`     |
| `78`    | `n`     |
| `77`    | `m`     |
| `32`    | `space` |
