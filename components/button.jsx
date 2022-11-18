const CreditButton = ({ url, text }) => {
  return (
    <div className="mr-8 my-6 py-1 px-2 listBox">
      <a href={url} target="_blank" rel="noreferrer">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
          <p className="px-2 uppercase">{text}</p>
        </div>
      </a>
    </div>
  );
};

export default CreditButton;
