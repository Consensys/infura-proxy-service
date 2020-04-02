/* --- Settings --- */
const styleMenuItem = {
  fontSize: 1,
  my: 1,
  flexDirection: 'column',
};
const styleMenuItemHover = {
  color: 'white',
  opacity: 1,
  transform: 'scale(1.025)',
};
const styleMenuItemChildren = {
  fontSize: 1,
  my: 1,
  flexDirection: 'column',
};

/* --- MenuAside : Component --- */
const MenuAside = props => {
  return (
    <>
      <Molecule.Menu
        direction="column"
        label="Search"
        sx={styleMenuItem}
        hover={styleMenuItemHover}
        sxChildren={styleMenuItemChildren}
        sxChild={{transition: 'all 0.2s'}}
        labelUnderline
        items={[
          {
            label: 'Blocks',
            to: '/insights/search/blocks',
          },
          {
            label: 'Transactions',
            to: '/insights/search/transactions',
          },
          {
            label: 'Receipts',
            to: '/insights/search/receipts',
          },
          {
            label: 'ENS',
            to: '/insights/search/ens',
          },
        ]}
      />

      {/* When Analytics Are Available Uncomment Menu */}
      {/* <Molecule.Menu
        direction="column"
        label="Analytics"
        sx={styleMenuItem}
        hover={styleMenuItemHover}
        sxChildren={styleMenuItemChildren}
        sxChild={{transition: 'all 0.2s'}}
        labelUnderline
        items={[
          {
            label: 'Blocks',
            to: '/insights/analytics/blocks',
          },
          {
            label: 'Transactions',
            to: '/insights/analytics/transactions',
          },
          {
            label: 'Receipts',
            to: '/insights/analytics/receipts',
          },
        ]}
      /> */}
    </>
  );
};
export default MenuAside;
