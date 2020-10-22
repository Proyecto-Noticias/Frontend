import React from 'react';

const SkipLink = ({ paths }) => {
  return (
    <>
      <div className='skip-link__container'>
        {paths.map((path) => {
          return (
            <a
              className='skip-link__container--link'
              key={path.key}
              href={path.path}
            >
              {path.name}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SkipLink;
