/* --- Global --- */

/* --- Local --- */
import models from '@models';
import {
  fetchGithubUserAccount,
  fetchGithubUserRepoList,
} from '@lib/fetching';

export const seedUsers = async users => {
  let userList = [];
  let userRepoList = [];

  /* ----------------------- */
  // Users : Seed
  /* ----------------------- */
  for (let index = 0; index < users.length; index++) {
    const username = users[index];
    const user = await fetchGithubUserAccount(username);
    userList = userList.concat(user);
  }

  userList.forEach(async user => {
    await models.GithubUser.create(user);
  });

  /* ----------------------- */
  // Repo : Seed
  /* ----------------------- */
  for (let index = 0; index < users.length; index++) {
    const username = users[index];
    const repos = await fetchGithubUserRepoList(username);
    userRepoList = userRepoList.concat(repos);
  }

  userRepoList.forEach(async repo => {
    await models.GithubRepo.create({
      creator: repo.owner.login,
      ...repo,
    });
  });
};
