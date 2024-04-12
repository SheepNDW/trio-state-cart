import { createContext, useContext } from 'react';

interface TableContextType {
  columns: string;
}

const TableContext = createContext<TableContextType | null>(null);
const useTable = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTable must be used within a Table');
  }
  return context;
};

function Table({
  columns,
  children,
}: {
  columns: string;
  children: React.ReactNode;
}) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        className="rounded-lg border border-gray-200 bg-gray-50"
        role="table"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  const { columns } = useTable();

  return (
    <header
      style={{ gridTemplateColumns: columns }}
      className="grid items-center gap-6 border-b border-gray-200 bg-gray-100 p-4 font-semibold uppercase tracking-wide text-gray-600"
      role="row"
    >
      {children}
    </header>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  const { columns } = useTable();

  return (
    <div
      style={{ gridTemplateColumns: columns }}
      className="grid items-center gap-6 border-b border-gray-200 p-3"
      role="row"
    >
      {children}
    </div>
  );
}

function Body<T>({
  data,
  render,
  tips = 'No items to display.',
}: {
  data: T[];
  render: (item: T) => React.ReactNode;
  tips?: string;
}) {
  if (data.length === 0)
    return <p className="p-6 text-center font-medium">{tips}</p>;

  return <section className="my-1">{data.map(render)}</section>;
}

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="flex justify-center bg-gray-100 p-3">{children}</footer>
  );
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
