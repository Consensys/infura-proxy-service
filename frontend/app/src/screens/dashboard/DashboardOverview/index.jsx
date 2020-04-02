/* --- Global --- */
import {Icon} from '@blueprintjs/core';

/* --- Local --- */
import {CardStatisticSmall} from '@components';
import {TransactionQuery} from '@containers';
/* --- Component --- */
const DashboardOverview = props => {
  return (
    <Atom.Box>
      <RegionMain />
    </Atom.Box>
  );
};

const RegionHeader = props => {
  return (
    <Atom.Flex
      between
      gradient="blue"
      direction={0}
      sx={{
        bg: 'blue',
        color: 'white',
        boxShadow: 1,
        py: 3,
        px: 3,
      }}>
      <CardStatisticSmall
        title="3,251"
        subtitle="Active"
        icon={<Icon icon="globe" iconSize={30} color="white" />}
        image={'https://image.flaticon.com/icons/svg/1673/1673599.svg'}
        sx={{}}
      />
      <CardStatisticSmall
        title="320,251"
        subtitle="DEV"
        icon={<Icon icon="build" iconSize={30} color="white" />}
        image={'https://image.flaticon.com/icons/svg/1673/1673599.svg'}
        sx={{}}
      />
      <CardStatisticSmall
        title="$1,000,000"
        subtitle="Funds"
        icon={<Icon icon="bank-account" iconSize={30} color="white" />}
        image={'https://image.flaticon.com/icons/svg/1673/1673599.svg'}
        sx={{}}
      />
      <CardStatisticSmall
        title="104,200"
        subtitle="Quests"
        icon={<Icon icon="confirm" iconSize={30} color="white" />}
        image={'https://image.flaticon.com/icons/svg/1673/1673599.svg'}
        sx={{}}
      />
    </Atom.Flex>
  );
};

const RegionMain = props => {
  return (
    <Atom.Box sx={{m: 4}}>
      <TransactionQuery hash="0xb719420090cd4ae6ca4976e57461e09668c9a6e1acedc351f20f1edbb8f42f10" />
    </Atom.Box>
  );
};

export default DashboardOverview;
