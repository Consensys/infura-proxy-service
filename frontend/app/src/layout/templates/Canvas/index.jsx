import {RegionTopCanvas, RegionFooterCanvas} from '@regions';

const SiteTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Box gradient="orange" sx={{variant: 'regions.canvasContainer'}}>
      <Atom.Flex column sx={{minHeight: '100vh', flex: 1, ...sx}}>
        <RegionTopCanvas />
        <Atom.Flex center column sx={{variant: 'regions.canvasMain'}}>
          {children}
        </Atom.Flex>
        <RegionFooterCanvas />
      </Atom.Flex>
    </Atom.Box>
  );
};

export default SiteTemplate;
