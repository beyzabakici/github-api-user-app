import AppButton from "../AppButton";

export default function UserCard({ user }) {
  const { login, avatar_url } = user;
  return (
    <li class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
      <div class="space-y-6 xl:space-y-10">
        <img
          class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          src={avatar_url}
          alt={login}
        />
        <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
          <div class="font-medium text-lg leading-6 space-y-1">
            <h3 class="text-white">{login}</h3>
          </div>

          <AppButton text="Show more" />
        </div>
      </div>
    </li>
  );
}
