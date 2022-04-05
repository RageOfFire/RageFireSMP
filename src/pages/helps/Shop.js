import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
const commands = [
  {
    command: '/shop',
    description:
      'Mở shop để mua/bán vật phẩm\nLưu ý: Khi sử dụng /shop đưa trỏ chuột vào 1 vật phẩm thì chuột trái để mua/chuột phải để bán',
  },
  {
    command: '/sellall "Tên vật phẩm""',
    description: "bán tất cả vật phẩm trong túi đồ của bạn (Tên vật phẩm là vật phẩm bạn cần bán nếu không có sẽ bán hết đồ)",
  },
  {
    command: "/sellall hand",
    description: "bán tất cả vật phẩm trên tay bạn",
  },
  {
    command: "/sellgui",
    description: "Mở 1 gui bán đồ bạn có thể đưa đồ vào đó rồi đóng gui sẽ tự động bán hết đồ bạn để vào đó",
  },
  {
    command: '/trade "tên người chơi"',
    description: "Trao đổi vật phẩm hoặc tiền với người chơi khác",
  },
];
function Shop() {
  return (
    <div className="w-screen">
      <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-orange-400 sm:text-4xl">
          Shop
        </p>
        <p className="mt-4 max-w-2xl text-xl text-yellow-100 lg:mx-auto">
          Lệnh cơ bản để mua/bán vật phẩm kiếm tiền
        </p>
        <p className="mt-4 max-w-2xl text-xl text-yellow-100 lg:mx-auto">
          Thêm thông tin <a className="bg-teal-500 hover:bg-teal-300 text-rose-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-500 dark:text-fuchsia-100 dark:hover:bg-indigo-300" href="https://gpplugins.gitbook.io/economyshopgui/basics/commands" target="_blank" rel="noreferrer">tại đây</a>
        </p>
      </div>
      <div className="w-full px-4 pt-16 grid grid-cols-3">
        {/* New Command */}
        {commands.map((shop) => (
          <div className="w-full max-w-md p-2 bg-gray-500 rounded-2xl m-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-400 bg-gray-500 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-400 focus-visible:ring-opacity-75">
                    <span>{shop.command}</span>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleDown}
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-orange-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-yellow-200">
                      {shop.description}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        ))}
        {/* New Command */}
      </div>
    </div>
  );
}
export default Shop;
