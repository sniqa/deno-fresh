const BTN_TITLE = "返回首页";

const NotFound = () => {
  return (
    <div class="flex flex-col justify-center items-center h-screen place-content-center bg-white">
      <p class="uppercase tracking-widest text-gray-500 mb-4">
        404 | Not Found
      </p>

      <a
        class="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
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
          {BTN_TITLE}
        </span>
      </a>
    </div>
  );
};

export default NotFound;
