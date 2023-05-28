import {anuncios} from '../data/anuncios.js';
import { crearTabla } from './tabla.js';

const $seccionTabla = document.getElementById("tabla");

$seccionTabla.appendChild(crearTabla(anuncios));