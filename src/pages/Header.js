import { memo, Fragment } from "react";
import { Link } from "react-router-dom"
import { Popover, Transition }  from "@headlessui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
        faArrowAltCircleDown,
        faHouse,
        faShop,
        faLockOpen,
        faPeopleGroup,
        faMoneyBill,
        faClose,
        faBars,
        } from "@fortawesome/free-solid-svg-icons";
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

const solutions = [
  {
    name: 'Towny',
    description: 'Hướng dẫn cơ bản về các lệnh towny.',
    href: '/helps/Town',
    icon: faHouse
  },
  {
    name: 'Shop',
    description: 'Hướng dẫn cơ bản về các lệnh shop.',
    href: '/helps/Shop',
    icon: faShop
  },
  { name: 'Lock', 
    description: "Hướng dẫn cơ bản về các lệnh LWC.", 
    href: '/helps/Lock',
    icon: faLockOpen
  },
  {
    name: 'Skin',
    description: "Hướng dẫn cơ bản về các lệnh skin.",
    href: '/helps/Skin',
    icon: faPeopleGroup
  },
  {
    name: 'Banknotes',
    description: 'Hướng dẫn cơ bản về các lệnh banknotes',
    href: '/helps/Bank',
    icon: faMoneyBill
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Headers() {
  return (
    <div>
      <Popover className="relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">RageFireSMP</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160"
                alt="RageFireIcon"
              />
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Mở menu</span>
              <FontAwesomeIcon icon={faBars} className="text-orange-700" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-orange-400">
              Trang chủ
            </Link>
            <Link to="/map" className="text-base font-medium text-gray-500 hover:text-orange-400">
              Bản đồ
            </Link>
            <Link to="/download" className="text-base font-medium text-gray-500 hover:text-orange-400">
              Tải game
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-orange-400' : 'text-gray-500',
                      'group text-gray-500 rounded-md inline-flex items-center text-base font-medium hover:text-orange-400 focus:outline-none'
                    )}
                  >
                    <span>Hướng dẫn</span>
                    <FontAwesomeIcon icon={faArrowAltCircleDown}
                      className={classNames(
                        open ? 'text-orange-400' : 'text-gray-500',
                        'ml-2 h-4 w-4 group-hover:text-orange-400'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg overflow-hidden">
                        <div className="relative grid gap-6 bg-gray-600 px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-400"
                            >
                              <FontAwesomeIcon icon={item.icon} className="flex-shrink-0 h-6 w-6 text-orange-400" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-orange-400">{item.name}</p>
                                <p className="mt-1 text-sm text-orange-200">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button 
              onClick={RageSwal}
              className="whitespace-nowrap text-base font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg px-5 py-2.5 text-center">
              Đăng nhập
            </button>
            <button
              onClick={RageSwal}
              className="ml-8 whitespace-nowrap text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-400 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://cdn.discordapp.com/avatars/848871888360046634/7f95245e645714ed89256fa5f8f01ffe.webp?size=160"
                    alt="RageFireSMP"
                  />
                </div>
                <div className="mr-2">
                  <Popover.Button className="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-red-500 hover:text-red-600 hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Đóng menu</span>
                    <FontAwesomeIcon icon={faClose} aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-3 gap-y-4 gap-x-8">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-orange-400">
                  Trang chủ
                </Link>
                <Link to="/map" className="text-base font-medium text-gray-900 hover:text-orange-400">
                  Bản đồ
                </Link>
                <Link to="/download" className="text-base font-medium text-gray-900 hover:text-orange-400">
                  Tải game
                </Link>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-300"
                    >
                      <FontAwesomeIcon icon={item.icon} className="flex-shrink-0 h-6 w-6 text-orange-400" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
              <div>
                <button
                  onClick={RageSwal}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium text-center"
                >
                  Đăng ký
                </button>
                <p className="mt-6 text-center text-base font-medium text-amber-200">
                  Đã có tài khoản?{' '}
                  <button onClick={RageSwal} className="text-base font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg px-5 py-2.5 text-center">
                    Đăng nhập
                  </button>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    </div>
  );
}
export default memo(Headers);
