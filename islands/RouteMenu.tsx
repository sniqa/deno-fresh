import { FunctionComponent } from "https://esm.sh/v96/preact@10.11.0/src/index.d.ts";
import { JSX } from "https://esm.sh/v95/preact@10.11.0/jsx-runtime/src/index.d.ts";

interface RouteMenuProps {
  title: string;
  to: string;
  icon?: JSX.Element;
}

const RouteMenu: FunctionComponent<RouteMenuProps> = ({ title, to, icon }) => {
  return (
    <a
      href={to}
      class="flex items-center border-l-[3px] px-4 py-3 border-blue-500 bg-blue-50  text-blue-700"
      //   class="flex items-center border-l-[3px] px-4 py-3 border-transparent  text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-blue-700"
    >
      {icon}

      <span class="ml-3 text-sm font-medium">{title}</span>
    </a>
  );
};

export default RouteMenu;
