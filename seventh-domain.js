import {LATIN,INTL,normalizePitch} from './music-domain.js';

export const SEVENTH_TYPES={
  major7:{name:'Séptima mayor',short:'maj7',suffix:'maj7',intervals:[0,4,7,11],degrees:['1','3','5','7'],character:'estable y luminosa'},
  dominant7:{name:'Séptima dominante',short:'7',suffix:'7',intervals:[0,4,7,10],degrees:['1','3','5','♭7'],character:'tensa; pide resolver'},
  minor7:{name:'Menor séptima',short:'m7',suffix:'m7',intervals:[0,3,7,10],degrees:['1','♭3','5','♭7'],character:'suave y abierta'},
  halfDiminished:{name:'Semidisminuido',short:'m7♭5',suffix:'m7♭5',intervals:[0,3,6,10],degrees:['1','♭3','♭5','♭7'],character:'inestable y oscuro'}
};

export function buildSeventh(root=0,type='major7'){
  const normalized=normalizePitch(root),definition=SEVENTH_TYPES[type]||SEVENTH_TYPES.major7;
  const pitches=definition.intervals.map(interval=>normalizePitch(normalized+interval));
  return {root:normalized,type:SEVENTH_TYPES[type]?type:'major7',definition,pitches,degrees:[...definition.degrees],notesLatin:pitches.map(p=>LATIN[p]),notesIntl:pitches.map(p=>INTL[p]),midi:definition.intervals.map(interval=>60+normalized+interval),symbol:INTL[normalized]+definition.suffix,seventhDistance:definition.intervals[3]===11?'Séptima mayor · 11 semitonos':'Séptima menor · 10 semitonos'};
}

export function seventhComparison(root=0){return Object.keys(SEVENTH_TYPES).map(type=>buildSeventh(root,type))}

const OPEN=[4,9,2,7,11,4];
export function guitarSeventh(root=0,type='major7'){
  const target=buildSeventh(root,type),wanted=new Set(target.pitches);let best=null;
  for(let start=0;start<=2;start++){
    const options=Array.from({length:4},(_,offset)=>Array.from({length:13},(_,fret)=>fret).filter(fret=>wanted.has(normalizePitch(OPEN[start+offset]+fret))));
    for(const a of options[0])for(const b of options[1])for(const c of options[2])for(const d of options[3]){
      const frets=[a,b,c,d],tones=new Set(frets.map((fret,i)=>normalizePitch(OPEN[start+i]+fret)));
      if(tones.size!==4||[...wanted].some(tone=>!tones.has(tone)))continue;
      const span=Math.max(...frets)-Math.min(...frets);if(span>5)continue;
      const bass=normalizePitch(OPEN[start]+a),score=span*9+frets.reduce((sum,fret)=>sum+fret,0)+(bass===target.root?0:18)+start*2;
      if(!best||score<best.score){const shape=['x','x','x','x','x','x'];frets.forEach((fret,i)=>shape[start+i]=fret);best={frets:shape,strings:[start+1,start+2,start+3,start+4],score}}
    }
  }
  return best||{frets:['x',3,2,3,1,'x'],strings:[2,3,4,5],score:99};
}
