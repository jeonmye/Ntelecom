import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
const Layout = lazy(() => import('../components/Layout'));
const KTpaymentsystem = lazy(() => import('../pages/KTpaymentsystem'));
const LGpaymentsystem = lazy(() => import('../pages/LGpaymentsystem'));
const ActivationMethods = lazy(() => import('../pages/ActivationMethods'));
const KTactivationMethod = lazy(() => import('../pages/KTactivationMethod'));
const LGactivationMethod = lazy(() => import('../pages/LGactivationMethod'));
const Main = lazy(() => import('../pages/Main'));
const Chat = lazy(() => import('../pages/Chat'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <p>에러</p>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: 'KTpaymentsystem',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <KTpaymentsystem />
          </Suspense>
        ),
      },
      {
        path: 'LGpaymentsystem',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LGpaymentsystem />
          </Suspense>
        ),
      },
      {
        path: 'activation-method',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ActivationMethods />
          </Suspense>
        ),
      },
      {
        path: 'activation-method/KT',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <KTactivationMethod />
          </Suspense>
        ),
      },
      {
        path: 'activation-method/LG',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LGactivationMethod />
          </Suspense>
        ),
      },
      {
        path: 'chat',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Chat />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
