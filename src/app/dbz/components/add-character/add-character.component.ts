import { Component, EventEmitter, Output } from '@angular/core';

import { Character, CreateCharacterDto } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<CreateCharacterDto> = new EventEmitter()

  public character: CreateCharacterDto = {
    name: '',
    power: 0
  }

  emitCharacter() {
    // console.log(this.character)
    if (this.character.name.length === 0) return

    this.onNewCharacter.emit(this.character)

    this.character = { name: '', power: 0 }
  }
}
