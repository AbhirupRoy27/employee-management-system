import React, { lazy, Suspense } from 'react'
import DefaultLoader from '../../../Loader/DefaultLoader'
const EmpDetails = lazy(() => import('./Components/EmpDetails'))

function AddEmpForm() {
  return (
    <div className="mx-4 sm:mx-15  py-3 text-gray-50 mt-5">
      <Suspense fallback={<DefaultLoader />}>
        <EmpDetails />
      </Suspense>
    </div>
  )
}

export default React.memo(AddEmpForm)
