import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="grid grid-cols-7 h-screen">
        <div className="col-span-3 h-full border-r border-black flex items-center relative">
          <h2 className="text-4xl absolute top-8 left-2">Contact Me</h2>
          <div className="pt-6 pl-8">
            <h3 className="text-xl py-3 underline">Social Media</h3>
            <a
              href="https://www.facebook.com/myo.t.kha.79"
              className="block"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/iam_myothukha"
              className="block"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/myo-thu-kha-170077199/"
              className="block"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <div className="text-xl py-8">
              <a href="mailto:myothukha.dev@gmail.com">
                myothukha.dev@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 relative flex justify-center items-center">
          <div>
            <h2 className="text-4xl absolute top-8 left-8">About</h2>
            <p>Hi My name is Myo Thu Kha and</p>
            <p>I am a front-end Engineer from Myanmar.</p>
            <p>This is one of my projects that I created.</p>
            <p>
              You can check out the UI that i used
              <br /> to create this website at here
            </p>
            <div className="my-6 py-1 px-2 listBox">
              <a
                href="https://dribbble.com/shots/17282667-Food-Recipe-Landing?utm_source=Clipboard_Shot&utm_campaign=Izmahsa&utm_content=Food%20Recipe%20Landing&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Izmahsa&utm_content=Food%20Recipe%20Landing&utm_medium=Social_Share"
                target="_blank"
                rel="noreferrer"
              >
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
                  <p className="px-2">Reference UI</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
