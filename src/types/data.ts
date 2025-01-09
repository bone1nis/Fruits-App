export type IFruit = {
    name: string,
    id: number | string,
    family: string,
    order: string,
    genus: string,
    nutritions: IFruitNutritions,
    isLiked?: boolean
}

export type IFruitNutritions = {
    carbohydrates: number,
    protein: number,
    fat: number,
    calories: number,
    sugar: number
}