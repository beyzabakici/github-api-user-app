import React from 'react'
import { Link } from 'react-router-dom'
import { HOME_SCREEN } from '../../constants/navigations'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center">
    <h1 className="pb-6 text-lg font-medium text-gray-400 p-8">Not Found Page</h1>
    <h1 className="pb-6 text-lg font-medium text-gray-400 p-8">Back to  <Link
              to={HOME_SCREEN}
              className="text-purple-600"
            >
              Home Page
            </Link></h1>
  </div>
  )
}
