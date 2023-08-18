import { Injectable } from '@angular/core';
import { Character, CreateCharacterDto } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 500
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ]

  addCharacter(character: CreateCharacterDto) {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    }
    this.characters.push(newCharacter)
  }

  deleteCharacterById(characterId: Character['id']) {
    this.characters = this.characters.filter( character => character.id !== characterId)
  }

}
