import axios from 'axios'

// Pokémon REST API base URL
export const API = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

// Fetch Pokémon list
export async function fetchPokemonList() {
  const response = await API.get('pokemon?limit=151')
  return response.data.results
}

// Fetch details of a single Pokémon
export async function fetchPokemonDetail(nameOrId: string | number) {
  const response = await API.get(`pokemon/${nameOrId}`)
  return response.data
}
