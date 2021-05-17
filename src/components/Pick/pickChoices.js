import rockImg from '../../images/icon-rock.svg'
import paperImg from '../../images/icon-paper.svg'
import scissorsImg from '../../images/icon-scissors.svg'
import lizardImg from '../../images/icon-lizard.svg'
import spockImg from '../../images/icon-spock.svg'

export const picks = [
	{
		name: 'paper',
		image: paperImg,
		bgColor: 'bg-paper',
		value: 0
	},
	{
		name: 'rock',
		image: rockImg,
		bgColor: 'bg-rock',
		value: 1
	},
	{
		name: 'scissors',
		image: scissorsImg,
		bgColor: 'bg-scissors',
		value: 2
	},
        {
		name: 'spock',
		image: spockImg,
		bgColor: 'bg-spock',
		value: 3
	},
	{
		name: 'lizard',
		image: lizardImg,
		bgColor: 'bg-lizard',
		value: 4
	}
];
