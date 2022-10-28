import { Head } from "$fresh/runtime.ts";
import { FunctionComponent } from "https://esm.sh/v95/preact@10.11.0/src/index.d.ts";

const BTN_ENTER_HOME = "进入首页";

const index: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>This is test page</title>
        <link rel="stylesheet" type="text/css" href="/style.css" />
      </Head>

      <div
        class="relative"
        className="h-screen w-screen overflow-hidden"
      >
        {
          <img
            // src="/main.jpg"
            alt=""
            class="w-screen h-screen absolute"
            id="index"
          />
        }

        <div className="h-screen w-screen flex items-center justify-center absolute z-10	">
          <div className="w-80 h-56 bg-white rounded-xl bg-opacity-50 p-4 flex flex-col  justify-between items-center">
            <span class="text-xl">This is test page</span>

            {/* button */}
            <a
              class="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
              href="/home"
            >
              <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span class="text-sm font-medium transition-all group-hover:mr-4">
                {BTN_ENTER_HOME}
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
