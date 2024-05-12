const xml2abc = require('xml2abc');

function reduce_abc(xml) {
    const abc = xml2abc.vertaal(xml, {});
    return abc;
}

reduce_abc(`
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>Untitled score</work-title>
    </work>
  <identification>
    <creator type="composer">Composer / arranger</creator>
    <encoding>
      <software>MuseScore 4.2.1</software>
      <encoding-date>2024-05-11</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="no"/>
      <supports element="print" attribute="new-system" type="no"/>
      <supports element="stem" type="yes"/>
      </encoding>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.99911</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1596.77</page-height>
      <page-width>1233.87</page-width>
      <page-margins type="even">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.5</line-width>
      <line-width type="dashes">1</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.5</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.5</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1.2</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="Leland"/>
    <word-font font-family="Edwin" font-size="10"/>
    <lyric-font font-family="Edwin" font-size="10"/>
    </defaults>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="616.935" default-y="1511.05" justify="center" valign="top" font-size="22">Untitled score</credit-words>
    </credit>
  <credit page="1">
    <credit-type>subtitle</credit-type>
    <credit-words default-x="616.935" default-y="1453.9" justify="center" valign="top" font-size="14">Subtitle</credit-words>
    </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1148.15" default-y="1411.05" justify="right" valign="bottom">Composer / arranger</credit-words>
    </credit>
  <credit page="1">
    <credit-words default-x="85.7252" default-y="1511.05" justify="left" valign="top" font-size="14">Triangle</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Triangle</part-name>
      <part-abbreviation>Trgl.</part-abbreviation>
      <score-instrument id="P1-I81">
        <instrument-name>Mute Triangle</instrument-name>
        </score-instrument>
      <score-instrument id="P1-I82">
        <instrument-name>Open Triangle</instrument-name>
        </score-instrument>
      <midi-device port="1"></midi-device>
      <midi-instrument id="P1-I81">
        <midi-channel>10</midi-channel>
        <midi-program>49</midi-program>
        <midi-unpitched>81</midi-unpitched>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      <midi-instrument id="P1-I82">
        <midi-channel>10</midi-channel>
        <midi-program>49</midi-program>
        <midi-unpitched>82</midi-unpitched>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="247.17">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50.00</left-margin>
            <right-margin>0.00</right-margin>
            </system-margins>
          <top-system-distance>194.69</top-system-distance>
          </system-layout>
        </print>
      <attributes>
        <divisions>4</divisions>
        <key>
          <fifths>0</fifths>
          </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <clef>
          <sign>percussion</sign>
          <line>2</line>
          </clef>
        <staff-details>
          <staff-lines>1</staff-lines>
          </staff-details>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" default-x="-37.68" default-y="7.27" relative-y="20.00">
            <beat-unit>quarter</beat-unit>
            <beat-unit-dot/>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="150"/>
        </direction>
      <note default-x="68.70" default-y="0.00">
        <unpitched>
          <display-step>E</display-step>
          <display-octave>4</display-octave>
          </unpitched>
        <duration>4</duration>
        <instrument id="P1-I82"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="112.87" default-y="0.00">
        <unpitched>
          <display-step>E</display-step>
          <display-octave>4</display-octave>
          </unpitched>
        <duration>4</duration>
        <instrument id="P1-I82"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="157.04" default-y="0.00">
        <unpitched>
          <display-step>E</display-step>
          <display-octave>4</display-octave>
          </unpitched>
        <duration>4</duration>
        <instrument id="P1-I82"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="201.20" default-y="0.00">
        <unpitched>
          <display-step>E</display-step>
          <display-octave>4</display-octave>
          </unpitched>
        <duration>4</duration>
        <instrument id="P1-I82"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="2" width="196.91">
      <note default-x="13.00" default-y="0.00">
        <unpitched>
          <display-step>E</display-step>
          <display-octave>4</display-octave>
          </unpitched>
        <duration>2</duration>
        <instrument id="P1-I82"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="42.45" default-y="0.00">
        <unpitched>
          <display-step>E</display-step>
          <display-octave>4</display-octave>
          </unpitched>
        <duration>3</duration>
        <instrument id="P1-I82"/>
        <voice>1</voice>
        <type>eighth</type>
        <dot/>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="79.77" default-y="0.00">
        <rest/>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        </note>
      <note default-x="99.41" default-y="0.00">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        </note>
      <note default-x="128.85" default-y="0.00">
        <rest/>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        </note>
      </measure>
    <measure number="3" width="0.00">
      <attributes>
        <time>
          <beats>3</beats>
          <beat-type>4</beat-type>
          </time>
        <measure-style>
          <multiple-rest>2</multiple-rest>
          </measure-style>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>quarter</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="100"/>
        </direction>
      <direction>
        <direction-type>
          <rehearsal relative-y="30.00" font-weight="bold" font-size="14">A</rehearsal>
          </direction-type>
        </direction>
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>12</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="4" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>12</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="5" width="0.00">
      <attributes>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <measure-style>
          <multiple-rest>2</multiple-rest>
          </measure-style>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>half</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="200"/>
        </direction>
      <direction>
        <direction-type>
          <rehearsal relative-y="30.00" font-weight="bold" font-size="14">12</rehearsal>
          </direction-type>
        </direction>
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="6" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="7" width="152.52">
      <attributes>
        <time>
          <beats>5</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" default-x="-31.18" default-y="6.87" relative-y="20.00">
            <beat-unit>quarter</beat-unit>
            <per-minute>200</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="200"/>
        </direction>
      <note default-x="80.85" default-y="0.00">
        <rest measure="yes"/>
        <duration>20</duration>
        <voice>1</voice>
        </note>
      <direction placement="above">
        <direction-type>
          <rehearsal default-y="32.20" relative-y="30.00" font-weight="bold" font-size="14">C</rehearsal>
          </direction-type>
        <offset>-12</offset>
        </direction>
      </measure>
    <measure number="8" width="154.46">
      <direction placement="above">
        <direction-type>
          <words relative-y="10.00">asdf</words>
          </direction-type>
        </direction>
      <note default-x="56.62" default-y="0.00">
        <rest measure="yes"/>
        <duration>20</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="9" width="0.00">
      <attributes>
        <time>
          <beats>6</beats>
          <beat-type>8</beat-type>
          </time>
        <measure-style>
          <multiple-rest>2</multiple-rest>
          </measure-style>
        </attributes>
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>12</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="10" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>12</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="11" width="102.52">
      <attributes>
        <time>
          <beats>5</beats>
          <beat-type>8</beat-type>
          </time>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" default-x="-29.22" default-y="6.87" relative-y="20.00">
            <beat-unit>eighth</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="50"/>
        </direction>
      <note default-x="54.87" default-y="0.00">
        <rest measure="yes"/>
        <duration>10</duration>
        <voice>1</voice>
        </note>
      <direction placement="above">
        <direction-type>
          <rehearsal default-y="38.33" relative-y="30.00" font-weight="bold" font-size="14">B;akjd</rehearsal>
          </direction-type>
        <offset>-4</offset>
        </direction>
      </measure>
    <measure number="12" width="129.79">
      <attributes>
        <time>
          <beats>12</beats>
          <beat-type>8</beat-type>
          </time>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" default-x="-42.62" default-y="6.87" relative-y="20.00">
            <beat-unit>eighth</beat-unit>
            <beat-unit-dot/>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="75"/>
        </direction>
      <note default-x="74.91" default-y="0.00">
        <rest measure="yes"/>
        <duration>24</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="13" width="94.47">
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" default-y="7.27" relative-y="20.00">
            <beat-unit>quarter</beat-unit>
            <beat-unit-dot/>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="150"/>
        </direction>
      <note default-x="39.84" default-y="0.00">
        <rest measure="yes"/>
        <duration>24</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="14" width="0.00">
      <attributes>
        <time>
          <beats>2</beats>
          <beat-type>2</beat-type>
          </time>
        <measure-style>
          <multiple-rest>2</multiple-rest>
          </measure-style>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>half</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="200"/>
        </direction>
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="15" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="16" width="0.00">
      <attributes>
        <time symbol="common">
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <measure-style>
          <multiple-rest>2</multiple-rest>
          </measure-style>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>half</beat-unit>
            <beat-unit>quarter</beat-unit>
            </metronome>
          </direction-type>
        <sound tempo="120"/>
        </direction>
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="17" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="18" width="0.00">
      <attributes>
        <time symbol="cut">
          <beats>2</beats>
          <beat-type>2</beat-type>
          </time>
        <measure-style>
          <multiple-rest>2</multiple-rest>
          </measure-style>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>quarter</beat-unit>
            <beat-unit>half</beat-unit>
            </metronome>
          </direction-type>
        <sound tempo="120"/>
        </direction>
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="19" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="20" width="0.00">
      <attributes>
        <time>
          <beats>7</beats>
          <beat-type>16</beat-type>
          </time>
        <measure-style>
          <multiple-rest>2</multiple-rest>
          </measure-style>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>eighth</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="50"/>
        </direction>
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>7</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="21" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>7</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="22" width="0.00">
      <attributes>
        <time>
          <beats>5</beats>
          <beat-type>4</beat-type>
          </time>
        <measure-style>
          <multiple-rest>2</multiple-rest>
          </measure-style>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>quarter</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="100"/>
        </direction>
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>20</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="23" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>20</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="24" width="162.57">
      <attributes>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" default-x="-37.68" default-y="7.27" relative-y="20.00">
            <beat-unit>half</beat-unit>
            <beat-unit>quarter</beat-unit>
            </metronome>
          </direction-type>
        <sound tempo="120"/>
        </direction>
      <note default-x="98.24" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="25" width="106.87">
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>eighth</beat-unit>
            <beat-unit>eighth</beat-unit>
            </metronome>
          </direction-type>
        <sound tempo="120"/>
        </direction>
      <note default-x="46.04" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="26" width="106.87">
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>quarter</beat-unit>
            <beat-unit>half</beat-unit>
            </metronome>
          </direction-type>
        <sound tempo="120"/>
        </direction>
      <note default-x="46.04" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="27" width="106.87">
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>quarter</beat-unit>
            <beat-unit>quarter</beat-unit>
            <beat-unit-dot/>
            </metronome>
          </direction-type>
        <sound tempo="120"/>
        </direction>
      <note default-x="46.04" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="28" width="106.87">
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>quarter</beat-unit>
            <beat-unit-dot/>
            <beat-unit>quarter</beat-unit>
            </metronome>
          </direction-type>
        <sound tempo="120"/>
        </direction>
      <note default-x="46.04" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="29" width="106.87">
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>quarter</beat-unit>
            <beat-unit>quarter</beat-unit>
            </metronome>
          </direction-type>
        <sound tempo="120"/>
        </direction>
      <note default-x="46.04" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="30" width="106.87">
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" relative-y="20.00">
            <beat-unit>eighth</beat-unit>
            <beat-unit-dot/>
            <beat-unit>quarter</beat-unit>
            </metronome>
          </direction-type>
        <sound tempo="120"/>
        </direction>
      <note default-x="46.04" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="31" width="106.87">
      <direction placement="above">
        <direction-type>
          <words>accel.</words>
          </direction-type>
        <direction-type>
          <dashes type="start" number="1"/>
          </direction-type>
        </direction>
      <note default-x="46.04" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      <direction placement="above">
        <direction-type>
          <dashes type="stop" number="1"/>
          </direction-type>
        </direction>
      </measure>
    <measure number="32" width="0.00">
      <attributes>
        <measure-style>
          <multiple-rest>5</multiple-rest>
          </measure-style>
        </attributes>
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="33" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="34" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="35" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      </measure>
    <measure number="36" width="0.00">
      <note default-x="0.00" default-y="0.00">
        <rest measure="yes"/>
        <duration>16</duration>
        <voice>1</voice>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>
`);
