export default function RepoCard(props) {
  const { language, created_at, description, name, git_url } = props.repo;
  const formatedDate = new Date(created_at).toLocaleString(undefined, {day: "numeric", month: 'long', year: 'numeric'});
  return (
    <div class="   mx-4 max-w-md w-1/2 py-4 px-8 bg-gray-800 shadow-lg rounded-lg my-4 ">
      <p className="text-xs text-gray-400 mb-3">{formatedDate}</p>
      <div>
        <a class="text-gray-300 text-xl font-semibold" href={git_url}>
          {name}
        </a>
        {description && (
          <p class="mt-2 text-gray-400 text-base">{description}</p>
        )}
      </div>
      {language && (
        <p className="flex text-sm text-gray-400 justify-start mt-2">{language}</p>
      )}
      <div class="flex justify-end mt-4">
        <a
          href="#"
          className="text-xl font-medium text-indigo-500 justify-self-end"
        >
          John Doe
        </a>
      </div>
    </div>
  );
}
