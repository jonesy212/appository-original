import { GetStaticProps } from 'next';
import styled from 'styled-components';
/* eslint-disable-next-line */

export interface HomeProps {
  name: string;
}


export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  return {
    props: {
      name: 'Juri'
    },
  };
};


const StyledHome = styled.div`
  color: blue;
  font-size: 40px
`;

export function Home(props: HomeProps) {
  const {name} = props
  return (
    <StyledHome>
      <h1>Welcome to Home {name}!</h1>
    </StyledHome>
  );
}

export default Home;
