import { Component, computed, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
interface character{
    id: number;
    name: string;
    pawels: number;
}
@Component({templateUrl: './pokemon-page-component.html',
    standalone: true,
    imports: [CommonModule, FormsModule, NgClass],
})
export class PokemonPageComponent {
    characters = signal<character[]>([
        {id:1, name:'Pikachu', pawels:90},
        {id:2, name:'Charizard', pawels:95},
        {id:3, name:'Bulbasaur', pawels:80},
    ]);
    newName: string = '';
    newPawels: number = 0;

    pawelsclass = computed(() => ({
        'text-danger': true
    }));
    addCharacter(){
        if(!this.newName.trim() || this.newPawels <= 0) return;
        const newld = this.characters().length > 0?
        Math.max(...this.characters().map(c => c.id)) + 1
        : 1;
        this.characters.update(list => [...list, 
            {id: newld, name: this.newName, pawels: this.newPawels}]);
        this.newName = '';
        this.newPawels = 0;
    }
    trackById(index: number, character: character){
        return character.id;
    }
    
}