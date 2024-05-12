#!/usr/bin/env node
//~ Copyright (C) 2019: Willem Vree
//~ This program is free software; you can redistribute it and/or modify it under the terms of the
//~ Lesser GNU General Public License as published by the Free Software Foundation;
//~ This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
//~ without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//~ See the Lesser GNU General Public License for more details. <http://www.gnu.org/licenses/lgpl.html>.
const fs = require ('fs');
const strzip = require ('node-stream-zip');
const path = require ('path');
const cheerio = require ('cheerio')
const getopts = require ('getopts');
const o = require ('./')
var xmltxt;

const usage = 'Usage: xml2abc.py [-h] [-u] [-m] [-c C] [-d D] [-n CPL] [-b BPL] [-o DIR] [-v V]\n' +
'[-x] [-p PFMT] [-t] [-s] [-i] [--v1] [--noped] [--stems] <file1> [<file2> ...]';

const popt = {
    string: ['o', 'p'],
    boolean: ['u', 'x', 't', 's', 'v1', 'noped', 'stems', 'i', 'help', 'version'],
    default: {'p':'', 'm':0, 'c':0, 'd':0, 'n':0, 'b':0, 'o':'', 'v':0, },
    alias: {'h':'help'},
    unknown: opt => fout ('unknown option: -' + opt)
}

const help = ['Options:',
'  --version   show program\'s version number and exit',
'  -h, --help  show this help message and exit',
'  -u          unfold simple repeats',
'  -m M        0 -> no %%MIDI, 1 -> minimal %%MIDI, 2-> all %%MIDI',
'  -c C        set credit text filter to C',
'  -d D        set L:1/D',
'  -n CPL      CPL: max number of characters per line (default 100)',
'  -b BPL      BPL: max number of bars per line',
'  -o DIR      store abc files in DIR',
'  -v V        set volta typesetting behaviour to V',
'  -x          output no line breaks',
'  -p PFMT     pageformat PFMT (cm) = scale, pageheight, pagewidth, leftmargin,',
'              rightmargin, topmargin, botmargin',
'  -j          switch for compatibility with javascript version',
'  -t          translate perc- and tab-staff to ABC code with %%map, %%voicemap',
'  -s          shift node heads 3 units left in a tab staff',
'  --v1        start-stop directions allways to first voice of staff',
'  --noped     skip all pedal directions',
'  --stems     translate stem directions',
'  -i          read xml file from standard input'
].join ('\n')

function fout (m) {
    console.error ('**Error** ' + m);
    console.error (usage);
    process.exit ();
}

function endian (b) {
    var bom = b[0] * 256 + b[1], i, a;
    if (bom == 65534) return b.slice (2).toString ('ucs2'); // little endian
    if (bom != 65279) {
        b = b.toString ('binary'); // utf-8 or iso-8859-1
        try { b = decodeURIComponent (escape (b)); } catch (a) {}  // magnificent trick!!
        return b;
    }
    for (i = 0; i < b.length - 1; i += 2) { a = b[i]; b[i] = b[i+1]; b[i+1] = a; }
    return b.slice (2).toString ('ucs2');   // big endian
}

function doFile (xmltxt, opad, fnm, options) {
    xmltxt = endian (xmltxt).replace (/\r\n/g,'\n');
    $ = cheerio.load (xmltxt, { xmlMode : true});
    var xmldata = $.root ()[0]
    var res = o.vertaal (xmldata, options);
    var contents = res[0], info = res[1];
    if (info) console.error (info);
    if (contents) {
        if (opad) {
            var p = path.join (opad, fnm + '.abc')
            fs.writeFileSync (p, contents);
            console.error (p + ' written')
        } else {
            console.log (contents);
        }
    } else console.error ('no output');
}

function check_options (options) {
    function pos (n) { return /^\d+$/.test (n) && n >= 0 }
    var ds = {}, m = '';
    var n4 = /^f|(\d+(\.\d*)?)(,\d+(\.\d*)?){3}$/;
    for (var n = 0; n < 10; ++n) ds [2 ** n] = 1;
    if (!pos (options.n)) m += '-n ' + options.n + ', only values >= 0\n'
    if (!pos (options.b)) m += '-b ' + options.b + ', only values >= 0\n'
    if (options.d && !(options.d in ds))
        m += '-d should be one of ' + Object.keys (ds).join (',') + '\n'
    if (options.p && !n4.test (options.p))
        m += '-p ' + options.p + ' should be a sequence of 4 numbers or f\n'
    return m.slice (0,-1)
}

var args = process.argv.slice (2);
var options = getopts (args, popt);
var m = check_options (options)
if (m) fout ('in options:\n' + m);
if (options.help || options.h) {
    console.log (usage);
    console.log (help);
    process.exit ();
}
if (options.version) {
    console.log ('revision: ' + o.xml2abc_VERSION);
    process.exit ();
}
var opad = options.o
if (opad) {
    try {
        var x = fs.statSync (opad)
        if (!x.isDirectory ()) {
            fout (opad + ' is no directory');
        }
    } catch (e) {
        fout (opad + ' does not exsist');
    }
}
if (options.i) {
    xmltxt = fs.readFileSync (0);   // 0 is Posix standaard voor stdin
    doFile (xmltxt, opad);
    process.exit ();
}
var n = options._.length;
if (!n) fout ('no input files');
for (var i = 0; i < n; ++i) {
    var ipad = options._[i];
    x = path.parse (ipad)
    if (['.xml','.musicxml','.mxl'].indexOf (x.ext) == -1) {
        console.error ('*error* ' + ipad + ' skipped, no .xml')
        continue
    }
    if (!fs.existsSync (ipad)) {
        console.error ('*error* ' + ipad + ' does not exist')
        continue
    }
    if (x.ext == '.mxl') {
        const zip = new strzip ({ file: ipad, storeEntries: true });
        zip.on ('ready', () => {
            for (var k in zip.entries ()) {
                if (k.slice (0,4) == 'META') continue; 
                xmltxt = zip.entryDataSync (k);
                doFile (xmltxt, opad, x.name, options);
                break;  // assume only one MusicXML file per archive
            }
            zip.close()
        });
    } else {
        xmltxt = fs.readFileSync (ipad);
        doFile (xmltxt, opad, x.name, options);
    }
}
