import * as usersServerice from '../utilities/users-service'

function OrderHistory(){
    const handleCheckToken= async ()=>{
        const expDate = await usersServerice.checkToken()
        console.log(expDate); 
   }
    return(
        <div>
<h1> Order History Page</h1>
<button onClick={handleCheckToken}>Check when my Login Expires</button>

        </div>
    );
}

export default OrderHistory