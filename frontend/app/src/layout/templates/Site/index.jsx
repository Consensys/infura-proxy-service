import {RegionTop, RegionFooter} from '@regions';

const SiteTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Flex column sx={{flex: 1, minHeight: '100vh', ...sx}}>
      <RegionTop />
      <Atom.Flex sx={{flex: 1, variant: 'main'}}>{children}</Atom.Flex>
      <RegionFooter />
    </Atom.Flex>
  );
};

export default SiteTemplate;
