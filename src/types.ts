export type Card = {
    id:                     string;
    name:                   string;
    supertype:              string;
    subtypes:               string[];
    hp:                     string;
    types:                  string[];
    evolvesFrom:            string;
    abilities:              Ability[];
    attacks:                Attack[];
    weaknesses:             Weakness[];
    retreatCost:            string[];
    convertedRetreatCost:   number;
    set:                    Set;
    number:                 string;
    artist:                 string;
    rarity:                 string;
    flavorText:             string;
    nationalPokedexNumbers: number[];
    legalities:             Legalities;
    images:                 InstructionImages;
    tcgplayer:              Tcgplayer;
    cardmarket:             Cardmarket;
}

export type Ability = {
    name: string;
    text: string;
    type: string;
}

export type Attack = {
    name:                string;
    cost:                string[];
    convertedEnergyCost: number;
    damage:              string;
    text:                string;
}

export type Cardmarket = {
    url:       string;
    updatedAt: string;
    prices:    { [key: string]: number | null };
}

export type InstructionImages = {
    small: string;
    large: string;
}

export type Legalities = {
    unlimited: string;
    standard:  string;
    expanded:  string;
}

export type Set = {
    id:           string;
    name:         string;
    series:       string;
    printedTotal: number;
    total:        number;
    legalities:   Legalities;
    ptcgoCode:    string;
    releaseDate:  string;
    updatedAt:    string;
    images:       SetImages;
}

export type SetImages = {
    symbol: string;
    logo:   string;
}

export type Tcgplayer = {
    url:       string;
    updatedAt: string;
    prices:    Prices;
}

export type Prices = {
    normal:          Normal;
    reverseHolofoil: Normal;
}

export type Normal = {
    low:       number;
    mid:       number;
    high:      number;
    market:    number;
    directLow: number;
}

export type Weakness = {
    type:  string;
    value: string;
}

export type CardT = {
    id:                     Card["id"]
    name:                   Card["name"]
    set:                    Card["set"]["name"]
    url:                    Card["images"]["large"]
    prices:                 Card["tcgplayer"]["prices"]
}

export type SearchT = {
    search: string
}

export type FiltersT = {
    minPrice: number
}