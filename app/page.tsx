import { ReactNode } from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      {/* Glass Panel chính */}
      <div className="glass-panel w-full max-w-[380px] p-8 flex flex-col gap-6">
        {/* Header Area với Logo Kiến Vàng giả lập */}
        <div className="text-center space-y-2">
          {/* Vòng tròn bao quanh logo */}
          <div className="inline-block p-3 rounded-full bg-amber-500/20 mb-2 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] border border-amber-400/20">
            {/* Logo chính: Màu vàng rực */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.6)] flex items-center justify-center">
              {/* Icon giả lập con kiến (hoặc chữ K) */}
              <span className="text-amber-950 font-bold text-xl">K</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-amber-100 drop-shadow-md">
            Kiến Vàng
          </h1>
          <p className="text-amber-200/70 text-sm font-medium">
            Dịch vụ chuyển nhà trọn gói
          </p>
        </div>

        {/* Input Area */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Số điện thoại"
            className="glass-input"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="glass-input"
          />
        </div>

        {/* Action Area */}
        <button className="glass-btn">Đăng nhập ngay</button>

        <p className="text-center text-xs text-amber-200/50 mt-4 cursor-pointer hover:text-amber-100 transition-colors">
          Bạn chưa có tài khoản? Đăng ký
        </p>
      </div>
    </div>
  );
}
