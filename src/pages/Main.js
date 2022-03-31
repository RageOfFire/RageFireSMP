import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faCodeCompare,
  faPlug,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
function Main() {
  return (
    <div>
      <div className="grid grid-cols-4 mx-5 my-5 h-screen">
        <div className="col-span-3">
      <a href="https://minecraft-mp.com/server-s301618" target="_blank" rel="noreferrer"><img className="w-full" src="https://minecraft-mp.com/leaderboard-301618-3.png" alt="ServerBanner"/></a>
          <div className="bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-orange-400 sm:text-4xl">
                  RageFireSMP
                </p>
                <p className="mt-4 max-w-2xl text-xl text-yellow-100 lg:mx-auto">
                  1 server SMP tự do
                </p>
              </div>

              <div className="mt-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <div>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faSignal} />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-orange-400">
                        Luôn luôn trực tuyến
                      </p>
                    </div>
                    <div className="mt-2 ml-16 text-base text-yellow-100">
                      Server hỗ trợ 24/7 luôn sẵn sàng cho tất cả mọi người
                    </div>
                  </div>

                  <div className="relative">
                    <div>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faPlug} />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-orange-400">
                        Hỗ trợ plugin
                      </p>
                    </div>
                    <div className="mt-2 ml-16 text-base text-yellow-100">
                      Server hỗ trợ nhiều plugin để tăng trải nghiệm game và để
                      game dễ hơn
                    </div>
                  </div>

                  <div className="relative">
                    <div>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faCodeCompare} />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-orange-400">
                        Hỗ trợ nhiều phiên bản
                      </p>
                    </div>
                    <div className="mt-2 ml-16 text-base text-yellow-100">
                      Server hỗ trợ từ 1.12 &gt; 1.18 cho phiên bản minecraft
                      java và 1.18.10 cho phiên bẩn minecraft bedrock
                    </div>
                  </div>

                  <div className="relative">
                    <div>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faScaleBalanced} />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-orange-400">
                        Không Pay2win
                      </p>
                    </div>
                    <div className="mt-2 ml-16 text-base text-yellow-100">
                        Server đảm bảo rằng không hề có pay2win và hoàn toàn là 1 server sinh tồn bình thường mọi
                        loại rank trong server đều có thể nhận miễn phí ở discord
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <iframe
            src="https://discord.com/widget?id=752171524919918672&theme=dark"
            className="w-full aspect-square mt-3"
            allowtransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Main;
