import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'
export interface FlexContainerProps {
  minHeight?: string
  minWidth?: string
  height?: string
  width?: string
}
export const FlexTransitionGroup = styled(TransitionGroup)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 1600px;
  background-color: white;
  border: none;
`
export const CenterFlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => props.minHeight || '100%'};
  min-width: ${(props) => props.minWidth || '100%'};
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '100%'};
`
