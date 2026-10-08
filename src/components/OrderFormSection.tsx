import React, { useState } from 'react';
import { Truck, ShieldCheck, Check, ShoppingBag, AlertCircle, ArrowRight, Home, MapPin, Plus, Minus } from 'lucide-react';
import { OrderDetails } from './OrderSuccessModal';
import { PRODUCT_VARIANTS } from './HeroSection';

interface OrderFormSectionProps {
  onOrderSuccess: (order: OrderDetails) => void;
  selectedColorId: string;
  onColorChange: (colorId: string) => void;
  isDark?: boolean;
}

export const OrderFormSection: React.FC<OrderFormSectionProps> = ({
  onOrderSuccess,
  selectedColorId,
  onColorChange,
  isDark = false,
}) => {
  // Empty initial inputs: "FAKA GHORER MODDHE KISU LIKHBA NA, CHKUT PAGE ER FAKA THAKBE"
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState<'inside_dhaka' | 'outside_dhaka'>('inside_dhaka');
  const [quantity, setQuantity] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const activeVariant = PRODUCT_VARIANTS.find((v) => v.id === selectedColorId) || PRODUCT_VARIANTS[0];

  // Pricing calculations
  let itemTotal = 0;
  if (quantity === 1) {
    itemTotal = 1850;
  } else if (quantity === 2) {
    itemTotal = 3500; // Bundle discount
  } else {
    itemTotal = 1850 * quantity - (quantity >= 3 ? 450 : 200);
  }

  // Delivery charge based on location & free delivery for 2+ quantity
  const isInsideDhaka = deliveryLocation === 'inside_dhaka';
  const deliveryCharge = quantity >= 2 ? 0 : isInsideDhaka ? 60 : 100;
  const grandTotal = itemTotal + deliveryCharge;

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(prev + 1, 10));
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'আপনার পূর্ণ নাম লিখুন';
    }

    const cleanPhone = phone.trim().replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'সঠিক মোবাইল নম্বর দিন';
    } else if (cleanPhone.length !== 11 || !cleanPhone.startsWith('01')) {
      newErrors.phone = '১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)';
    }

    if (!address.trim() || address.trim().length < 5) {
      newErrors.address = 'আপনার সম্পূর্ণ ডেলিভারি ঠিকানা লিখুন';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    const locationText = isInsideDhaka ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে';

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrder: OrderDetails = {
        orderId: `CPB-${Math.floor(100000 + Math.random() * 900000)}`,
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),
        district: locationText,
        quantity,
        itemTotal,
        deliveryCharge,
        total: grandTotal,
        colorName: activeVariant.nameBn,
      };
      onOrderSuccess(generatedOrder);
    }, 600);
  };

  return (
    <section
      id="order-section"
      className={`py-8 sm:py-14 border-b graph-bg relative transition-colors ${
        isDark ? 'border-slate-800' : 'border-[#E8E4DC]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        {/* Order Header */}
        <div className="max-w-2xl mx-auto text-center space-y-1 mb-5 sm:mb-7">
          <span className="text-xs font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
            ক্যাশ অন ডেলিভারি
          </span>
          <h2
            className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}
          >
            অর্ডার করতে নিচের তথ্য দিন
          </h2>
          <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
            পণ্য হাতে পেয়ে চেক করে টাকা দিন। কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই।
          </p>
        </div>

        {/* Main Checkout Container */}
        <div
          className={`max-w-xl mx-auto rounded-2xl p-3.5 sm:p-6 shadow-xl space-y-4 sm:space-y-5 transition-colors ${
            isDark
              ? 'bg-slate-900/90 border border-slate-800 shadow-black/40'
              : 'bg-white border border-[#E8E4DC] shadow-stone-200/60'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 1. COLOR SELECTION */}
            <div>
              <label
                className={`block text-xs font-bold mb-1.5 ${
                  isDark ? 'text-white' : 'text-stone-900'
                }`}
              >
                ১. বালিশের কালার নির্বাচন করুন:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {PRODUCT_VARIANTS.map((variant) => {
                  const isSelected = variant.id === activeVariant.id;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => onColorChange(variant.id)}
                      className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer text-left ${
                        isSelected
                          ? 'border-teal-500 ring-1 ring-teal-500/50 ' +
                            (isDark ? 'bg-slate-800' : 'bg-teal-50/70')
                          : isDark
                            ? 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                            : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: variant.colorHex }}
                      />
                      <div className="min-w-0 flex-1">
                        <div
                          className={`text-xs font-bold truncate ${
                            isDark ? 'text-white' : 'text-stone-900'
                          }`}
                        >
                          {variant.nameEn}
                        </div>
                        <div
                          className={`text-[10px] truncate ${
                            isDark ? 'text-slate-400' : 'text-stone-500'
                          }`}
                        >
                          {variant.nameBn.split(' ')[0]}
                        </div>
                      </div>
                      {isSelected && <Check className="w-3 h-3 text-teal-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. QUANTITY SELECTION (COMPACT, NO TEXT OVERLAPPING ON MOBILE) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  className={`block text-xs font-bold ${
                    isDark ? 'text-white' : 'text-stone-900'
                  }`}
                >
                  ২. পরিমাণ (Quantity):
                </label>

                {/* Tactile Stepper (+ / -) */}
                <div
                  className={`flex items-center gap-1.5 border rounded-lg px-2 py-0.5 ${
                    isDark ? 'bg-slate-950 border-slate-700' : 'bg-stone-100 border-stone-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                    className="w-6 h-6 flex items-center justify-center rounded text-stone-500 hover:text-stone-900 dark:hover:text-white disabled:opacity-30 cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span
                    className={`px-1 text-xs sm:text-sm font-extrabold tabular-nums ${
                      isDark ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {quantity}টি
                  </span>
                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="w-6 h-6 flex items-center justify-center rounded text-stone-500 hover:text-stone-900 dark:hover:text-white cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Clean Non-Overlapping Package Cards */}
              <div className="space-y-1.5">
                {/* 1 Pillow */}
                <div
                  onClick={() => setQuantity(1)}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                    quantity === 1
                      ? 'border-teal-500 ring-1 ring-teal-500/50 ' +
                        (isDark ? 'bg-slate-800' : 'bg-teal-50/70')
                      : isDark
                        ? 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                        : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        quantity === 1
                          ? 'border-teal-500 bg-teal-500 text-white'
                          : 'border-stone-400'
                      }`}
                    >
                      {quantity === 1 && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </span>
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                      ১টি বালিশ (সিঙ্গেল)
                    </span>
                  </div>
                  <span className="font-bold tabular-nums">৳১,৮৫০</span>
                </div>

                {/* 2 Pillows Bundle */}
                <div
                  onClick={() => setQuantity(2)}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                    quantity === 2
                      ? 'border-teal-500 ring-1 ring-teal-500/50 ' +
                        (isDark ? 'bg-slate-800' : 'bg-teal-50/70')
                      : isDark
                        ? 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                        : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        quantity === 2
                          ? 'border-teal-500 bg-teal-500 text-white'
                          : 'border-stone-400'
                      }`}
                    >
                      {quantity === 2 && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                          ২টি বালিশ প্যাকেজ
                        </span>
                        <span className="bg-teal-500 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded">
                          ফ্রি ডেলিভারি + ৳২০০ ছাড়
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="font-bold text-teal-600 dark:text-teal-400 tabular-nums shrink-0 ml-2">
                    ৳৩,৫০০
                  </span>
                </div>
              </div>
            </div>

            {/* 3. DHAKA INSIDE / OUTSIDE DELIVERY LOCATION */}
            <div>
              <label
                className={`block text-xs font-bold mb-1.5 ${
                  isDark ? 'text-white' : 'text-stone-900'
                }`}
              >
                ৩. ডেলিভারি এলাকা নির্বাচন করুন:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryLocation('inside_dhaka')}
                  className={`p-2 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-2 ${
                    isInsideDhaka
                      ? 'border-teal-500 ring-1 ring-teal-500/50 ' +
                        (isDark ? 'bg-slate-800' : 'bg-teal-50/70')
                      : isDark
                        ? 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                        : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Home
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isInsideDhaka ? 'text-teal-500' : 'text-stone-400'
                    }`}
                  />
                  <div className="min-w-0">
                    <div
                      className={`text-xs font-bold truncate ${
                        isDark ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      ঢাকার ভিতরে
                    </div>
                    <div className="text-[10px] text-stone-500 dark:text-slate-400">
                      {quantity >= 2 ? (
                        <span className="text-teal-600 dark:text-teal-400 font-semibold">ফ্রি</span>
                      ) : (
                        'চার্জ ৳৬০'
                      )}
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryLocation('outside_dhaka')}
                  className={`p-2 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-2 ${
                    !isInsideDhaka
                      ? 'border-teal-500 ring-1 ring-teal-500/50 ' +
                        (isDark ? 'bg-slate-800' : 'bg-teal-50/70')
                      : isDark
                        ? 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                        : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <MapPin
                    className={`w-3.5 h-3.5 shrink-0 ${
                      !isInsideDhaka ? 'text-teal-500' : 'text-stone-400'
                    }`}
                  />
                  <div className="min-w-0">
                    <div
                      className={`text-xs font-bold truncate ${
                        isDark ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      ঢাকার বাইরে
                    </div>
                    <div className="text-[10px] text-stone-500 dark:text-slate-400">
                      {quantity >= 2 ? (
                        <span className="text-teal-600 dark:text-teal-400 font-semibold">ফ্রি</span>
                      ) : (
                        'চার্জ ৳১০০'
                      )}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* 4. CUSTOMER DETAILS (COMPLETELY EMPTY INITIALLY) */}
            <div
              className={`space-y-2.5 pt-2 border-t ${
                isDark ? 'border-slate-800' : 'border-stone-200'
              }`}
            >
              <h4
                className={`text-xs font-bold ${
                  isDark ? 'text-white' : 'text-stone-900'
                }`}
              >
                ৪. আপনার ডেলিভারি তথ্য দিন:
              </h4>

              {/* Name */}
              <div>
                <label
                  htmlFor="customer-name"
                  className={`block text-[11px] font-semibold mb-0.5 ${
                    isDark ? 'text-slate-300' : 'text-stone-700'
                  }`}
                >
                  আপনার নাম <span className="text-rose-500">*</span>
                </label>
                <input
                  id="customer-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                  className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-teal-500 ${
                    errors.name
                      ? 'border-rose-400 bg-rose-50/20'
                      : isDark
                        ? 'bg-slate-950 border-slate-800 text-white placeholder:text-slate-600'
                        : 'bg-stone-50 border-stone-300 text-stone-900 placeholder:text-stone-400'
                  }`}
                />
                {errors.name && (
                  <p className="text-[10px] text-rose-500 mt-0.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="customer-phone"
                  className={`block text-[11px] font-semibold mb-0.5 ${
                    isDark ? 'text-slate-300' : 'text-stone-700'
                  }`}
                >
                  মোবাইল নম্বর <span className="text-rose-500">*</span>
                </label>
                <input
                  id="customer-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)"
                  className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm transition-colors tabular-nums focus:outline-none focus:ring-1 focus:ring-teal-500 ${
                    errors.phone
                      ? 'border-rose-400 bg-rose-50/20'
                      : isDark
                        ? 'bg-slate-950 border-slate-800 text-white placeholder:text-slate-600'
                        : 'bg-stone-50 border-stone-300 text-stone-900 placeholder:text-stone-400'
                  }`}
                />
                {errors.phone && (
                  <p className="text-[10px] text-rose-500 mt-0.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="customer-address"
                  className={`block text-[11px] font-semibold mb-0.5 ${
                    isDark ? 'text-slate-300' : 'text-stone-700'
                  }`}
                >
                  সম্পূর্ণ ঠিকানা <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="customer-address"
                  rows={2}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (errors.address) setErrors({ ...errors, address: '' });
                  }}
                  placeholder="বাড়ি নং, রোড নং, এলাকা, থানা ও জেলা লিখুন"
                  className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-teal-500 ${
                    errors.address
                      ? 'border-rose-400 bg-rose-50/20'
                      : isDark
                        ? 'bg-slate-950 border-slate-800 text-white placeholder:text-slate-600'
                        : 'bg-stone-50 border-stone-300 text-stone-900 placeholder:text-stone-400'
                  }`}
                />
                {errors.address && (
                  <p className="text-[10px] text-rose-500 mt-0.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.address}</span>
                  </p>
                )}
              </div>
            </div>

            {/* LIVE BILL BREAKDOWN */}
            <div
              className={`p-2.5 rounded-xl border space-y-1 text-xs ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-stone-50 border-stone-200'
              }`}
            >
              <div className="flex justify-between text-stone-500 dark:text-slate-400">
                <span>পণ্য ({quantity}টি, {activeVariant.nameBn}):</span>
                <span
                  className={`font-semibold tabular-nums ${
                    isDark ? 'text-white' : 'text-stone-900'
                  }`}
                >
                  ৳{itemTotal.toLocaleString('bn-BD')}
                </span>
              </div>
              <div className="flex justify-between text-stone-500 dark:text-slate-400">
                <span>ডেলিভারি চার্জ ({isInsideDhaka ? 'ঢাকা' : 'ঢাকার বাইরে'}):</span>
                <span
                  className={`font-semibold tabular-nums ${
                    isDark ? 'text-white' : 'text-stone-900'
                  }`}
                >
                  {deliveryCharge === 0 ? (
                    <span className="text-teal-600 dark:text-teal-400 font-bold">ফ্রি</span>
                  ) : (
                    `৳${deliveryCharge.toLocaleString('bn-BD')}`
                  )}
                </span>
              </div>
              <div
                className={`pt-1 border-t flex justify-between items-baseline text-xs sm:text-sm font-bold ${
                  isDark ? 'border-slate-800 text-white' : 'border-stone-200 text-stone-900'
                }`}
              >
                <span>সর্বমোট বিল:</span>
                <span className="text-base sm:text-lg font-black text-teal-600 dark:text-teal-400 tabular-nums">
                  ৳{grandTotal.toLocaleString('bn-BD')}
                </span>
              </div>
            </div>

            {/* SUBMIT BUTTON (ERGONOMIC COMPACT SIZE) */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-teal-400 hover:bg-teal-300 active:scale-98 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md shadow-teal-500/20 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-75"
            >
              {isSubmitting ? (
                <span>অর্ডার প্রসেস হচ্ছে...</span>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-slate-950" />
                  <span>অর্ডার কনফার্ম করুন (৳{grandTotal.toLocaleString('bn-BD')})</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </>
              )}
            </button>

            <p className="text-[10px] text-stone-500 dark:text-slate-400 text-center leading-relaxed">
              অর্ডার কনফার্ম করার পর আমাদের প্রতিনিধি ফোন করে তথ্য নিশ্চিত করবেন।
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
