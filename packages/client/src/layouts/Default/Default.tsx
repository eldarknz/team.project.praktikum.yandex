import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Navbar } from '@components/Navbar'
import { PageLoader } from '@components/PageLoader'
import { PageErrorBoundary } from '@components/PageErrorBoundary'

import './Default.scss'

export const DefaultLayout = () => {
  return (
    <PageErrorBoundary>
      <div className="default-layout">
        <Navbar />
        <main className="default-layout__main">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </PageErrorBoundary>
  )
}
