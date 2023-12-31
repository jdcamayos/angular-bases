import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = []

  @Output()
  public onDeleteCharacterById: EventEmitter<Character['id']> = new EventEmitter()

  onDeleteCharacter(characterId: Character['id']): void {
    this.onDeleteCharacterById.emit(characterId)
  }
}
