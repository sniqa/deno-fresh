import PageLayout from "comps/PageLayout.tsx";
import { FunctionComponent } from "https://esm.sh/v96/preact@10.11.0/src/index.d.ts";

const TableLayout: FunctionComponent = ({ children }) => {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  );
};

export default TableLayout;
