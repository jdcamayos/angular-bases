export interface Character {
  id: string
  name: string
  power: number
}

export interface CreateCharacterDto extends Omit<Character, 'id'> {}
