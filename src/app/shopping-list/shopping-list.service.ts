import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Injectable({
    providedIn: 'root',
})
export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); //Do push nhan mutliple object
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}