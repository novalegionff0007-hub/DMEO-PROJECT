import React from 'react';
import { CheckCircle2, MessageCircle, X } from 'lucide-react';

export interface OrderDetails {
  orderId: string;
  name: string;
  phone: string;
  address: string;
  district: string;
  quantity: number;
  itemTotal: number;
  deliveryCharge: number;
  total: number;
  colorName?: string;
}

interface OrderSuccessModalProps {
  order: OrderDetails | null;
  onClose: () => void;
  isDark?: boolean;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose, isDark = true }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
      <div className={`rounded-2xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto ${
        isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1.5 mb-5">
          <div className="w-12 h-12 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            ধন্যবাদ! আপনার অর্ডারটি গ্রহণ করা হয়েছে
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            অর্ডার আইডি: <strong className="text-teal-400">{order.orderId}</strong>
          </p>
        </div>

        {/* Order Details Receipt Box */}
        <div className={`border rounded-xl p-3.5 sm:p-4 space-y-2.5 mb-5 text-xs sm:text-sm ${
          isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className={`flex justify-between pb-2 border-b font-medium ${
            isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'
          }`}>
            <span>পণ্য</span>
            <span>Cervical Butterfly Pillow × {order.quantity}</span>
          </div>

          <div className={`space-y-1 text-xs pb-2 border-b ${
            isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-600'
          }`}>
            {order.colorName && (
              <div className="flex justify-between">
                <span className="text-slate-400">নির্বাচিত কালার:</span>
                <span className="font-semibold text-teal-400">{order.colorName}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-slate-400">গ্রাহকের নাম:</span>
              <span className="font-semibold">{order.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">মোবাইল নম্বর:</span>
              <span className="font-semibold tabular-nums">{order.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">ডেলিভারি ঠিকানা:</span>
              <span className="font-semibold text-right max-w-[200px] truncate">{order.address}, {order.district}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">পেমেন্ট মেথড:</span>
              <span className="font-semibold text-teal-400">ক্যাশ অন ডেলিভারি</span>
            </div>
          </div>

          <div className="space-y-1 text-xs sm:text-sm">
            <div className="flex justify-between text-slate-400">
              <span>পণ্য মূল্য:</span>
              <span className="tabular-nums font-semibold">৳{order.itemTotal.toLocaleString('bn-BD')}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>ডেলিভারি চার্জ:</span>
              <span className="tabular-nums font-semibold">
                {order.deliveryCharge === 0 ? <span className="text-teal-400 font-bold">ফ্রি ডেলিভারি</span> : `৳${order.deliveryCharge.toLocaleString('bn-BD')}`}
              </span>
            </div>
            <div className={`flex justify-between pt-1.5 border-t text-sm font-bold ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <span>সর্বমোট প্রদেয়:</span>
              <span className="tabular-nums text-teal-400 text-base font-black">৳{order.total.toLocaleString('bn-BD')}</span>
            </div>
          </div>
        </div>

        {/* Rep Notice */}
        <div className="p-3 bg-teal-950/40 border border-teal-800/50 rounded-xl text-teal-300 text-xs leading-relaxed mb-5">
          অর্ডার কনফার্ম করার পর আমাদের প্রতিনিধি ফোন করে তথ্য নিশ্চিত করবেন। অনুগ্রহ করে আপনার ফোনটি সচল রাখুন।
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <a
            href="https://wa.me/8801909666141"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>হোয়াটসঅ্যাপে যোগাযোগ</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className={`py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              isDark ? 'border-slate-700 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-slate-100 text-slate-800'
            }`}
          >
            ঠিক আছে
          </button>
        </div>
      </div>
    </div>
  );
};
