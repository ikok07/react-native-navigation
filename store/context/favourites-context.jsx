import {createContext, useContext, useState} from "react"

const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
})

export function FavouritesContextProvider({children}) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([])

    function addFavourite(id) {
        setFavouriteMealIds(ids => [...ids, id])
    }

    function removeFavourite(id) {
        setFavouriteMealIds(ids => ids.filter(filteredId => filteredId !== id))
    }

    const value = {
        ids: favouriteMealIds,
        addFavourite,
        removeFavourite
    }

    return <FavouritesContext.Provider value={value}>
        {children}
    </FavouritesContext.Provider>
}

export function useFavourites() {
    const context = useContext(FavouritesContext)
    if (!context) throw new Error("useFavourites hook should be used inside FavouritesContextProvider")
    return context
}