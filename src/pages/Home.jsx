import Categories from '../components/Categories'
import Header from'../components/Header'
import Hero from '../components/Hero'
import { useState } from 'react'
export default function Home() {
    const [searchTerm, SetSearchTerm] = useState('')

  return (
    <div className="min-h-screen">
      <Header searchTerm={searchTerm} setSearchTerm={SetSearchTerm} />
      <Hero />
      <Categories searchTerm={searchTerm} />
    </div>
  )
}
