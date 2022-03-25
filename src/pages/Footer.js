import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div>
      <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800 mt-5">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <img src="" class="mr-3 h-8" alt="" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-orange-400">
              <FontAwesomeIcon icon={faFireFlameCurved} />
              RageFireSMP
              <FontAwesomeIcon icon={faFireFlameCurved} />
            </span>
          </div>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <span class="text-sm text-gray-500 sm:text-center dark:text-orange-600">
              © Được làm bởi RageOfFire.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default memo(Footer);
