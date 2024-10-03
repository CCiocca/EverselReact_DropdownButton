import OrdersDropdown from './OrdersDropdown.jsx';

const MainOrders = ({orders, filter}) => {
  return (
    <>
      <div id='lookup-form' className='d-flex align-items-center flex-wrap'>
        <OrdersDropdown/>
      </div>
    </>
  )
}
export default MainOrders