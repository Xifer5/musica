import {buildProgression} from './harmony-domain.js';
import {scale,noteName} from './scale-domain.js';
import {normalizePitch} from './music-domain.js';

export const ARRANGEMENT_STYLES={
 strum:{name:'Rasgueo',summary:'Acordes amplios para sostener el pulso.',pattern:['↓','↓ ↑','↑ ↓ ↑']},
 arpeggio:{name:'Arpegio',summary:'Notas separadas para dejar respirar la armonía.',pattern:['bajo','3ª','5ª','3ª']},
 bassChord:{name:'Bajo y acorde',summary:'El bajo marca el rumbo y el acorde responde.',pattern:['bajo','acorde','bajo','acorde']}
};
export const IMPROV_PALETTES={
 majorPentatonic:{name:'Pentatónica mayor',scaleType:'majorPentatonic',relative:false,summary:'Cinco notas claras y consonantes.'},
 major:{name:'Escala mayor',scaleType:'major',relative:false,summary:'Siete notas para delinear cada acorde.'},
 blues:{name:'Blues relativo',scaleType:'blues',relative:true,summary:'Tensión expresiva desde el menor relativo.'}
};
export function arrangementStyles(){return Object.entries(ARRANGEMENT_STYLES).map(([id,value])=>({id,...value}))}
export function improvPalettes(){return Object.entries(IMPROV_PALETTES).map(([id,value])=>({id,...value}))}
export function arrangementSession(root=0,styleId='strum',paletteId='majorPentatonic'){
 const normalized=normalizePitch(root),style=ARRANGEMENT_STYLES[styleId]||ARRANGEMENT_STYLES.strum,palette=IMPROV_PALETTES[paletteId]||IMPROV_PALETTES.majorPentatonic;
 const progression=buildProgression(normalized,'pop').chords;
 const scaleRoot=palette.relative?normalizePitch(normalized+9):normalized,available=scale(scaleRoot,palette.scaleType);
 const phraseDegrees=[0,1,2,4,2,1,0,4],phrase=phraseDegrees.map((degree,index)=>{const pitch=available.pitches[degree%available.pitches.length];return{pitch,midi:60+pitch+(index>3&&pitch<scaleRoot?12:0),name:noteName(pitch,false),degree:available.definition.degrees[degree%available.pitches.length]}});
 const roles=['Inicio','Impulso','Contraste','Regreso'];
 const measures=progression.map((chord,index)=>({...chord,role:roles[index],target:chord.notesLatin.find(note=>available.pitches.includes(chord.pitches[chord.notesLatin.indexOf(note)]))||chord.notesLatin[0]}));
 return{root:normalized,styleId:Object.hasOwn(ARRANGEMENT_STYLES,styleId)?styleId:'strum',paletteId:Object.hasOwn(IMPROV_PALETTES,paletteId)?paletteId:'majorPentatonic',style,palette,measures,scale:{...available,rootName:noteName(scaleRoot,false)},phrase};
}
