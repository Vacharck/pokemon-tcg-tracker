import { useState } from "react";
import { getCards } from "../services/cards";

export function useCards(){
    const [cards, setCards] = useState([])
    
    const refreshCards = ({search}) => {
        getCards({search}).then(newCards => setCards(newCards))
    }

    return {cards, refreshCards}
}