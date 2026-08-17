import {harmonizeMajor} from './harmony-domain.js';

const GROUPS=[
  {id:'tonic',name:'Tónica',role:'reposo',degrees:[0,2,5],color:'primary'},
  {id:'predominant',name:'Predominante',role:'impulso',degrees:[1,3],color:'secondary'},
  {id:'dominant',name:'Dominante',role:'tensión',degrees:[4,6],color:'tertiary'}
];
const DEFAULTS={tonic:0,predominant:3,dominant:4};
export function functionGroups(){return GROUPS.map(group=>({...group,degrees:[...group.degrees]}))}
export function classifyDegree(index){return GROUPS.find(group=>group.degrees.includes(Number(index)))?.id||'tonic'}
export function functionOptions(root=0,functionId='tonic'){const group=GROUPS.find(item=>item.id===functionId)||GROUPS[0],field=harmonizeMajor(root);return group.degrees.map(index=>({...field[index],index,functionId:group.id,role:group.role}))}
export function buildFunctionalJourney(root=0,selection={}){const field=harmonizeMajor(root),safe={};for(const group of GROUPS){const requested=Number(selection[group.id]);safe[group.id]=group.degrees.includes(requested)?requested:DEFAULTS[group.id]}const indices=[safe.tonic,safe.predominant,safe.dominant,safe.tonic];return {selection:safe,indices,chords:indices.map(index=>field[index]),stages:[{name:'Reposo',level:0},{name:'Impulso',level:1},{name:'Tensión',level:2},{name:'Resolución',level:0}]}}
