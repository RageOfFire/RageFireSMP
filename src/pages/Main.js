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
      <div class="my-5">
        <a
          href="https://minecraft-mp.com/server-s301618"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://minecraft-mp.com/leaderboard-301618-3.png"
            alt="minecraft Banner"
            class="w-full"
          />
        </a>
      </div>
      <div class="grid grid-cols-4 mx-5">
        <div class="col-span-3">
          <div class="bg-transparent">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="lg:text-center">
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-orange-400 sm:text-4xl">
                  RageFireSMP
                </p>
                <p class="mt-4 max-w-2xl text-xl text-yellow-100 lg:mx-auto">
                  1 server SMP tự do
                </p>
              </div>

              <div class="mt-10">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div class="relative">
                    <dt>
                      <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faSignal} />
                      </div>
                      <p class="ml-16 text-lg leading-6 font-medium text-orange-400">
                        Luôn luôn trực tuyến
                      </p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-yellow-100">
                      Server hỗ trợ 24/7 luôn sẵn sàng cho tất cả mọi người
                    </dd>
                  </div>

                  <div class="relative">
                    <dt>
                      <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faPlug} />
                      </div>
                      <p class="ml-16 text-lg leading-6 font-medium text-orange-400">
                        Hỗ trợ plugin
                      </p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-yellow-100">
                      Server hỗ trợ nhiều plugin để tăng trải nghiệm game và để
                      game dễ hơn
                    </dd>
                  </div>

                  <div class="relative">
                    <dt>
                      <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faCodeCompare} />
                      </div>
                      <p class="ml-16 text-lg leading-6 font-medium text-orange-400">
                        Hỗ trợ nhiều phiên bản
                      </p>
                    </dt>
                    <div class="mt-2 ml-16 text-base text-yellow-100">
                      Server hỗ trợ từ 1.12 &gt; 1.18 cho phiên bản minecraft
                      java và 1.18.10 cho phiên bẩn minecraft bedrock
                    </div>
                  </div>

                  <div class="relative">
                    <dt>
                      <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FontAwesomeIcon icon={faScaleBalanced} />
                      </div>
                      <p class="ml-16 text-lg leading-6 font-medium text-orange-400">
                        Không luật lệ
                      </p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-yellow-100">
                      Không luật lệ nghĩa là bạn có thể tự do hack/cheat thoải
                      mái nhưng không được làm ảnh hướng tới máy chủ (ví dụ như
                      raid server)
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <a
            href="https://minecraft-mp.com/server-s301618"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="w-full mb-3"
              src="https://minecraft-mp.com/half-banner-301618.png"
              alt="minecraft banner"
            />
          </a>
          <iframe
            src="https://discord.com/widget?id=752171524919918672&theme=dark"
            class="w-full aspect-square mt-3"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Main;
