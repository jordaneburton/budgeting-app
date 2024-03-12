function Header ({ header }) {
  return (
    <>
        <h1 className='w100 bg-secondary z-2 ps-2 fw-bold px-md-5 d-flex flex-wrap align-content-center text-start text-white'>
            {header}
        </h1>
    </>
  );
}

export default Header