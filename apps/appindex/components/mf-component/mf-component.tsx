import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MfComponentProps {}

const StyledMfComponent = styled.div`
  color: pink;
`;

export function MfComponent(props: MfComponentProps) {
  return (
    <StyledMfComponent>
      <h1>Welcome to MfComponent!</h1>
    </StyledMfComponent>
  );
}

export default MfComponent;
