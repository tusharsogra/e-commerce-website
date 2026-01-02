import Button from './Button';
import { Link } from 'react-router-dom';
const Navbar = () => {
    
    return (
        
        <div className=' flex p-7 items-center justify-between  '>
            <div className='flex justify-center items-center'>
                <h1 className='text-white font-bold font-sans text-2xl'>ClickN</h1>
                <p className='text-green-400 font-bold font-sans text-2xl'>Buy</p>
            </div>
            
            <div className='text-white flex justify-center items-center gap-6 font-bold font-sans '>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Button text={"Login"}/>
            </div>
            
        </div>

      
    )
}

export default Navbar
