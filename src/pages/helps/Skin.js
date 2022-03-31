import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
const commands = [
  {
    command: '/skin "Tên skin"',
    description:
      'Đổi skin của bản thân bằng với "Tên skin"',
  },
  {
    command: '/skin url "Link"',
    description: 'Đổi skin của bản thân bằng với "Link" của skin đó',
  },
  {
    command: "/skin clear",
    description: "Xóa skin của bản thân",
  },
  {
    command: "/skins",
    description: "Mở 1 gui gồm nhiều skin để bạn chọn",
  },
];
function Skin() {
  return (
    <div className="w-screen">
      <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-orange-400 sm:text-4xl">
          Skin
        </p>
        <p className="mt-4 max-w-2xl text-xl text-yellow-100 lg:mx-auto">
          Lệnh cơ bản cho phép bạn đổi skin trực tiếp trong server
        </p>
      </div>
      <div className="w-full px-4 pt-16 grid grid-cols-3">
        {/* New Command */}
        {commands.map((skin) => (
          <div className="w-full max-w-md p-2 bg-gray-500 rounded-2xl m-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-400 bg-gray-500 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-400 focus-visible:ring-opacity-75">
                    <span>{skin.command}</span>
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
                      {skin.description}
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
export default Skin;
