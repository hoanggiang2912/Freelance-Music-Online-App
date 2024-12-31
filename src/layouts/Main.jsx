import { Link } from 'react-router-dom';

function Main({ title, viewMore = true, children }) {
  return (
    <main className="px-20 py-12">
      <div className="flex items-center justify-between">
        <h1 className='text-lg text-lightBlue w-fit relative before:content-[""] before:absolute before:bottom-0 before:left-0 before:bg-lightBlue before:h-[2px] before:w-1/2 mb-6'>
          {title}
        </h1>
        {viewMore && (
          <Link
            to={'/genres/view-more'}
            className="text-md text-white hover:text-white hover:underline"
          >
            View more
          </Link>
        )}
      </div>
      {children}
    </main>
  );
}

export default Main;
