/**
 * Renders the Footer component.
 *
 * @return {React.ReactElement} The rendered Footer component.
 */
export const Footer: React.FC<{}> = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="mt-12 pb-6">
      <p className="mt-4 text-center text-xs text-gray-500">Made with ❤️ by RINCON BRAZILLIER Johan | {year}</p>
    </div>
  );
};
