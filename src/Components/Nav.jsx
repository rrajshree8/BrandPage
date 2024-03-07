const Nav=()=>{
return(
    <nav>
        <div className="logo">
          <img src="/images/nlogo.png" alt="Logo" />
        </div>
        <ul className='icons'>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className='btn1'>
          Log In
        </button>
      </nav>
);
};
export default Nav