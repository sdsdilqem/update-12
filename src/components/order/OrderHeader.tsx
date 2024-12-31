import React from 'react';
import { ShoppingBag, Package, Clock, ShieldCheck } from 'lucide-react';

interface OrderHeaderProps {
  title: string;
  deliveryTime: string;
  stockStatus: string;
}

export default function OrderHeader({ title, deliveryTime, stockStatus }: OrderHeaderProps) {
  return (
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
        <ShoppingBag className="w-5 h-5 text-blue-500" />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center space-x-2 text-xs text-gray-500 mt-0.5">
          <span className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-0.5" /> 
             2-3 saat
          </span>
          <span>•</span>
          <span className="flex items-center">
            <Package className="w-3.5 h-3.5 mr-0.5" />
            Anbarda var
          </span>
          <span>•</span>
          <span className="flex items-center text-emerald-500">
            <ShieldCheck className="w-3.5 h-3.5 mr-0.5" />
            Güvənli
          </span>
        </div>
      </div>
    </div>
  );
}
