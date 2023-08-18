import { Component } from '@angular/core';
import { Character, CreateCharacterDto } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService:DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(characterId: Character['id']) {
    this.dbzService.deleteCharacterById(characterId)
  }

  onNewCharacter(character: CreateCharacterDto) {
    this.dbzService.addCharacter(character)
  }
}
