import { useState } from "react";
import { useParams } from "react-router-dom";
import { OrganizationBadge } from "../../components";
import useGetResults from "../../hooks/useGetResults";

export default function UserProfile() {
  const { username } = useParams();
  const { data } = useGetResults(`https://api.github.com/users/${username}`);
  const orgs = useGetResults(`https://api.github.com/users/${username}/orgs`);
  const [selectedTab, setSelectedTab] = useState("Profile");
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

  const renderSelectedTab = (title) => {
    return title === "Profile"
      ? "border-pink-500 text-gray-100 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
      : "border-transparent text-gray-500 hover:text-white-800 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm";
  };
  return (
    <div class="h-full flex bg-gray-900">
      <div
        class="fixed inset-0 flex z-40 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          {/* Force sidebar to shrink to fit close icon --> */}
        </div>
      </div>
      <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div class="flex-1 relative z-0 flex overflow-hidden">
          <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* Breadcrumb --> */}
            <nav
              class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
              aria-label="Breadcrumb"
            >
              <a
                href="#"
                class="inline-flex items-center space-x-3 text-sm font-medium text-gray-100"
              >
                {/* Heroicon name: solid/chevron-left --> */}
                <svg
                  class="-ml-2 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2  000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Directory</span>
              </a>
            </nav>

            <article>
              {/* Profile header --> */}
              <div>
                <div>
                  <img
                    class="h-32 w-full object-cover lg:h-48"
                    src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt=""
                  />
                </div>
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div class="flex">
                      <img
                        class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={avatar_url}
                        alt=""
                      />
                    </div>
                    <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      {renderOrganizationBadges()}
                    </div>
                  </div>
                  <div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                    <h1 class="text-2xl font-bold text-gray-100 truncate">
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
                        onClick={() => setSelectedTab("Profile")}
                        className={renderSelectedTab("Profile")}
                      >
                        {" "}
                        Profile{" "}
                      </button>

                      <button
                        onClick={() => setSelectedTab("Repos")}
                        className={renderSelectedTab("Repos")}
                      >
                        {" "}
                        Repos {public_repos}{" "}
                      </button>
                    </nav>
                  </div>
                </div>
              </div>

              {/* Description list --> */}
              <div class="my-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  {email && (
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Email</dt>
                      <dd class="mt-1 text-sm text-gray-100">{email}</dd>
                    </div>
                  )}

                  {blog && (
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Blog</dt>
                      <dd class="mt-1 text-sm text-gray-100">
                        <a href={blog}>{blog}</a>
                      </dd>
                    </div>
                  )}

                  {location && (
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        Location
                      </dt>
                      <dd class="mt-1 text-sm text-gray-100">{location}</dd>
                    </div>
                  )}

                  {company && (
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Company</dt>
                      <dd class="mt-1 text-sm text-gray-100">{company}</dd>
                    </div>
                  )}

                  {followers && following && (
                    <div class="sm:col-span-1 flex flex-row">
                      <div className="items-center justify-center pr-6">
                        <dt class="text-sm font-medium text-gray-500">
                          Following
                        </dt>
                        <dd class="mt-1 text-sm text-gray-100">{following}</dd>
                      </div>
                      <div className="items-center justify-center">
                        <dt class="text-sm font-medium text-gray-500">
                          Followers
                        </dt>
                        <dd class="mt-1 text-sm text-gray-100">{followers}</dd>
                      </div>
                    </div>
                  )}

                  {bio && (
                    <div class="sm:col-span-2">
                      <dt class="text-sm font-medium text-gray-500">About</dt>
                      <dd class="mt-1 max-w-prose text-sm text-gray-100 space-y-5">
                        <p>{bio}</p>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
