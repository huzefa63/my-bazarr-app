function ShippingAddressForm() {
    return (
      <div className="h-full flex flex-col gap-2">
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="text-sm">First Name *</p>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              className="w-full border-gray-400 shadow  border rounded-md px-3 py-2"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Last Name *</p>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              className="w-full border-gray-400 shadow  border rounded-md px-3 py-2"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-8 mt-3">
          <div className="space-y-2">
            <p className="text-sm">Email *</p>
            <input
              type="text"
              name="email"
              placeholder="John@gmail.com"
              className="w-full border-gray-400 shadow  border rounded-md px-3 py-2"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Phone Number *</p>
            <input
              type="text"
              name="phoneNumber"
              placeholder="+91 498274924394"
              className="w-full border-gray-400 shadow  border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-8 mt-3">
          <div className="space-y-2">
            <p className="text-sm">City *</p>
            <input
              type="text"
              name="city"
              placeholder="surat"
              className="w-full border-gray-400 shadow  border rounded-md px-3 py-2"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm">State *</p>
            <input
              type="text"
              name="state"
              placeholder="gujarat"
              className="w-full border-gray-400 shadow  border rounded-md px-3 py-2"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm">Zip Code *</p>
            <input
              type="text"
              name="zipCode"
              placeholder="376183"
              className="w-full border-gray-400 shadow  border rounded-md px-3 py-2"
            />
          </div>
        </div>
        <div className="mt-5 space-y-2">
          <p className="text-sm">Instructions</p>
          <textarea
            placeholder="Enter Instructions if you have..."
            name="instructions"
            id=""
            className="border border-gray-300 w-full p-3 resize-none h-18"
          ></textarea>
        </div>

        <div className="space-y-3 mt-3">
          <header>Shipping Method</header>

          <div className="w-full  grid grid-cols-2 gap-10">
            <div className="border border-gray-300 pb-5 rounded-md smooth-transition hover:bg-gray-200 py-2 px-3">
              <div className="flex justify-between  ">
                <div className="flex items-center gap-2">
                  <div className="mt-1 self-start h-4 w-4 border rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-black border rounded-full"></div>
                  </div>
                  <div>
                    <p>Free Shipping</p>
                    <p className="text-gray-600 text-sm mt-2">4-5 days</p>
                  </div>
                </div>
                <p>0 rs</p>
              </div>
            </div>

            <div className="border border-gray-300 pb-5 rounded-md smooth-transition hover:bg-gray-200 py-2 px-3">
              <div className="flex justify-between  ">
                <div className="flex items-center gap-2">
                  <div className="mt-1 self-start h-4 w-4 border rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-black border rounded-full"></div>
                  </div>
                  <div>
                    <p>Express Shipping</p>
                    <p className="text-gray-600 text-sm mt-2">1-3 days</p>
                  </div>
                </div>
                <p>120 rs</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
}

export default ShippingAddressForm
