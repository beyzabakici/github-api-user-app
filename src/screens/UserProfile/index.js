import { useState } from "react";
import { useParams } from "react-router-dom";
import { OrganizationBadge, RepoCard } from "../../components";
import useGetResults from "../../hooks/useGetResults";

export default function UserProfile() {
  const { username } = useParams();
  const [getResults, results] = useGetResults(
    `https://api.github.com/users/${username}`
  );
  const [getRepo, repos] = useGetResults(
    `https://api.github.com/users/${username}/repos`
  );
  const [getOrgs, orgs] = useGetResults(
    `https://api.github.com/users/${username}/orgs`
  );
  console.log(results, repos, orgs);
  const [selectedRepos, setSelectedRepos] = useState(false);
  const {
    avatar_url,
    bio,
    blog,
    company,
    email,
    followers,
    following,
    location,
    public_repos,
    name,
  } = results.data;

  const getOrganizationBadges = () => {
    return orgs?.data.map((organization) => (
      <OrganizationBadge organization={organization} key={organization.id} />
    ));
  };

  const sortByDateRepos = () => {
    return repos?.data.sort((a, b) => a.id - b.id);
  };

  const getRepos = () => {
    return sortByDateRepos().map((repo) => (
      <RepoCard repo={repo} isFavoritesItem={false} key={repo.id} />
    ));
  };

  return (
    <div className="user-profile flex bg-gray-900">
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            <article>
              <div>
                <div>
                  <img
                    className="h-32 w-full object-cover lg:h-48"
                    src="https://source.unsplash.com/random/?city,night/1950x80"
                  />
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 justify-between">
                    <div className="flex">
                      <img
                        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={avatar_url}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-row flex-wrap">
                      {getOrganizationBadges()}
                    </div>
                  </div>
                  <div className="hidden sm:block mt-6 min-w-0 flex-1">
                    <h1 className="text-3xl font-bold text-gray-100 truncate">
                      {name}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      <button
                        onClick={() => setSelectedRepos(false)}
                        className={
                          !selectedRepos
                            ? "border-purple-600 text-gray-100 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base"
                            : "border-transparent text-gray-500 hover:text-white-800 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base"
                        }
                      >
                        Profile
                      </button>

                      <button
                        onClick={() => setSelectedRepos(true)}
                        className={
                          selectedRepos
                            ? "border-purple-600 text-gray-100 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base"
                            : "border-transparent text-gray-500 hover:text-white-800 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base"
                        }
                      >
                        Repos ({public_repos})
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
              {!selectedRepos ? (
                <div className="my-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {email && (
                      <div className="sm:col-span-1">
                        <dt className="text-base font-medium text-gray-500">
                          Email
                        </dt>
                        <dd className="mt-1 text-base text-gray-100">
                          {email}
                        </dd>
                      </div>
                    )}

                    {blog && (
                      <div className="sm:col-span-1">
                        <dt className="text-base font-medium text-gray-500">
                          Blog
                        </dt>
                        <dd className="mt-1 text-base text-gray-100">
                          <a href={blog}>{blog}</a>
                        </dd>
                      </div>
                    )}

                    {location && (
                      <div className="sm:col-span-1">
                        <dt className="text-base font-medium text-gray-500">
                          Location
                        </dt>
                        <dd className="mt-1 text-base text-gray-100">
                          {location}
                        </dd>
                      </div>
                    )}

                    {company && (
                      <div className="sm:col-span-1">
                        <dt className="text-base font-medium text-gray-500">
                          Company
                        </dt>
                        <dd className="mt-1 text-base text-gray-100">
                          {company}
                        </dd>
                      </div>
                    )}

                    {followers && following && (
                      <div className="sm:col-span-1 flex flex-row">
                        <div className="items-center justify-center pr-6">
                          <dt className="text-base font-medium text-gray-500">
                            Following
                          </dt>
                          <dd className="mt-1 text-base text-gray-100">
                            {following}
                          </dd>
                        </div>
                        <div className="items-center justify-center">
                          <dt className="text-base font-medium text-gray-500">
                            Followers
                          </dt>
                          <dd className="mt-1 text-base text-gray-100">
                            {followers}
                          </dd>
                        </div>
                      </div>
                    )}

                    {bio && (
                      <div className="sm:col-span-2">
                        <dt className="text-base font-medium text-gray-500">
                          About
                        </dt>
                        <dd className="mt-1 max-w-prose text-base text-gray-100 space-y-5">
                          <p>{bio}</p>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              ) : (
                <div className="flex flex-row flex-wrap justify-center mt-4 lg:px-16 ">
                  {getRepos()}
                </div>
              )}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
