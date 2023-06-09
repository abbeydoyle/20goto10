import React from "react";
import Divider from "@mui/material/Divider";

// modal to appear when item as been added to cart
export default function Commands({ setOpenCommandsModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        {/* exit modal when clicking outside of modal element */}
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenCommandsModal(false)}
        ></div>
        <div className="flex items-center min-h-screen py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <button
              type="button"
              class="text-[#503674] bg-transparent hover:bg-[#a371b1] hover:text-[#2e131c] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center float-right"
              data-modal-hide="defaultModal"
              onClick={() => setOpenCommandsModal(false)}
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
            <div className="mt-3 mb-4 sm:flex">
              <div className="mt-2 text-center sm:ml-[4rem] sm:text-left -ml-8">
                <h4 className="text-2xl font-medium text-[#2e131c] pb-4">
                  Input Options
                  <Divider flexItem className="mb-2 ml-[-5%]" variant="middle" />
                </h4>
                <h5 className="text-base font-small text-[#2e131c] pb-4">
                  1. about
                </h5>
                <h5 className="text-base font-small text-[#2e131c] pb-4">
                  2. dog
                </h5>
                <h5 className="text-base font-small text-[#2e131c] pb-4">
                  3. ssn
                </h5>
                <h5 className="text-base font-small text-[#2e131c] pb-4">
                  4. phoneno
                </h5>
                <h5 className="text-base font-small text-[#2e131c] pb-4">
                  5. ls
                </h5>
                <div className="flex justify-around ">
                  <button
                    onClick={() => setOpenCommandsModal(false)}
                    className="mt-2 text-[15px] leading-relaxed text-[#503674] hover:text-[#2e131c] underline"
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
