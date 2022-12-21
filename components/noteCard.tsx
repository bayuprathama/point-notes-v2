import sentenceCase from '../utils/sentenceCase'

type Note = {
  note: string[]
}

export default function NoteCard({
  category,
  note,
  handleNextClick,
  handlePrevClick,
}) {
  return (
    <div className="w-full bg-slate-800 rounded-[15px]">
      <div className="px-4 py-2">
        <div className="flex justify-between text-slate-400">
          <h1>{sentenceCase(category)}</h1>
          <p>{`#${note.id}`}</p>
        </div>
        <div className="py-10">
          <p className="px-4 text-xl font-medium text-center text-slate-200">
            {note.content}
          </p>
        </div>
      </div>
      <div className="flex justify-between py-2 rounded-bl-[15px] rounded-br-[15px] bg-slate-700 px-4 text-sky-400">
        <button className="py-2" onClick={handleNextClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#38BDF8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5M12 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button className="py-2">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="none"
            viewBox="0 0 23 23"
          >
            <g clipPath="url(#clip0_72_2)">
              <path
                fill="#38BDF8"
                d="M4.313 0A4.313 4.313 0 000 4.313v14.375A4.313 4.313 0 004.313 23h14.375A4.313 4.313 0 0023 18.687V4.313A4.313 4.313 0 0018.687 0H4.313zm3.593 5.75a2.156 2.156 0 11-4.312 0 2.156 2.156 0 014.312 0zm11.5 0a2.156 2.156 0 11-4.312 0 2.156 2.156 0 014.312 0zM17.25 19.406a2.156 2.156 0 110-4.312 2.156 2.156 0 010 4.312zM7.906 17.25a2.156 2.156 0 11-4.312 0 2.156 2.156 0 014.312 0zm3.594-3.594a2.156 2.156 0 110-4.312 2.156 2.156 0 010 4.312z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_72_2">
                <path fill="#fff" d="M0 0H23V23H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="py-2" onClick={handleNextClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#38BDF8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
