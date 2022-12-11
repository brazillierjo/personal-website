export const Footer: React.FC<{}> = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='mt-8 border-t'>
            <p className='mt-4 text-center text-xs text-gray-500'>Made with ❤️ by RINCON BRAZILLIER Johan | {year}</p>
        </div>
    );
};
