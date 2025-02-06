import { PokemonTCG } from "pokemon-tcg-sdk-typescript"
import { SearchT } from "../types"

export const getCards = async ({search}:SearchT) => {
    if (search === null) return 
    
    const query = `name:${search}`

    try {
        const cards = await PokemonTCG.findCardsByQueries({q: query})
        
        return cards?.map((card) => ({
            id: card.id, 
            name: card.name, 
            url: card.images.large, 
            prices: card.tcgplayer?.prices, 
            set: card.set.name
        }))
    } catch (e) {
        if(e instanceof Error){
            throw new Error(e.message)
        }
    }
    
}