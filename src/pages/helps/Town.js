import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
const commands = [
  {
    command: '/town new "Tên town"',
    description:
      'Tạo town của riêng bạn (thay thế "tên town" thành tên bạn muốn)',
  },
  {
    command: "/town here",
    description: "Hiển thị thông tin về town mà nơi bạn đang đứng",
  },
  {
    command: "/town list",
    description: "Thông tin về các town khác",
  },
  {
    command: "/town online",
    description: "Hiển thị những ai đang online ở town nào",
  },
  {
    command: "/town leave",
    description: "Rời khỏi town",
  },
  {
    command: '/town invite "Tên người chơi"',
    description: "Mời người chơi khác vào town bạn",
  },
  {
    command: '/town spawn',
    description: "Dịch chuyển bạn về town",
  },
  {
    command: '/town claim',
    description: "Lấy khu vực bạn đang đứng thành town của bạn (Dùng auto để tự động claim xung quanh bạn)",
  },
  {
    command: '/town unclaim',
    description: "Bỏ khu vực bạn đang đứng ra khỏi town của bạn (Dùng all để xóa hết claim của town)",
  },
  {
    command: '/town deposit ($)',
    description: "Đóng tiền vào town để duy trì town",
  },
  {
    command: '/town withdraw ($)',
    description: "Rút tiền từ town sang tài khoản của bạn",
  },
  {
    command: '/town buy bonus "số lượng"',
    description: "Mua thêm giới hạn đất cho town của bạn",
  },
  {
    command: '/town delete "tên town"',
    description: "Xóa town của bạn",
  },
  {
    command: '/town reclaim',
    description: "Lấy lại tất cả khu vực town của bạn khi mà bạn không đóng tiền",
  },
  {
    command: '/town say "tin nhắn"',
    description: "Phát 1 thông báo cho tất cả thành viên trong town đang online",
  },
  {
    command: '/town set board "Tin nhắn"',
    description: "Tự động gửi tin nhắn mỗi khi 1 thành viên vào server",
  },
  {
    command: '/town set spawn',
    description: "Đặt lại spawn cho /town spawn",
  },
];
function Town() {
  return (
    <div className="w-screen">
      <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-orange-400 sm:text-4xl">
          Towny
        </p>
        <p className="mt-4 max-w-2xl text-xl text-yellow-100 lg:mx-auto">
          Lệnh cơ bản để tạo thị trấn riêng của bạn tránh bị phá hoại
        </p>
        <p className="mt-4 max-w-2xl text-xl text-yellow-100 lg:mx-auto">
          Thêm thông tin <a className="bg-teal-500 hover:bg-teal-300 text-rose-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-500 dark:text-fuchsia-100 dark:hover:bg-indigo-300" href="https://github.com/TownyAdvanced/Towny/wiki/Towny-Commands" target="_blank" rel="noreferrer">tại đây</a>
        </p>
      </div>
      <div className="w-full px-4 pt-16 grid grid-cols-3">
        {/* New Command */}
        {commands.map((town) => (
          <div className="w-full max-w-md p-2 bg-gray-500 rounded-2xl m-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-orange-400 bg-gray-500 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-400 focus-visible:ring-opacity-75">
                    <span>{town.command}</span>
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
                      {town.description}
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
export default Town;
