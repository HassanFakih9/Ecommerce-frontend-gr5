import '../../Style/Dashboard.css';


const AdminLogin = () => {
  return (
    
      <div className='vendorLogin'>
      <div className='vendorLoginContainer'>
        <p className='logintitle'>
            Admin Login
        </p>
        <input type='text' className='vendorlogin-input' placeholder='Email'/>
        <input type='password' className='vendorlogin-input' placeholder='Password'/>
        <button className='userLogin-btn'> Login </button>
      </div>
    </div>
  )
}

export default AdminLogin
