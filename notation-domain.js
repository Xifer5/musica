export function chordStaffMidis(chord,base=60){return chord.definition.intervals.map(interval=>base+chord.root+interval)}
export function staffY(midi,center,spacing=5.4){return 105-(midi-center)*spacing}
const LETTERS={Do:0,Re:1,Mi:2,Fa:3,Sol:4,La:5,Si:6};
export function staffNoteLayout(chord){return chordStaffMidis(chord).map((midi,index)=>{const note=chord.notesLatin[index],letter=Object.keys(LETTERS).find(name=>note.startsWith(name)),octave=Math.floor(midi/12)-1,step=octave*7+LETTERS[letter],e4=4*7+LETTERS.Mi,y=142-(step-e4)*9,accidental=note.includes('♭')?'♭':note.includes('♯')?'♯':'';const ledgerYs=[];if(y>=151)for(let ledger=160;ledger<=y;ledger+=18)ledgerYs.push(ledger);if(y<=52)for(let ledger=52;ledger>=y;ledger-=18)ledgerYs.push(ledger);return {midi,note,letter,octave,y,accidental,ledgerYs}})}
export function staffCaption(chord){return staffNoteLayout(chord).map(item=>`${item.note}${item.octave}`).join(' · ')}
