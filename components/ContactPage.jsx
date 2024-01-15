import React from 'react'

const ContactPage = () => {
  return (
    <div class="max-w-[85rem]  mt-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" data-aos='fade-up' data-aos-duration='500'>
      <div class="max-w-xl mx-auto mt-12 ">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl ">
            Contact us
          </h1>
          <p class="mt-1 text-gray-600 " id='contact'>
            We'd love to talk about how we can help you.
          </p>
        </div>
      </div>
    
      <div class="mt-12 mb-12 max-w-lg mx-auto">
        <div class="flex flex-col border rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 ">
          <h2 class="mb-8 text-xl font-semibold text-gray-800 ">
            Fill in the form
          </h2>
    
          <form>
            <div class="grid gap-4 lg:gap-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label for="hs-firstname-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium ">First Name</label>
                  <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border-gray-400 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   border shadow-xl" />
                </div>
    
                <div>
                  <label for="hs-lastname-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium ">Last Name</label>
                  <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border-gray-400 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   border shadow-xl" />
                </div>
              </div>
    
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label for="hs-email-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium ">Email</label>
                  <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" class="py-3 px-4 block w-full border-gray-400 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   border shadow-xl" />
                </div>
    
                <div>
                  <label for="hs-phone-number-1" class="block mb-2 text-sm text-gray-700 font-medium ">Phone Number</label>
                  <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border-gray-400 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   border shadow-xl" />
                </div>
              </div>
    
              <div>
                <label for="hs-about-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium ">Details</label>
                <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border-gray-400 rounded-xl text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   border shadow-xl"></textarea>
              </div>
            </div>
    
            <div class="mt-6 grid">
              <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">Send</button>
            </div>
    
            <div class="mt-3 text-center">
              <p class="text-sm text-gray-500">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
