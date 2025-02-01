import { PokemonTCG } from "pokemon-tcg-sdk-typescript"

export const getCards = async ({search}) => {
    if (search === '') return 
    
    const query = `name:${search}`

    try {
        const cards = await PokemonTCG.findCardsByQueries({q: query})
        return cards?.map(card => ({id: card.id, name: card.name, url: card.images.large, prices: card.tcgplayer?.prices}))
    } catch (error) {
        //Handle the error in a more proper way
        throw new Error("fetching didn't work");
    }
    
}