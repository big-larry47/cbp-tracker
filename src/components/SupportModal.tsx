// src/components/SupportModal.tsx
import { useState, useEffect } from "react";
import { 
  Mail, 
  Calendar, 
  X, 
  Loader2, 
  ArrowLeft, 
  CheckCircle2,
  User,
  Clock
} from "lucide-react";

// Import the local image asset
import sarahImage from "../assets/sarah.jpg";

interface SupportModalProps {
  isOpen: boolean;
  isFinding: boolean;
  onClose: () => void;
}

const SupportModal = ({ isOpen, isFinding, onClose }: SupportModalProps) => {
  // Manage the views inside the modal: 'assistant' | 'booking' | 'success'
  const [modalView, setModalView] = useState<'assistant' | 'booking' | 'success'>('assistant');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state to capture customer details for the simulated email
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: ""
  });

  // Reset modal state after it closes so it's fresh for the next time
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setModalView('assistant');
        setFormData({ name: "", email: "", date: "", time: "" });
        setIsSubmitting(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleEmailClick = () => {
    // Updated email address here
    window.location.href = "mailto:sarahjenkins.cbp@gmail.com?subject=Assistance Required for Customs Clearance";
  };

  const handleBookClick = () => {
    setModalView('booking');
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to save booking and trigger email
    setTimeout(() => {
      setIsSubmitting(false);
      setModalView('success');
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-200">
        
        {/* Header Area with Close & Back Buttons */}
        <div className="absolute top-4 left-4 right-4 flex justify-between z-20 pointer-events-none">
          {/* Back Button (Only show on Booking step) */}
          <div className="pointer-events-auto">
            {modalView === 'booking' && !isSubmitting && (
              <button
                onClick={() => setModalView('assistant')}
                className="p-2 text-gray-500 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="pointer-events-auto p-2 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* --- VIEW 1: LOADING --- */}
        {isFinding && (
          <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
            <Loader2 className="w-12 h-12 text-[#2e9498] animate-spin mb-5" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Connecting you...</h3>
            <p className="text-gray-500">Fetching you your dedicated clearance specialist.</p>
          </div>
        )}

        {/* --- VIEW 2: ASSISTANT PROFILE --- */}
        {!isFinding && modalView === 'assistant' && (
          <div className="p-8 md:p-10 pt-14 md:pt-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Assistant Profile Picture with Status Indicator */}
              <div className="relative shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-gray-50 shadow-md">
                  <img
                    src={sarahImage}
                    alt="Sarah Jenkins"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-3 w-5 h-5 bg-green-500 border-4 border-white rounded-full shadow-sm" title="Online now"></div>
              </div>

              {/* Assistant Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Sarah Jenkins</h3>
                <p className="text-[#004B87] font-semibold text-sm mb-4 uppercase tracking-wide bg-blue-50 inline-block px-3 py-1 rounded-full mt-2">
                  Dedicated Clearance Specialist
                </p>
                <p className="text-[15px] text-gray-600 max-w-2xl mb-6 leading-relaxed">
                  Hi! I am here to help you navigate your customs clearance process. If you need assistance gathering your required documentation or understanding your next steps, please don't hesitate to reach out.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                  <button 
                    onClick={handleEmailClick}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#004B87] text-white px-7 py-3 rounded-xl text-sm font-semibold hover:bg-[#003865] hover:shadow-md transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    Email Sarah
                  </button>
                  <button 
                    onClick={handleBookClick}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 px-7 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    <Calendar className="h-4 w-4 text-[#004B87]" />
                    Book a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW 3: BOOKING FORM / CALENDLY PLACEHOLDER --- */}
        {!isFinding && modalView === 'booking' && (
          <div className="p-8 md:p-10 pt-16 md:pt-14 animate-in slide-in-from-right-8 fade-in duration-300 max-w-lg mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Call</h3>
              <p className="text-gray-500 text-sm">Select a time to speak with Sarah regarding your clearance.</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87]/20 focus:border-[#004B87] transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87]/20 focus:border-[#004B87] transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87]/20 focus:border-[#004B87] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <select 
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B87]/20 focus:border-[#004B87] transition-all appearance-none"
                    >
                      <option value="" disabled>Select Time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:15 PM">04:15 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-2 flex items-center justify-center gap-2 bg-[#004B87] text-white py-3 rounded-xl font-semibold hover:bg-[#003865] hover:shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Confirming...
                  </>
                ) : (
                  "Confirm Booking"
                )}
              </button>
            </form>
          </div>
        )}

        {/* --- VIEW 4: SUCCESS --- */}
        {!isFinding && modalView === 'success' && (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center animate-in zoom-in-95 fade-in duration-300">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Booking Confirmed!</h3>
            <p className="text-gray-600 max-w-sm mb-8 leading-relaxed">
              You are scheduled to speak with Sarah on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>. 
              <br className="mb-2"/>
              A calendar invite and details have been sent to <strong>{formData.email}</strong>.
            </p>
            <button 
              onClick={onClose}
              className="bg-gray-100 text-gray-700 font-semibold py-2.5 px-8 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default SupportModal;