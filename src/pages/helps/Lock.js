import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
const commands = [
  {
    command: '/cprivate"',
    description:
      'Tạo ra khóa cho block của bạn không ai có thể tác động nó trừ bạn',
  },
  {
    command: '/cpassword "Mật khẩu""',
    description: "Tạo ra khóa cho block của bạn không ai có thể tác động nó trừ khi có mật khẩu",
  },
  {
    command: "/cdonation",
    description: "Tạo ra 1 rương để người chơi có thể đưa vật phẩm vào nhưng không thể lấy ra chỉ có bạn mới có thể lấy ra",
  },
  {
    command: '/cmodify "Tên người chơi"',
    description: "Cho phép 1 ai đó có thể sử dụng block đó cùng bạn",
  },
  {
    command: "/cremove",
    description: "Gỡ bỏ khóa có block của bạn",
  },
  {
    command: '/cunlock',
    description: "Gỡ bảo mật khẩu cho lệnh /cpassword",
  },
  {
    command: '/cinfo',
    description: "Xem thông tin block đang được bảo vệ",
  },
];
function Lock() {
  return (
    <div className="w-screen">
      <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-orange-400 sm:text-4xl">
          Lock
        </p>
        <p className="mt-4 max-w-2xl text-xl text-yellow-100 lg:mx-auto">
          Mặc định khi bạn đặt rương,... xuống sẽ được tự động khóa lại để bảo vệ vật phẩm và chỉ có bạn mới mở được
          Để sử dụng lệnh, gõ lệnh rồi đấm vào block bạn cần để sử dụng
        </p>
        <p className="mt-4 max-w-2xl text-xl text-yellow-100 lg:mx-auto">
          Thêm thông tin <a className="bg-teal-500 hover:bg-teal-300 text-rose-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-500 dark:text-fuchsia-100 dark:hover:bg-indigo-300" href="https://github.com/pop4959/LWCX/wiki/Commands" target="_blank" rel="noreferrer">tại đây</a>
        </p>
      </div>
      <div className="w-full px-4 pt-16 grid grid-cols-3">
        {/* New Command */}
        {commands.map((lock) => (
          <div className="w-full max-w-md p-2 bg-gray-500 rounded-2xl m-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-400 bg-gray-500 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-400 focus-visible:ring-opacity-75">
                    <span>{lock.command}</span>
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
                      {lock.description}
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
export default Lock;
