
import {readData,displayMovies} from './main.js';
import data from '../data/movie.js';

const detailTemplate = document.getElementById("movie-info-template").innerHTML;
const viewport = document.getElementById("viewport");


const moviearray = readData(data);
displayMovies(moviearray,detailTemplate);