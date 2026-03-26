"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  return (
    <Link href={"/cart"} className="relative">
      <ShoppingCart className="w-5 h-5 text-gray-600" />

      {/* Badge */}
      <span className="absolute -top-2 -right-2 bg-yellow-300 text-white text-[10px] font-semibold px-1.5 py-[1px] rounded-full">
        0
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
