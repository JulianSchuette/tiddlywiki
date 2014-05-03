/*
 *  lasy10/def.js
 *  
 *  This file loads the  font into jsMath. To do this use
 *  
 *      <SCRIPT>jsMath.Font.Load("lasy10")</SCRIPT>
 *
 *  after loading jsMath.js itself.  The user will need to have
 *  the lasy10.ttf font installed, otherwise corresponding unicode
 *  characters will be used, but the mapping is not perfect, and it is not 
 *  customized on a per-browser basis as it probably should be.
 *  
 *  If the font isn't installed, the user will receive a message indicating
 *  that fact, and pointing to the jsMath web site where the font can be
 *  downloaded.
 *  
 *  Once this file is loaded, you can use \char{lasy10}{nn} to access
 *  any character in the font.  In addition, the \lasy10 macro will switch to
 *  the eufm font
 *  
 *  ---------------------------------------------------------------------
 *
 *  jsMath is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  jsMath is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with jsMath; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

jsMath.Add(jsMath.TeX,{

  lasy10: [
    // 00 - 0F
    [0,0,0],
    [0.778,0.539,0.0391],
    [0.778,0.636,0.136],
    [0.778,0.539,0.0391],
    [0.778,0.636,0.136],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 10 - 1F
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 20 - 2F
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0.333,0.367,-0.133],
    [0.333,0.367,-0.133],
    [0.5,0.694,0.194],
    [0.5,0.694,0.194],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 30 - 3F
    [0.722,0.683],
    [0.722,0.444,-0.0556],
    [0.747,0.444,-0.0556],
    [0.792,0.444,-0.0556],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0.667,0.367,-0.133],
    [1,0.367,-0.133],
    [0.778,0.539,0.0391],
    [0.778,0.539,0.0391],
    [0,0,0],
    [0,0,0],
    // 40 - 4F
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 50 - 5F
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 60 - 6F
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    // 70 - 7F
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]

});
jsMath.Setup.EncodeFont('lasy10');

jsMath.Font.Register({
  name: 'lasy10',
  prefix: 'jsMath-',
  // The test used to see if font is available
  test: jsMath.Font.Test1, testChar: 0x3B, testFactor: 2,
  // Can add style, styles, macros here
  tex: function (font,fam) {
    // do browser-specific adjustments here
  },
  fallback: function (font,fam) {
    jsMath.Update.TeXfonts({
      lasy10: {
        '1': {c: '&#x22B2;', tclass: 'normal'},
        '2': {c: '&#x22B4;', tclass: 'normal'},
        '3': {c: '&#x22B3;', tclass: 'normal'},
        '4': {c: '&#x22B5;', tclass: 'normal'},
        '40': {c: '&#x227A;', tclass: 'normal'},
        '41': {c: '&#x227B;', tclass: 'normal'},
        '42': {c: '&#x22CF;', tclass: 'normal'},
        '43': {c: '&#x22CE;', tclass: 'normal'},
        '48': {c: '&#x2127;', tclass: 'normal'},
        '49': {c: '&#x22C8;', tclass: 'normal'},
        '50': {c: '&#x25A1;', tclass: 'normal'},
        '51': {c: '&#x25C7;', tclass: 'normal'},
        '58': {c: '&#x223F;', tclass: 'normal'},
        '59': {c: '&#x219D;', tclass: 'normal'},
        '60': {c: '&#x228F;', tclass: 'normal'},
        '61': {c: '&#x2290;', tclass: 'normal'}
      }
    });
  }
});
