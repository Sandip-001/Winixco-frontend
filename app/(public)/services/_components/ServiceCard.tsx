"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full border border-gray-200 shadow-md hover:shadow-xl rounded-2xl">
        <CardContent className="p-8">

          <div className="text-[#2563eb] mb-5">
            {icon}
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {description}
          </p>

        </CardContent>
      </Card>
    </motion.div>
  );
}