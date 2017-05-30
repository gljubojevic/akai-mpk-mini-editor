# Akai MPK Mini preset editor

This preset editor is for [Akai MPK mini controller](http://www.akaipro.com/product/mpkmini) using [Web MIDI Api](https://www.w3.org/TR/webmidi/).

For demo/test go to [https://gljubojevic.github.io/akai-mpk-mini-editor/](https://gljubojevic.github.io/akai-mpk-mini-editor/)

## Akai MPK Mini SysEx

Get preset SysEx bytes: F0 47 7F 7C 63 00 01 XX F7  
XX marks preset number 0x01 - 0x04

- Get Preset 1 SysEx: F0 47 7F 7C 63 00 01 01 F7
- Get Preset 2 SysEx: F0 47 7F 7C 63 00 01 02 F7
- Get Preset 3 SysEx: F0 47 7F 7C 63 00 01 03 F7
- Get Preset 4 SysEx: F0 47 7F 7C 63 00 01 04 F7

Set preset SysEx bytes:

- Preset is 110 bytes

Preset1Chromatic  
F0 47 7F 7C 61 00 66 01 09 00 04 0C 00 00 04 01 00 03 00 78 00 24 00 14 00 25 01 15 00 26 02 16 00 27 03 17 00 28 04 18 00 29 05 19 00 2A 06 1A 00 2B 07 1B 00 2C 08 1C 00 2D 09 1D 00 2E 0A 1E 00 2F 0B 1F 00 30 0C 23 00 31 0D 24 00 32 0E 25 00 33 0F 26 00 11 00 7F 12 00 7F 13 00 7F 14 00 7F 0D 00 7F 0E 00 7F 0F 00 7F 10 00 7F F7 

Preset2WhiteKeys  
F0 47 7F 7C 61 00 66 02 09 00 04 0C 00 00 05 00 00 03 00 78 00 30 00 01 00 32 01 02 00 34 02 03 00 35 03 04 00 37 04 05 00 39 05 06 00 3B 06 08 00 3C 07 09 00 3E 08 0A 00 40 09 0B 00 41 0A 0C 00 43 0B 0D 00 45 0C 0E 00 47 0D 0F 00 48 0E 10 00 4A 0F 11 00 11 00 7F 12 00 7F 13 00 7F 14 00 7F 0D 00 7F 0E 00 7F 0F 00 7F 10 00 7F F7 

Preset3MPC  
F0 47 7F 7C 61 00 66 03 09 00 04 0C 00 01 05 00 00 03 00 78 00 25 00 01 00 24 01 02 00 2A 02 03 00 52 03 04 00 28 04 05 00 26 05 06 00 2E 06 08 00 2C 07 09 00 30 08 0A 00 2F 09 0B 00 2D 0A 0C 00 2B 0B 0D 00 31 0C 0E 00 37 0D 0F 00 33 0E 10 00 35 0F 11 00 11 00 7F 12 00 7F 13 00 7F 14 00 7F 0D 00 7F 0E 00 7F 0F 00 7F 10 00 7F F7 

Preset4ChromaticFrom60  
F0 47 7F 7C 61 00 66 04 09 00 04 0C 00 04 05 00 00 03 00 78 00 3C 00 01 00 3D 01 02 00 3E 02 03 00 3F 03 04 00 40 04 05 00 41 05 06 00 42 06 08 00 43 07 09 00 44 08 0A 00 45 09 0B 00 46 0A 0C 00 47 0B 0D 00 48 0C 0E 00 49 0D 0F 00 4A 0E 10 00 4B 0F 11 00 11 00 7F 12 00 7F 13 00 7F 14 00 7F 0D 00 7F 0E 00 7F 0F 00 7F 10 00 7F F7 

### Akai MPK Mini factory pressets

Preset 1 Chromatic
```
240 71 127 124 97 0 102 1 9 0 4 12 0 0 4 1 0 3 0 120 0 36 0 20 0 37 1 21 0 38 2 22 0 39 3 23 0 40 4 24 0 41 5 25 0 42 6 26 0 43 7 27 0 44 8 28 0 45 9 29 0 46 10 30 0 47 11 31 0 48 12 35 0 49 13 36 0 50 14 37 0 51 15 38 0 17 0 127 18 0 127 19 0 127 20 0 127 13 0 127 14 0 127 15 0 127 16 0 127 247
```

Preset 2 White Keys
```
240 71 127 124 97 0 102 2 9 0 4 12 0 0 5 0 0 3 0 120 0 48 0 1 0 50 1 2 0 52 2 3 0 53 3 4 0 55 4 5 0 57 5 6 0 59 6 8 0 60 7 9 0 62 8 10 0 64 9 11 0 65 10 12 0 67 11 13 0 69 12 14 0 71 13 15 0 72 14 16 0 74 15 17 0 17 0 127 18 0 127 19 0 127 20 0 127 13 0 127 14 0 127 15 0 127 16 0 127 247 
```

Preset 3 MPC
```
240 71 127 124 97 0 102 3 9 0 4 12 0 1 5 0 0 3 0 120 0 37 0 1 0 36 1 2 0 42 2 3 0 82 3 4 0 40 4 5 0 38 5 6 0 46 6 8 0 44 7 9 0 48 8 10 0 47 9 11 0 45 10 12 0 43 11 13 0 49 12 14 0 55 13 15 0 51 14 16 0 53 15 17 0 17 0 127 18 0 127 19 0 127 20 0 127 13 0 127 14 0 127 15 0 127 16 0 127 247 
```

Preset 4 Chromatic From 60
```
240 71 127 124 97 0 102 4 9 0 4 12 0 4 5 0 0 3 0 120 0 60 0 1 0 61 1 2 0 62 2 3 0 63 3 4 0 64 4 5 0 65 5 6 0 66 6 8 0 67 7 9 0 68 8 10 0 69 9 11 0 70 10 12 0 71 11 13 0 72 12 14 0 73 13 15 0 74 14 16 0 75 15 17 0 17 0 127 18 0 127 19 0 127 20 0 127 13 0 127 14 0 127 15 0 127 16 0 127 247
```


## TODO

- WebMIDI bridge class
- MIDI In selection component
- MIDI Out selection component
- SysEx definition docs

... rest will be defined later

## References

[ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org/)

[React docs](https://facebook.github.io/react/docs/hello-world.html)

CSS
- Nice text transition [https://webaudiodemos.appspot.com/slides/webmidi.html#/15](https://webaudiodemos.appspot.com/slides/webmidi.html#/15)

MIDI
- [https://www.midi.org/](https://www.midi.org/)

Web MIDI API
- Editor draft [https://webaudio.github.io/web-midi-api/](https://webaudio.github.io/web-midi-api/)
- Latest published [https://www.w3.org/TR/webmidi/](https://www.w3.org/TR/webmidi/)

Piano keys
- Nice example [http://codepen.io/zastrow/pen/oDBki](http://codepen.io/zastrow/pen/oDBki)

Web MIDI examples
- [http://yamaha-webmusic.github.io/webmusicplatform/app/](http://yamaha-webmusic.github.io/webmusicplatform/app/)

MAC OSX MIDI
- Virtual port setup [https://www.skratchdot.com/2016/01/creating-virtual-midi-ports-on-osx/](https://www.skratchdot.com/2016/01/creating-virtual-midi-ports-on-osx/)
- MIDI Monitor [https://www.snoize.com/MIDIMonitor/](https://www.snoize.com/MIDIMonitor/)