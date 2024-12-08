'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function CarRentalForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    townCity: '',
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffLocation: '',
    dropoffDate: '',
    dropoffTime: '',
    cardNumber: '',
    expirationDate: '',
    cardHolder: '',
    cvc: '',
    paymentMethod: 'creditCard',
    marketingConsent: false,
    termsAccepted: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
          {/* Billing Info */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Billing Info</h2>
                <span className="text-sm text-gray-500">Step 1 of 4</span>
              </div>
              <p className="text-sm text-gray-500">Please enter your billing info</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md border bg-gray-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md border bg-gray-50"
                    placeholder="Phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md border bg-gray-50"
                    placeholder="Address"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="townCity" className="text-sm font-medium">
                    Town / City
                  </label>
                  <input
                    type="text"
                    id="townCity"
                    name="townCity"
                    value={formData.townCity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md border bg-gray-50"
                    placeholder="Town or city"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Rental Info */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Rental Info</h2>
                <span className="text-sm text-gray-500">Step 2 of 4</span>
              </div>
              <p className="text-sm text-gray-500">Please select your rental date</p>
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-blue-600"
                      name="pickupType"
                      checked
                      readOnly
                    />
                    <span className="ml-2">Pick - Up</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Locations</label>
                      <select className="w-full px-3 py-2 rounded-md border bg-gray-50">
                        <option>Select your city</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date</label>
                      <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-md border bg-gray-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time</label>
                      <select className="w-full px-3 py-2 rounded-md border bg-gray-50">
                        <option>Select your time</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-blue-600"
                      name="dropoffType"
                      checked
                      readOnly
                    />
                    <span className="ml-2">Drop - Off</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Locations</label>
                      <select className="w-full px-3 py-2 rounded-md border bg-gray-50">
                        <option>Select your city</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date</label>
                      <input
                        type="date"
                        name="dropoffDate"
                        value={formData.dropoffDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-md border bg-gray-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time</label>
                      <select className="w-full px-3 py-2 rounded-md border bg-gray-50">
                        <option>Select your time</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Payment Method</h2>
                <span className="text-sm text-gray-500">Step 3 of 4</span>
              </div>
              <p className="text-sm text-gray-500">Please enter your payment method</p>
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={formData.paymentMethod === 'creditCard'}
                      onChange={handleInputChange}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">Credit Card</span>
                  </label>
                  {formData.paymentMethod === 'creditCard' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-md border bg-gray-50"
                          placeholder="Card number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Expiration Date</label>
                        <input
                          type="text"
                          name="expirationDate"
                          value={formData.expirationDate}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-md border bg-gray-50"
                          placeholder="DD/MM/YY"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Card Holder</label>
                        <input
                          type="text"
                          name="cardHolder"
                          value={formData.cardHolder}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-md border bg-gray-50"
                          placeholder="Card holder"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">CVC</label>
                        <input
                          type="text"
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-md border bg-gray-50"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">PayPal</span>
                  </label>
                </div>

                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bitcoin"
                      checked={formData.paymentMethod === 'bitcoin'}
                      onChange={handleInputChange}
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">Bitcoin</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Confirmation</h2>
                <span className="text-sm text-gray-500">Step 4 of 4</span>
              </div>
              <p className="text-sm text-gray-500">We are getting to the end. Just few clicks and your rental is ready!</p>
              <div className="space-y-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleInputChange}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-sm">
                    I agree with sending an Marketing and newsletter emails. No spam, promised!
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-sm">
                    I agree with our terms and conditions and privacy policy.
                  </span>
                </label>
              </div>
              <Link href="/dashboard">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Rent Now
              </button>
              </Link>
            </div>
          </div>
        </form>

        {/* Rental Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4 sticky top-6">
            <h2 className="text-xl font-semibold">Rental Summary</h2>
            <p className="text-sm text-gray-500">
              Prices may change depending on the length of the rental and the price of your rental car.
            </p>
    
            <div className="flex items-start space-x-4 mt-6">
              <Image
                src="/Look.jpg"
                alt="Nissan GT-R"
                width={100}
                height={60}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-semibold">Nissan GT-R</h3>
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★★</span>
                  <span className="text-gray-400">☆</span>
                  <span className="text-sm text-gray-500 ml-1">440+ Reviewer</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">$80.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Apply promo code"
                    className="flex-1 px-3 py-2 border rounded-md text-sm"
                  />
                  <button className="text-blue-600 text-sm whitespace-nowrap">Apply now</button>
                </div>
              </div>
              <div className="flex justify-between items-start border-t pt-4">
                <div>
                  <span className="text-gray-600">Total Rental Price</span>
                  <p className="text-sm text-gray-500 mt-1">Overall price and includes rental discount</p>
                </div>
                <span className="font-semibold text-xl">$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
)
}