import { useNavigate } from 'react-router-dom';

function PageHeader({title}) {

  return (
    <>
    <div id="page-header" className='d-flex justify-content-between align-items-center px-3'>
        <h1 className='fs-4'>{title}</h1>
    </div>
    </>
  )
}

export default PageHeader