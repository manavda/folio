import styled from 'styled-components'

export interface FlexContainerProps {
  height?: string
  width?: string
}
export const CenterFlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '100%'};
`
