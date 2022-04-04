import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
const commands = [
  {
    command: '/rtp',
    description:
      'Dịch chuyển bạn đến 1 nơi ngẫu nhiên trên thế giới',
  },
  {
    command: '/rtp biome "Tên biome"',
    description: "Cần VIP | Dịch chuyển bạn tới 1 khu ngẫu nhiên với 1 biome được chọn sẵn",
  },
  {
    command: '/rtp location "Tên cấu trúc"',
    description: "Cần KING | Dịch chuyển bạn tới 1 cấu trúc được chọn trước",
  },
  {
    command: '/sethome "Tên"',
    description: 'Tạo home để có thể di chuyển về đó mọi lúc mọi nơi bằng lệnh /home "tên" và xóa đi bất kỳ lúc nào với /delhome "Tên"',
  },
  {
    command: '/warps',
    description: "Hiển thị các khu khả dụng trong server",
  },
  {
    command: '/tpa "Tên người chơi"',
    description: "Gửi 1 yêu cầu dịch chuyển tới người chơi đó",
  },
  {
    command: '/tpahere "Tên người chơi"',
    description: "Gửi 1 yêu cầu người chơi đó dịch chuyển tới bản thân bạn",
  },
];
function Random() {
  return (
    <div className="w-screen">
      <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-orange-400 sm:text-4xl">
          Dịch chuyển
        </p>
        <p className="mt-4 max-w-2xl text-xl text-yellow-100 lg:mx-auto">
          Các lệnh dịch chuyển trong server
        </p>
      </div>
      <div className="w-full px-4 pt-16 grid grid-cols-3">
        {/* New Command */}
        {commands.map((random) => (
          <div className="w-full max-w-md p-2 bg-gray-500 rounded-2xl m-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-400 bg-gray-500 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-400 focus-visible:ring-opacity-75">
                    <span>{random.command}</span>
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
                      {random.description}
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
export default Random;
