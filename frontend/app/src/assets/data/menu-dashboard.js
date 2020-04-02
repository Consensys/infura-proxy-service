import idea from '@assets/images/icons/icon-idea.png';
import balance from '@assets/images/icons/icon-balance.png';
import money from '@assets/images/icons/icon-money.png';
import award from '@assets/images/icons/icon-award.png';
import armor from '@assets/images/icons/icon-armor.png';
import key from '@assets/images/icons/icon-key.png';
import creature from '@assets/images/icons/icon-creature.png';

export default [
  // {
  //   label: 'Dashboard',
  //   to: '/dashboard',
  // },
  {
    label: 'Adventures',
    to: '/adventure/search',
    // image: <Atom.Image src={award} sx={{width: [18]}} />,
  },
  {
    label: 'Bounties',
    to: '/bounty/search',
    // image: <Atom.Image src={balance} sx={{width: [18]}} />,
    children: [
      {
        label: 'Create Bounty',
        to: '/bounty/create',
      },
    ],
  },
  {
    label: 'Grants',
    to: '/grant/search',
    // image: <Atom.Image src={money} sx={{width: [18]}} />,
  },
  {
    label: 'Guilds',
    to: '/guild/search',
    // image: <Atom.Image src={creature} sx={{width: [18]}} />,
  },
  {
    label: 'Ideas',
    to: '/idea/search',
    image: <Atom.Image src={idea} sx={{width: [18]}} sx={{width: [18]}} />,
    children: [
      {
        label: 'Submit Idea',
        to: '/idea/create',
      },
      {
        label: 'Curate Ideas',
        to: '/idea/curate',
      },
    ],
  },
  {
    label: 'Proposals',
    to: '/proposal/search',
    image: <Atom.Image src={key} sx={{width: [18]}} />,
    children: [
      {
        label: 'Create Proposal',
        to: '/bounty/create',
      },
    ],
  },
  {
    label: 'Quests',
    to: '/quest/search',
    image: <Atom.Image src={armor} sx={{width: [18]}} />,
  },
  // {
  //   label: 'Profile',
  //   to: '/profile',
  //   children: [
  //     {
  //       label: 'Gear',
  //       to: '/profile/gear',
  //     },
  //     {
  //       label: 'Teams',
  //       to: '/profile/teams',
  //     },
  //     {
  //       label: 'Guild',
  //       to: '/profile/guild',
  //     },
  //   ],
  // },
];
