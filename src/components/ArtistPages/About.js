import React from "react";
import Divider from "@mui/material/Divider";

export default function About({ setOpenAboutModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        {/* exit modal when clicking outside of modal element */}
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenAboutModal(false)}
        ></div>
        <div className="flex items-center min-h-screen py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <button
              type="button"
              class="text-[#503674] bg-transparent hover:bg-[#a371b1] hover:text-[#2e131c] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center float-right"
              data-modal-hide="defaultModal"
              onClick={() => setOpenAboutModal(false)}
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
                  About me
                  <Divider flexItem className="mb-2 ml-[-5%]" variant="middle" />
                </h4>
                <h5 className="text-base font-small leading-7 text-[#2e131c] pb-4">
                20goto10 has been described in many ways. Words like “vanilla” and “meh” are abuzz with every new release. Tennessee native, Aaron Doyle didn’t set out to become a cultural icon when he began this project, and he’s no closer to that than when he started. Maybe even less… yeah, definitely less. I’m pretty sure his dog doesn’t even like his music, but that doesn’t stop him from making it… Oh! He’s persistent! There! I said something nice! That was a nice thing I just said. How many characters is that now? Can I stop writing?
                </h5>
                <div className="flex justify-around ">
                  <button
                    onClick={() => setOpenAboutModal(false)}
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
