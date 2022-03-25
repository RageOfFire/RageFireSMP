import { memo } from 'react'
function Download() {
    return (
        <div>
                <div class="grid grid-cols-3 m-5">
    {/*Tlaucher*/}
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition ease-in-out hover:-translate-y-1 hover:scale-105">
        <a href="https://tlauncher.org/en/" target="_blank" rel="noreferrer">
            <img class="rounded-t-lg" src="https://tlauncher.org/fav-icon-512.png" alt="" />
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TLauncher</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tlauncher là công cụ giúp bạn có thể trải nghiệm Minecraft. Nhờ Tlauncher, bạn có thể cài đặt phiên bản sửa đổi trong game một cách dễ dàng như Forge - phiên bản sử dụng cho những bản mod. Còn Optifine lại giúp game tối ưu hóa trò chơi và tăng chỉ số khung hình (FPS). Toàn bộ điều này có thể được cài đặt riêng</p>
                
            </div>
        </a>
    </div>
    {/*Minecraft bedrock*/}
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition ease-in-out hover:-translate-y-1 hover:scale-105">
      <a href="https://mcpedl.org/downloading/" target="_blank" rel="noreferrer">
          <img class="rounded-t-lg" src="https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP" alt="" />
          <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Minecraft Bedrock</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Là một phiên bản Minecraft được lập trình lại nhằm tránh sự phân rã quá nhiều phiên bản trên nhiều thiết bị giống nhau như Legacy Edition, viết bằng ngôn ngữ C++, người chơi có thể mua/tải về các DLC qua Minecraft Marketplace hoặc cài mod như Java Edition (Chỉ hỗ trợ trên điện thoại). Bedrock Edition được viết nhằm hỗ trợ chơi trực tuyến đa nền tảng (cross-platform multiplayer).</p>
              
          </div>
      </a>
    </div>
    {/*PojavLaucher*/}
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition ease-in-out hover:-translate-y-1 hover:scale-105">
      <a href="https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch&hl=vi&gl=US" target="_blank" rel="noreferrer">
          <img class="rounded-t-lg" src="https://play-lh.googleusercontent.com/kBKcfqoudjlMRMUogBXDp43FrgY1izzXmdP9p2smJdqF_MJrWUR7VgEXA8OPGTJQi8s" alt="" />
          <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PojavLaucher</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">PojavLaucher là launcher chính thức phát triển và phát hành bởi artdeell người dùng android và iOS, những người muốn chơi phiên bản java của trò chơi Minecraft trực tiếp trên điện thoại thông minh và máy tính bảng của họ miễn phí.</p>
              
          </div>
      </a>
    </div>
    </div>
        </div>
    )
}
export default memo(Download)