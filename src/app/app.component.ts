import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ground';

  options = [
    "Avalancheno__Font",
    "BBB_Simulator_Black_Font",
    "BBB_Simulator_Inline_Font",
    "BBB_Simulator_Outline_Font",
    "BBBOcelot-Regular_Font",
    "ChillPixels-Matrix_Font",
    "ChillPixels-Maximal_Font",
    "ChillPixels-Mono_Font",
    "CHNOPixelCodePro-Italic_Font",
    "CHNOPixelCodePro-Regular_Font",
    "DungeonChunk_Font",
    "FairfaxBold_Font",
    "PlayerSansMono8x8-Italic_Font",
    "FairfaxItalic_Font",
    "Fairfax_Font",
    "FT88-Bold_Font",
    "PlayerSansMono8x13-Italic_Font",
    "PlayerSansMono8x13-Classic_Font",
    "FT88-Gothique_Font",
    "FT88-Italic_Font",
    "PIXY_Font",
    "FT88-Serif_Font",
    "PixeloidSans_Font",
    "FT88-Regular_Font",
    "PixeloidSans-Bold_Font",
    "FT88-School_Font",
    "madspixel2_Font",
    "haxorville_Font",
    /*"Greybeard-22px_Font",
    "Greybeard-22px-Bold_Font",
    "Greybeard-18px_Font",
    "Greybeard-18px-Italic_Font",
    "Greybeard-18px-Bold_Font",
    "Greybeard-17px_Font",
    "Greybeard-17px-Italic_Font",
    "Greybeard-17px-Bold_Font",
    "Greybeard-16px_Font",
    "Greybeard-16px-Italic_Font",
    "Greybeard-16px-Bold_Font",
    "Greybeard-15px_Font",
    "Greybeard-15px-Italic_Font",
    "Greybeard-15px-Bold_Font",
    "Greybeard-14px_Font",
    "Greybeard-14px-Bold_Font",
    "Greybeard-13px_Font",
    "Greybeard-13px-Bold_Font",
    "Greybeard-12px_Font",
    "Greybeard-12px-Bold_Font",*/
    "Greybeard-11px_Font",
    "Greybeard-11px-Bold_Font",
  ];

  constructor() {
  }

  process (option: string) {
    let output = '@font-face { font-family: 111; src: url("/assets/font/222.ttf") format("truetype"); }'

    let name = option
    .toLowerCase()
    .replace('font', '')
    .replace('italic', '')
    .replace('bold', '')
    .replace('regular', '')
    .replace('12px', '')
    .replace('13px', '')
    .replace('14px', '')
    .replace('15px', '')
    .replace('16px', '')
    .replace('17px', '')
    .replace('18px', '')
    .replace('19px', '')
    .replace('20px', '')
    .replace('21px', '')
    .replace('22px', '')
    .replace('-', '')
    .replace('-', '')
    .replace('-', '')
    .replace('_', '')
    .replace('_', '')
    .replace('_', '')
    .replace('_', '')
    .replace('_', '')

    return {
      output: output.replace('111',option).replace('222', option),
      parent: name, 
      name: option
   };
  }
}
