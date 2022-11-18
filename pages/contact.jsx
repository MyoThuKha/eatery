import Head from "next/head";
import CreditButton from "../components/button";

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
            <div className="text-lg">
              <a
                href="https://github.com/MyoThuKha"
                target="_blank"
                rel="noreferrer"
              >
                Github
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
            <CreditButton
              url="https://dribbble.com/shots/17282667-Food-Recipe-Landing?utm_source=Clipboard_Shot&utm_campaign=Izmahsa&utm_content=Food%20Recipe%20Landing&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Izmahsa&utm_content=Food%20Recipe%20Landing&utm_medium=Social_Share"
              text="home ui"
            />
            <CreditButton
              url="https://dribbble.com/shots/9004067-Recipe-Website?utm_source=Clipboard_Shot&utm_campaign=colinstewart&utm_content=Recipe%20Website&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=colinstewart&utm_content=Recipe%20Website&utm_medium=Social_Share"
              text="recipes ui"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
