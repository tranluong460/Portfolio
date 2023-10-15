"use client";

import React from "react";

import { motion } from "framer-motion";

import { useSection } from "@/hooks";

const About = () => {
  const { ref } = useSection("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="px-3 max-w-[45rem] text-center leading-8 scroll-mt-28 mb-28 sm:mb-40"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        About
      </h2>

      <p className="mb-3 text-justify">
        Sau khi tốt nghiệp, tôi tiếp tục nghiên cứu sâu về thiết kế website, và
        đó cũng là nơi tôi tìm thấy
        <span className="italic"> đam mê thực sự của mình</span>. Với tôi,
        <span className="font-semibold"> lập trình </span> không chỉ đơn thuần
        là việc viết mã, mà còn là việc giải quyết những vấn đề khó khăn và tìm
        ra những giải pháp sáng tạo.
      </p>

      <p className="mb-3 text-justify">
        Tôi đã xây dựng nền tảng vững chắc về
        <span className="font-semibold"> React, Node.js </span>và
        <span className="font-semibold"> MongoDB</span>, tôi còn còn nắm vững
        <span className="font-semibold"> Next.js </span>và
        <span className="font-semibold"> Typescript</span>. Tôi luôn tìm cách
        nắm vững những
        <span className="italic"> công nghệ mới nhất </span>
        để có thể áp dụng vào các dự án của mình. Tôi tin rằng việc cập nhật
        kiến thức là cách duy trì sự cạnh tranh trong ngành công nghệ thông tin.
      </p>

      <p className="mb-3 text-justify">
        Sự
        <span className="font-semibold"> tinh tế </span>
        trong thiết kế và
        <span className="font-semibold"> khả năng làm việc nhóm </span>
        là những điểm mạnh của tôi, giúp tôi tạo ra những sản phẩm độc đáo và
        thân thiện với người dùng. Tôi tin rằng việc kết hợp
        <span className="italic"> sự sáng tạo </span>
        và
        <span className="italic"> khả năng hợp tác </span>
        là chìa khóa để tạo ra những sản phẩm xuất sắc.
      </p>

      <p className="text-justify">
        Ngoài công việc, tôi cũng thích thú với việc
        <span className="italic"> chơi game</span>,
        <span className="italic"> nghe nhạc </span>
        và<span className="italic"> xem phim </span>
        trong thời gian rảnh rỗi. Hiện tại, tôi đang học
        <span className="font-semibold"> tiếng Trung </span>
        để
        <span className="italic"> mở rộng thêm khả năng giao tiếp </span>
        và mở ra cơ hội mới trong lĩnh vực công nghệ. Rất mong có cơ hội được
        hợp tác cùng bạn!
      </p>
    </motion.section>
  );
};

export default About;
