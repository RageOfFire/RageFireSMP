import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img src="" className="mr-3 h-8" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-orange-400">
              <FontAwesomeIcon icon={faFireFlameCurved} />
              RageFireSMP
              <FontAwesomeIcon icon={faFireFlameCurved} />
            </span>
          </div>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <span className="text-sm text-gray-500 sm:text-center dark:text-orange-600">
              © Được làm bởi RageOfFire.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default memo(Footer);
