const works = [
  {
    title: 'Unbuilt Website',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    tags: ['AI', 'Chat', 'Web'],
  },
  {
    title: 'Moodboard',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    tags: ['AI', 'Chat', 'Web'],
  },

  {
    title: 'Moodboard',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    tags: ['AI', 'Chat', 'Web'],
  },

  {
    title: 'Moodboard',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    tags: ['AI', 'Chat', 'Web'],
  },
]

export default function SelectedWork({ className }) {
  return (
    <ul
      role="list"
      className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${className}`}
    >
      {works.map((work, index) => (
        <li
          key={index}
          className="col-span-1 flex flex-col rounded-xl bg-zinc-800 p-8 text-center text-white shadow"
        >
          <div className="mb-6">
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-zinc-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-100">
              <img
                src={work.imageUrl}
                alt=""
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {work.title}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="mb-4 text-2xl">{work.title}</h2>
            <ul className="flex">
              {work.tags.map((tag, index) => (
                <li className="" key={index}>
                  <div className="mr-4 rounded-xl bg-zinc-700 px-4 py-2">
                    {tag}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}
