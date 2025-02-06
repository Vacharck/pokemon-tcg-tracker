import { useState } from "react";
import { getCards } from "../services/cards";
import { CardT, SearchT } from "../types";

export function useCards(){
    const [cards, setCards] = useState<CardT[]>([])
    
    const refreshCards = ({search}:SearchT) => {
        getCards({search}).then(newCards => setCards(newCards))
    }

    return {cards, refreshCards}
}