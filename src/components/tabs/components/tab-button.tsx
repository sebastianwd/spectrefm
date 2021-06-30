import { Tab as ReactTab } from 'react-tabs'
import styled, { css } from 'styled-components'

const TabButton = styled(ReactTab)`
  background-color: unset;
  text-align: center;
  border-radius: 4px;
  color: ${(props) =>
    props.selected
      ? props.theme.palette.text.primary
      : props.theme.palette.text.secondary};
  position: relative;
  user-select: none;
  padding: 6px 12px;
  transition: all 0.2s;

  :not([aria-disabled='true']) {
    cursor: pointer;
  }

  ::before {
    content: '';
    position: absolute;
    height: 2px;
    background-color: ${(props) => props.theme.palette.primary.main};
    bottom: 0;
    width: 50%;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${(props) => (props.selected ? 1 : 0)};
    transition: all 0.2s;
  }
`

export default TabButton
