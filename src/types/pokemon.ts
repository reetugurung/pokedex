export interface PokemonBasic {
    name: string
    url: string
}

export interface PokemonDetail {
    id: number
    name: string
    sprites: { front_default?: string; other?: any}
    types :{slot: number; type: {name:string}}[]
    stats:{base_stat: number; stat: {name:string}}[]
    moves: {move:{name:string}}[]
    
}
