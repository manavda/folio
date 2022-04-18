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
    <StyledButton
      variant="contained"
      startIcon={
        <FontAwesomeIcon
          icon="docker"
          style={{ display: 'inline-block', margin: '5px' }}
        />
      }
      onClick={onClick}>
      {skill.name}
    </StyledButton>
  )
}
export default SkillButton
