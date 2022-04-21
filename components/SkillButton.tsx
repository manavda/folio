import React, { FC } from 'react'
import Button from '@mui/material/Button'
import { UniqueSkill } from '../@types/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
interface Props {
  skill: UniqueSkill
  onClick: () => void
}

const StyledButton = styled(Button)`
  margin: 10px;
`

const SkillButton: FC<Props> = ({ skill, onClick }) => {
  return (
    <StyledButton variant="contained" onClick={onClick}>
      {skill.name}
    </StyledButton>
  )
}
export default SkillButton
