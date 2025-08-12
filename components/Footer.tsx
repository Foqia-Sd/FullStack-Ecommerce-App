import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Pak Fashion Store</h3>
          <p className="text-sm">Your one-stop shop!</p>
          <p>Branded Fashion</p>
          <p>Shop Now</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Products</h3>
          <p className="text-sm">Explore our range of products!</p>
          <p>Fashion</p>
          <p>Baby Wear</p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-sm">Get in touch with us!</p>
          <p>Email: support@pakfashionstore.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white w-full"></div>

      {/* Bottom Section */}
      <div className="flex justify-center items-center py-4 px-2 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Pak Fashion Store. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
