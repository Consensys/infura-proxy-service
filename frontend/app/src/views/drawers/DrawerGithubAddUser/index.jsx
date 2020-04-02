import {FormGithubAddUser} from '@forms';

/* --- DrawerGithubAddUser : Views : Component --- */
const DrawerGithubAddUser = props => {
  return (
    <Atom.Box>
      {/* <Atom.Heading>Add Github User to Cerebro</Atom.Heading> */}
      <Atom.Paragraph sm>
        Add a user to the Cerebro data warehouse
      </Atom.Paragraph>
      <Atom.HorizontalRule sx={{mb: 3}} />
      <FormGithubAddUser />
    </Atom.Box>
  );
};
export default DrawerGithubAddUser;
