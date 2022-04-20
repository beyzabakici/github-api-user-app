import { useState } from "react";
import { useParams } from "react-router-dom";
import { OrganizationBadge, RepoCard } from "../../components";
import useGetResults from "../../hooks/useGetResults";

export default function UserProfile() {
  const { username } = useParams();
  const { data } = useGetResults(`https://api.github.com/users/${username}`);
  const orgs = useGetResults(`https://api.github.com/users/${username}/orgs`);
  const repos = useGetResults(`https://api.github.com/users/${username}/repos`);
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
  } = data;

  const renderOrganizationBadges = () => {
    return orgs.data.map((organization) => (
      <OrganizationBadge organization={organization} />
    ));
  };

  const renderRepos = () => {
    return repos.data.map((repo) => <RepoCard repo={repo} />);
  };
  return (
    <div class="h-full flex bg-gray-900">
      <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div class="flex-1 relative z-0 flex overflow-hidden">
          <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            <article>
              <div>
                  <div>
                    <img
                      class="h-32 w-full object-cover lg:h-48"
                      src="https://source.unsplash.com/random/?city,night/1950x80"
                      alt=""
                    />
                </div>
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 justify-between">
                    <div class="flex">
                      <img
                        class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={avatar_url}
                        alt=""
                      />
                    </div>
                    <div class="flex flex-row flex-wrap">
                      {renderOrganizationBadges()}
                    </div>
                  </div>
                  <div class="hidden sm:block mt-6 min-w-0 flex-1">
                    <h1 class="text-3xl font-bold text-gray-100 truncate">
                      {name}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Tabs --> */}
              <div class="mt-6 sm:mt-2 2xl:mt-5">
                <div class="border-b border-gray-200">
                  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                      <button
                        onClick={() => setSelectedRepos(false)}
                        className={
                          !selectedRepos
                            ? "border-pink-500 text-gray-100 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base"
                            : "border-transparent text-gray-500 hover:text-white-800 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base"
                        }
                      >
                        {" "}
                        Profile{" "}
                      </button>

                      <button
                        onClick={() => setSelectedRepos(true)}
                        className={
                          selectedRepos
                            ? "border-pink-500 text-gray-100 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base"
                            : "border-transparent text-gray-500 hover:text-white-800 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base"
                        }
                      >
                        {" "}
                        Repos ({public_repos}){" "}
                      </button>
                    </nav>
                  </div>
                </div>
              </div>

              {/* Description list --> */}
              {!selectedRepos ? (
                <div class="my-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {email && (
                      <div class="sm:col-span-1">
                        <dt class="text-base font-medium text-gray-500">Email</dt>
                        <dd class="mt-1 text-base text-gray-100">{email}</dd>
                      </div>
                    )}

                    {blog && (
                      <div class="sm:col-span-1">
                        <dt class="text-base font-medium text-gray-500">Blog</dt>
                        <dd class="mt-1 text-base text-gray-100">
                          <a href={blog}>{blog}</a>
                        </dd>
                      </div>
                    )}

                    {location && (
                      <div class="sm:col-span-1">
                        <dt class="text-base font-medium text-gray-500">
                          Location
                        </dt>
                        <dd class="mt-1 text-base text-gray-100">{location}</dd>
                      </div>
                    )}

                    {company && (
                      <div class="sm:col-span-1">
                        <dt class="text-base font-medium text-gray-500">
                          Company
                        </dt>
                        <dd class="mt-1 text-base text-gray-100">{company}</dd>
                      </div>
                    )}

                    {followers && following && (
                      <div class="sm:col-span-1 flex flex-row">
                        <div className="items-center justify-center pr-6">
                          <dt class="text-base font-medium text-gray-500">
                            Following
                          </dt>
                          <dd class="mt-1 text-base text-gray-100">
                            {following}
                          </dd>
                        </div>
                        <div className="items-center justify-center">
                          <dt class="text-base font-medium text-gray-500">
                            Followers
                          </dt>
                          <dd class="mt-1 text-base text-gray-100">
                            {followers}
                          </dd>
                        </div>
                      </div>
                    )}

                    {bio && (
                      <div class="sm:col-span-2">
                        <dt class="text-base font-medium text-gray-500">About</dt>
                        <dd class="mt-1 max-w-prose text-base text-gray-100 space-y-5">
                          <p>{bio}</p>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              ) : (
                <div className="flex flex-row flex-wrap justify-center mt-4 px-8 xl:px-20">{renderRepos()}</div>
              )}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
