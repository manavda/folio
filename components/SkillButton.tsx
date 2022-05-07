import React, { FC } from 'react'
import { UniqueSkill } from '../@types/interfaces'
import styled from 'styled-components'
import { Button } from './styled-components/ButtonStyles'
interface Props {
  skill: UniqueSkill
  onClick: () => void
}

const StyledButton = styled(Button)`
  margin: 10px;
`

const SkillButton: FC<Props> = ({ skill, onClick }) => {
  return <StyledButton onClick={onClick}>{skill.name}</StyledButton>
}
export default SkillButton
