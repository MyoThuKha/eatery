import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { foods_api } from "../data/data";
import { dummyMenu } from "../data/dummyMenu";
import NavBar from "../components/navBar";

export const getStaticProps = async () => {
  const url = foods_api;
  const data = dummyMenu;
  // const res = await fetch(url);
  // const data = await res.json();
  return {
    props: { data },
  };
};
export default function Home({ data }) {
  const recipes = data.results;
  const [load, setLoad] = useState(3);

  return (
    <div className="md:grid md:grid-cols-5">
      <nav className="md:col-span-1 flex justify-center bg-white">
        <NavBar />
      </nav>
      <main className="px-16 py-16 col-span-4">
        {/* <LogIn /> */}
        <header>
          <h2 className="text-gray-700 text-6xl font-bold font-body">
            Recipes
          </h2>
          <h3 className="text-gray-700 text-2xl font-semi-bold">
            For Beginners
          </h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>

          <div className="grid lg:grid-cols-3 lg:gap-10">
            {/*  cards go here  */}
            {recipes === undefined ? (
              <div>Can&apos;t fetch data at the moment...</div>
            ) : (
              recipes.slice(0, load).map((item) => (
                <Link key={item.id} href={`/recipes/${item.id}`}>
                  <div className="card hover:shadow-lg">
                    <Image
                      className=" object-cover "
                      src={item.image}
                      alt={item.title}
                      width={195}
                      height={180}
                      priority={true}
                      layout="responsive"
                    />

                    <div className="m-4">
                      <span className="text-xl font-bold">{item.title}</span>
                      {/* <span className="block justify-center text-sm text-gray-400">
                    Recipe by Mario
                  </span> */}
                      <div className="badge">
                        <svg
                          className="w-5 inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="{1.5}"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{item.nutrition.nutrients[0].name}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular
        </h4> */}

          <div className="mt-8">{/* cards go here  */}</div>
        </div>

        {load != 15 && (
          <div className="flex justify-center ">
            <div
              className="btn bg-stone-400 text-white hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50"
              onClick={() => setLoad(() => load + 6)}
            >
              Load more
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
