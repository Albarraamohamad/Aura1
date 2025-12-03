import React from 'react'

const News = () => {
  return (
    <div>
          <div className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl lg:text-5xl font-light mb-12">Newsletter</h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:flex-1 px-8 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-black transition-colors duration-300 text-lg"
              />
              <button className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg font-light whitespace-nowrap">
                Abonnez-vous
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default News