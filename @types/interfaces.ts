export type Skill = {
  name: string
  description: string
  experience: string
  iconClass?: string
}

export interface UniqueSkill extends Skill {
  uuid: string
}
