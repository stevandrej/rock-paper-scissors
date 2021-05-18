import rockImg from '../../images/icon-rock.svg'
import paperImg from '../../images/icon-paper.svg'
import scissorsImg from '../../images/icon-scissors.svg'
import lizardImg from '../../images/icon-lizard.svg'
import spockImg from '../../images/icon-spock.svg'

export const picks = [
	{
		name: 'scissors',
		image: scissorsImg,
		bgColor: 'bg-scissors',
		value: 0
	},
	{
		name: 'paper',
		image: paperImg,
		bgColor: 'bg-paper',
		value: 1
	},
	{
		name: 'rock',
		image: rockImg,
		bgColor: 'bg-rock',
		value: 2
	},
	{
		name: 'lizard',
		image: lizardImg,
		bgColor: 'bg-lizard',
		value: 3
	},
	{
		name: 'spock',
		image: spockImg,
		bgColor: 'bg-spock',
		value: 4
	}
];
