import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const RageSwal = () => {
  MySwal.fire({
    title: "Hiện tại chưa khả dụng",
    text: "Hiện tại chưa có chức năng này!",
    icon: "info",
  });
};
function Headers({ onPage }) {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-black p-6">
        <div class="flex items-center flex-shrink-0 text-orange-400 mr-6">
          <span class="font-semibold text-xl tracking-tight">
            <FontAwesomeIcon icon={faFireFlameCurved} />
            RageFireSMP
            <FontAwesomeIcon icon={faFireFlameCurved} />
          </span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <span
              onClick={() => {
                onPage(1);
              }}
              class="block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-yellow-400 mr-4 text-lg cursor-pointer select-none"
            >
              Trang chủ
            </span>
            <span
              onClick={() => {
                onPage(2);
              }}
              class="block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-yellow-400 mr-4 text-lg cursor-pointer select-none"
            >
              Bản đồ
            </span>
            <span
              onClick={() => {
                onPage(3);
              }}
              class="block mt-4 lg:inline-block lg:mt-0 text-orange-400 hover:text-yellow-400 text-lg cursor-pointer select-none"
            >
              Tải game
            </span>
          </div>
          <div>
            <button
              onClick={RageSwal}
              class="inline-block text-sm px-4 py-2 mr-3 leading-none border rounded text-yellow-400 border-yellow-400 
              hover:border-transparent hover:text-slate-900 hover:bg-yellow-400 mt-4 lg:mt-0"
            >
              Đăng nhập
            </button>
            <button
              onClick={RageSwal}
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow-400 border-yellow-400 hover:border-transparent hover:text-slate-900 hover:bg-yellow-400 mt-4 lg:mt-0"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default memo(Headers);
