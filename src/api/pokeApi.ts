import axios from 'axios'


export const API = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})


export async function fetchPokemonList() {
  const response = await API.get('pokemon?limit=151')
  return response.data.results
}


export async function fetchPokemonDetail(nameOrId: string | number) {
  const response = await API.get(`pokemon/${nameOrId}`)
  return response.data
}
