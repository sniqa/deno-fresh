import { Head } from "$fresh/runtime.ts";
import { FunctionComponent, JSX } from "preact";

interface PageLayoutProps {
  leftAside?: JSX.Element;
  centerMain?: JSX.Element;
  rightAside?: JSX.Element;
}

const PageLayout: FunctionComponent<PageLayoutProps> = (props) => {
  const { leftAside, children, rightAside } = props;

  return (
    <>
      <Head>
        <title>{`This is test page`}</title>
      </Head>

      <aside class={`w-56`}>
        {leftAside}
      </aside>

      <main>
        {children}
      </main>

      {rightAside}
    </>
  );
};

export default PageLayout;
