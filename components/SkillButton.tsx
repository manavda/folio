import React, { FC } from 'react'
import Button from '@mui/material/Button'
import { Skill } from '../@types/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface Props {
  skill: Skill
}
const SkillButton: FC<Props> = ({ skill }) => {
  return (
    <Button startIcon={<FontAwesomeIcon icon="docker" />}>{skill.name}</Button>
  )
}
export default SkillButton
