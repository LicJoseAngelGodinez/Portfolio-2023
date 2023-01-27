import './home.css';

import { Center, Grid, GridItem } from '@chakra-ui/react';

const Home = () => {
	return (
		<div className='Home'>
			<Center>
				<Grid
					templateAreas={`"header header"
										"nav main"
										"nav footer"`}
					gridTemplateRows={'50px 1fr 30px'}
					gridTemplateColumns={'150px 1fr'}
					h='75vh'
					w='125vh'
					gap='1'
					color='blackAlpha.700'
					fontWeight='bold'
				>
					<GridItem pl='2' bg='orange' area={'header'}>
						Header
					</GridItem>
					<GridItem pl='2' bg='pink' area={'nav'}>
						Nav
					</GridItem>
					<GridItem pl='2' bg='green' area={'main'}>
						Main
					</GridItem>
					<GridItem pl='2' bg='blue' area={'footer'}>
						Footer
					</GridItem>
				</Grid>
			</Center>
		</div>
	);
}

export default Home;