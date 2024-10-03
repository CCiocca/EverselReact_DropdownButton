import {SelectBox} from 'devextreme-react/select-box';
import {TextBox} from 'devextreme-react/text-box';
import useTranslate from '../utils/useTranslate';
import { useCallback, useContext } from 'react';
import { ProductContext } from '../contexts/ProductProvider';


const dropDownOptions = {
    width: '100px',
    height: 'auto',
  }


  const OrdersDropdown = () => {
    const translate = useTranslate();
    const items = [
        { icon: 'fa-solid fa-box-open', text: translate('open'), value: 'open' },
        { icon: 'fa-solid fa-box', text: translate('closed'), value: 'closed'},
        { icon: 'fa-solid fa-cubes-stacked', text: translate('all'), value: 'all'}        
      ];
    const {openClosedOrders, setOpenClosedOrders} = useContext(ProductContext);
  
    const onValueChanged = useCallback((e) => {
      console.log('change', e.value);
      
        setOpenClosedOrders(e.value)
    }, []);  

    const itemRender = useCallback(({icon, text}) => {
      return (
        <div className='d-flex align-items-center'>
            <div className='order-openclose-icon d-flex justify-content-center me-3'>
                <i className={icon}></i>
            </div>
            <p>{text}</p>
        </div>
    )
  }, []);


    const fieldRender = useCallback((item) => {
      return (
        <div>
          <i className={`${item.icon} pt-2 ps-2 fs-4`} />
          <TextBox
            visible={false}
          />
        </div>
      );
    },[])

  return (
      <SelectBox
        className='no-arrow'
        dataSource={items}
        displayExpr="text"
        valueExpr="value"
        defaultValue={items[0].value} // or openClosedOrders ?
        placeholder={false}
        acceptCustomValue={false}
        aria-label="order status"
        width={40}
        height={35}
        onValueChanged={onValueChanged}
        fieldRender={fieldRender}
        itemRender={itemRender}
        dropDownOptions={dropDownOptions}
      />
  );
};

export default OrdersDropdown;