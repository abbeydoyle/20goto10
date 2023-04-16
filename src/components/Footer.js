// dependencies
import React from "react";
import { TbBrandGithubCopilot, TbBrandSpotify, TbBrandSoundcloud } from "react-icons/tb";


// export linkable footer
export default function FooterApp() {
  return (
    <>
    <footer className="footer">
      <div className="px-4 py-6 bg-transparent flex items-center justify-between">
        <span className="text-sm text-gray-500 text-center">
          © 2023{" "}
          <a
            className="text-sm text-gray-500 hover:text-gray-900"
            href="https://github.com/abbeydoyle/20goto10/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            20goto10
          </a>
          .
        </span>
        <div className="flex space-x-6  text-lg justify-center mt-0">
        <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/artist/6hl3o6GAkqVE1IcBXtuaXY?si=Ysvp6z4iQsmqRkloWZcKkA"
            className="text-gray-400 hover:text-gray-900"
          >
            <TbBrandSpotify />
            <span className="sr-only">Spotify</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://soundcloud.com/20_goto_10?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            className="text-gray-400 hover:text-gray-900"
          >
            <TbBrandSoundcloud />
            <span className="sr-only">Soundcloud</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/abbeydoyle/20goto10"
            className="text-gray-400 hover:text-gray-900"
          >
            <TbBrandGithubCopilot />
            <span className="sr-only">GitHub account</span>
          </a>
          
          
        </div>
      </div>
    </footer>
    </>
  );
}
