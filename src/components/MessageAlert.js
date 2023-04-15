import React from "react";

// modal to appear when item as been added to cart
export default function MessageAlert({ setOpenMessageModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        {/* exit modal when clicking outside of modal element */}
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenMessageModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <button
              type="button"
              class="text-[#b18363] bg-transparent hover:bg-[#d2b7a4] hover:text-[#78543b] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center float-right"
              data-modal-hide="defaultModal"
              onClick={() => setOpenMessageModal(false)}
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div className="mt-3 mb-4 pl-8 sm:flex">
              <div className="mt-2 text-center sm:ml-[4rem] sm:text-left -ml-8">
                <h4 className="text-xl font-medium text-[#573d2b] pb-4">
                  Your message has been sent!
                </h4>
                <h5 className="text-lg font-small text-[#573d2b] pb-4">
                  Thank you for your time
                </h5>
                <div className="flex justify-around ">
                  <button
                    onClick={() => setOpenMessageModal(false)}
                    className="mt-2 text-[15px] leading-relaxed text-[#78543b] hover:text-[#36261b] underline"
                  >
                    Back to site
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
