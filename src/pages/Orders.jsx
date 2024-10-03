import useTranslate from '../utils/useTranslate';
import PageHeader from '../components/PageHeader';
import MainOrders from '../components/MainOrders';

const Orders = () => {
    const translate = useTranslate();
    const pageTitle = translate('Orders')

    return (
        <>
            <PageHeader title={pageTitle} backArrowVisible={false} />
            <div className={`page-container d-flex flex-column `}>
                <MainOrders/>
            </div>
        </>
    )
}

export default Orders