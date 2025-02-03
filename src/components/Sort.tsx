import { useId } from "react"
import { useSort } from "../hooks/useSort"

export function Sort(){
    const { handleChange } = useSort()
    const sortSelectId = useId()

    return(
        <section>
        <h3>
          Sort by
        </h3>
        <select name="sort" id={sortSelectId} onChange={handleChange}>
          <option value="">
            Sort by
          </option>
          <option value="ascending-alphabetical">
            A to Z
          </option>
          <option value="descending-alphabetical">
            Z to A
          </option>
          <option value="ascending-price">
            Lowest to highest
          </option>
          <option value="descending-price">
            Highest to lowest
          </option>
        </select>
      </section>
    )
}