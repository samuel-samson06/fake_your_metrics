import Footer from '@/components/homepage/Footer'
import Main from '@/components/homepage/Main'
import Header from '@/components/homepage/Header'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-soft-bg flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default page